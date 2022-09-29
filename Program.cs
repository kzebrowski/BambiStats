using Repository.DataAccess;
using Microsoft.EntityFrameworkCore;
using Repository.DataAccess.BodyMeasurementRepository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

// I KNOW, I KNOW!
const string dbKey = "7uZA2bdKKUMw7OnQJcrfLnYHmI8NaOtQT33LNkZYqtqSNFXZAvQcBV2ZGrpQNqrPbDh0LpU8XeU3ZkX1luTeWQ==";
const string dbUri = "https://bambi-stats-db.documents.azure.com:443/";
const string dbName = "BambiStats"; 

builder.Services.AddDbContext<BambiStatsContext>(options => options.UseCosmos(dbUri, dbKey, dbName));
builder.Services.AddScoped<IBodyMeasurementRepository, BodyMeasurementRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
  app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
