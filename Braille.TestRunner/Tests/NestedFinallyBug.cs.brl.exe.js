var asm1; (function (asm)
{
    asm.FullName = "NestedFinallyBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var in_block_1;
        var __finally_continuation_1__;
        var loc0;
        var in_block_2;
        var __finally_continuation_2__;
        var loc1;
        var loc2;
        var loc3;
        t0 = (asm0)["System.ValueType"]();
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
                            /* IL_00: call Int32 Get()*/
                            /* IL_05: brfalse.s IL_19*/
                            
                            if ((!(asm1.x600000b()))){
                                __pos__ = 0x19;
                                continue;
                            }
                            /* IL_07: call Int32 Get()*/
                            /* IL_0C: stloc.0 */
                            loc0 = asm1.x600000b();
                            /* IL_0D: ldloca.s 0*/
                            /* IL_0F: call String ToString()*/
                            /* IL_14: call Void Log(System.Object)*/
                            asm1.x6000001(asm0.x60000a6({
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
                            /* IL_19: leave.s IL_6A*/
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
                                        /* IL_1B: call Int32 Get()*/
                                        /* IL_20: brfalse.s IL_34*/
                                        
                                        if ((!(asm1.x600000b()))){
                                            __pos__ = 0x34;
                                            continue;
                                        }
                                        /* IL_22: call Int32 Get()*/
                                        /* IL_27: stloc.1 */
                                        loc1 = asm1.x600000b();
                                        /* IL_28: ldloca.s 1*/
                                        /* IL_2A: call String ToString()*/
                                        /* IL_2F: call Void Log(System.Object)*/
                                        asm1.x6000001(asm0.x60000a6({
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
                                        /* IL_34: leave.s IL_50*/
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
                                        /* IL_36: call Int32 Get()*/
                                        /* IL_3B: brfalse.s IL_4F*/
                                        
                                        if ((!(asm1.x600000b()))){
                                            __pos__ = 0x4F;
                                            continue;
                                        }
                                        /* IL_3D: call Int32 Get()*/
                                        /* IL_42: stloc.2 */
                                        loc2 = asm1.x600000b();
                                        /* IL_43: ldloca.s 2*/
                                        /* IL_45: call String ToString()*/
                                        /* IL_4A: call Void Log(System.Object)*/
                                        asm1.x6000001(asm0.x60000a6({
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
                                        /* IL_4F: endfinally */
                                        in_block_2 = false;
                                        __pos__ = __finally_continuation_2__;
                                        break;
                                    }
                                }
                            }
                            break;
                            case 0x50:
                            /* IL_50: call Int32 Get()*/
                            /* IL_55: brfalse.s IL_69*/
                            
                            if ((!(asm1.x600000b()))){
                                __pos__ = 0x69;
                                continue;
                            }
                            /* IL_57: call Int32 Get()*/
                            /* IL_5C: stloc.3 */
                            loc3 = asm1.x600000b();
                            /* IL_5D: ldloca.s 3*/
                            /* IL_5F: call String ToString()*/
                            /* IL_64: call Void Log(System.Object)*/
                            asm1.x6000001(asm0.x60000a6({
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
                            /* IL_69: endfinally */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                    }
                }
                break;
                case 0x6A:
                /* IL_6A: ret */
                return ;
            }
        }
    };
    /* static System.Int32 Program.Get()*/
    asm.x600000b = function Get()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /*  Program..ctor()*/
    asm.x600000c = function _ctor(arg0)
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
