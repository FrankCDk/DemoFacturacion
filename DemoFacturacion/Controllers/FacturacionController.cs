using Microsoft.AspNetCore.Mvc;

namespace DemoFacturacion.Controllers
{
    public class FacturacionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
