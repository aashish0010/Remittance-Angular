namespace Remittance.Application.DTOs.Auth;

public class LoginResponseDto
{
    public string Token { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public DateTime Expiration { get; set; }
    public string UserId { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public List<string> Roles { get; set; } = new();
    public string Portal { get; set; } = string.Empty;
    public List<string> AvailablePortals { get; set; } = new();

    /// <summary>
    /// True when the previous session was terminated due to suspicious activity
    /// (refresh token reuse detected). The client should display a security warning.
    /// </summary>
    public bool SecurityAlert { get; set; }
    public string? SecurityAlertMessage { get; set; }
}
