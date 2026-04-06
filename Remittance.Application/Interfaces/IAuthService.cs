using Remittance.Application.DTOs.Auth;
using Remittance.Application.DTOs.Common;

namespace Remittance.Application.Interfaces;

public interface IAuthService
{
    Task<ApiResponse<LoginResponseDto>> LoginAsync(LoginRequestDto request);
    Task<ApiResponse<LoginResponseDto>> RefreshTokenAsync(string refreshToken);
    Task<ApiResponse<string>> RegisterAsync(RegisterRequestDto request);
    Task<ApiResponse<List<MenuPrivilegeDto>>> GetPrivilegesAsync(string userId);

    // Transaction PIN
    Task<ApiResponse<string>> SetTransactionPinAsync(string userId, string pin);
    Task<ApiResponse<bool>> VerifyTransactionPinAsync(string userId, string pin);
    Task<ApiResponse<bool>> HasTransactionPinAsync(string userId);
}
