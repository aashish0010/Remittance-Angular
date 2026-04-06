using Remittance.Application.DTOs.Agent;
using Remittance.Application.DTOs.Common;
using Remittance.Domain.Enums;

namespace Remittance.Application.Interfaces;

public interface ITransactionService
{
    Task<ApiResponse<TransactionResultDto>> SendTransactionAsync(SendTransactionDto dto, int agentId);
    Task<ApiResponse<TransactionResultDto>> SendCustomerTransactionAsync(SendTransactionDto dto, int customerId);
    Task<ApiResponse<List<TransactionResultDto>>> GetAgentTransactionsAsync(int agentId);
    Task<ApiResponse<List<TransactionResultDto>>> GetAllTransactionsAsync();
    Task<ApiResponse<TransactionResultDto>> ReleaseTransactionAsync(long transactionId);
    Task<ApiResponse<TransactionResultDto>> CompleteTransactionAsync(long transactionId, string approvedByUserId);
    Task<ApiResponse<TransactionResultDto>> ApproveTransactionAsync(long transactionId, string approvedByUserId);
    Task<ApiResponse<TransactionResultDto>> CancelTransactionAsync(long transactionId);
    Task<ApiResponse<TransactionResultDto>> UpdateStatusAsync(long transactionId, TransactionStatus status);
    Task<ApiResponse<TransferCalculationResultDto>> CalculateTransferAsync(CalculateTransferDto dto);
    Task<ApiResponse<TransactionResultDto>> GetTransactionByIdAsync(long id);
}
