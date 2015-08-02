using CilJs.TestRunner.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reactive.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Web.Hosting;
using System.Web.Http;

namespace CilJs.TestRunner.Controllers
{
    public class TestRunnerController : ApiController
    {
        public TestResult Get([FromUri] string name)
        {
            var runner = new Tests(HostingEnvironment.MapPath("~"));
            return runner.CompileAndRun(name.Replace("/", "\\"));
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