using Braille.TestRunner.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reactive.Linq;
using System.Threading.Tasks;
using System.Web.Hosting;
using System.Web.Http;

namespace Braille.TestRunner.Controllers
{
    public class TestRunnerController : ApiController
    {
        public TestResult Get([FromUri] string name)
        {
            var runner = new Tests(HostingEnvironment.MapPath("~"));
            return runner.CompileAndRun(name.Replace("/", "\\"), translateCorlib: false);
        }

        [HttpGet]
        public async Task<IEnumerable<TestResult>> GetAllTestRuns()
        {
            var runner = new Tests(HostingEnvironment.MapPath("~"));
            return await runner.RunAll().ToList();
        }

        [HttpGet]
        public TestResult GetAssemblyTest([FromUri] string assemblyTest)
        {
            var workDir = HostingEnvironment.MapPath("/");
            var dir = Path.Combine(workDir, assemblyTest.Replace("/", "\\"));
            var runner = new Tests(workDir);

            return runner
                .CompileAndRun(
                    Directory
                        .GetFiles(dir, "*.cs")
                        .Select(f => f.Substring(workDir.Length))
                        .ToArray());
        }
    }
}