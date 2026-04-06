using Remittance.Application.DTOs.Admin;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IExchangeRateService
{
    Task<ApiResponse<List<ExchangeRateDto>>> GetAllRatesAsync();
    Task<ApiResponse<ExchangeRateDto>> GetCurrentRateAsync(string sourceCurrency, string destinationCurrency,
        int payoutPartnerId, string? country = null);
    Task<ApiResponse<ExchangeRateDto>> CreateRateAsync(CreateExchangeRateDto dto, string userId);
    Task<ApiResponse<ExchangeRateDto>> UpdateRateAsync(int id, CreateExchangeRateDto dto);
    Task<ApiResponse<bool>> DeleteRateAsync(int id);
    Task<decimal> CalculateConversionAsync(string sourceCurrency, string destinationCurrency, decimal amount);

    // Exchange rate quote locking
    Task<ApiResponse<ExchangeRateQuoteDto>> CreateQuoteAsync(string sourceCurrency, string destinationCurrency,
        int payoutPartnerId, string? country = null);
    Task<ApiResponse<ExchangeRateQuoteDto>> GetQuoteAsync(string quoteId);
    Task MarkQuoteUsedAsync(string quoteId, long transactionId);
}
