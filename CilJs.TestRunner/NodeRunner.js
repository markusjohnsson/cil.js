
var process = require('process');
var endOfLine = require('os').EOL;

global.window = global;
global.CILJS = require('../CilJs.Runtime/Runtime.js');
global.asm0 = require('./corlib.ciljs.js');
global.asm1 = require('./program.js');

function runScript() {
    var result = CILJS.entry_point();
    process.exit(result);
}

CILJS.console_write_line = function (managedString) {
    process.stdout.write(managedString.jsstr + endOfLine);
}

runScript();
