using Microsoft.CSharp;
using MsieJavaScriptEngine;
using MsieJavaScriptEngine.Helpers;
using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Mvc;
using CilJs.TestRunner.Models;

namespace CilJs.TestRunner.Controllers
{
    public class RunJsViewModel
    {
        public string ScriptPath { get { return TestName + ".ciljs.exe.js"; } }

        public string TestName { get; set; }
    }

    public class IndexViewModel
    {
        public List<IndexTestItem> Items { get; set; }

        public bool AutoRun { get; set; }
    }

    public class IndexTestItem
    {
        public string Name { get; set; }

        public string JsUrl { get; set; }
    }

    public class TestController : Controller
    {
        public ActionResult Index([FromUri] bool autoRun = false)
        {
            var rootPath = Server.MapPath("/");

            var allTests = Enumerable
                .Concat(
                    Directory.GetFiles(Server.MapPath("Tests"), "*.cs"),
                    Directory.GetFiles(Server.MapPath("MonoTests"), "*.cs"))
                .Select(
                    testFile => new IndexTestItem
                    {
                        JsUrl = testFile.Substring(rootPath.Length).Replace("\\", "/") + ".exe.js",
                        Name = testFile.Substring(rootPath.Length).Replace("\\", "/")
                    })
                .ToList();

            return View(new IndexViewModel { Items = allTests, AutoRun = autoRun });
        }

        public ActionResult Run(string name)
        {
            return View(new RunJsViewModel { TestName = name });
        }

        
    }
}
