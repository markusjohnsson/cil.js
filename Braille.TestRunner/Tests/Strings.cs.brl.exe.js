var asm1;(function (asm)
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
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.String A.get_X()*/
    asm.x600000a = function get_X(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String <X>k__BackingField */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["A<X>k__BackingField"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void A.set_X(String)*/
    asm.x600000b = function set_X(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld String <X>k__BackingField */
        (arg0)["A<X>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        (asm1.A().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        BLR.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = asm1.A();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  Strings.cs:11:5*/
        /* IL_01: call String GetString() */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(asm1.x600000f());
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: stloc.0  */
        loc0 = BLR.newobj(t0,asm1.x600000c,[null]);
        /* IL_12: ldloc.0  */
        /* IL_13: ldstr 300 */
        /* IL_18: callvirt Void set_X(System.String) */
        asm1.x600000b(loc0,BLR.new_string("300"));
        /* IL_1D: nop  */
        /* IL_1E: ldloc.0  */
        /* IL_1F: callvirt String get_X() */
        /* IL_24: call Void Log(System.Object) */
        asm1.x6000001(asm1.x600000a(loc0));
        /* IL_29: nop  */
        /* IL_2A: ldloc.0  */
        /* IL_2B: callvirt String get_X() */
        /* IL_30: call String IsString(System.Object) */
        /* IL_35: call Void Log(System.Object) */
        asm1.x6000001(asm1.x600000e(asm1.x600000a(loc0)));
        /* IL_3A: nop  */
        /* IL_3B: ldstr 123456789 */
        /* IL_40: callvirt Int32 get_Length() */
        /* IL_45: box System.Int32 */
        /* IL_4A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60001c3(BLR.new_string("123456789")),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_4F: nop  */
        /* IL_50: ret  Strings.cs:22:5*/
        return ;
    };
    /* static System.String Program.IsString(Object)*/
    asm.x600000e = function IsString(arg0)
    {
        var t0;
        var st_02;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  Strings.cs:25:5*/
                
                /* IL_01: ldarg.0  */
                /* IL_02: isinst System.String */
                /* IL_07: brtrue.s IL_10 */
                
                if (t0.IsInst(arg0)){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_09: ldstr false */
                st_02 = BLR.new_string("false");
                /* IL_0E: br.s IL_15 */
                __pos__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr true */
                st_02 = BLR.new_string("true");
                case 0x15:
                /* IL_15: nop  */
                
                /* IL_16: stloc.0  */
                loc0 = st_02;
                /* IL_19: ldloc.0  */
                /* IL_1A: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String Program.GetString()*/
    asm.x600000f = function GetString()
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  Strings.cs:30:5*/
        /* IL_01: ldstr Hello */
        /* IL_06: stloc.0  */
        loc0 = BLR.new_string("Hello");
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
