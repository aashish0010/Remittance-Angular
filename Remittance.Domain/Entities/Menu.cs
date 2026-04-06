using Remittance.Domain.Enums;

namespace Remittance.Domain.Entities;

public class Menu
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Icon { get; set; }
    public string? Url { get; set; }
    public int? ParentId { get; set; }
    public Menu? Parent { get; set; }
    public int DisplayOrder { get; set; }
    public PortalType Portal { get; set; }
    public bool IsActive { get; set; } = true;

    public ICollection<Menu> Children { get; set; } = new List<Menu>();
    public ICollection<Permission> Permissions { get; set; } = new List<Permission>();
}
