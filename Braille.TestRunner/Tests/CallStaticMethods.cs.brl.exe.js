var asm1;(function (asm) 
{
    asm.FullName = "CallStaticMethods.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*static System.Void Program.Callee()*/
    asm.x600000a = function Callee() 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  CallStaticMethods.cs:5:5*/
        
        
        /*IL_01: ldstr Called! */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("Called!"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ret  CallStaticMethods.cs:7:5*/
        return ;
    };;
    
    /*static System.Void Program.Main()*/
    asm.x600000b_init = function () 
    {
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function () 
    {
        BLR.init_base_types();
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Main() 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  CallStaticMethods.cs:10:5*/
        
        
        /*IL_01: call Void Callee() CallStaticMethods.cs:11:9*/
        asm1.x600000a();
        
        /*IL_06: nop  */
        
        
        /*IL_07: ret  CallStaticMethods.cs:12:5*/
        return ;
    };
    
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
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));