using Moq;
using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Agent;
using Remittance.Application.DTOs.Common;
using Remittance.Application.Interfaces;
using Remittance.Application.Services;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Exceptions;
using Remittance.Domain.Interfaces;

namespace Remittance.Tests;

public class TransactionService_ConcurrencyTests
{
    // ── Mocks ──────────────────────────────────────────────────────────────────
    private readonly Mock<IRepository<Transaction>> _transRepo = new();
    private readonly Mock<IRepository<Domain.Entities.Agent>> _agentRepo = new();
    private readonly Mock<IRepository<Commission>> _commissionRepo = new();
    private readonly Mock<IRepository<AgentCommission>> _agentCommRepo = new();
    private readonly Mock<IRepository<AgentEarning>> _earningRepo = new();
    private readonly Mock<IRepository<Customer>> _customerRepo = new();
    private readonly Mock<IExchangeRateService> _exchangeRateService = new();
    private readonly Mock<ICommissionService> _commissionService = new();
    private readonly Mock<IComplianceService> _complianceService = new();
    private readonly Mock<ISanctionsScreeningService> _sanctionsService = new();
    private readonly Mock<ISettingsService> _settings = new();
    private readonly Mock<IUnitOfWork> _unitOfWork = new();

    // ── Helpers ────────────────────────────────────────────────────────────────

    /// <summary>Creates a TransactionService wired to all the shared mocks.</summary>
    private TransactionService CreateService() => new(
        _transRepo.Object,
        _agentRepo.Object,
        _commissionRepo.Object,
        _agentCommRepo.Object,
        _earningRepo.Object,
        _customerRepo.Object,
        _exchangeRateService.Object,
        _commissionService.Object,
        _complianceService.Object,
        _sanctionsService.Object,
        _settings.Object,
        _unitOfWork.Object);

    /// <summary>
    /// Returns a healthy agent with CreditLimit=1000, CurrentBalance=0.
    /// RowVersion=1 mirrors what would come back from the database before any
    /// concurrent write has incremented the xmin column.
    /// </summary>
    private static Domain.Entities.Agent MakeAgent(int id = 1) => new()
    {
        Id = id,
        BusinessName = "Test Agent",
        CreditLimit = 1_000m,
        CurrentBalance = 0m,
        RowVersion = 1u,
        Status = AgentStatus.Approved,
        IsApproved = true,
        IsActive = true,
    };

    /// <summary>A minimal, valid Send-Money request that costs 100 + 10 commission = 110.</summary>
    private static SendTransactionDto MakeDto() => new()
    {
        SendAmount = 100m,
        SendCurrency = "USD",
        ReceiveCurrency = "GHS",
        SenderName = "Alice Smith",
        SenderCountry = "US",
        ReceiverName = "Bob Jones",
        ReceiverCountry = "GH",
        PaymentMethod = PaymentMethod.Cash,
        PayoutMethod = PaymentMethod.Cash,
        // PayoutPartnerId is required by the service (used to look up exchange rate)
        PayoutPartnerId = 2,
    };

