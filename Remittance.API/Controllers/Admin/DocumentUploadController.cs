using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Remittance.Application.DTOs.Common;
using Remittance.Domain.Entities;
using Remittance.Domain.Interfaces;

namespace Remittance.API.Controllers.Admin;

[ApiController]
[Route("api/documents")]
[Authorize]
public class DocumentUploadController : ControllerBase
{
    private readonly IRepository<CustomerDocument> _docRepo;
    private readonly IRepository<Domain.Entities.Customer> _customerRepo;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IWebHostEnvironment _env;

    public DocumentUploadController(
        IRepository<CustomerDocument> docRepo,
        IRepository<Domain.Entities.Customer> customerRepo,
        IUnitOfWork unitOfWork,
        IWebHostEnvironment env)
    {
        _docRepo = docRepo;
        _customerRepo = customerRepo;
        _unitOfWork = unitOfWork;
        _env = env;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> Upload(
        [FromForm] int customerId,
        [FromForm] string documentType,
        [FromForm] string documentNumber,
        [FromForm] int requiredSides,
        [FromForm] string? issuingCountry,
        [FromForm] IFormFile? frontImage,
        [FromForm] IFormFile? backImage)
    {
        var cust = await _customerRepo.GetByIdAsync(customerId);
        if (cust == null)
            return BadRequest(ApiResponse<object>.Fail("Customer not found."));

        var uploadsDir = Path.Combine(_env.ContentRootPath, "wwwroot", "uploads", "documents", customerId.ToString());
        Directory.CreateDirectory(uploadsDir);

        string? frontPath = null;
        string? backPath = null;

        if (frontImage != null)
        {
            var frontName = $"{Guid.NewGuid()}{Path.GetExtension(frontImage.FileName)}";
            var fullPath = Path.Combine(uploadsDir, frontName);
            using var stream = new FileStream(fullPath, FileMode.Create);
            await frontImage.CopyToAsync(stream);
            frontPath = $"/uploads/documents/{customerId}/{frontName}";
        }

        if (backImage != null && requiredSides >= 2)
        {
            var backName = $"{Guid.NewGuid()}{Path.GetExtension(backImage.FileName)}";
            var fullPath = Path.Combine(uploadsDir, backName);
            using var stream = new FileStream(fullPath, FileMode.Create);
            await backImage.CopyToAsync(stream);
            backPath = $"/uploads/documents/{customerId}/{backName}";
        }

        var doc = new CustomerDocument
        {
            CustomerId = customerId,
            DocumentType = documentType,
            DocumentNumber = documentNumber,
            IssuingCountry = issuingCountry,
            FrontImagePath = frontPath,
            BackImagePath = backPath,
            RequiredSides = requiredSides
        };
        await _docRepo.AddAsync(doc);
        await _unitOfWork.SaveChangesAsync();

        return Ok(ApiResponse<object>.Ok(new
        {
            doc.Id,
            doc.DocumentType,
            doc.DocumentNumber,
            doc.FrontImagePath,
            doc.BackImagePath,
            doc.RequiredSides
        }, "Document uploaded."));
    }

    [HttpGet("{customerId}")]
    public async Task<IActionResult> GetByCustomerId(int customerId)
    {
        var docs = await _docRepo.FindAsync(d => d.CustomerId == customerId);
        var result = docs.OrderByDescending(d => d.CreatedAt).Select(d => new
        {
            d.Id,
            d.DocumentType,
            d.DocumentNumber,
            d.IssueDate,
            d.ExpiryDate,
            d.IssuingCountry,
            d.IsVerified,
            d.FrontImagePath,
            d.BackImagePath,
            d.RequiredSides,
            d.CreatedAt
        });
        return Ok(ApiResponse<object>.Ok(result));
    }
}
