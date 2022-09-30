using Repository.DataAccess;
using Repository.Models;

namespace Repository
{
  public class BodyMeasurementRepository : IBodyMeasurementRepository
  {
    BambiStatsContext _dbContext;

    public BodyMeasurementRepository(BambiStatsContext dbContext)
    {
      _dbContext = dbContext;
    }

    public IEnumerable<BodyMeasurementModel> GetAll()
    {
      return _dbContext.BodyMeasurements.ToList();
    }

    public BodyMeasurementModel GetByValueDate(DateTime valueDate)
    {
      // Unoptimal implementation to workaround the problem with CosmosDB storing dates
      // in unusual format (adding 'Z' at the end) what resulted in Entity Framework not
      // being able to query properly. Should not be a problem with this workload.
      return GetAll().SingleOrDefault(x => x.ValueDate == valueDate);
    }

    public BodyMeasurementModel Add(BodyMeasurementModel newRecord)
    {
      _dbContext.BodyMeasurements.Add(newRecord);
      _dbContext.SaveChanges();

      return newRecord;
    }

    public BodyMeasurementModel Update(BodyMeasurementModel model)
    {
      _dbContext.BodyMeasurements.Update(model);
      _dbContext.SaveChanges();

      return model;
    }

    public void Delete(DateTime valueDate)
    {
      var entityToDelete = GetByValueDate(valueDate);

      _dbContext.BodyMeasurements.Remove(entityToDelete);
      _dbContext.SaveChanges();
    }
  }
}
