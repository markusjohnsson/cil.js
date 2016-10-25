
// using System.Collections.Generic;
// using MsieJavaScriptEngine;
// using MsieJavaScriptEngine.Helpers;

// namespace CilJs.TestRunner
// {
//     public class MsieScriptRunner: IJavaScriptRunner
//     {

//         public string ExecuteJs(string jsProgram, string entryPoint, out int exitCode, List<string> errors)
//         {
//             string jsOutput = null;
//             exitCode = -1;
//             using (var jsEngine = new MsieJsEngine
//                 engineMode: JsEngineMode.Auto,
//                 useEcmaScript5Polyfill: false,
//                 useJson2Library: false))
//             {
//                 object exitCodeObj = null;
//                 try
//                 {
//                     jsEngine.Execute(@"var ciljs_testlib_output = """";");
//                     jsEngine.Execute(@"
//                         var console = { 
//                             log: function ciljs_test_log(message) { 
//                                 ciljs_testlib_output += message + ""\r\n""; 
//                             } 
//                         }");

//                     jsEngine.Execute(jsCorlib);
//                     jsEngine.Execute(jsProgram);

//                     exitCodeObj = jsEngine.Evaluate(entryPoint + ".entryPoint()");
//                 }
//                 catch (JsEngineLoadException e)
//                 {
//                     errors.Add("During loading of JavaScript engine an error occurred.\n" + JsErrorHelpers.Format(e));
//                 }
//                 catch (JsRuntimeException e)
//                 {
//                     errors.Add("During execution of JavaScript code an error occurred.\n" + JsErrorHelpers.Format(e));
//                 }

//                 if (exitCodeObj == null || exitCodeObj == Undefined.Value)
//                     exitCode = 0;
//                 else
//                     exitCode = (int)(double)exitCodeObj;

//                 try
//                 {
//                     jsOutput = (string)jsEngine.Evaluate("ciljs_testlib_output");
//                 }
//                 catch
//                 {
//                     errors.Add("Exception while evaluating script output");
//                 }
//             }
//             return jsOutput;
//         }

//         private string CilToJavaScript(
//             string mainAssemblyName,
//             Stream mainAssembly,
//             string outputName,
//             TextWriter writer,
//             List<Ref> refs,
//             List<string> errors,
//             bool outputRuntimeJs = false)
//         {
//             try
//             {
//                 var settings = new CompileSettings();

//                 foreach (var r in refs)
//                     settings.AddAssembly(r.path, translate: r.translate);

//                 settings.OutputRuntimeJs = outputRuntimeJs;

//                 if (mainAssembly != null)
//                     settings.AddAssembly(stream: mainAssembly, assemblyPath: mainAssemblyName, translate: true);
//                 else
//                     settings.AddAssembly(mainAssemblyName, translate: true);

//                 settings.OutputFileName = outputName;

//                 settings.TextWriter = writer;

//                 settings.OutputILComments = true;

//                 var compiler = new Compiler(settings);

//                 var result = compiler.Compile();
//                 return result.EntryPointAssembly;
//             }
//             catch (Exception e)
//             {
//                 errors.Add(e.Message + "\n" + e.StackTrace);
//             }

//             return null;
//         }
//     }

// }