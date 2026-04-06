using Remittance.Domain.Enums;

namespace Remittance.Domain.Entities;

public class SetupField
{
    public int Id { get; set; }
    public SetupFieldCategory Category { get; set; }
    public string Code { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsActive { get; set; } = true;
    public int SortOrder { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
