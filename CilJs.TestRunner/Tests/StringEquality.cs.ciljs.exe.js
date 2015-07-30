var asm2; (function (asm)
{
    asm.FullName = "StringEquality.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Cmp(String)*/
    asm.x6000001 = function Cmp(arg0)
    {
        var t0;
        t0 = (asm0)["System.Boolean"]();
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Hello World*/
        /* IL_06: call Boolean op_Equality(System.String, System.String)*/
        /* IL_0B: box System.Boolean*/
        /* IL_10: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000132(arg0,CILJS.new_string("Hello World")),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_15: ldarg.0 */
        /* IL_16: ldstr Hello World*/
        /* IL_1B: callvirt Boolean Equals(System.String)*/
        /* IL_20: box System.Boolean*/
        /* IL_25: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((arg0.vtable)["asm0.x6000133"]())(arg0,CILJS.new_string("Hello World")),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_2A: ldstr Hello World*/
        /* IL_2F: ldarg.0 */
        /* IL_30: callvirt Boolean Equals(System.String)*/
        /* IL_35: box System.Boolean*/
        /* IL_3A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((CILJS.new_string("Hello World").vtable)["asm0.x6000133"])())(CILJS.new_string("Hello World"),arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_3F: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: ldstr Hello World*/
        /* IL_05: call Void Cmp(System.String)*/
        asm2.x6000001(CILJS.new_string("Hello World"));
        /* IL_0A: ldstr Hello, World*/
        /* IL_0F: call Void Cmp(System.String)*/
        asm2.x6000001(CILJS.new_string("Hello, World"));
        /* IL_14: ldstr Hello*/
        /* IL_19: call Void Cmp(System.String)*/
        asm2.x6000001(CILJS.new_string("Hello"));
        /* IL_1E: ret */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000002;
})(asm2 || (asm2 = {}));
