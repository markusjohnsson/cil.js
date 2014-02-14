var Machine = (function () {
    function Machine() {
        this.stack = [];
    }
    Machine.prototype.push = function (value) {
        this.stack.push(value);
    };
    Machine.prototype.pop = function () {
        return this.stack.pop();
    };
    Machine.prototype.popNumber = function () {
        return Number(this.pop());
    };
    return Machine;
})();
var vm = new Machine();
//@ sourceMappingURL=app.js.map
