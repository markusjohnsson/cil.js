using CilJs.TestRunner.Models;
using System.IO;
using System.Web.Hosting;
using System.Web.Http;

namespace CilJs.TestRunner.Controllers
{
    public class TestRunnerController : ApiController
    {
        [HttpGet]
        public TestResult Get([FromUri] string name, [FromUri] string writeToFile)
        {
            var runner = new Tests(HostingEnvironment.MapPath("~"));
            return runner.CompileAndRun(name.Replace("/", "\\"), writeToFile == "true");
        }

        [HttpGet]
        [ActionName("RemoveCorlib")]
        public bool RemoveCorlib()
        {
            File.Delete(Path.Combine(HostingEnvironment.MapPath("~"), "corlib.ciljs.js"));
            return true;
        }
    }
}