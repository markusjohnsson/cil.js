var asm1;(function (asm) 
{
    asm.FullName = "string.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*static System.Int32 TestString.Main()*/
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
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  string.cs:7:5*/
                
                
                /*IL_01: ldstr ddd */
                /*IL_06: stloc.0  */
                loc0 = BLR.new_string("ddd");
                
                /*IL_07: ldstr ddd */
                /*IL_0C: stloc.1  */
                loc1 = BLR.new_string("ddd");
                
                /*IL_0D: ldstr ddda */
                /*IL_12: stloc.2  */
                loc2 = BLR.new_string("ddda");
                
                /*IL_13: ldloc.0  */
                /*IL_14: ldloc.1  */
                /*IL_15: call Boolean op_Inequality(System.String, System.String) */
                /*IL_1A: ldc.i4.0  */
                /*IL_1C: ceq  */
                /*IL_1D: stloc.s 4 */
                loc4 = ((asm0.x60001c5(loc0,loc1) === (0|0))?(1):(0));
                
                /*IL_1F: ldloc.s 4 */
                /*IL_21: brtrue.s IL_27 */
                
                if(loc4){
                    __pos__ = 0x27;
                    continue;
                }
                
                /*IL_23: ldc.i4.1  */
                /*IL_24: stloc.3  */
                loc3 = (1|0);
                
                /*IL_25: br.s IL_67 */
                __pos__ = 0x67;
                continue;
                case 0x27:
                
                /*IL_27: ldloc.2  */
                /*IL_28: ldloc.1  */
                /*IL_29: ldstr a */
                /*IL_2E: call String Concat(System.String, System.String) */
                /*IL_33: call Boolean op_Inequality(System.String, System.String) */
                /*IL_38: ldc.i4.0  */
                /*IL_3A: ceq  */
                /*IL_3B: stloc.s 4 */
                loc4 = ((asm0.x60001c5(loc2,asm0.x60001bb(loc1,BLR.new_string("a"))) === (0|0))?(1):(0));
                
                /*IL_3D: ldloc.s 4 */
                /*IL_3F: brtrue.s IL_45 */
                
                if(loc4){
                    __pos__ = 0x45;
                    continue;
                }
                
                /*IL_41: ldc.i4.2  */
                /*IL_42: stloc.3  */
                loc3 = (2|0);
                
                /*IL_43: br.s IL_67 */
                __pos__ = 0x67;
                continue;
                case 0x45:
                
                /*IL_45: ldloc.2  */
                /*IL_46: ldloc.1  */
                /*IL_47: ldstr a */
                /*IL_4C: call String Concat(System.String, System.String) */
                /*IL_51: call Boolean ReferenceEquals(System.Object, System.Object) */
                /*IL_56: ldc.i4.0  */
                /*IL_58: ceq  */
                /*IL_59: stloc.s 4 */
                loc4 = ((asm0.x6000007(loc2,asm0.x60001bb(loc1,BLR.new_string("a"))) === (0|0))?(1):(0));
                
                /*IL_5B: ldloc.s 4 */
                /*IL_5D: brtrue.s IL_63 */
                
                if(loc4){
                    __pos__ = 0x63;
                    continue;
                }
                
                /*IL_5F: ldc.i4.4  */
                /*IL_60: stloc.3  */
                loc3 = (4|0);
                
                /*IL_61: br.s IL_67 */
                __pos__ = 0x67;
                continue;
                case 0x63:
                
                /*IL_63: ldc.i4.0  */
                /*IL_64: stloc.3  */
                loc3 = (0|0);
                case 0x67:
                
                /*IL_67: ldloc.3  */
                /*IL_68: ret  */
                return loc3;
            }
        }
    };
    
    /* TestString..ctor()*/
    asm.x600000b = function _ctor(arg0) 
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
    asm.TestString = BLR.declare_type("TestString",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestString",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));