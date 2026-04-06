namespace Remittance.Application.DTOs.Auth;

public class MenuPrivilegeDto
{
    public int MenuId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Icon { get; set; }
    public string? Url { get; set; }
    public int DisplayOrder { get; set; }
    public List<string> Actions { get; set; } = new();
    public List<MenuPrivilegeDto> Children { get; set; } = new();
}
