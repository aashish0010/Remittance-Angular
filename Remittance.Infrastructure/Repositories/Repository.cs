using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Remittance.Domain.Interfaces;
using Remittance.Infrastructure.Data;

namespace Remittance.Infrastructure.Repositories;

public class Repository<T> : IRepository<T> where T : class
{
    protected readonly ApplicationDbContext _context;
    protected readonly DbSet<T> _dbSet;

    public Repository(ApplicationDbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public async Task<T?> GetByIdAsync(object id)
    {
        var entity = await _dbSet.FindAsync(id);
        if (entity is ISoftDeletable sd && sd.IsDeleted)
            return null;
        return entity;
    }

    public async Task<IEnumerable<T>> GetAllAsync()
        => await ApplySoftDeleteFilter(_dbSet.AsNoTracking()).ToListAsync();

    public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
        => await ApplySoftDeleteFilter(_dbSet.AsNoTracking()).Where(predicate).ToListAsync();

    public async Task<T> AddAsync(T entity)
    {
        await _dbSet.AddAsync(entity);
        return entity;
    }

    public Task UpdateAsync(T entity)
    {
        _dbSet.Update(entity);
        return Task.CompletedTask;
    }

    public Task DeleteAsync(T entity)
    {
        if (entity is ISoftDeletable softDeletable)
        {
            softDeletable.IsDeleted = true;
            softDeletable.DeletedAt = DateTime.UtcNow;
            _dbSet.Update(entity);
        }
        else
        {
            _dbSet.Remove(entity);
        }
        return Task.CompletedTask;
    }

    public async Task<bool> ExistsAsync(Expression<Func<T, bool>> predicate)
        => await ApplySoftDeleteFilter(_dbSet).AnyAsync(predicate);

    public async Task<(IEnumerable<T> Items, int TotalCount)> GetPagedAsync(
        Expression<Func<T, bool>>? predicate = null,
        int page = 1,
        int pageSize = 20,
        Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null)
    {
        IQueryable<T> query = ApplySoftDeleteFilter(_dbSet.AsNoTracking());

        if (predicate != null)
            query = query.Where(predicate);

        var totalCount = await query.CountAsync();

        if (orderBy != null)
            query = orderBy(query);

        var items = await query
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        return (items, totalCount);
    }

    public IQueryable<T> Query() => ApplySoftDeleteFilter(_dbSet.AsNoTracking());

    private static IQueryable<T> ApplySoftDeleteFilter(IQueryable<T> query)
    {
        if (typeof(ISoftDeletable).IsAssignableFrom(typeof(T)))
        {
            query = query.Where(e => !((ISoftDeletable)e).IsDeleted);
        }
        return query;
    }
}
