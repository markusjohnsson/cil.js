var asm1;(function (asm) 
{
    asm.FullName = "Char.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        __pos__ = 0x0;
        
        /*IL_00: nop  Char.cs:5:5*/
        
        
        /*IL_01: ldstr hello world */
        /*IL_06: call Void Log(System.String) */
        asm1.x600000b(BLR.new_string("hello world"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ldstr xyzw */
        /*IL_11: call Void Log(System.String) */
        asm1.x600000b(BLR.new_string("xyzw"));
        
        /*IL_16: nop  */
        
        
        /*IL_17: ldstr 1234 */
        /*IL_1C: call Void Log(System.String) */
        asm1.x600000b(BLR.new_string("1234"));
        
        /*IL_21: nop  */
        
        
        /*IL_22: ret  Char.cs:9:5*/
        return ;
    };
    
    /*static System.Void Program.Log(String)*/
    asm.x600000b = function Log(arg0) 
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Char"]();
        __pos__ = 0x0;
        
        /*IL_00: nop  Char.cs:12:5*/
        
        
        /*IL_01: ldarg.0  */
        /*IL_02: ldc.i4.0  */
        /*IL_03: callvirt Char get_Chars(System.Int32) */
        /*IL_08: box System.Char */
        /*IL_0D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60001b9(arg0,(0|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        
        /*IL_12: nop  */
        
        
        /*IL_13: ldarg.0  */
        /*IL_14: ldc.i4.1  */
        /*IL_15: callvirt Char get_Chars(System.Int32) */
        /*IL_1A: box System.Char */
        /*IL_1F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60001b9(arg0,(1|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        
        /*IL_24: nop  */
        
        
        /*IL_25: ldarg.0  */
        /*IL_26: ldc.i4.2  */
        /*IL_27: callvirt Char get_Chars(System.Int32) */
        /*IL_2C: box System.Char */
        /*IL_31: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60001b9(arg0,(2|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        
        /*IL_36: nop  */
        
        
        /*IL_37: ldarg.0  */
        /*IL_38: ldc.i4.3  */
        /*IL_39: callvirt Char get_Chars(System.Int32) */
        /*IL_3E: box System.Char */
        /*IL_43: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60001b9(arg0,(3|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        
        /*IL_48: nop  */
        
        
        /*IL_49: ret  Char.cs:17:5*/
        return ;
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