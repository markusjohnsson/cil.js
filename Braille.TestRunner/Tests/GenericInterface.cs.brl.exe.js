var asm1;(function (asm) 
{
    asm.FullName = "GenericInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*System.Void A.NonGeneric()*/
    asm.x600000d = function NonGeneric(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  GenericInterface.cs:11:5*/
        
        
        /*IL_01: ldstr A.NonGeneric */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("A.NonGeneric"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ret  GenericInterface.cs:13:5*/
        return ;
    };;
    
    /*System.Void A.GenericArg(Int32)*/
    asm.x600000e = function GenericArg(arg0, arg1) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  GenericInterface.cs:18:5*/
        
        
        /*IL_01: ldstr A.GenericArg */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("A.GenericArg"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ldarg.0  */
        /*IL_0D: ldarg.1  */
        /*IL_0E: stfld Int32 field */
        arg0.Afield = arg1;
        
        /*IL_13: ret  GenericInterface.cs:21:5*/
        return ;
    };;
    
    /*System.Int32 A.GenericReturn()*/
    asm.x600000f = function GenericReturn(arg0) 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  GenericInterface.cs:24:5*/
        
        
        /*IL_01: ldstr A.GenericReturn */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("A.GenericReturn"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ldarg.0  */
        /*IL_0D: ldfld Int32 field */
        /*IL_12: stloc.0  */
        loc0 = arg0.Afield;
        
        /*IL_15: ldloc.0  */
        /*IL_16: ret  */
        return loc0;
    };;
    
    /* A..ctor()*/
    asm.x6000010 = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*System.Void B`1.NonGeneric()*/
    asm.x6000011 = function NonGeneric(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  GenericInterface.cs:33:5*/
        
        
        /*IL_01: ldstr B.NonGeneric */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("B.NonGeneric"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ret  GenericInterface.cs:35:5*/
        return ;
    };;
    
    /*System.Void B`1.GenericArg(T)*/
    asm.x6000012 = function GenericArg(arg0, arg1) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  GenericInterface.cs:40:5*/
        
        
        /*IL_01: ldstr B.NonGeneric */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("B.NonGeneric"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ldarg.0  */
        /*IL_0D: ldarg.1  */
        /*IL_0E: stfld T field */
        arg0.B_1field = arg1;
        
        /*IL_13: ret  GenericInterface.cs:43:5*/
        return ;
    };;
    
    /*T B`1.GenericReturn()*/
    asm.x6000013 = function GenericReturn(arg0) 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  GenericInterface.cs:46:5*/
        
        
        /*IL_01: ldstr B.GenericReturn */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("B.GenericReturn"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ldarg.0  */
        /*IL_0D: ldfld T field */
        /*IL_12: stloc.0  */
        loc0 = arg0.B_1field;
        
        /*IL_15: ldloc.0  */
        /*IL_16: ret  */
        return loc0;
    };;
    
    /* B`1..ctor()*/
    asm.x6000014 = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*static System.Void Program.Main()*/
    asm.x6000015_init = function () 
    {
        (asm1.A().init)();
        ((asm1)["B`1"]((asm0)["System.String"]()).init)();
        asm.x6000015 = asm.x6000015_;
    };;
    asm.x6000015 = function () 
    {
        BLR.init_base_types();
        asm.x6000015_init.apply(this,arguments);
        return asm.x6000015_.apply(this,arguments);
    };;
    asm.x6000015_ = function Main() 
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.String"]();
        t3 = (asm1)["B`1"](t2);
        __pos__ = 0x0;
        
        /*IL_00: nop  GenericInterface.cs:55:5*/
        
        
        /*IL_01: newobj Void .ctor() */
        /*IL_06: ldc.i4 12345 */
        /*IL_0B: call Void Run[System.Int32](I`1[System.Int32], System.Int32) */
        (asm1.x6000016((asm0)["System.Int32"]()))(BLR.newobj(t0,asm1.x6000010,[null]),(12345|0));
        
        /*IL_10: nop  */
        
        
        /*IL_11: newobj Void .ctor() */
        /*IL_16: ldstr Hello */
        /*IL_1B: call Void Run[System.String](I`1[System.String], System.String) */
        (asm1.x6000016((asm0)["System.String"]()))(BLR.newobj(t3,asm1.x6000014,[null]),BLR.new_string("Hello"));
        
        /*IL_20: nop  */
        
        
        /*IL_21: ret  GenericInterface.cs:58:5*/
        return ;
    };
    
    /*static System.Void Program.Run<T>(I`1,T)*/
    asm.x6000016_init = function (T) 
    {
        return function () 
        {
            ((asm1)["I`1"](T).init)();
        };
    };;
    asm.x6000016 = function (T) 
    {
        return function (arg0, arg1) 
        {
            (asm.x6000016_init(T).apply)(this,arguments);
            return (asm.x6000016_(T).apply)(this,arguments);
        };
    };;
    asm.x6000016_ = function (T) 
    {
        return function Run(arg0, arg1) 
        {
            var t0;
            var t1;
            var __pos__;
            t0 = T;
            t1 = (asm1)["I`1"](t0);
            __pos__ = 0x0;
            
            /*IL_00: nop  GenericInterface.cs:61:5*/
            
            
            /*IL_01: ldarg.0  */
            /*IL_02: callvirt Void NonGeneric() */
            ((((arg0.ifacemap)[t1])[t0].x600000a)())(BLR.convert_box_to_pointer_as_needed(arg0));
            
            /*IL_07: nop  */
            
            
            /*IL_08: ldarg.0  */
            /*IL_09: ldarg.1  */
            /*IL_0A: callvirt Void GenericArg(T) */
            ((((arg0.ifacemap)[t1])[t0].x600000b)())(BLR.convert_box_to_pointer_as_needed(arg0),arg1);
            
            /*IL_0F: nop  */
            
            
            /*IL_10: ldarg.0  */
            /*IL_11: callvirt T GenericReturn() */
            /*IL_16: box T */
            /*IL_1B: call Void Log(System.Object) */
            asm1.x6000001(BLR.box(((((arg0.ifacemap)[t1])[t0].x600000c)())(BLR.convert_box_to_pointer_as_needed(arg0)),t0));
            
            /*IL_20: nop  */
            
            
            /*IL_21: ret  GenericInterface.cs:65:5*/
            return ;
        };
    };
    
    /* Program..ctor()*/
    asm.x6000017 = function _ctor(arg0) 
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
    (asm)["I`1"] = BLR.declare_type("I_1",
        ["T"],
        function (T) 
        {
            return {};
        },
        function (T) 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I`1",false,false,true,true,false,[],[
                    [asm1,"x600000a","NonGeneric"],
                    [asm1,"x600000b","GenericArg"],
                    [asm1,"x600000c","GenericReturn"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
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
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1,"x600000d","NonGeneric"],
                    [asm1,"x600000e","GenericArg"],
                    [asm1,"x600000f","GenericReturn"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,
                [(asm1)["I`1"]((asm0)["System.Int32"]()),(asm0)["System.Int32"]()],
                {
                    'x600000a': function () {return asm1.x600000d;},
                    'x600000b': function () {return asm1.x600000e;},
                    'x600000c': function () {return asm1.x600000f;}
                });
            this.prototype.Afield = 0;
        });
    (asm)["B`1"] = BLR.declare_type("B_1",
        ["T"],
        function (T) 
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T) 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B`1",false,false,false,true,false,[],[
                    [asm1,"x6000011","NonGeneric"],
                    [asm1,"x6000012","GenericArg"],
                    [asm1,"x6000013","GenericReturn"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            (this.GenericArguments)["asm1.t2000008"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000008<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm1.x6000012","asm1.x6000012");
            BLR.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,
                [(asm1)["I`1"](T),T],
                {
                    'x600000a': function () {return asm1.x6000011;},
                    'x600000b': function () {return asm1.x6000012;},
                    'x600000c': function () {return asm1.x6000013;}
                });
            this.prototype.B_1field = ((T.IsValueType)?(((T.IsPrimitive)?(0):(new T()))):(null));
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000015;
})(asm1 || (asm1 = {}));