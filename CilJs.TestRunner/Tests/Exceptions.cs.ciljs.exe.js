var asm1;(function (asm)
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
        asm1.x6000003(arg0,CILJS.new_string("Exception C"));
        /* IL_0B: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
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
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: call Void TestTryCatch(System.Exception) */
        asm1.x6000006(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0A: newobj Void .ctor() */
        /* IL_0F: call Void TestTryCatch(System.Exception) */
        asm1.x6000006(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_14: newobj Void .ctor() */
        /* IL_19: call Void TestTryCatch(System.Exception) */
        asm1.x6000006(CILJS.newobj(t2,asm1.x6000004,[null]));
        /* IL_1E: ret  */
        return ;
    };
    /* static System.Void Program.TestTryCatch(Exception)*/
    asm.x6000006 = function TestTryCatch(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var in_block_1;
        var __finally_continuation_1__;
        var __error_handled_2__;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.Object"]();
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
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.C())){
                                    st_01 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_02: stloc.0  */
                                    loc0 = st_01;
                                    /* IL_03: ldloc.0  */
                                    /* IL_04: callvirt String get_Message() */
                                    /* IL_09: ldc.i4.0  */
                                    /* IL_0A: newarr System.Object */
                                    /* IL_0F: call Void WriteLine(System.String, System.Object[]) */
                                    asm0.x600005b(((loc0.vtable)["asm0.x600007b"]())(loc0),CILJS.new_array(t0,(0|0)));
                                    /* IL_14: leave.s IL_3E */
                                    __pos__ = 0x3E;
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.B())){
                                    st_06 = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_16: stloc.1  */
                                    loc1 = st_06;
                                    /* IL_17: ldloc.1  */
                                    /* IL_18: callvirt String get_Message() */
                                    /* IL_1D: ldc.i4.0  */
                                    /* IL_1E: newarr System.Object */
                                    /* IL_23: call Void WriteLine(System.String, System.Object[]) */
                                    asm0.x600005b(((loc1.vtable)["asm0.x600007b"]())(loc1),CILJS.new_array(t0,(0|0)));
                                    /* IL_28: leave.s IL_3E */
                                    __pos__ = 0x3E;
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.A())){
                                    st_0B = __error__;
                                    __error_handled_2__ = true;
                                    /* IL_2A: stloc.2  */
                                    loc2 = st_0B;
                                    /* IL_2B: ldloc.2  */
                                    /* IL_2C: callvirt String get_Message() */
                                    /* IL_31: ldc.i4.0  */
                                    /* IL_32: newarr System.Object */
                                    /* IL_37: call Void WriteLine(System.String, System.Object[]) */
                                    asm0.x600005b(((loc2.vtable)["asm0.x600007b"]())(loc2),CILJS.new_array(t0,(0|0)));
                                    /* IL_3C: leave.s IL_3E */
                                    __pos__ = 0x3E;
                                }
                                
                                if ((!(__error_handled_2__))){
                                    throw __error__;
                                }
                            }
                            break;
                            case 0x3E:
                            /* IL_3E: leave.s IL_51 */
                            in_block_1 = false;
                            __pos__ = 0x51;
                            break;
                        }
                    }
                }
                
                finally {
                    /* IL_40: ldstr Finally */
                    /* IL_45: ldc.i4.0  */
                    /* IL_46: newarr System.Object */
                    /* IL_4B: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b(CILJS.new_string("Finally"),CILJS.new_array(t0,(0|0)));
                    /* IL_50: endfinally  */
                }
                break;
                case 0x51:
                /* IL_51: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
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
            return asm1.B();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],asm1.B(),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
