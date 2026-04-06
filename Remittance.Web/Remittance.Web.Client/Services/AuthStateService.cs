using Microsoft.JSInterop;

namespace Remittance.Web.Client.Services;

public class AuthStateService
{
    private readonly IJSRuntime _js;

    public string Token { get; private set; } = string.Empty;
    public string RefreshToken { get; private set; } = string.Empty;
    public string UserId { get; private set; } = string.Empty;
    public string FullName { get; private set; } = string.Empty;
    public string Email { get; private set; } = string.Empty;
    public List<string> Roles { get; private set; } = new();
    public bool IsAuthenticated => !string.IsNullOrEmpty(Token);

    public event Action? OnChange;

    public AuthStateService(IJSRuntime js)
    {
        _js = js;
    }

    public async Task SetAuthAsync(string token, string refreshToken, string userId, string fullName, string email, List<string> roles)
    {
        Token = token;
        RefreshToken = refreshToken;
        UserId = userId;
        FullName = fullName;
        Email = email;
        Roles = roles;

        await _js.InvokeVoidAsync("localStorage.setItem", "auth_token", token);
        await _js.InvokeVoidAsync("localStorage.setItem", "auth_refreshToken", refreshToken);
        await _js.InvokeVoidAsync("localStorage.setItem", "auth_userId", userId);
        await _js.InvokeVoidAsync("localStorage.setItem", "auth_fullName", fullName);
        await _js.InvokeVoidAsync("localStorage.setItem", "auth_email", email);
        await _js.InvokeVoidAsync("localStorage.setItem", "auth_roles", string.Join(",", roles));

        OnChange?.Invoke();
    }

    public async Task UpdateTokensAsync(string token, string refreshToken)
    {
        Token = token;
        RefreshToken = refreshToken;

        await _js.InvokeVoidAsync("localStorage.setItem", "auth_token", token);
        await _js.InvokeVoidAsync("localStorage.setItem", "auth_refreshToken", refreshToken);
    }

    public async Task LoadFromSessionAsync()
    {
        try
        {
            var token = await _js.InvokeAsync<string>("localStorage.getItem", "auth_token");
            if (!string.IsNullOrEmpty(token))
            {
                Token = token;
                RefreshToken = await _js.InvokeAsync<string>("localStorage.getItem", "auth_refreshToken") ?? string.Empty;
                UserId = await _js.InvokeAsync<string>("localStorage.getItem", "auth_userId") ?? string.Empty;
                FullName = await _js.InvokeAsync<string>("localStorage.getItem", "auth_fullName") ?? string.Empty;
                Email = await _js.InvokeAsync<string>("localStorage.getItem", "auth_email") ?? string.Empty;
                var rolesStr = await _js.InvokeAsync<string>("localStorage.getItem", "auth_roles") ?? string.Empty;
                Roles = string.IsNullOrEmpty(rolesStr) ? new() : rolesStr.Split(',').ToList();
                OnChange?.Invoke();
            }
        }
        catch
        {
            // JS interop not available during prerendering
        }
    }

    public async Task LogoutAsync()
    {
        Token = string.Empty;
        RefreshToken = string.Empty;
        UserId = string.Empty;
        FullName = string.Empty;
        Email = string.Empty;
        Roles = new();

        try
        {
            await _js.InvokeVoidAsync("localStorage.removeItem", "auth_token");
            await _js.InvokeVoidAsync("localStorage.removeItem", "auth_refreshToken");
            await _js.InvokeVoidAsync("localStorage.removeItem", "auth_userId");
            await _js.InvokeVoidAsync("localStorage.removeItem", "auth_fullName");
            await _js.InvokeVoidAsync("localStorage.removeItem", "auth_email");
            await _js.InvokeVoidAsync("localStorage.removeItem", "auth_roles");
        }
        catch { }

        OnChange?.Invoke();
    }
}
