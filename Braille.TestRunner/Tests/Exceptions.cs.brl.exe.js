var asm1; (function (asm)
{
    asm.FullName = "Exceptions.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Exception A*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x60000a0(arg0,BLR.new_string("Exception A"));
        /* IL_0B: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Exception B*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x60000a0(arg0,BLR.new_string("Exception B"));
        /* IL_0B: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x600000e = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        asm0.x60000a0(arg0,arg1);
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Exception C*/
        /* IL_06: call Void .ctor(System.String)*/
        asm1.x600000e(arg0,BLR.new_string("Exception C"));
        /* IL_0B: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = asm1.B();
        t3 = asm1.C();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void TestTryCatch(System.Exception)*/
        asm1.x6000011(BLR.newobj(t1,asm1.x600000c,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void TestTryCatch(System.Exception)*/
        asm1.x6000011(BLR.newobj(t2,asm1.x600000d,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void TestTryCatch(System.Exception)*/
        asm1.x6000011(BLR.newobj(t3,asm1.x600000f,[null]));
        /* IL_1E: ret */
        return ;
    };
    /* static Void TestTryCatch(System.Exception)*/
    asm.x6000011 = function TestTryCatch(arg0)
    {
        var __pos_0__;
        var __error_handled_1__;
        var loc0;
        var loc1;
        var loc2;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                
                try {
                    /* IL_00: ldarg.0 */
                    /* IL_01: throw */
                    throw arg0;
                }
                
                catch (__error__){
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof asm1.C())){
                        st_01 = __error__;
                        __error_handled_1__ = true;
                        /* IL_02: stloc.0 */
                        loc0 = st_01;
                        /* IL_03: ldloc.0 */
                        /* IL_04: callvirt String get_Message()*/
                        /* IL_09: call Void Log(System.Object)*/
                        asm1.x6000001(((loc0.vtable)["asm0.x60000a4"]())(loc0));
                        /* IL_0E: leave.s IL_2C*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x2C;
                    }
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof asm1.B())){
                        st_04 = __error__;
                        __error_handled_1__ = true;
                        /* IL_10: stloc.1 */
                        loc1 = st_04;
                        /* IL_11: ldloc.1 */
                        /* IL_12: callvirt String get_Message()*/
                        /* IL_17: call Void Log(System.Object)*/
                        asm1.x6000001(((loc1.vtable)["asm0.x60000a4"]())(loc1));
                        /* IL_1C: leave.s IL_2C*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x2C;
                    }
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof asm1.A())){
                        st_07 = __error__;
                        __error_handled_1__ = true;
                        /* IL_1E: stloc.2 */
                        loc2 = st_07;
                        /* IL_1F: ldloc.2 */
                        /* IL_20: callvirt String get_Message()*/
                        /* IL_25: call Void Log(System.Object)*/
                        asm1.x6000001(((loc2.vtable)["asm0.x60000a4"]())(loc2));
                        /* IL_2A: leave.s IL_2C*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x2C;
                    }
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                }
                
                finally {
                    /* IL_2E: ldstr Finally*/
                    /* IL_33: call Void Log(System.Object)*/
                    asm1.x6000001(BLR.new_string("Finally"));
                    /* IL_38: endfinally */
                    __pos_1__ = -1;
                }
                case 0x39:
                /* IL_39: ret */
                return ;
            }
        }
    };;
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
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
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x60000a5","asm0.x60000a5");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a6");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x60000a5","asm0.x60000a5");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a6");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new (asm1.B())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],asm1.B(),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x60000a5","asm0.x60000a5");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a6");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
