using Microsoft.EntityFrameworkCore;
using Repository.Models;

namespace Repository.DataAccess
{
  public class BambiStatsContext : DbContext
  {
    public DbSet<BodyMeasurementModel> BodyMeasurements { get; set; }

    public BambiStatsContext(DbContextOptions<BambiStatsContext> options)
      : base(options)
    { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<BodyMeasurementModel>()
        .ToContainer("BodyMeasurements")
        .HasPartitionKey(x => x.Id);
    }
  }
}
