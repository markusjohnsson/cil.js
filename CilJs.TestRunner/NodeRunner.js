
var process = require('process');

global.window = global;
global.CILJS = require('../CilJs.Runtime/Runtime.js');
global.asm0 = require('./corlib.ciljs.js');
global.asm1 = require('./program.js');

function runScript() {
    var result = CILJS.entry_point();
    console.log("exit: " + result);
}

CILJS.console_write_line = function (managedString) {
    console.log(managedString.jsstr);
}

function ciljs_test_log(message) {
    console.log(asm0.ToJavaScriptString(message));
}

runScript();
