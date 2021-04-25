
var process = require('process');
var endOfLine = require('os').EOL;

global.CILJS = require('../CilJs.Runtime/Runtime.js');
require('./corlib.ciljs.js');
require('./program.js');

function runScript() {
    var result = CILJS.entryPoint();
    process.exit(result);
}

CILJS.setConsoleWriter(function (managedString) {
    process.stdout.write(managedString.jsstr + endOfLine);
});

runScript();
