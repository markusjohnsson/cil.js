
using System;
using System.Diagnostics;
using System.Collections.Generic;
using System.Threading;
using System.Text;
using System.IO;

namespace CilJs.TestRunner
{
    public class NodeScriptRunner : IJavaScriptRunner
    {
        public string ExecuteJs(string jsCorlib, string jsProgram, string entryPoint, out int exitCode, List<string> errors)
        {

            var psi = new ProcessStartInfo();
            psi.FileName = "node";
            psi.CreateNoWindow = true;
            psi.UseShellExecute = false;
            psi.RedirectStandardInput = true;
            psi.RedirectStandardOutput = true;
            psi.RedirectStandardError = true;

            File.WriteAllText("corlib.ciljs.js", jsCorlib);
            File.WriteAllText("program.js", jsProgram);

            psi.Arguments = "NodeRunner.js";

            // psi.Arguments = "-e \"" + jsCorlib + jsProgram + "\"";

            var process = Process.Start(psi);

            var output = process.StandardOutput.ReadToEnd();
            var error = process.StandardError.ReadToEnd();

            process.WaitForExit(5000);

            exitCode = process.ExitCode;

            return output;
        }
    }
}