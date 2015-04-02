var asm1;(function (asm)
{
    asm.FullName = "CastClass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000a(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        BLR.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        __pos__ = 0x0;
        /* IL_00: nop  CastClass.cs:9:5*/
        /* IL_01: call Void Test[A]() CastClass.cs:10:9*/
        (asm1.x600000e(asm1.A()))();
        /* IL_06: nop  */
        /* IL_07: call Void Test[B]() CastClass.cs:11:9*/
        (asm1.x600000e(asm1.B()))();
        /* IL_0C: nop  */
        /* IL_0D: call Void Test[C]() CastClass.cs:12:9*/
        (asm1.x600000e(asm1.C()))();
        /* IL_12: nop  */
        /* IL_13: ret  CastClass.cs:13:5*/
        return ;
    };
    /* static System.Void Program.Test<T>()*/
    asm.x600000e_init = function (T)
    {
        return function ()
        {
            (asm1.A().init)();
            (asm1.B().init)();
            (asm1.C().init)();
            asm.x600000e = asm.x600000e_;
        };
    };;
    asm.x600000e = function (T)
    {
        return function ()
        {
            (asm.x600000e_init(T).apply)(this,arguments);
            return (asm.x600000e_(T).apply)(this,arguments);
        };
    };;
    asm.x600000e_ = function (T)
    {
        return function Test()
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var __pos__;
            t0 = asm1.A();
            t1 = T;
            t2 = asm1.B();
            t3 = asm1.C();
            __pos__ = 0x0;
            /* IL_00: nop  CastClass.cs:16:5*/
            /* IL_01: newobj Void .ctor() */
            /* IL_06: call Void Cast[T](System.Object) */
            (asm1.x600000f(T))(BLR.newobj(t0,asm1.x600000a,[null]));
            /* IL_0B: nop  */
            /* IL_0C: newobj Void .ctor() */
            /* IL_11: call Void Cast[T](System.Object) */
            (asm1.x600000f(T))(BLR.newobj(t2,asm1.x600000b,[null]));
            /* IL_16: nop  */
            /* IL_17: newobj Void .ctor() */
            /* IL_1C: call Void Cast[T](System.Object) */
            (asm1.x600000f(T))(BLR.newobj(t3,asm1.x600000c,[null]));
            /* IL_21: nop  */
            /* IL_22: ret  CastClass.cs:20:5*/
            return ;
        };
    };
    /* static System.Void Program.Cast<T>(Object)*/
    asm.x600000f = function (T)
    {
        return function Cast(arg0)
        {
            var t0;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            var __error_handled_1__;
            t0 = T;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  CastClass.cs:23:5*/
                    
                    
                    try {
                        /* IL_01: nop  CastClass.cs:25:9*/
                        
                        /* IL_02: ldarg.0  */
                        /* IL_03: unbox.any T */
                        /* IL_08: box T */
                        /* IL_0D: stloc.0  */
                        loc0 = BLR.box(BLR.unbox_any(arg0,t0),t0);
                        /* IL_0E: ldstr Success */
                        /* IL_13: call Void Log(System.Object) */
                        asm1.x6000001(BLR.new_string("Success"));
                        /* IL_18: nop  */
                        
                        /* IL_19: nop  CastClass.cs:28:9*/
                        
                        /* IL_1A: leave.s IL_2C CastClass.cs:16707566:0*/
                        in_block_1 = false;
                        __pos__ = 0x2C;
                    }
                    
                    catch (__error__) {
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Object"]())){
                            st_04 = __error__;
                            __error_handled_1__ = true;
                            /* IL_1C: pop  CastClass.cs:29:9*/
                            
                            /* IL_1D: nop  CastClass.cs:30:9*/
                            
                            /* IL_1E: ldstr Failure */
                            /* IL_23: call Void Log(System.Object) */
                            asm1.x6000001(BLR.new_string("Failure"));
                            /* IL_28: nop  */
                            
                            /* IL_29: nop  CastClass.cs:32:9*/
                            
                            /* IL_2A: leave.s IL_2C CastClass.cs:16707566:0*/
                            in_block_1 = false;
                            __pos__ = 0x2C;
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    break;
                    case 0x2C:
                    /* IL_2C: nop  CastClass.cs:16707566:0*/
                    
                    /* IL_2D: ret  CastClass.cs:33:5*/
                    return ;
                }
            }
        };
    };;
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
    asm.A = BLR.declare_type(
        "A",
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
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm1.A())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
