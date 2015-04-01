var asm1;(function (asm) 
{
    asm.FullName = "NestedFinallyBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    
    /*static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    
    /* TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*static System.Void Program.Main()*/
    asm.x600000a_init = function () 
    {
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function () 
    {
        BLR.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main() 
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var in_block_1;
        var __finally_continuation_1__;
        var loc0;
        var loc1;
        var in_block_2;
        var __finally_continuation_2__;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  NestedFinallyBug.cs:5:5*/
                
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 1;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x1:
                            
                            /*IL_01: nop  NestedFinallyBug.cs:7:9*/
                            
                            
                            /*IL_02: call Int32 Get() */
                            /*IL_07: ldc.i4.0  */
                            /*IL_09: ceq  */
                            /*IL_0A: stloc.0  */
                            loc0 = ((asm1.x600000b() === (0|0))?(1):(0));
                            
                            /*IL_0B: ldloc.0  */
                            /*IL_0C: brtrue.s IL_21 */
                            
                            if(loc0){
                                __pos__ = 0x21;
                                continue;
                            }
                            
                            /*IL_0E: call Int32 Get() */
                            /*IL_13: stloc.1  */
                            loc1 = asm1.x600000b();
                            
                            /*IL_14: ldloca.s 1 */
                            /*IL_16: call String ToString() */
                            /*IL_1B: call Void Log(System.Object) */
                            asm1.x6000001(asm0.x60000ce({
                                        'w': function (v) 
                                        {
                                            loc1 = v;
                                        },
                                        'r': function () 
                                        {
                                            return loc1;
                                        }
                                    }));
                            
                            /*IL_20: nop  */
                            
                            case 0x21:
                            
                            /*IL_21: nop  NestedFinallyBug.cs:10:9*/
                            
                            
                            /*IL_22: leave.s IL_8C NestedFinallyBug.cs:16707566:0*/
                            in_block_1 = false;
                            __pos__ = 0x8C;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 36;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x24:
                            
                            /*IL_24: nop  NestedFinallyBug.cs:12:9*/
                            
                            
                            try {
                                in_block_2 = true;
                                __finally_continuation_2__ = __pos__;
                                __pos__ = 37;
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x25:
                                        
                                        /*IL_25: nop  NestedFinallyBug.cs:14:13*/
                                        
                                        
                                        /*IL_26: call Int32 Get() */
                                        /*IL_2B: ldc.i4.0  */
                                        /*IL_2D: ceq  */
                                        /*IL_2E: stloc.0  */
                                        loc0 = ((asm1.x600000b() === (0|0))?(1):(0));
                                        
                                        /*IL_2F: ldloc.0  */
                                        /*IL_30: brtrue.s IL_45 */
                                        
                                        if(loc0){
                                            __pos__ = 0x45;
                                            continue;
                                        }
                                        
                                        /*IL_32: call Int32 Get() */
                                        /*IL_37: stloc.1  */
                                        loc1 = asm1.x600000b();
                                        
                                        /*IL_38: ldloca.s 1 */
                                        /*IL_3A: call String ToString() */
                                        /*IL_3F: call Void Log(System.Object) */
                                        asm1.x6000001(asm0.x60000ce({
                                                    'w': function (v) 
                                                    {
                                                        loc1 = v;
                                                    },
                                                    'r': function () 
                                                    {
                                                        return loc1;
                                                    }
                                                }));
                                        
                                        /*IL_44: nop  */
                                        
                                        case 0x45:
                                        
                                        /*IL_45: nop  NestedFinallyBug.cs:17:13*/
                                        
                                        
                                        /*IL_46: leave.s IL_6A NestedFinallyBug.cs:16707566:0*/
                                        in_block_2 = false;
                                        __pos__ = 0x6A;
                                        break;
                                    }
                                }
                            }
                            
                            finally {
                                in_block_2 = true;
                                __finally_continuation_2__ = __pos__;
                                __pos__ = 72;
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x48:
                                        
                                        /*IL_48: nop  NestedFinallyBug.cs:19:13*/
                                        
                                        
                                        /*IL_49: call Int32 Get() */
                                        /*IL_4E: ldc.i4.0  */
                                        /*IL_50: ceq  */
                                        /*IL_51: stloc.0  */
                                        loc0 = ((asm1.x600000b() === (0|0))?(1):(0));
                                        
                                        /*IL_52: ldloc.0  */
                                        /*IL_53: brtrue.s IL_68 */
                                        
                                        if(loc0){
                                            __pos__ = 0x68;
                                            continue;
                                        }
                                        
                                        /*IL_55: call Int32 Get() */
                                        /*IL_5A: stloc.1  */
                                        loc1 = asm1.x600000b();
                                        
                                        /*IL_5B: ldloca.s 1 */
                                        /*IL_5D: call String ToString() */
                                        /*IL_62: call Void Log(System.Object) */
                                        asm1.x6000001(asm0.x60000ce({
                                                    'w': function (v) 
                                                    {
                                                        loc1 = v;
                                                    },
                                                    'r': function () 
                                                    {
                                                        return loc1;
                                                    }
                                                }));
                                        
                                        /*IL_67: nop  */
                                        
                                        case 0x68:
                                        
                                        /*IL_68: nop  NestedFinallyBug.cs:22:13*/
                                        
                                        
                                        /*IL_69: endfinally  NestedFinallyBug.cs:16707566:0*/
                                        in_block_2 = false;
                                        __pos__ = __finally_continuation_2__;
                                        break;
                                    }
                                }
                            }
                            break;
                            case 0x6A:
                            
                            /*IL_6A: nop  NestedFinallyBug.cs:16707566:0*/
                            
                            
                            /*IL_6B: call Int32 Get() */
                            /*IL_70: ldc.i4.0  */
                            /*IL_72: ceq  */
                            /*IL_73: stloc.0  */
                            loc0 = ((asm1.x600000b() === (0|0))?(1):(0));
                            
                            /*IL_74: ldloc.0  */
                            /*IL_75: brtrue.s IL_8A */
                            
                            if(loc0){
                                __pos__ = 0x8A;
                                continue;
                            }
                            
                            /*IL_77: call Int32 Get() */
                            /*IL_7C: stloc.1  */
                            loc1 = asm1.x600000b();
                            
                            /*IL_7D: ldloca.s 1 */
                            /*IL_7F: call String ToString() */
                            /*IL_84: call Void Log(System.Object) */
                            asm1.x6000001(asm0.x60000ce({
                                        'w': function (v) 
                                        {
                                            loc1 = v;
                                        },
                                        'r': function () 
                                        {
                                            return loc1;
                                        }
                                    }));
                            
                            /*IL_89: nop  */
                            
                            case 0x8A:
                            
                            /*IL_8A: nop  NestedFinallyBug.cs:26:9*/
                            
                            
                            /*IL_8B: endfinally  NestedFinallyBug.cs:16707566:0*/
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                    }
                }
                break;
                case 0x8C:
                
                /*IL_8C: nop  NestedFinallyBug.cs:16707566:0*/
                
                
                /*IL_8D: ret  NestedFinallyBug.cs:27:5*/
                return ;
            }
        }
    };
    
    /*static System.Int32 Program.Get()*/
    asm.x600000b = function Get() 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  NestedFinallyBug.cs:30:5*/
        
        
        /*IL_01: ldc.i4.1  */
        /*IL_02: stloc.0  */
        loc0 = (1|0);
        
        /*IL_05: ldloc.0  */
        /*IL_06: ret  */
        return loc0;
    };;
    
    /* Program..ctor()*/
    asm.x600000c = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    asm.TestLog = BLR.declare_type("TestLog",
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
    asm.Program = BLR.declare_type("Program",
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