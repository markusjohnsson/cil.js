var asm1;(function (asm) 
{
    asm.FullName = "Initobj.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /* A..ctor()*/
    asm.x600000a = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*static T Program.CreateDefault<T>()*/
    asm.x600000b = function (T) 
    {
        return function CreateDefault() 
        {
            var t0;
            var loc1;
            var __pos__;
            var loc0;
            t0 = T;
            loc1 = ((T.IsValueType)?(((T.IsPrimitive)?(0):(new T()))):(null));
            __pos__ = 0x0;
            
            /*IL_00: nop  Initobj.cs:8:5*/
            
            
            /*IL_01: ldloca.s 1 */
            /*IL_04: initobj T */
            loc1 = ((t0.IsValueType)?(((t0.IsPrimitive)?((0|0)):(new t0()))):(null));
            
            /*IL_09: ldloc.1  */
            /*IL_0A: stloc.0  */
            loc0 = loc1;
            
            /*IL_0D: ldloc.0  */
            /*IL_0E: ret  */
            return loc0;
        };
    };;
    
    /*static System.Void Program.Main()*/
    asm.x600000c_init = function () 
    {
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function () 
    {
        BLR.init_base_types();
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main() 
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        
        /*IL_00: nop  Initobj.cs:13:5*/
        
        
        /*IL_01: ldc.i4.0  */
        /*IL_02: box System.Int32 */
        /*IL_07: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        
        /*IL_0C: nop  */
        
        
        /*IL_0D: ldnull  */
        /*IL_0E: call Void Log(System.Object) */
        asm1.x6000001(null);
        
        /*IL_13: nop  */
        
        
        /*IL_14: ldnull  */
        /*IL_15: call Void Log(System.Object) */
        asm1.x6000001(null);
        
        /*IL_1A: nop  */
        
        
        /*IL_1B: ret  Initobj.cs:17:5*/
        return ;
    };
    
    /* Program..ctor()*/
    asm.x600000d = function _ctor(arg0) 
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
    asm.A = BLR.declare_type("A",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));