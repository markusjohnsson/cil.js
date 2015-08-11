var asm1;(function (asm)
{
    asm.FullName = "Char.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: ldstr hello world */
        /* IL_05: call Void Log(System.String) */
        asm1.x6000002(CILJS.new_string("hello world"));
        /* IL_0A: ldstr xyzw */
        /* IL_0F: call Void Log(System.String) */
        asm1.x6000002(CILJS.new_string("xyzw"));
        /* IL_14: ldstr 1234 */
        /* IL_19: call Void Log(System.String) */
        asm1.x6000002(CILJS.new_string("1234"));
        /* IL_1E: ret  */
        return ;
    };;
    /* static System.Void Program.Log(String)*/
    asm.x6000002 = function Log(arg0)
    {
        var t0;
        t0 = (asm0)["System.Char"]();
        /* IL_00: ldarg.0  */
        /* IL_01: ldc.i4.0  */
        /* IL_02: callvirt Char get_Chars(System.Int32) */
        /* IL_07: box System.Char */
        /* IL_0C: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm0.x6000125(arg0,(0|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_11: ldarg.0  */
        /* IL_12: ldc.i4.1  */
        /* IL_13: callvirt Char get_Chars(System.Int32) */
        /* IL_18: box System.Char */
        /* IL_1D: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm0.x6000125(arg0,(1|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_22: ldarg.0  */
        /* IL_23: ldc.i4.2  */
        /* IL_24: callvirt Char get_Chars(System.Int32) */
        /* IL_29: box System.Char */
        /* IL_2E: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm0.x6000125(arg0,(2|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_33: ldarg.0  */
        /* IL_34: ldc.i4.3  */
        /* IL_35: callvirt Char get_Chars(System.Int32) */
        /* IL_3A: box System.Char */
        /* IL_3F: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm0.x6000125(arg0,(3|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_44: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
