
class Machine {
    private stack: Object[] = [];
    public push(value: Object) { 
        this.stack.push(value);
    }
    public pop(): Object {
        return this.stack.pop();
    }
    public popNumber(): number {
        return Number(this.pop());
    }
}

var vm = new Machine();
