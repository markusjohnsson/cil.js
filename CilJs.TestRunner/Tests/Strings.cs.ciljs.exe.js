var asm1;(function (asm)
{
    asm.FullName = "Strings.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.get_X()*/
    asm.x6000001 = function get_X(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String <X>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["A<X>k__BackingField"];
    };;
    /* System.Void A.set_X(String)*/
    asm.x6000002 = function set_X(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld String <X>k__BackingField */
        (arg0)["A<X>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000004_init = function ()
    {
        (asm1.A().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function ()
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm0)["System.Object"]();
        t1 = asm1.A();
        t2 = (asm0)["System.Int32"]();
        /* IL_00: call String GetString() */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm1.x6000006(),CILJS.new_array(t0,(0|0)));
        /* IL_10: newobj Void .ctor() */
        /* IL_15: stloc.0  */
        loc0 = CILJS.newobj(t1,asm1.x6000003,[null]);
        /* IL_16: ldloc.0  */
        /* IL_17: ldstr 300 */
        /* IL_1C: callvirt Void set_X(System.String) */
        asm1.x6000002(loc0,CILJS.new_string("300"));
        /* IL_21: ldloc.0  */
        /* IL_22: callvirt String get_X() */
        /* IL_27: ldc.i4.0  */
        /* IL_28: newarr System.Object */
        /* IL_2D: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm1.x6000001(loc0),CILJS.new_array(t0,(0|0)));
        /* IL_32: ldloc.0  */
        /* IL_33: callvirt String get_X() */
        /* IL_38: call String IsString(System.Object) */
        /* IL_3D: ldc.i4.0  */
        /* IL_3E: newarr System.Object */
        /* IL_43: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm1.x6000005(asm1.x6000001(loc0)),CILJS.new_array(t0,(0|0)));
        /* IL_48: ldstr 123456789 */
        /* IL_4D: callvirt Int32 get_Length() */
        /* IL_52: box System.Int32 */
        /* IL_57: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm0.x600012f(CILJS.new_string("123456789")),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_5C: ret  */
        return ;
    };
    /* static System.String Program.IsString(Object)*/
    asm.x6000005 = function IsString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: isinst System.String */
                /* IL_06: brtrue.s IL_0E */
                
                if (t0.IsInst(arg0)){
                    __pos__ = 0xE;
                    continue;
                }
                /* IL_08: ldstr false */
                /* IL_0D: ret  */
                return CILJS.new_string("false");
                case 0xE:
                /* IL_0E: ldstr true */
                /* IL_13: ret  */
                return CILJS.new_string("true");
            }
        }
    };;
    /* static System.String Program.GetString()*/
    asm.x6000006 = function GetString()
    {
        /* IL_00: ldstr Hello */
        /* IL_05: ret  */
        return CILJS.new_string("Hello");
    };;
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x6000001", "get_X"],
                    [asm1, "x6000002", "set_X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            (this.prototype)["A<X>k__BackingField"] = null;
        });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000004;
})(asm1 || (asm1 = {}));
