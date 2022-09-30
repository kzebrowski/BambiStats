using BambiStats.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Repository.DataAccess;

namespace BambiStats.Controllers
{
  [ApiController]
  [Route("/api/[controller]")]
  public class BodyMeasurementsController : ControllerBase
  {
    IBodyMeasurementRepository _bodyMeasurementRepository;

    public BodyMeasurementsController(IBodyMeasurementRepository bodyMeasurementRepository)
    {
      _bodyMeasurementRepository = bodyMeasurementRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
      var measurements = _bodyMeasurementRepository.GetAll();
      var measurementViewModels = measurements.Select(x => new BodyMeasurementViewModel(x));

      return Ok(measurementViewModels);
    }

    [HttpPost("[action]")]
    public IActionResult Add(BodyMeasurementViewModel viewModel)
    {
      var existingRecord = _bodyMeasurementRepository.GetByValueDate(viewModel.ValueDate);

      if (existingRecord != null)
        return BadRequest("A record already exists for given date.");

      var recordToAdd = viewModel.GetNewBodyMeasurementModel();
      var createdRecord = _bodyMeasurementRepository.Add(recordToAdd);

      return Created(String.Empty, new BodyMeasurementViewModel(createdRecord));
    }

    [HttpPost("[action]")]
    public IActionResult Update(BodyMeasurementViewModel viewModel)
    {
      if (!ModelState.IsValid)
        return BadRequest();

      var recordToUpdate = _bodyMeasurementRepository.GetByValueDate(viewModel.ValueDate);

      var updatedRecord = _bodyMeasurementRepository.Update(recordToUpdate);

      return Ok(new BodyMeasurementViewModel(updatedRecord));
    }

    [HttpDelete("[action]")]
    public IActionResult Delete([FromQuery]DateTime valueDate)
    {
      var existingRecord = _bodyMeasurementRepository.GetByValueDate(valueDate);

      if(existingRecord == null)
        return BadRequest("The item does not exist");

      _bodyMeasurementRepository.Delete(valueDate);
      return Ok();
    }
  }
}
