namespace Remittance.Domain.Entities;

public class Permission
{
    public int Id { get; set; }
    public int MenuId { get; set; }
    public Menu Menu { get; set; } = null!;
    public string ActionName { get; set; } = string.Empty; // Read, Write, Approve, Delete
    public bool IsActive { get; set; } = true;
}
