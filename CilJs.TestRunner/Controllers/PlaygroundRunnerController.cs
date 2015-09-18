using CilJs.TestRunner.Models;
using System.IO;
using System.Web.Hosting;
using System.Web.Http;

namespace CilJs.TestRunner.Controllers
{
    public class PlaygroundRunnerController: ApiController
    {
        static int c = 0;

        public class PlaygroundRunnerModel
        {
            public string code { get; set; }
        }

        public class PlaygroundRunnerResult
        {
            public TestResult testResult;
            public string compiledCode;
        }

        public PlaygroundRunnerResult Post(PlaygroundRunnerModel model)
        {
            var csFile = Path.Combine(HostingEnvironment.MapPath("~"), "PlaygroundTemp", "playground" + (c++) + ".cs");
            if (File.Exists(csFile))
                File.Delete(csFile);

            File.WriteAllText(csFile, model.code);

            var test = new Tests(HostingEnvironment.MapPath("~"));
            return new PlaygroundRunnerResult
            {
                testResult = test.CompileAndRun(csFile, true),
                compiledCode = File.Exists(csFile+".ciljs.exe.js") ? File.ReadAllText(csFile + ".ciljs.exe.js") : ""
            };
        }
    }
}