var asm2;(function (asm)
{
    asm.FullName = "NestedFinallyBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var in_block_0;
        var __pos__;
        var in_block_1;
        var __finally_continuation_1__;
        var loc0;
        var in_block_2;
        var __finally_continuation_2__;
        var loc1;
        var loc2;
        var loc3;
        CILJS.init_base_types();
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
                            /* IL_00: call Int32 Get() */
                            /* IL_05: brfalse.s IL_19 */
                            
                            if ((!(asm2.x6000002()))){
                                __pos__ = 0x19;
                                continue;
                            }
                            /* IL_07: call Int32 Get() */
                            /* IL_0C: stloc.0  */
                            loc0 = asm2.x6000002();
                            /* IL_0D: ldloca.s 0 */
                            /* IL_0F: call String ToString() */
                            /* IL_14: call Void Log(System.Object) */
                            asm1.x6000001(asm0.x600009d({
                                        'w': function (v)
                                        {
                                            loc0 = v;
                                        },
                                        'r': function ()
                                        {
                                            return loc0;
                                        }
                                    }));
                            case 0x19:
                            /* IL_19: leave.s IL_6A */
                            in_block_1 = false;
                            __pos__ = 0x6A;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 27;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x1B:
                            
                            try {
                                in_block_2 = true;
                                __finally_continuation_2__ = __pos__;
                                __pos__ = 27;
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x1B:
                                        /* IL_1B: call Int32 Get() */
                                        /* IL_20: brfalse.s IL_34 */
                                        
                                        if ((!(asm2.x6000002()))){
                                            __pos__ = 0x34;
                                            continue;
                                        }
                                        /* IL_22: call Int32 Get() */
                                        /* IL_27: stloc.1  */
                                        loc1 = asm2.x6000002();
                                        /* IL_28: ldloca.s 1 */
                                        /* IL_2A: call String ToString() */
                                        /* IL_2F: call Void Log(System.Object) */
                                        asm1.x6000001(asm0.x600009d({
                                                    'w': function (v)
                                                    {
                                                        loc1 = v;
                                                    },
                                                    'r': function ()
                                                    {
                                                        return loc1;
                                                    }
                                                }));
                                        case 0x34:
                                        /* IL_34: leave.s IL_50 */
                                        in_block_2 = false;
                                        __pos__ = 0x50;
                                        break;
                                    }
                                }
                            }
                            
                            finally {
                                in_block_2 = true;
                                __finally_continuation_2__ = __pos__;
                                __pos__ = 54;
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x36:
                                        /* IL_36: call Int32 Get() */
                                        /* IL_3B: brfalse.s IL_4F */
                                        
                                        if ((!(asm2.x6000002()))){
                                            __pos__ = 0x4F;
                                            continue;
                                        }
                                        /* IL_3D: call Int32 Get() */
                                        /* IL_42: stloc.2  */
                                        loc2 = asm2.x6000002();
                                        /* IL_43: ldloca.s 2 */
                                        /* IL_45: call String ToString() */
                                        /* IL_4A: call Void Log(System.Object) */
                                        asm1.x6000001(asm0.x600009d({
                                                    'w': function (v)
                                                    {
                                                        loc2 = v;
                                                    },
                                                    'r': function ()
                                                    {
                                                        return loc2;
                                                    }
                                                }));
                                        case 0x4F:
                                        /* IL_4F: endfinally  */
                                        in_block_2 = false;
                                        __pos__ = __finally_continuation_2__;
                                        break;
                                    }
                                }
                            }
                            break;
                            case 0x50:
                            /* IL_50: call Int32 Get() */
                            /* IL_55: brfalse.s IL_69 */
                            
                            if ((!(asm2.x6000002()))){
                                __pos__ = 0x69;
                                continue;
                            }
                            /* IL_57: call Int32 Get() */
                            /* IL_5C: stloc.3  */
                            loc3 = asm2.x6000002();
                            /* IL_5D: ldloca.s 3 */
                            /* IL_5F: call String ToString() */
                            /* IL_64: call Void Log(System.Object) */
                            asm1.x6000001(asm0.x600009d({
                                        'w': function (v)
                                        {
                                            loc3 = v;
                                        },
                                        'r': function ()
                                        {
                                            return loc3;
                                        }
                                    }));
                            case 0x69:
                            /* IL_69: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                    }
                }
                break;
                case 0x6A:
                /* IL_6A: ret  */
                return ;
            }
        }
    };;
    /* static System.Int32 Program.Get()*/
    asm.x6000002 = function Get()
    {
        /* IL_00: ldc.i4.1  */
        /* IL_01: ret  */
        return (1|0);
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
