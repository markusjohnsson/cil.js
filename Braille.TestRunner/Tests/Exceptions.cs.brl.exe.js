var asm1; (function (asm)
{
    asm.FullName = "Exceptions.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Exception A*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x600009f(arg0,BLR.new_string("Exception A"));
        /* IL_0B: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Exception B*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x600009f(arg0,BLR.new_string("Exception B"));
        /* IL_0B: ret */
        return ;
    };;
    /*  B..ctor(String)*/
    asm.x600000c = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        asm0.x600009f(arg0,arg1);
        /* IL_07: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Exception C*/
        /* IL_06: call Void .ctor(System.String)*/
        asm1.x600000c(arg0,BLR.new_string("Exception C"));
        /* IL_0B: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = asm1.B();
        t3 = asm1.C();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void TestTryCatch(System.Exception)*/
        asm1.x600000f(BLR.newobj(t1,asm1.x600000a,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void TestTryCatch(System.Exception)*/
        asm1.x600000f(BLR.newobj(t2,asm1.x600000b,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void TestTryCatch(System.Exception)*/
        asm1.x600000f(BLR.newobj(t3,asm1.x600000d,[null]));
        /* IL_1E: ret */
        return ;
    };
    /* static System.Void Program.TestTryCatch(Exception)*/
    asm.x600000f = function TestTryCatch(arg0)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var in_block_1;
        var __finally_continuation_1__;
        var __error_handled_2__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x0:
                            
                            try {
                                /* IL_00: ldarg.0 */
                                /* IL_01: throw */
                                throw arg0;
                            }
                            
                            catch (__error__){
                                __error_handled_2__ = false;
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.C())){
                                    st_01 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_02: stloc.0 */
                                    loc0 = st_01;
                                    /* IL_03: ldloc.0 */
                                    /* IL_04: callvirt String get_Message()*/
                                    /* IL_09: call Void Log(System.Object)*/
                                    asm1.x6000001(((loc0.vtable)["asm0.x60000a3"]())(loc0));
                                    /* IL_0E: leave.s IL_2C*/
                                    in_block_2 = false;
                                    __pos__ = 0x2C;
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.B())){
                                    st_04 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_10: stloc.1 */
                                    loc1 = st_04;
                                    /* IL_11: ldloc.1 */
                                    /* IL_12: callvirt String get_Message()*/
                                    /* IL_17: call Void Log(System.Object)*/
                                    asm1.x6000001(((loc1.vtable)["asm0.x60000a3"]())(loc1));
                                    /* IL_1C: leave.s IL_2C*/
                                    in_block_2 = false;
                                    __pos__ = 0x2C;
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.A())){
                                    st_07 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_1E: stloc.2 */
                                    loc2 = st_07;
                                    /* IL_1F: ldloc.2 */
                                    /* IL_20: callvirt String get_Message()*/
                                    /* IL_25: call Void Log(System.Object)*/
                                    asm1.x6000001(((loc2.vtable)["asm0.x60000a3"]())(loc2));
                                    /* IL_2A: leave.s IL_2C*/
                                    in_block_2 = false;
                                    __pos__ = 0x2C;
                                }
                                
                                if ((!(__error_handled_2__))){
                                    throw __error__;
                                }
                            }
                            break;
                            case 0x2C:
                            /* IL_2C: leave.s IL_39*/
                            in_block_1 = false;
                            __pos__ = 0x39;
                            break;
                        }
                    }
                }
                
                finally {
                    /* IL_2E: ldstr Finally*/
                    /* IL_33: call Void Log(System.Object)*/
                    asm1.x6000001(BLR.new_string("Finally"));
                    /* IL_38: endfinally */
                    in_block_1 = false;
                }
                break;
                case 0x39:
                /* IL_39: ret */
                return ;
            }
        }
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
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],asm1.B(),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
