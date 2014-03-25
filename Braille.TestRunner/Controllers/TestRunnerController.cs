using Braille.TestRunner.Models;
using System.Web.Hosting;
using System.Web.Http;

namespace Braille.TestRunner.Controllers
{
    public class TestRunnerController : ApiController
    {
        public TestResult Get([FromUri] string name)
        {
            var runner = new Tests(HostingEnvironment.MapPath("~"));
            return runner.CompileAndRun(name.Replace("/", "\\"));
        }
    }
}