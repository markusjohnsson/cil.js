var asm1;(function (asm)
{
    asm.FullName = "Exceptions.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception A */
        /* IL_06: call Void .ctor(System.String) */
        asm0.x60000a5(arg0,CILJS.new_string("Exception A"));
        /* IL_0B: nop  */
        /* IL_0C: nop  Exceptions.cs:6:38*/
        /* IL_0D: nop  Exceptions.cs:6:40*/
        /* IL_0E: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception B */
        /* IL_06: call Void .ctor(System.String) */
        asm0.x60000a5(arg0,CILJS.new_string("Exception B"));
        /* IL_0B: nop  */
        /* IL_0C: nop  Exceptions.cs:11:38*/
        /* IL_0D: nop  Exceptions.cs:11:40*/
        /* IL_0E: ret  */
        return ;
    };;
    /*  B..ctor(String)*/
    asm.x600000c = function _ctor(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: call Void .ctor(System.String) */
        asm0.x60000a5(arg0,arg1);
        /* IL_07: nop  */
        /* IL_08: nop  Exceptions.cs:12:41*/
        /* IL_09: nop  Exceptions.cs:12:43*/
        /* IL_0A: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception C */
        /* IL_06: call Void .ctor(System.String) */
        asm1.x600000c(arg0,CILJS.new_string("Exception C"));
        /* IL_0B: nop  */
        /* IL_0C: nop  Exceptions.cs:17:38*/
        /* IL_0D: nop  Exceptions.cs:17:40*/
        /* IL_0E: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        CILJS.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        __pos__ = 0x0;
        /* IL_00: nop  Exceptions.cs:23:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void TestTryCatch(System.Exception) */
        asm1.x600000f(CILJS.newobj(t0,asm1.x600000a,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void TestTryCatch(System.Exception) */
        asm1.x600000f(CILJS.newobj(t1,asm1.x600000b,[null]));
        /* IL_16: nop  */
        /* IL_17: newobj Void .ctor() */
        /* IL_1C: call Void TestTryCatch(System.Exception) */
        asm1.x600000f(CILJS.newobj(t2,asm1.x600000d,[null]));
        /* IL_21: nop  */
        /* IL_22: ret  Exceptions.cs:27:5*/
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
                /* IL_00: nop  Exceptions.cs:30:5*/
                
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 1;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x1:
                            
                            try {
                                /* IL_01: nop  Exceptions.cs:32:9*/
                                
                                /* IL_02: ldarg.0  */
                                /* IL_03: throw  */
                                throw arg0;
                            }
                            
                            catch (__error__) {
                                __error_handled_2__ = false;
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.C())){
                                    st_01 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_04: stloc.0  Exceptions.cs:35:9*/
                                    loc0 = st_01;
                                    /* IL_05: nop  Exceptions.cs:36:9*/
                                    
                                    /* IL_06: ldloc.0  */
                                    /* IL_07: callvirt String get_Message() */
                                    /* IL_0C: call Void Log(System.Object) */
                                    asm1.x6000001(((loc0.vtable)["asm0.x60000a9"]())(loc0));
                                    /* IL_11: nop  */
                                    
                                    /* IL_12: nop  Exceptions.cs:38:9*/
                                    
                                    /* IL_13: leave.s IL_37 Exceptions.cs:16707566:0*/
                                    in_block_2 = false;
                                    __pos__ = 0x37;
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.B())){
                                    st_04 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_15: stloc.1  Exceptions.cs:39:9*/
                                    loc1 = st_04;
                                    /* IL_16: nop  Exceptions.cs:40:9*/
                                    
                                    /* IL_17: ldloc.1  */
                                    /* IL_18: callvirt String get_Message() */
                                    /* IL_1D: call Void Log(System.Object) */
                                    asm1.x6000001(((loc1.vtable)["asm0.x60000a9"]())(loc1));
                                    /* IL_22: nop  */
                                    
                                    /* IL_23: nop  Exceptions.cs:42:9*/
                                    
                                    /* IL_24: leave.s IL_37 Exceptions.cs:16707566:0*/
                                    in_block_2 = false;
                                    __pos__ = 0x37;
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.A())){
                                    st_07 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_26: stloc.2  Exceptions.cs:43:9*/
                                    loc2 = st_07;
                                    /* IL_27: nop  Exceptions.cs:44:9*/
                                    
                                    /* IL_28: ldloc.2  */
                                    /* IL_29: callvirt String get_Message() */
                                    /* IL_2E: call Void Log(System.Object) */
                                    asm1.x6000001(((loc2.vtable)["asm0.x60000a9"]())(loc2));
                                    /* IL_33: nop  */
                                    
                                    /* IL_34: nop  Exceptions.cs:46:9*/
                                    
                                    /* IL_35: leave.s IL_37 Exceptions.cs:16707566:0*/
                                    in_block_2 = false;
                                    __pos__ = 0x37;
                                }
                                
                                if ((!(__error_handled_2__))){
                                    throw __error__;
                                }
                            }
                            break;
                            case 0x37:
                            /* IL_37: nop  Exceptions.cs:16707566:0*/
                            
                            /* IL_38: leave.s IL_48 Exceptions.cs:16707566:0*/
                            in_block_1 = false;
                            __pos__ = 0x48;
                            break;
                        }
                    }
                }
                
                finally {
                    /* IL_3A: nop  Exceptions.cs:48:9*/
                    
                    /* IL_3B: ldstr Finally */
                    /* IL_40: call Void Log(System.Object) */
                    asm1.x6000001(CILJS.new_string("Finally"));
                    /* IL_45: nop  */
                    
                    /* IL_46: nop  Exceptions.cs:50:9*/
                    
                    /* IL_47: endfinally  Exceptions.cs:16707566:0*/
                    in_block_1 = false;
                }
                break;
                case 0x48:
                /* IL_48: nop  Exceptions.cs:16707566:0*/
                
                /* IL_49: ret  Exceptions.cs:51:5*/
                return ;
            }
        }
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
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            CILJS.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            CILJS.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return new (asm1.B())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],asm1.B(),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            CILJS.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