    /// <summary>
    /// Configures all mocks to return happy-path values for settings, rates,
    /// commissions, compliance, and sanctions. Call before each test.
    /// </summary>
    private void SetupHappyPathMocks(Domain.Entities.Agent agent)
    {
        // Agent repo — sending agent + payout agent (id=2)
        _agentRepo.Setup(r => r.GetByIdAsync(agent.Id))
                  .ReturnsAsync(agent);
        _agentRepo.Setup(r => r.GetByIdAsync(2))
                  .ReturnsAsync(new Domain.Entities.Agent { Id = 2, BusinessName = "Payout Partner" });
        _agentRepo.Setup(r => r.UpdateAsync(It.IsAny<Domain.Entities.Agent>()))
                  .Returns(Task.CompletedTask);

        // Transaction repo
        _transRepo.Setup(r => r.AddAsync(It.IsAny<Transaction>()))
                  .ReturnsAsync((Transaction t) => t);
        _transRepo.Setup(r => r.FindAsync(It.IsAny<System.Linq.Expressions.Expression<Func<Transaction, bool>>>()))
                  .ReturnsAsync(Enumerable.Empty<Transaction>());

        // Agent commission — no overrides → returns 0
        _agentCommRepo.Setup(r => r.FindAsync(It.IsAny<System.Linq.Expressions.Expression<Func<AgentCommission, bool>>>()))
                      .ReturnsAsync(Enumerable.Empty<AgentCommission>());

        // Earnings
        _earningRepo.Setup(r => r.AddAsync(It.IsAny<AgentEarning>()))
                    .ReturnsAsync((AgentEarning e) => e);

        // Exchange rate: 10 GHS per 1 USD, no margin
        _exchangeRateService.Setup(s => s.GetCurrentRateAsync(
                It.IsAny<string>(), It.IsAny<string>(),
                It.IsAny<int>(), It.IsAny<string>()))
            .ReturnsAsync(ApiResponse<ExchangeRateDto>.Ok(new ExchangeRateDto
            {
                Rate = 10m,
                Margin = 0m
            }));

        // Commission: flat 10 USD
        _commissionService.Setup(s => s.CalculateCommissionAsync(
                It.IsAny<decimal>(), It.IsAny<string>(), It.IsAny<string>(),
                It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string?>(),
                It.IsAny<int>(), It.IsAny<int?>()))
            .ReturnsAsync(10m);

        // Compliance: no violations
        _complianceService.Setup(s => s.CheckComplianceAsync(It.IsAny<ComplianceCheckRequest>()))
            .ReturnsAsync(ApiResponse<List<ComplianceViolationDto>>.Ok(new List<ComplianceViolationDto>()));

        // Sanctions: no matches
        _sanctionsService.Setup(s => s.ScreenTransactionAsync(
                It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(),
                It.IsAny<string>(), It.IsAny<long?>(), It.IsAny<int?>()))
            .ReturnsAsync(ApiResponse<List<ScreeningResultDto>>.Ok(new List<ScreeningResultDto>()));

        // Settings: all defaults that keep the happy path open
        _settings.Setup(s => s.GetIntAsync(It.IsAny<string>(), It.IsAny<int>()))
                 .ReturnsAsync((string _, int d) => d);
        _settings.Setup(s => s.GetDecimalAsync(It.IsAny<string>(), It.IsAny<decimal>()))
                 .ReturnsAsync((string _, decimal d) => d);
        _settings.Setup(s => s.GetBoolAsync(It.IsAny<string>(), It.IsAny<bool>()))
                 .ReturnsAsync((string _, bool d) => d);
        _settings.Setup(s => s.GetAsync(It.IsAny<string>(), It.IsAny<string>()))
                 .ReturnsAsync((string _, string d) => d);
    }

    // ── Tests ──────────────────────────────────────────────────────────────────

    /// <summary>
    /// The core double-spend test.
    ///
    /// Two identical Send-Money requests arrive at the exact same millisecond.
    /// Both pass the in-memory balance check (CurrentBalance=0, CreditLimit=1000).
    /// Both reach SaveChangesAsync simultaneously.
    /// The database grants one writer and rejects the other with a concurrency conflict.
    ///
    /// We model this by:
    ///  1. Giving SaveChangesAsync a Task.Delay(10) so the thread yields after each task
    ///     grabs its call-number — guaranteeing both are truly in-flight together.
    ///  2. Assigning call numbers atomically with Interlocked.Increment BEFORE the yield,
    ///     so each task keeps its number through the await.
    ///  3. The second concurrent save (call number 2) throws ConcurrencyException —
    ///     exactly what ApplicationDbContext wraps from DbUpdateConcurrencyException
    ///     when the Agent's RowVersion has been incremented by the first writer.
    ///
    /// Expected: exactly one Success and one Failure with the concurrency message.
    /// </summary>
    [Fact]
    public async Task SendTransaction_TwoConcurrentRequests_OnlyOneSucceeds()
    {
        // Arrange
        var agent = MakeAgent();
        SetupHappyPathMocks(agent);
        var dto = MakeDto();
        var service = CreateService();

        var saveCallCount = 0;

        _unitOfWork.Setup(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()))
            .Returns(async (CancellationToken _) =>
            {
                // Grab call number BEFORE yielding so each task keeps its own slot
                // even after the thread resumes from the delay.
                var callNum = Interlocked.Increment(ref saveCallCount);

                // Yield the thread so both tasks become in-flight concurrently.
                // Without this delay, tasks execute sequentially (no real overlap).
                await Task.Delay(10);

                // Call 2 is the second concurrent write — simulates the DB detecting
                // that Agent.RowVersion was already bumped by the first writer.
                if (callNum == 2)
                    throw new ConcurrencyException(
                        "A concurrency conflict was detected. The record was modified by another process.");

                return 1;
            });

