var asm1;(function (asm) 
{
    asm.FullName = "IsInstValueType.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*static A Program.Get()*/
    asm.x600000a_init = function () 
    {
        (asm1.A().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function () 
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Get() 
    {
        var t0;
        var loc1;
        var __pos__;
        var loc0;
        t0 = asm1.A();
        loc1 = new (asm1.A())();
        __pos__ = 0x0;
        
        /*IL_00: nop  IsInstValueType.cs:8:5*/
        
        
        /*IL_01: ldloca.s 1 */
        /*IL_04: initobj A */
        loc1 = new t0();
        
        /*IL_09: ldloc.1  */
        /*IL_0A: stloc.0  */
        loc0 = loc1;
        
        /*IL_0D: ldloc.0  */
        /*IL_0E: ret  */
        return loc0;
    };
    
    /*static System.Void Program.Main()*/
    asm.x600000b_init = function () 
    {
        (asm1.A().init)();
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
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = asm1.A();
        t1 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        
        /*IL_00: nop  IsInstValueType.cs:13:5*/
        
        
        /*IL_01: call A Get() */
        /*IL_06: box A */
        /*IL_0B: stloc.0  */
        loc0 = {
            'boxed': BLR.clone_value(asm1.x600000a()),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        };
        
        /*IL_0C: ldloc.0  */
        /*IL_0D: isinst A */
        /*IL_12: ldnull  */
        /*IL_14: cgt.un  */
        /*IL_15: box System.Boolean */
        /*IL_1A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((t0.IsInst(loc0) !== null)?(1):(0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        
        /*IL_1F: nop  */
        
        
        /*IL_20: ret  IsInstValueType.cs:17:5*/
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
    asm.I = BLR.declare_type("I",
        [],
        function () 
        {
            return {};
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
        });
    asm.A = BLR.declare_type("A",
        [],
        function () 
        {
            return {};
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,
                [asm1.I()],
                {});
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));