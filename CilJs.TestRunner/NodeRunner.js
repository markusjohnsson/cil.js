
var process = require('process');
var endOfLine = require('os').EOL;

global.CILJS = require('../CilJs.Runtime/Runtime.js');
require('./corlib.ciljs.js');
require('./program.js');

function runScript() {
    var result = CILJS.entry_point();
    process.exit(result);
}

CILJS.set_console_writer(function (managedString) {
    process.stdout.write(managedString.jsstr + endOfLine);
});

runScript();