        // Act — fire both at the same millisecond
        var task1 = service.SendTransactionAsync(dto, agentId: agent.Id);
        var task2 = service.SendTransactionAsync(dto, agentId: agent.Id);

        var results = await Task.WhenAll(task1, task2);

        // Assert
        var successCount = results.Count(r => r.Success);
        var failureCount = results.Count(r => !r.Success);

        Assert.Equal(1, successCount);
        Assert.Equal(1, failureCount);

        var failedResult = results.Single(r => !r.Success);
        Assert.Contains("Another transaction is being processed for this agent", failedResult.Message);
    }

    /// <summary>
    /// Verifies that when NO concurrency conflict occurs, a single request succeeds normally.
    /// Baseline sanity check — ensures the happy path still works after the fix.
    /// </summary>
    [Fact]
    public async Task SendTransaction_SingleRequest_Succeeds()
    {
        // Arrange
        var agent = MakeAgent();
        SetupHappyPathMocks(agent);
        var dto = MakeDto();
        var service = CreateService();

        _unitOfWork.Setup(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()))
                   .ReturnsAsync(1);

        // Act
        var result = await service.SendTransactionAsync(dto, agentId: agent.Id);

        // Assert
        Assert.True(result.Success);
    }

    /// <summary>
    /// Verifies the balance guard itself: a second transaction is rejected
    /// when the agent's running balance has no room for the requested amount.
    ///
    /// This is the sequential protection; the concurrent case is covered above.
    /// </summary>
    [Fact]
    public async Task SendTransaction_InsufficientBalance_ReturnsFailure()
    {
        // Arrange — agent is maxed out
        var agent = MakeAgent();
        agent.CurrentBalance = 950m; // only 50 available, need 110
        SetupHappyPathMocks(agent);
        var service = CreateService();

        _unitOfWork.Setup(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()))
                   .ReturnsAsync(1);

        // Act
        var result = await service.SendTransactionAsync(MakeDto(), agentId: agent.Id);

        // Assert
        Assert.False(result.Success);
        Assert.Contains("Insufficient balance", result.Message);

        // SaveChanges must never be called — no partial state should be written
        _unitOfWork.Verify(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Never);
    }

    /// <summary>
    /// Directly verifies the RowVersion guard wiring: if SaveChangesAsync throws
    /// ConcurrencyException, the service returns the expected user-facing message
    /// rather than letting the exception bubble up to the controller.
    /// </summary>
    [Fact]
    public async Task SendTransaction_WhenSaveThrowsConcurrencyException_ReturnsFriendlyError()
    {
        // Arrange
        var agent = MakeAgent();
        SetupHappyPathMocks(agent);
        var service = CreateService();

        _unitOfWork.Setup(u => u.SaveChangesAsync(It.IsAny<CancellationToken>()))
                   .ThrowsAsync(new ConcurrencyException("Simulated RowVersion mismatch"));

        // Act
        var result = await service.SendTransactionAsync(MakeDto(), agentId: agent.Id);

        // Assert — exception must NOT propagate; service must return a clean failure
        Assert.False(result.Success);
        Assert.Contains("Another transaction is being processed for this agent", result.Message);
    }
}
