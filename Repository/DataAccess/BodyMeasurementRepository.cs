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
      return _dbContext.BodyMeasurements.SingleOrDefault(x => x.ValueDate == valueDate);
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
