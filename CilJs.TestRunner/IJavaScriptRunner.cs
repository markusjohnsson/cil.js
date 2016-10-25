using System.Collections.Generic;

namespace CilJs.TestRunner
{
    public interface IJavaScriptRunner
    {
        string ExecuteJs(string corlib, string jsProgram, string entryPoint, out int exitCode, List<string> errors);
    }
}