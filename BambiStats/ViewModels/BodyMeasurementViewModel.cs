using System.ComponentModel.DataAnnotations;
using Repository.Models;

namespace BambiStats.ViewModels
{
  public class BodyMeasurementViewModel
  {
    DateTime _valueDate;

    public BodyMeasurementViewModel(){}

    public BodyMeasurementViewModel(BodyMeasurementModel model)
    {
      ValueDate = model.ValueDate;
      Weight = model.Weight;
      NumberOfPoops = model.NumberOfPoops;
      SleepLength = NumberOfPoops;
    }

    [Range(typeof(DateTime), "2022-06-01", "2100-1-1")]
    public DateTime ValueDate
    {
      get => _valueDate.Date;
      set => _valueDate = value;
    }

    [Required]
    [Range(1d, Double.MaxValue)]
    public float Weight { get; set; }

    [Required]
    public int NumberOfPoops { get; set; }

    public int? SleepLength { get; set; }


    public BodyMeasurementModel GetNewBodyMeasurementModel()
    {
      return new BodyMeasurementModel()
      {
        Id = Guid.NewGuid().ToString(),
        ValueDate = this.ValueDate,
        Weight = this.Weight,
        NumberOfPoops = this.NumberOfPoops,
        SleepLength = this.SleepLength,
      };
    }
  }
}
