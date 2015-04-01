var asm1;(function (asm) 
{
    asm.FullName = "TryFinallyBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var in_block_2;
        var __finally_continuation_2__;
        var loc1;
        var __error_handled_1__;
        var loc0;
        t0 = (asm0)["System.Exception"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  TryFinallyBug.cs:5:5*/
                
                
                try {
                    
                    /*IL_01: nop  TryFinallyBug.cs:7:9*/
                    
                    
                    /*IL_02: ldstr Try 1 */
                    /*IL_07: call Void Log(System.Object) */
                    asm1.x6000001(BLR.new_string("Try 1"));
                    
                    /*IL_0C: nop  */
                    
                    
                    try {
                        
                        /*IL_0D: nop  TryFinallyBug.cs:11:13*/
                        
                        
                        /*IL_0E: ldstr Try 2 */
                        /*IL_13: call Void Log(System.Object) */
                        asm1.x6000001(BLR.new_string("Try 2"));
                        
                        /*IL_18: nop  */
                        
                        
                        /*IL_19: newobj Void .ctor() */
                        /*IL_1E: throw  */
                        throw BLR.newobj(t0,asm0.x60000a4,[null]);
                    }
                    
                    finally {
                        in_block_2 = true;
                        __finally_continuation_2__ = __pos__;
                        __pos__ = 31;
                        
                        while (in_block_2){
                            
                            switch (__pos__){
                                case 0x1F:
                                
                                /*IL_1F: nop  TryFinallyBug.cs:16:13*/
                                
                                
                                /*IL_20: ldstr Finally with branching */
                                /*IL_25: call Void Log(System.Object) */
                                asm1.x6000001(BLR.new_string("Finally with branching"));
                                
                                /*IL_2A: nop  */
                                
                                
                                /*IL_2B: call Boolean What() */
                                /*IL_30: ldc.i4.0  */
                                /*IL_32: ceq  */
                                /*IL_33: stloc.1  */
                                loc1 = ((asm1.x600000b() === (0|0))?(1):(0));
                                
                                /*IL_34: ldloc.1  */
                                /*IL_35: brtrue.s IL_42 */
                                
                                if(loc1){
                                    __pos__ = 0x42;
                                    continue;
                                }
                                
                                /*IL_37: ldstr In branch */
                                /*IL_3C: call Void Log(System.Object) */
                                asm1.x6000001(BLR.new_string("In branch"));
                                
                                /*IL_41: nop  */
                                
                                case 0x42:
                                
                                /*IL_42: ldstr After branch */
                                /*IL_47: call Void Log(System.Object) */
                                asm1.x6000001(BLR.new_string("After branch"));
                                
                                /*IL_4C: nop  */
                                
                                
                                /*IL_4D: nop  TryFinallyBug.cs:23:13*/
                                
                                
                                /*IL_4E: endfinally  TryFinallyBug.cs:16707566:0*/
                                in_block_2 = false;
                                __pos__ = __finally_continuation_2__;
                                break;
                            }
                        }
                    }
                }
                
                catch (__error__) {
                    __error_handled_1__ = false;
                    
                    if((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Exception"]())){
                        st_0A = __error__;
                        st_0A = __error__;
                        __error_handled_1__ = true;
                        
                        /*IL_4F: stloc.0  TryFinallyBug.cs:26:9*/
                        loc0 = st_0A;
                        
                        /*IL_50: nop  TryFinallyBug.cs:27:9*/
                        
                        
                        /*IL_51: ldstr Catch */
                        /*IL_56: call Void Log(System.Object) */
                        asm1.x6000001(BLR.new_string("Catch"));
                        
                        /*IL_5B: nop  */
                        
                        
                        /*IL_5C: nop  TryFinallyBug.cs:29:9*/
                        
                        
                        /*IL_5D: leave.s IL_5F TryFinallyBug.cs:16707566:0*/
                        in_block_1 = false;
                        __pos__ = 0x5F;
                    }
                    
                    if((!(__error_handled_1__))){
                        throw __error__;
                    }
                }
                break;
                case 0x5F:
                
                /*IL_5F: nop  TryFinallyBug.cs:16707566:0*/
                
                
                /*IL_60: ret  TryFinallyBug.cs:30:5*/
                return ;
            }
        }
    };
    
    /*static System.Boolean Program.What()*/
    asm.x600000b = function What() 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  TryFinallyBug.cs:32:31*/
        
        
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