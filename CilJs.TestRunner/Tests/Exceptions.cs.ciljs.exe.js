var asm2;(function (asm)
{
    asm.FullName = "Exceptions.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception A */
        /* IL_06: call Void .ctor(System.String) */
        asm0.x6000077(arg0,CILJS.new_string("Exception A"));
        /* IL_0B: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception B */
        /* IL_06: call Void .ctor(System.String) */
        asm0.x6000077(arg0,CILJS.new_string("Exception B"));
        /* IL_0B: ret  */
        return ;
    };;
    /*  B..ctor(String)*/
    asm.x6000003 = function _ctor(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: call Void .ctor(System.String) */
        asm0.x6000077(arg0,arg1);
        /* IL_07: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception C */
        /* IL_06: call Void .ctor(System.String) */
        asm2.x6000003(arg0,CILJS.new_string("Exception C"));
        /* IL_0B: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
        (asm2.C().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = asm2.B();
        t2 = asm2.C();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: call Void TestTryCatch(System.Exception) */
        asm2.x6000006(CILJS.newobj(t0,asm2.x6000001,[null]));
        /* IL_0A: newobj Void .ctor() */
        /* IL_0F: call Void TestTryCatch(System.Exception) */
        asm2.x6000006(CILJS.newobj(t1,asm2.x6000002,[null]));
        /* IL_14: newobj Void .ctor() */
        /* IL_19: call Void TestTryCatch(System.Exception) */
        asm2.x6000006(CILJS.newobj(t2,asm2.x6000004,[null]));
        /* IL_1E: ret  */
        return ;
    };
    /* static System.Void Program.TestTryCatch(Exception)*/
    asm.x6000006 = function TestTryCatch(arg0)
    {
        var in_block_0;
        var __pos__;
        var in_block_1;
        var __finally_continuation_1__;
        var __error_handled_2__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
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
                                /* IL_00: ldarg.0  */
                                /* IL_01: throw  */
                                throw arg0;
                            }
                            
                            catch (__error__) {
                                __error_handled_2__ = false;
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm2.C())){
                                    st_01 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_02: stloc.0  */
                                    loc0 = st_01;
                                    /* IL_03: ldloc.0  */
                                    /* IL_04: callvirt String get_Message() */
                                    /* IL_09: call Void Log(System.Object) */
                                    asm1.x6000001(((loc0.vtable)["asm0.x600007b"]())(loc0));
                                    /* IL_0E: leave.s IL_2C */
                                    __pos__ = 0x2C;
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm2.B())){
                                    st_04 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_10: stloc.1  */
                                    loc1 = st_04;
                                    /* IL_11: ldloc.1  */
                                    /* IL_12: callvirt String get_Message() */
                                    /* IL_17: call Void Log(System.Object) */
                                    asm1.x6000001(((loc1.vtable)["asm0.x600007b"]())(loc1));
                                    /* IL_1C: leave.s IL_2C */
                                    __pos__ = 0x2C;
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm2.A())){
                                    st_07 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_1E: stloc.2  */
                                    loc2 = st_07;
                                    /* IL_1F: ldloc.2  */
                                    /* IL_20: callvirt String get_Message() */
                                    /* IL_25: call Void Log(System.Object) */
                                    asm1.x6000001(((loc2.vtable)["asm0.x600007b"]())(loc2));
                                    /* IL_2A: leave.s IL_2C */
                                    __pos__ = 0x2C;
                                }
                                
                                if ((!(__error_handled_2__))){
                                    throw __error__;
                                }
                            }
                            break;
                            case 0x2C:
                            /* IL_2C: leave.s IL_39 */
                            in_block_1 = false;
                            __pos__ = 0x39;
                            break;
                        }
                    }
                }
                
                finally {
                    /* IL_2E: ldstr Finally */
                    /* IL_33: call Void Log(System.Object) */
                    asm1.x6000001(CILJS.new_string("Finally"));
                    /* IL_38: endfinally  */
                }
                break;
                case 0x39:
                /* IL_39: ret  */
                return ;
            }
        }
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
            return (asm0)["System.Exception"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Exception"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return asm2.B();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],asm2.B(),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm2 || (asm2 = {}));
