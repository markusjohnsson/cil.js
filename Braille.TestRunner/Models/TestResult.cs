using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.TestRunner.Models
{
    public class TestResult
    {
        public string File { get; set; }

        public List<string> Errors { get; set; }

        public bool TestSuccess { get; set; }

        public string JsOutput { get; set; }

        public string ClrOutput { get; set; }
    }
}
