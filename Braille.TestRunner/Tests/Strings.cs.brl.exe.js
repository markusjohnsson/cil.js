var asm1; (function (asm)
{
    asm.FullName = "Strings.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String A.get_X()*/
    asm.x600000a = function get_X(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <X>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A<X>k__BackingField"];
    };;
    /* System.Void A.set_X(String)*/
    asm.x600000b = function set_X(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <X>k__BackingField*/
        (arg0)["A<X>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: call String GetString()*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(asm1.x600000f());
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: stloc.0 */
        loc0 = BLR.newobj(t1,asm1.x600000c,[null]);
        /* IL_10: ldloc.0 */
        /* IL_11: ldstr 300*/
        /* IL_16: callvirt Void set_X(System.String)*/
        asm1.x600000b(loc0,BLR.new_string("300"));
        /* IL_1B: ldloc.0 */
        /* IL_1C: callvirt String get_X()*/
        /* IL_21: call Void Log(System.Object)*/
        asm1.x6000001(asm1.x600000a(loc0));
        /* IL_26: ldloc.0 */
        /* IL_27: callvirt String get_X()*/
        /* IL_2C: call String IsString(System.Object)*/
        /* IL_31: call Void Log(System.Object)*/
        asm1.x6000001(asm1.x600000e(asm1.x600000a(loc0)));
        /* IL_36: ldstr 123456789*/
        /* IL_3B: callvirt Int32 get_Length()*/
        /* IL_40: box System.Int32*/
        /* IL_45: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000186(BLR.new_string("123456789")),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_4A: ret */
        return ;
    };
    /* static System.String Program.IsString(Object)*/
    asm.x600000e_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function IsString(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst System.String*/
                /* IL_06: brtrue.s IL_0E*/
                
                if (t0.IsInst(arg0)){
                    __pos__ = 0xE;
                    continue;
                }
                /* IL_08: ldstr false*/
                /* IL_0D: ret */
                return BLR.new_string("false");
                case 0xE:
                /* IL_0E: ldstr true*/
                /* IL_13: ret */
                return BLR.new_string("true");
            }
        }
    };
    /* static System.String Program.GetString()*/
    asm.x600000f = function GetString()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr Hello*/
        /* IL_05: ret */
        return BLR.new_string("Hello");
    };;
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000a", "get_X"],
                    [asm1, "x600000b", "set_X"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["A<X>k__BackingField"] = null;
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
