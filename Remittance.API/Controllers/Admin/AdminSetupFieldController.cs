using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Common;
using Remittance.API.Helpers;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;
using Remittance.Domain.Interfaces;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/admin/setup-fields")]
[Authorize]
[MenuPermission("/admin/static-values")]
public class AdminSetupFieldController : ControllerBase
{
    private readonly IRepository<SetupField> _setupFieldRepo;
    private readonly IRepository<DocumentTypeConfig> _docTypeRepo;
    private readonly IRepository<SystemSetting> _settingRepo;
    private readonly IUnitOfWork _unitOfWork;

    public AdminSetupFieldController(
        IRepository<SetupField> setupFieldRepo,
        IRepository<DocumentTypeConfig> docTypeRepo,
        IRepository<SystemSetting> settingRepo,
        IUnitOfWork unitOfWork)
    {
        _setupFieldRepo = setupFieldRepo;
        _docTypeRepo = docTypeRepo;
        _settingRepo = settingRepo;
        _unitOfWork = unitOfWork;
    }

    // ── Setup Fields CRUD ──

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] string? category)
    {
        IEnumerable<SetupField> fields;
        if (!string.IsNullOrEmpty(category) && Enum.TryParse<SetupFieldCategory>(category, true, out var cat))
            fields = await _setupFieldRepo.FindAsync(f => f.Category == cat);
        else
            fields = await _setupFieldRepo.GetAllAsync();

        var result = fields.OrderBy(f => f.Category).ThenBy(f => f.SortOrder).ThenBy(f => f.Name)
            .Select(f => new { f.Id, Category = f.Category.ToString(), f.Code, f.Name, f.Description, f.IsActive, f.SortOrder })
            .ToList();
        return Ok(ApiResponse<object>.Ok(result));
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] SetupFieldDto dto)
    {
        if (!Enum.TryParse<SetupFieldCategory>(dto.Category, true, out var cat))
            return BadRequest(ApiResponse<object>.Fail("Invalid category."));

        var exists = await _setupFieldRepo.ExistsAsync(f => f.Category == cat && f.Code == dto.Code);
        if (exists)
            return BadRequest(ApiResponse<object>.Fail("A field with this code already exists in this category."));

        var entity = new SetupField
        {
            Category = cat,
            Code = dto.Code,
            Name = dto.Name,
            Description = dto.Description,
            IsActive = dto.IsActive,
            SortOrder = dto.SortOrder
        };
        await _setupFieldRepo.AddAsync(entity);
        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<object>.Ok(new { entity.Id, Category = entity.Category.ToString(), entity.Code, entity.Name, entity.Description, entity.IsActive, entity.SortOrder }, "Setup field created."));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] SetupFieldDto dto)
    {
        var entity = await _setupFieldRepo.GetByIdAsync(id);
        if (entity == null) return NotFound(ApiResponse<object>.Fail("Not found."));

        if (!Enum.TryParse<SetupFieldCategory>(dto.Category, true, out var cat))
            return BadRequest(ApiResponse<object>.Fail("Invalid category."));

        entity.Category = cat;
        entity.Code = dto.Code;
        entity.Name = dto.Name;
        entity.Description = dto.Description;
        entity.IsActive = dto.IsActive;
        entity.SortOrder = dto.SortOrder;

        await _setupFieldRepo.UpdateAsync(entity);
        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<object>.Ok(new { entity.Id, Category = entity.Category.ToString(), entity.Code, entity.Name, entity.Description, entity.IsActive, entity.SortOrder }, "Updated."));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var entity = await _setupFieldRepo.GetByIdAsync(id);
        if (entity == null) return NotFound(ApiResponse<object>.Fail("Not found."));

        await _setupFieldRepo.DeleteAsync(entity);
        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<bool>.Ok(true, "Deleted."));
    }

    // ── Document Type Configs ──

    [HttpGet("document-types")]
    public async Task<IActionResult> GetDocumentTypes()
    {
        var types = await _docTypeRepo.GetAllAsync();
        var result = types.OrderBy(t => t.SortOrder).ThenBy(t => t.Name)
            .Select(t => new { t.Id, t.Name, t.Code, t.RequiredSides, t.IsActive, t.SortOrder })
            .ToList();
        return Ok(ApiResponse<object>.Ok(result));
    }

    [HttpPost("document-types")]
    public async Task<IActionResult> CreateDocumentType([FromBody] DocumentTypeConfigDto dto)
    {
        var entity = new DocumentTypeConfig
        {
            Name = dto.Name,
            Code = dto.Code,
            RequiredSides = dto.RequiredSides,
            IsActive = dto.IsActive,
            SortOrder = dto.SortOrder
        };
        await _docTypeRepo.AddAsync(entity);
        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<object>.Ok(new { entity.Id, entity.Name, entity.Code, entity.RequiredSides, entity.IsActive, entity.SortOrder }, "Document type created."));
    }

    [HttpPut("document-types/{id}")]
    public async Task<IActionResult> UpdateDocumentType(int id, [FromBody] DocumentTypeConfigDto dto)
    {
        var entity = await _docTypeRepo.GetByIdAsync(id);
        if (entity == null) return NotFound(ApiResponse<object>.Fail("Not found."));

        entity.Name = dto.Name;
        entity.Code = dto.Code;
        entity.RequiredSides = dto.RequiredSides;
        entity.IsActive = dto.IsActive;
        entity.SortOrder = dto.SortOrder;

        await _docTypeRepo.UpdateAsync(entity);
        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<object>.Ok(new { entity.Id, entity.Name, entity.Code, entity.RequiredSides, entity.IsActive, entity.SortOrder }, "Updated."));
    }

    [HttpDelete("document-types/{id}")]
    public async Task<IActionResult> DeleteDocumentType(int id)
    {
        var entity = await _docTypeRepo.GetByIdAsync(id);
        if (entity == null) return NotFound(ApiResponse<object>.Fail("Not found."));

        await _docTypeRepo.DeleteAsync(entity);
        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<bool>.Ok(true, "Deleted."));
    }

    // ── System Settings ──

    [HttpGet("settings")]
    public async Task<IActionResult> GetSettings()
    {
        var settings = await _settingRepo.GetAllAsync();
        var result = settings.OrderBy(s => s.Key)
            .Select(s => new { s.Id, s.Key, s.Value, s.Description })
            .ToList();
        return Ok(ApiResponse<object>.Ok(result));
    }

    [HttpPost("settings")]
    public async Task<IActionResult> SaveSetting([FromBody] SystemSettingDto dto)
    {
        var existing = (await _settingRepo.FindAsync(s => s.Key == dto.Key)).FirstOrDefault();
        if (existing != null)
        {
            existing.Value = dto.Value;
            existing.Description = dto.Description;
            existing.UpdatedAt = DateTime.UtcNow;
            await _settingRepo.UpdateAsync(existing);
        }
        else
        {
            await _settingRepo.AddAsync(new SystemSetting
            {
                Key = dto.Key,
                Value = dto.Value,
                Description = dto.Description
            });
        }
        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<bool>.Ok(true, "Setting saved."));
    }

    [HttpDelete("settings/{id}")]
    public async Task<IActionResult> DeleteSetting(int id)
    {
        var entity = await _settingRepo.GetByIdAsync(id);
        if (entity == null) return NotFound(ApiResponse<object>.Fail("Not found."));

        await _settingRepo.DeleteAsync(entity);
        await _unitOfWork.SaveChangesAsync();
        return Ok(ApiResponse<bool>.Ok(true, "Deleted."));
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] PagedRequest request, [FromQuery] string? category = null)
    {
        IEnumerable<SetupField> fields;
        if (!string.IsNullOrEmpty(category) && Enum.TryParse<SetupFieldCategory>(category, true, out var cat))
            fields = await _setupFieldRepo.FindAsync(f => f.Category == cat);
        else
            fields = await _setupFieldRepo.GetAllAsync();

        var projected = fields.OrderBy(f => f.Category).ThenBy(f => f.SortOrder).ThenBy(f => f.Name)
            .Select(f => new { f.Id, Category = f.Category.ToString(), f.Code, f.Name, f.Description, f.IsActive, f.SortOrder });

        if (!string.IsNullOrEmpty(request.Search))
        {
            var search = request.Search.ToLower();
            projected = projected.Where(x =>
                (x.Name?.ToLower().Contains(search) == true) ||
                (x.Code?.ToLower().Contains(search) == true) ||
                (x.Category?.ToLower().Contains(search) == true) ||
                (x.Description?.ToLower().Contains(search) == true));
        }

        var totalCount = projected.Count();
        var items = projected
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToList();

        var paged = new PagedResult<object>
        {
            Items = items.Cast<object>().ToList(),
            TotalCount = totalCount,
            Page = request.Page,
            PageSize = request.PageSize
        };
        return Ok(ApiResponse<PagedResult<object>>.Ok(paged));
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export([FromQuery] string format = "excel", [FromQuery] string? category = null, [FromQuery] string? search = null)
    {
        IEnumerable<SetupField> fields;
        if (!string.IsNullOrEmpty(category) && Enum.TryParse<SetupFieldCategory>(category, true, out var cat))
            fields = await _setupFieldRepo.FindAsync(f => f.Category == cat);
        else
            fields = await _setupFieldRepo.GetAllAsync();

        var projected = fields.OrderBy(f => f.Category).ThenBy(f => f.SortOrder).ThenBy(f => f.Name)
            .Select(f => new { f.Id, Category = f.Category.ToString(), f.Code, f.Name, f.Description, f.IsActive, f.SortOrder });

        if (!string.IsNullOrEmpty(search))
        {
            var s = search.ToLower();
            projected = projected.Where(x =>
                (x.Name?.ToLower().Contains(s) == true) ||
                (x.Code?.ToLower().Contains(s) == true) ||
                (x.Category?.ToLower().Contains(s) == true));
        }

        var data = projected.ToList();

        if (format.Equals("csv", StringComparison.OrdinalIgnoreCase))
        {
            var bytes = ExportHelper.ToCsv(data);
            return File(bytes, "text/csv", "setup-fields.csv");
        }
        var excelBytes = ExportHelper.ToExcel(data, "SetupFields");
        return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "setup-fields.xlsx");
    }
}

// ── DTOs (inline for simplicity) ──

public class SetupFieldDto
{
    public string Category { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsActive { get; set; } = true;
    public int SortOrder { get; set; }
}

public class DocumentTypeConfigDto
{
    public string Name { get; set; } = string.Empty;
    public string? Code { get; set; }
    public int RequiredSides { get; set; } = 1;
    public bool IsActive { get; set; } = true;
    public int SortOrder { get; set; }
}

public class SystemSettingDto
{
    public string Key { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
    public string? Description { get; set; }
}
