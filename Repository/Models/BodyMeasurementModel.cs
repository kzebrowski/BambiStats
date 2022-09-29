using System.ComponentModel.DataAnnotations;

namespace Repository.Models
{
  public class BodyMeasurementModel
  {
    [Key]
    public string Id { get; set; }

    [Range(typeof(DateTime), "2022-06-01", "2100-1-1")]
    public DateTime ValueDate { get; set; }

    [Required]
    [Range(1d, Double.MaxValue)]
    public float Weight { get; set; }

    [Required]
    public int NumberOfPoops { get; set; }

    public int? SleepLength { get; set; }
  }
}