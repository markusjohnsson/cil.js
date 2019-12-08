var asm1;(function (asm)
{
    asm.FullName = "Exceptions.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception A */
        /* IL_06: call Void .ctor(System.String) */
        asm0.x60000a5(arg0,CILJS.new_string("Exception A"));
        /* IL_0B: nop  */
        /* IL_0C: nop  */
        /* IL_0D: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception B */
        /* IL_06: call Void .ctor(System.String) */
        asm0.x60000a5(arg0,CILJS.new_string("Exception B"));
        /* IL_0B: nop  */
        /* IL_0C: nop  */
        /* IL_0D: ret  */
        return ;
    };;
    /*  B..ctor(String)*/
    asm.x6000003 = function _ctor(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: call Void .ctor(System.String) */
        asm0.x60000a5(arg0,arg1);
        /* IL_07: nop  */
        /* IL_08: nop  */
        /* IL_09: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldstr Exception C */
        /* IL_06: call Void .ctor(System.String) */
        asm1.x6000003(arg0,CILJS.new_string("Exception C"));
        /* IL_0B: nop  */
        /* IL_0C: nop  */
        /* IL_0D: ret  */
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
        asm.x6000005_init();
        return asm.x6000005_();
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
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void TestTryCatch(System.Exception) */
        asm1.x6000006(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void TestTryCatch(System.Exception) */
        asm1.x6000006(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_16: nop  */
        /* IL_17: newobj Void .ctor() */
        /* IL_1C: call Void TestTryCatch(System.Exception) */
        asm1.x6000006(CILJS.newobj(t2,asm1.x6000004,[null]));
        /* IL_21: nop  */
        /* IL_22: ret  */
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
        var in_block_2;
        var __error_handled_2__;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    
                    if (__pos__ < 0x1){
                        __pos__ = 0x1;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x1:
                            
                            try {
                                in_block_2 = true;
                                
                                if (__pos__ < 0x1){
                                    __pos__ = 0x1;
                                }
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x1:
                                        /* IL_01: nop  */
                                        
                                        /* IL_02: ldarg.0  */
                                        /* IL_03: throw  */
                                        throw arg0;
                                    }
                                }
                            }
                            
                            catch (__error__) {
                                __error_handled_2__ = false;
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.C())){
                                    in_block_2 = true;
                                    
                                    if (__pos__ < 0x4){
                                        __pos__ = 0x4;
                                    }
                                    
                                    while (in_block_2){
                                        
                                        switch (__pos__){
                                            case 0x4:
                                            st_01 = __error__;
                                            __error_handled_2__ = true;
                                            /* IL_04: stloc.0  */
                                            loc0 = st_01;
                                            /* IL_05: nop  */
                                            
                                            /* IL_06: ldloc.0  */
                                            /* IL_07: callvirt String get_Message() */
                                            /* IL_0C: ldc.i4.0  */
                                            /* IL_0D: newarr System.Object */
                                            /* IL_12: call Void WriteLine(System.String, System.Object[]) */
                                            asm0.x60000a2(((loc0.vtable)["asm0.x60000a9"]())(loc0),CILJS.new_array(t0,(0|0)));
                                            /* IL_17: nop  */
                                            
                                            /* IL_18: nop  */
                                            
                                            /* IL_19: leave.s IL_49 */
                                            in_block_2 = false;
                                            __pos__ = 0x49;
                                            continue;
                                        }
                                    }
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.B())){
                                    in_block_2 = true;
                                    
                                    if (__pos__ < 0x1B){
                                        __pos__ = 0x1B;
                                    }
                                    
                                    while (in_block_2){
                                        
                                        switch (__pos__){
                                            case 0x1B:
                                            st_06 = __error__;
                                            __error_handled_2__ = true;
                                            /* IL_1B: stloc.1  */
                                            loc1 = st_06;
                                            /* IL_1C: nop  */
                                            
                                            /* IL_1D: ldloc.1  */
                                            /* IL_1E: callvirt String get_Message() */
                                            /* IL_23: ldc.i4.0  */
                                            /* IL_24: newarr System.Object */
                                            /* IL_29: call Void WriteLine(System.String, System.Object[]) */
                                            asm0.x60000a2(((loc1.vtable)["asm0.x60000a9"]())(loc1),CILJS.new_array(t0,(0|0)));
                                            /* IL_2E: nop  */
                                            
                                            /* IL_2F: nop  */
                                            
                                            /* IL_30: leave.s IL_49 */
                                            in_block_2 = false;
                                            __pos__ = 0x49;
                                            continue;
                                        }
                                    }
                                }
                                
                                if ((!(__error_handled_2__)) && (__error__ instanceof asm1.A())){
                                    in_block_2 = true;
                                    
                                    if (__pos__ < 0x32){
                                        __pos__ = 0x32;
                                    }
                                    
                                    while (in_block_2){
                                        
                                        switch (__pos__){
                                            case 0x32:
                                            st_0B = __error__;
                                            __error_handled_2__ = true;
                                            /* IL_32: stloc.2  */
                                            loc2 = st_0B;
                                            /* IL_33: nop  */
                                            
                                            /* IL_34: ldloc.2  */
                                            /* IL_35: callvirt String get_Message() */
                                            /* IL_3A: ldc.i4.0  */
                                            /* IL_3B: newarr System.Object */
                                            /* IL_40: call Void WriteLine(System.String, System.Object[]) */
                                            asm0.x60000a2(((loc2.vtable)["asm0.x60000a9"]())(loc2),CILJS.new_array(t0,(0|0)));
                                            /* IL_45: nop  */
                                            
                                            /* IL_46: nop  */
                                            
                                            /* IL_47: leave.s IL_49 */
                                            in_block_2 = false;
                                            __pos__ = 0x49;
                                            continue;
                                        }
                                    }
                                }
                                
                                if ((!(__error_handled_2__))){
                                    throw __error__;
                                }
                            }
                            continue;
                            case 0x49:
                            /* IL_49: leave.s IL_5F */
                            in_block_1 = false;
                            __pos__ = 0x5F;
                            continue;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0x4B;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x4B:
                            /* IL_4B: nop  */
                            
                            /* IL_4C: ldstr Finally */
                            /* IL_51: ldc.i4.0  */
                            /* IL_52: newarr System.Object */
                            /* IL_57: call Void WriteLine(System.String, System.Object[]) */
                            asm0.x60000a2(CILJS.new_string("Finally"),CILJS.new_array(t0,(0|0)));
                            /* IL_5C: nop  */
                            
                            /* IL_5D: nop  */
                            
                            /* IL_5E: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            continue;
                        }
                        break;
                    }
                }
                continue;
                case 0x5F:
                /* IL_5F: ret  */
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            CILJS.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ab");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function A() { c.init(); }");
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            CILJS.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ab");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function B() { c.init(); }");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],asm1.B(),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            CILJS.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ab");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function C() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
