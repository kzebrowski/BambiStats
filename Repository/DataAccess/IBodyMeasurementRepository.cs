using Repository.Models;

namespace Repository.DataAccess
{
  public interface IBodyMeasurementRepository
  {
    IEnumerable<BodyMeasurementModel> GetAll();
    BodyMeasurementModel GetByValueDate(DateTime valueDate);
    BodyMeasurementModel Add(BodyMeasurementModel newRecord);
    BodyMeasurementModel Update(BodyMeasurementModel model);
    void Delete(DateTime valueDate);
  }
}
