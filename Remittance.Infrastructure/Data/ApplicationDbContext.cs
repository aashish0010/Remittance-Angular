using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Exceptions;
using Remittance.Domain.Interfaces;

namespace Remittance.Infrastructure.Data;

public class ApplicationDbContext : DbContext, IUnitOfWork
{
    private readonly IAuditContextProvider? _auditContext;

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options,
        IAuditContextProvider? auditContext = null) : base(options)
    {
        _auditContext = auditContext;
    }

    public DbSet<ApplicationUser> Users => Set<ApplicationUser>();
    public DbSet<Role> Roles => Set<Role>();
    public DbSet<UserRole> UserRoles => Set<UserRole>();
    public DbSet<Menu> Menus => Set<Menu>();
    public DbSet<Permission> Permissions => Set<Permission>();
    public DbSet<RolePermission> RolePermissions => Set<RolePermission>();
    public DbSet<Agent> Agents => Set<Agent>();
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<ExchangeRate> ExchangeRates => Set<ExchangeRate>();
    public DbSet<CommissionRate> CommissionRates => Set<CommissionRate>();
    public DbSet<Transaction> Transactions => Set<Transaction>();
    public DbSet<Commission> Commissions => Set<Commission>();
    public DbSet<ComplianceAlert> ComplianceAlerts => Set<ComplianceAlert>();
    public DbSet<AgentLimitAdjustment> AgentLimitAdjustments => Set<AgentLimitAdjustment>();
    public DbSet<ComplianceRule> ComplianceRules => Set<ComplianceRule>();
    public DbSet<CustomerDocument> CustomerDocuments => Set<CustomerDocument>();
    public DbSet<Receiver> Receivers => Set<Receiver>();
    public DbSet<RefreshToken> RefreshTokens => Set<RefreshToken>();
    public DbSet<AgentPaymentMethod> AgentPaymentMethods => Set<AgentPaymentMethod>();
    public DbSet<AgentLocation> AgentLocations => Set<AgentLocation>();
    public DbSet<AgentLocationBranch> AgentLocationBranches => Set<AgentLocationBranch>();
    public DbSet<AgentLocationUser> AgentLocationUsers => Set<AgentLocationUser>();
    public DbSet<AgentBank> AgentBanks => Set<AgentBank>();
    public DbSet<AgentBankBranch> AgentBankBranches => Set<AgentBankBranch>();
    public DbSet<PaymentCorridor> PaymentCorridors => Set<PaymentCorridor>();
    public DbSet<CorridorPayoutPartner> CorridorPayoutPartners => Set<CorridorPayoutPartner>();
    public DbSet<AgentCommission> AgentCommissions => Set<AgentCommission>();
    public DbSet<AgentEarning> AgentEarnings => Set<AgentEarning>();
    public DbSet<AgentLedgerEntry> AgentLedgerEntries => Set<AgentLedgerEntry>();
    public DbSet<SetupField> SetupFields => Set<SetupField>();
    public DbSet<DocumentTypeConfig> DocumentTypeConfigs => Set<DocumentTypeConfig>();
    public DbSet<SystemSetting> SystemSettings => Set<SystemSetting>();
    public DbSet<IdempotencyKey> IdempotencyKeys => Set<IdempotencyKey>();
    public DbSet<ExchangeRateQuote> ExchangeRateQuotes => Set<ExchangeRateQuote>();
    public DbSet<AuditLog> AuditLogs => Set<AuditLog>();
    public DbSet<SanctionsScreeningResult> SanctionsScreeningResults => Set<SanctionsScreeningResult>();
    public DbSet<SanctionEntry> SanctionEntries => Set<SanctionEntry>();
    public DbSet<SanctionedCountry> SanctionedCountries => Set<SanctionedCountry>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // ── Global query filters for soft delete ──
        modelBuilder.Entity<Agent>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<Customer>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<Receiver>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<ExchangeRate>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<CommissionRate>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<ComplianceRule>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<PaymentCorridor>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<CorridorPayoutPartner>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<AgentBank>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<AgentBankBranch>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<AgentLocation>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<AgentLocationBranch>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<AgentLocationUser>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<AgentCommission>().HasQueryFilter(e => !e.IsDeleted);

        // ApplicationUser
        modelBuilder.Entity<ApplicationUser>(e =>
        {
            e.HasKey(u => u.Id);
            e.HasIndex(u => u.Email).IsUnique();
            e.HasIndex(u => u.UserName).IsUnique();
        });

        // Role
        modelBuilder.Entity<Role>(e =>
        {
            e.HasKey(r => r.Id);
            e.HasIndex(r => r.Name).IsUnique();
        });

        // UserRole (many-to-many)
        modelBuilder.Entity<UserRole>(e =>
        {
            e.HasKey(ur => new { ur.UserId, ur.RoleId });
            e.HasOne(ur => ur.User).WithMany(u => u.UserRoles).HasForeignKey(ur => ur.UserId);
            e.HasOne(ur => ur.Role).WithMany(r => r.UserRoles).HasForeignKey(ur => ur.RoleId);
        });

        // Menu (self-referencing)
        modelBuilder.Entity<Menu>(e =>
        {
            e.HasKey(m => m.Id);
            e.HasOne(m => m.Parent).WithMany(m => m.Children).HasForeignKey(m => m.ParentId);
        });

        // Permission
        modelBuilder.Entity<Permission>(e =>
        {
            e.HasKey(p => p.Id);
            e.HasOne(p => p.Menu).WithMany(m => m.Permissions).HasForeignKey(p => p.MenuId);
        });

        // RolePermission (many-to-many)
        modelBuilder.Entity<RolePermission>(e =>
        {
            e.HasKey(rp => new { rp.RoleId, rp.PermissionId });
            e.HasOne(rp => rp.Role).WithMany(r => r.RolePermissions).HasForeignKey(rp => rp.RoleId);
            e.HasOne(rp => rp.Permission).WithMany().HasForeignKey(rp => rp.PermissionId);
        });

        // Agent
        modelBuilder.Entity<Agent>(e =>
        {
            e.HasKey(a => a.Id);
            e.HasOne(a => a.User).WithMany().HasForeignKey(a => a.UserId).OnDelete(DeleteBehavior.SetNull);
            e.Property(a => a.CreditLimit).HasPrecision(18, 2);
            e.Property(a => a.CurrentBalance).HasPrecision(18, 2);
            e.Property(a => a.AgentType).HasConversion<string>().HasMaxLength(20);
            e.Property(a => a.Status).HasConversion<string>().HasMaxLength(20);
            e.Property(a => a.FundingType).HasConversion<string>().HasMaxLength(20);
            e.Property(a => a.Currency).HasMaxLength(10);
        });

        // Customer
        modelBuilder.Entity<Customer>(e =>
        {
            e.HasKey(c => c.Id);
            e.HasOne(c => c.User).WithMany().HasForeignKey(c => c.UserId).OnDelete(DeleteBehavior.SetNull);
            e.HasMany(c => c.Documents).WithOne(d => d.Customer).HasForeignKey(d => d.CustomerId);
            e.HasMany(c => c.Receivers).WithOne(r => r.Customer).HasForeignKey(r => r.CustomerId);
            e.Property(c => c.KycLevel).HasConversion<string>().HasMaxLength(20);
            e.Property(c => c.IsActive).HasDefaultValue(true);
        });

        // CustomerDocument
        modelBuilder.Entity<CustomerDocument>(e =>
        {
            e.HasKey(d => d.Id);
        });

        // Receiver
        modelBuilder.Entity<Receiver>(e =>
        {
            e.HasKey(r => r.Id);
        });

        // ExchangeRate
        modelBuilder.Entity<ExchangeRate>(e =>
        {
            e.HasKey(r => r.Id);
            e.Property(r => r.Rate).HasPrecision(18, 6);
            e.Property(r => r.Margin).HasPrecision(18, 6);
            e.HasIndex(r => new { r.SourceCurrency, r.DestinationCurrency });
            e.HasOne(r => r.Agent).WithMany().HasForeignKey(r => r.AgentId).OnDelete(DeleteBehavior.Restrict);
        });

        // CommissionRate
        modelBuilder.Entity<CommissionRate>(e =>
        {
            e.HasKey(c => c.Id);
            e.Property(c => c.MinAmount).HasPrecision(18, 2);
            e.Property(c => c.MaxAmount).HasPrecision(18, 2);
            e.Property(c => c.CommissionPercent).HasPrecision(8, 4);
            e.Property(c => c.FlatFee).HasPrecision(18, 2);
            e.HasOne(c => c.Agent).WithMany().HasForeignKey(c => c.AgentId).OnDelete(DeleteBehavior.SetNull);
            e.HasOne(c => c.PayoutAgent).WithMany().HasForeignKey(c => c.PayoutAgentId).OnDelete(DeleteBehavior.Restrict);
        });

        // Transaction
        modelBuilder.Entity<Transaction>(e =>
        {
            e.HasKey(t => t.Id);
            e.HasIndex(t => t.ReferenceNumber).IsUnique();
            e.Property(t => t.SendAmount).HasPrecision(18, 2);
            e.Property(t => t.ReceiveAmount).HasPrecision(18, 2);
            e.Property(t => t.ExchangeRateApplied).HasPrecision(18, 6);
            e.Property(t => t.TotalCommission).HasPrecision(18, 2);
            e.Property(t => t.AgentCommission).HasPrecision(18, 2);
            e.Property(t => t.PayoutAgentCommission).HasPrecision(18, 2);
            e.Property(t => t.CompanyCommission).HasPrecision(18, 2);
            e.HasOne(t => t.Customer).WithMany(c => c.SentTransactions).HasForeignKey(t => t.CustomerId);
            e.HasOne(t => t.Agent)
              .WithMany(a => a.SentTransactions)
              .HasForeignKey(t => t.AgentId)
              .OnDelete(DeleteBehavior.Restrict);

            e.HasOne(t => t.PayoutAgent)
             .WithMany(a => a.PayoutTransactions)
             .HasForeignKey(t => t.PayoutAgentId)
             .OnDelete(DeleteBehavior.Restrict);
        });

        // Commission
        modelBuilder.Entity<Commission>(e =>
        {
            e.HasKey(c => c.Id);
            e.Property(c => c.TotalCommission).HasPrecision(18, 2);
            e.Property(c => c.AgentPayout).HasPrecision(18, 2);
            e.Property(c => c.CompanyRevenue).HasPrecision(18, 2);
            e.HasOne(c => c.Transaction).WithMany().HasForeignKey(c => c.TransactionId);
        });

        // AgentLimitAdjustment
        modelBuilder.Entity<AgentLimitAdjustment>(e =>
        {
            e.HasKey(a => a.Id);
            e.HasOne(a => a.Agent).WithMany().HasForeignKey(a => a.AgentId);
            e.Property(a => a.Amount).HasPrecision(18, 2);
        });

        // ComplianceAlert
        modelBuilder.Entity<ComplianceAlert>(e =>
        {
            e.HasKey(c => c.Id);
            e.HasOne(c => c.Transaction).WithMany().HasForeignKey(c => c.TransactionId);
        });

        // ComplianceRule
        modelBuilder.Entity<ComplianceRule>(e =>
        {
            e.HasKey(r => r.Id);
            e.Property(r => r.RuleType).HasConversion<string>().HasMaxLength(30);
            e.Property(r => r.Action).HasConversion<string>().HasMaxLength(20);
            e.Property(r => r.ThresholdAmount).HasPrecision(18, 2);
        });

        // RefreshToken
        modelBuilder.Entity<RefreshToken>(e =>
        {
            e.HasKey(t => t.Id);
            e.HasIndex(t => t.Token).IsUnique();
            // FamilyId index — used for fast family-wide revocation on reuse detection
            e.HasIndex(t => t.FamilyId);
            e.HasIndex(t => t.UserId);
            e.Property(t => t.FamilyId).HasMaxLength(50);
            e.Property(t => t.ReplacedByToken).HasMaxLength(128);
            e.HasOne(t => t.User).WithMany().HasForeignKey(t => t.UserId);
        });

        // AgentPaymentMethod
        modelBuilder.Entity<AgentPaymentMethod>(e =>
        {
            e.HasKey(p => p.Id);
            e.HasIndex(p => p.Name).IsUnique();
        });

        // AgentLocation
        modelBuilder.Entity<AgentLocation>(e =>
        {
            e.HasKey(l => l.Id);
            e.HasOne(l => l.Agent).WithMany(a => a.Locations).HasForeignKey(l => l.AgentId);
            e.HasOne(l => l.PaymentMethod).WithMany().HasForeignKey(l => l.PaymentMethodId);
            e.HasMany(l => l.Branches).WithOne(b => b.AgentLocation).HasForeignKey(b => b.AgentLocationId);
            e.HasMany(l => l.Users).WithOne(u => u.AgentLocation).HasForeignKey(u => u.AgentLocationId);
        });

        // AgentLocationBranch
        modelBuilder.Entity<AgentLocationBranch>(e =>
        {
            e.HasKey(b => b.Id);
        });

        // AgentLocationUser
        modelBuilder.Entity<AgentLocationUser>(e =>
        {
            e.HasKey(u => u.Id);
            e.HasOne(u => u.User).WithMany().HasForeignKey(u => u.UserId).OnDelete(DeleteBehavior.SetNull);
        });

        // AgentBank
        modelBuilder.Entity<AgentBank>(e =>
        {
            e.HasKey(b => b.Id);
            e.HasOne(b => b.Agent).WithMany(a => a.Banks).HasForeignKey(b => b.AgentId);
            e.HasMany(b => b.Branches).WithOne(br => br.AgentBank).HasForeignKey(br => br.AgentBankId);
        });

        // AgentBankBranch
        modelBuilder.Entity<AgentBankBranch>(e =>
        {
            e.HasKey(b => b.Id);
        });

        // PaymentCorridor
        modelBuilder.Entity<PaymentCorridor>(e =>
        {
            e.HasKey(c => c.Id);
            e.HasOne(c => c.SendingAgent).WithMany().HasForeignKey(c => c.SendingAgentId).OnDelete(DeleteBehavior.SetNull);
            e.HasIndex(c => new { c.SourceCountry, c.SourceCurrency, c.DestinationCountry, c.DestinationCurrency }).IsUnique();
            e.Property(c => c.SourceCurrency).HasMaxLength(10);
            e.Property(c => c.DestinationCurrency).HasMaxLength(10);
            e.Property(c => c.SourceCountry).HasMaxLength(100);
            e.Property(c => c.DestinationCountry).HasMaxLength(100);
        });

        // CorridorPayoutPartner
        modelBuilder.Entity<CorridorPayoutPartner>(e =>
        {
            e.HasKey(p => p.Id);
            e.HasOne(p => p.PaymentCorridor).WithMany(c => c.PayoutPartners).HasForeignKey(p => p.PaymentCorridorId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(p => p.PayoutAgent).WithMany().HasForeignKey(p => p.PayoutAgentId).OnDelete(DeleteBehavior.Restrict);
            e.HasIndex(p => new { p.PaymentCorridorId, p.PayoutAgentId }).IsUnique();
            e.Property(p => p.PaymentModeIds).HasMaxLength(200);
        });

        // AgentCommission
        modelBuilder.Entity<AgentCommission>(e =>
        {
            e.HasKey(c => c.Id);
            e.HasOne(c => c.Agent).WithMany().HasForeignKey(c => c.AgentId).OnDelete(DeleteBehavior.Cascade);
            e.Property(c => c.CommissionType).HasMaxLength(20);
            e.Property(c => c.CommissionValue).HasPrecision(8, 4);
            e.HasIndex(c => new { c.AgentId, c.IsActive });
        });

        // AgentEarning
        modelBuilder.Entity<AgentEarning>(e =>
        {
            e.HasKey(ae => ae.Id);
            e.HasOne(ae => ae.Agent).WithMany(a => a.Earnings).HasForeignKey(ae => ae.AgentId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(ae => ae.Transaction).WithMany().HasForeignKey(ae => ae.TransactionId).OnDelete(DeleteBehavior.Cascade);
            e.Property(ae => ae.Amount).HasPrecision(18, 2);
            e.Property(ae => ae.EarningType).HasMaxLength(30);
            e.HasIndex(ae => new { ae.AgentId, ae.IsReversed });
        });

        // AgentLedgerEntry
        modelBuilder.Entity<AgentLedgerEntry>(e =>
        {
            e.HasKey(le => le.Id);
            e.HasOne(le => le.Agent).WithMany().HasForeignKey(le => le.AgentId).OnDelete(DeleteBehavior.Cascade);
            e.HasOne(le => le.Transaction).WithMany().HasForeignKey(le => le.TransactionId).OnDelete(DeleteBehavior.SetNull);
            e.Property(le => le.Amount).HasPrecision(18, 2);
            e.Property(le => le.BalanceAfter).HasPrecision(18, 2);
            e.Property(le => le.EntryType).HasMaxLength(30);
            e.HasIndex(le => new { le.AgentId, le.CreatedAt });
        });

        // SetupField
        modelBuilder.Entity<SetupField>(e =>
        {
            e.HasKey(s => s.Id);
            e.Property(s => s.Category).HasConversion<string>().HasMaxLength(30);
            e.Property(s => s.Code).HasMaxLength(50);
            e.Property(s => s.Name).HasMaxLength(100);
            e.HasIndex(s => new { s.Category, s.Code }).IsUnique();
        });

        // DocumentTypeConfig
        modelBuilder.Entity<DocumentTypeConfig>(e =>
        {
            e.HasKey(d => d.Id);
            e.Property(d => d.Name).HasMaxLength(100);
            e.Property(d => d.Code).HasMaxLength(50);
            e.HasIndex(d => d.Name).IsUnique();
        });

        // SystemSetting
        modelBuilder.Entity<SystemSetting>(e =>
        {
            e.HasKey(s => s.Id);
            e.Property(s => s.Key).HasMaxLength(100);
            e.Property(s => s.Value).HasMaxLength(500);
            e.HasIndex(s => s.Key).IsUnique();
        });

        // IdempotencyKey
        modelBuilder.Entity<IdempotencyKey>(e =>
        {
            e.HasKey(k => k.Id);
            e.Property(k => k.Key).HasMaxLength(100);
            e.Property(k => k.Endpoint).HasMaxLength(200);
            e.HasIndex(k => new { k.Key, k.Endpoint }).IsUnique();
            e.HasIndex(k => k.ExpiresAt);
        });

        // ExchangeRateQuote
        modelBuilder.Entity<ExchangeRateQuote>(e =>
        {
            e.HasKey(q => q.Id);
            e.HasIndex(q => q.QuoteId).IsUnique();
            e.Property(q => q.LockedRate).HasPrecision(18, 6);
            e.Property(q => q.LockedMargin).HasPrecision(18, 6);
            e.HasOne(q => q.ExchangeRate).WithMany().HasForeignKey(q => q.ExchangeRateId).OnDelete(DeleteBehavior.Restrict);
        });

        // Agent — Optimistic concurrency via PostgreSQL xmin system column
        modelBuilder.Entity<Agent>()
            .Property(a => a.RowVersion)
            .IsRowVersion();

        // AuditLog
        modelBuilder.Entity<AuditLog>(e =>
        {
            e.HasKey(a => a.Id);
            e.HasIndex(a => a.EntityName);
            e.HasIndex(a => a.Timestamp);
            e.HasIndex(a => a.UserId);
        });

        // SanctionsScreeningResult
        modelBuilder.Entity<SanctionsScreeningResult>(e =>
        {
            e.HasKey(s => s.Id);
            e.Property(s => s.Status).HasConversion<string>().HasMaxLength(20);
            e.HasIndex(s => s.ScreenedName);
            e.HasIndex(s => s.TransactionId);
            e.HasIndex(s => s.CustomerId);
        });

        // SanctionEntry
        modelBuilder.Entity<SanctionEntry>(e =>
        {
            e.HasKey(s => s.Id);
            e.Property(s => s.Name).HasMaxLength(300);
            e.Property(s => s.EntryType).HasMaxLength(30);
            e.Property(s => s.ListSource).HasMaxLength(30);
            e.HasIndex(s => s.Name);
            e.HasIndex(s => s.IsActive);
        });

        // SanctionedCountry
        modelBuilder.Entity<SanctionedCountry>(e =>
        {
            e.HasKey(s => s.Id);
            e.Property(s => s.CountryCode).HasMaxLength(10);
            e.Property(s => s.CountryName).HasMaxLength(100);
            e.Property(s => s.SanctionType).HasMaxLength(20);
            e.Property(s => s.RiskLevel).HasMaxLength(20).HasDefaultValue("Blocked");
            e.Property(s => s.ListSource).HasMaxLength(30);
            e.HasIndex(s => s.CountryCode).IsUnique();
            e.HasIndex(s => s.IsActive);
        });
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var auditEntries = OnBeforeSaveChanges();

        int result;
        try
        {
            result = await base.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateConcurrencyException ex)
        {
            // Translate EF-specific exception into a domain exception so the Application
            // layer can catch it without depending on Microsoft.EntityFrameworkCore.
            throw new ConcurrencyException(
                "A concurrency conflict was detected. The record was modified by another process.", ex);
        }

        if (auditEntries.Count > 0)
        {
            foreach (var entry in auditEntries)
            {
                AuditLogs.Add(entry);
            }
            await base.SaveChangesAsync(cancellationToken);
        }

        return result;
    }

    private List<AuditLog> OnBeforeSaveChanges()
    {
        ChangeTracker.DetectChanges();
        var auditEntries = new List<AuditLog>();

        foreach (var entry in ChangeTracker.Entries())
        {
            // Skip AuditLog itself, unchanged, and detached entities
            if (entry.Entity is AuditLog || entry.State == EntityState.Detached || entry.State == EntityState.Unchanged)
                continue;

            // Skip entities that aren't worth auditing (transient data)
            var entityType = entry.Entity.GetType().Name;
            if (entityType is "RefreshToken" or "IdempotencyKey" or "ExchangeRateQuote")
                continue;

            var auditLog = new AuditLog
            {
                EntityName = entityType,
                UserId = _auditContext?.UserId,
                UserName = _auditContext?.UserName,
                IpAddress = _auditContext?.IpAddress,
                Timestamp = DateTime.UtcNow
            };

            // Get the primary key value
            var primaryKey = entry.Properties
                .Where(p => p.Metadata.IsPrimaryKey())
                .Select(p => p.CurrentValue?.ToString())
                .FirstOrDefault();
            auditLog.EntityId = primaryKey ?? "";

            switch (entry.State)
            {
                case EntityState.Added:
                    auditLog.Action = "Insert";
                    auditLog.NewValues = SerializeProperties(entry, false);
                    break;

                case EntityState.Modified:
                    auditLog.Action = "Update";
                    var oldValues = new Dictionary<string, object?>();
                    var newValues = new Dictionary<string, object?>();
                    var changedColumns = new List<string>();

                    foreach (var prop in entry.Properties)
                    {
                        if (prop.IsModified)
                        {
                            oldValues[prop.Metadata.Name] = prop.OriginalValue;
                            newValues[prop.Metadata.Name] = prop.CurrentValue;
                            changedColumns.Add(prop.Metadata.Name);
                        }
                    }

                    if (changedColumns.Count == 0) continue;

                    auditLog.OldValues = JsonSerializer.Serialize(oldValues);
                    auditLog.NewValues = JsonSerializer.Serialize(newValues);
                    auditLog.ChangedColumns = string.Join(",", changedColumns);

                    // Detect soft delete
                    if (entry.Entity is ISoftDeletable sd && sd.IsDeleted &&
                        entry.Property(nameof(ISoftDeletable.IsDeleted)).IsModified)
                    {
                        auditLog.Action = "SoftDelete";
                    }
                    break;

                case EntityState.Deleted:
                    auditLog.Action = "Delete";
                    auditLog.OldValues = SerializeProperties(entry, true);
                    break;

                default:
                    continue;
            }

            auditEntries.Add(auditLog);
        }

        return auditEntries;
    }

    private static string SerializeProperties(EntityEntry entry, bool useOriginal)
    {
        var values = new Dictionary<string, object?>();
        foreach (var prop in entry.Properties)
        {
            // Skip navigation properties and very large values
            if (prop.Metadata.IsPrimaryKey() || prop.Metadata.IsForeignKey())
            {
                values[prop.Metadata.Name] = useOriginal ? prop.OriginalValue : prop.CurrentValue;
                continue;
            }

            var value = useOriginal ? prop.OriginalValue : prop.CurrentValue;
            // Truncate very long strings to prevent bloating audit table
            if (value is string s && s.Length > 500)
                value = s[..500] + "...";
            values[prop.Metadata.Name] = value;
        }
        return JsonSerializer.Serialize(values);
    }
}
