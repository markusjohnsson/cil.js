var asm1;(function (asm)
{
    asm.FullName = "NestedFinallyBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var t0;
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
                            /* IL_00: call Int32 Get() */
                            /* IL_05: brfalse.s IL_1F */
                            
                            if ((!(asm1.x6000002()))){
                                __pos__ = 0x1F;
                                continue;
                            }
                            /* IL_07: call Int32 Get() */
                            /* IL_0C: stloc.0  */
                            loc0 = asm1.x6000002();
                            /* IL_0D: ldloca.s 0 */
                            /* IL_0F: call String ToString() */
                            /* IL_14: ldc.i4.0  */
                            /* IL_15: newarr System.Object */
                            /* IL_1A: call Void WriteLine(System.String, System.Object[]) */
                            asm0.x600005b(asm0.x600009d({
                                        'w': function (v)
                                        {
                                            loc0 = v;
                                        },
                                        'r': function ()
                                        {
                                            return loc0;
                                        }
                                    }),CILJS.new_array(t0,(0|0)));
                            case 0x1F:
                            /* IL_1F: leave.s IL_82 */
                            in_block_1 = false;
                            __pos__ = 0x82;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 33;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x21:
                            
                            try {
                                in_block_2 = true;
                                __finally_continuation_2__ = __pos__;
                                __pos__ = 33;
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x21:
                                        /* IL_21: call Int32 Get() */
                                        /* IL_26: brfalse.s IL_40 */
                                        
                                        if ((!(asm1.x6000002()))){
                                            __pos__ = 0x40;
                                            continue;
                                        }
                                        /* IL_28: call Int32 Get() */
                                        /* IL_2D: stloc.1  */
                                        loc1 = asm1.x6000002();
                                        /* IL_2E: ldloca.s 1 */
                                        /* IL_30: call String ToString() */
                                        /* IL_35: ldc.i4.0  */
                                        /* IL_36: newarr System.Object */
                                        /* IL_3B: call Void WriteLine(System.String, System.Object[]) */
                                        asm0.x600005b(asm0.x600009d({
                                                    'w': function (v)
                                                    {
                                                        loc1 = v;
                                                    },
                                                    'r': function ()
                                                    {
                                                        return loc1;
                                                    }
                                                }),CILJS.new_array(t0,(0|0)));
                                        case 0x40:
                                        /* IL_40: leave.s IL_62 */
                                        in_block_2 = false;
                                        __pos__ = 0x62;
                                        break;
                                    }
                                }
                            }
                            
                            finally {
                                in_block_2 = true;
                                __finally_continuation_2__ = __pos__;
                                __pos__ = 66;
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x42:
                                        /* IL_42: call Int32 Get() */
                                        /* IL_47: brfalse.s IL_61 */
                                        
                                        if ((!(asm1.x6000002()))){
                                            __pos__ = 0x61;
                                            continue;
                                        }
                                        /* IL_49: call Int32 Get() */
                                        /* IL_4E: stloc.2  */
                                        loc2 = asm1.x6000002();
                                        /* IL_4F: ldloca.s 2 */
                                        /* IL_51: call String ToString() */
                                        /* IL_56: ldc.i4.0  */
                                        /* IL_57: newarr System.Object */
                                        /* IL_5C: call Void WriteLine(System.String, System.Object[]) */
                                        asm0.x600005b(asm0.x600009d({
                                                    'w': function (v)
                                                    {
                                                        loc2 = v;
                                                    },
                                                    'r': function ()
                                                    {
                                                        return loc2;
                                                    }
                                                }),CILJS.new_array(t0,(0|0)));
                                        case 0x61:
                                        /* IL_61: endfinally  */
                                        in_block_2 = false;
                                        __pos__ = __finally_continuation_2__;
                                        break;
                                    }
                                }
                            }
                            break;
                            case 0x62:
                            /* IL_62: call Int32 Get() */
                            /* IL_67: brfalse.s IL_81 */
                            
                            if ((!(asm1.x6000002()))){
                                __pos__ = 0x81;
                                continue;
                            }
                            /* IL_69: call Int32 Get() */
                            /* IL_6E: stloc.3  */
                            loc3 = asm1.x6000002();
                            /* IL_6F: ldloca.s 3 */
                            /* IL_71: call String ToString() */
                            /* IL_76: ldc.i4.0  */
                            /* IL_77: newarr System.Object */
                            /* IL_7C: call Void WriteLine(System.String, System.Object[]) */
                            asm0.x600005b(asm0.x600009d({
                                        'w': function (v)
                                        {
                                            loc3 = v;
                                        },
                                        'r': function ()
                                        {
                                            return loc3;
                                        }
                                    }),CILJS.new_array(t0,(0|0)));
                            case 0x81:
                            /* IL_81: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                    }
                }
                break;
                case 0x82:
                /* IL_82: ret  */
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
