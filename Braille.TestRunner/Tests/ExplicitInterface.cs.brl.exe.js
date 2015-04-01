var asm1;(function (asm) 
{
    asm.FullName = "ExplicitInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*static System.Void Program.Main(String[])*/
    asm.x600000a_init = function () 
    {
        ((asm1)["Program+X"]().init)();
        ((asm1)["Program+C"]().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function (arg0) 
    {
        BLR.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main(arg0) 
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm1)["Program+X"]();
        t1 = (asm1)["Program+C"]();
        t2 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        
        /*IL_00: nop  ExplicitInterface.cs:4:5*/
        
        
        /*IL_01: newobj Void .ctor() */
        /*IL_06: stloc.0  */
        loc0 = BLR.newobj(t0,asm1.x6000011,[null]);
        
        /*IL_07: newobj Void .ctor() */
        /*IL_0C: stloc.1  */
        loc1 = BLR.newobj(t1,asm1.x600000f,[null]);
        
        /*IL_0D: ldloc.0  */
        /*IL_0E: ldloc.1  */
        /*IL_0F: callvirt Void F[System.Int32](Program+I`1[System.Int32]) */
        (asm1.x6000010((asm0)["System.Int32"]()))(loc0,loc1);
        
        /*IL_14: nop  */
        
        
        /*IL_15: ret  ExplicitInterface.cs:8:5*/
        return ;
    };
    
    /* Program..ctor()*/
    asm.x600000b = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*System.Void C.Program.I<System.Int32>.M()*/
    asm.x600000d = function Program_I_System_Int32__M(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  ExplicitInterface.cs:15:9*/
        
        
        /*IL_01: ldstr int */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("int"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ret  ExplicitInterface.cs:17:9*/
        return ;
    };;
    
    /*System.Void C.Program.I<System.String>.M()*/
    asm.x600000e = function Program_I_System_String__M(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  ExplicitInterface.cs:20:9*/
        
        
        /*IL_01: ldstr string */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("string"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ret  ExplicitInterface.cs:22:9*/
        return ;
    };;
    
    /* C..ctor()*/
    asm.x600000f = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*System.Void X.F<T>(I`1)*/
    asm.x6000010_init = function (T) 
    {
        return function () 
        {
            ((asm1)["Program+I`1"](T).init)();
        };
    };;
    asm.x6000010 = function (T) 
    {
        return function (arg0, arg1) 
        {
            (asm.x6000010_init(T).apply)(this,arguments);
            return (asm.x6000010_(T).apply)(this,arguments);
        };
    };;
    asm.x6000010_ = function (T) 
    {
        return function F(arg0, arg1) 
        {
            var t0;
            var t1;
            var __pos__;
            t0 = T;
            t1 = (asm1)["Program+I`1"](t0);
            __pos__ = 0x0;
            
            /*IL_00: nop  ExplicitInterface.cs:28:9*/
            
            
            /*IL_01: ldarg.1  */
            /*IL_02: callvirt Void M() */
            ((((arg1.ifacemap)[t1])[t0].x600000c)())(BLR.convert_box_to_pointer_as_needed(arg1));
            
            /*IL_07: nop  */
            
            
            /*IL_08: ret  ExplicitInterface.cs:30:9*/
            return ;
        };
    };
    
    /* X..ctor()*/
    asm.x6000011 = function _ctor(arg0) 
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
    (asm)["Program+I`1"] = BLR.declare_type("I_1",
        ["T"],
        function (T) 
        {
            return {};
        },
        function (T) 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+I`1",false,false,true,true,false,[],[
                    [asm1,"x600000c","M"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
        });
    (asm)["Program+C"] = BLR.declare_type("C",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,
                [(asm1)["Program+I`1"]((asm0)["System.Int32"]()),(asm0)["System.Int32"]()],
                {
                    'x600000c': function () {return asm1.x600000d;}
                });
            BLR.implement_interface(this,
                [(asm1)["Program+I`1"]((asm0)["System.String"]()),(asm0)["System.String"]()],
                {
                    'x600000c': function () {return asm1.x600000e;}
                });
        });
    (asm)["Program+X"] = BLR.declare_type("X",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+X",false,false,false,false,false,[],[
                    [asm1,"x6000010","F"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));