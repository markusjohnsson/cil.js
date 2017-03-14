using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.TestRunner
{
    public class Timing
    {
        public string Key { get; set; }
        public double Time { get; set; }
        public Timing(string key, double time)
        {
            Key = key;
            Time = time;
        }
    }
    public class TestResult
    {
        public string File { get; set; }

        public List<string> Errors { get; set; }

        public bool TestSuccess { get; set; }

        public string JsOutput { get; set; }

        public string ClrOutput { get; set; }

        public List<Timing> Timings { get; set; }
    }
}
