var asm1; (function (asm)
{
    asm.FullName = "CastClass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000a(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = asm1.B();
        t3 = asm1.C();
        /* IL_00: call Void Test[A]()*/
        (asm1.x600000e(asm1.A()))();
        /* IL_05: call Void Test[B]()*/
        (asm1.x600000e(asm1.B()))();
        /* IL_0A: call Void Test[C]()*/
        (asm1.x600000e(asm1.C()))();
        /* IL_0F: ret */
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
            t0 = asm1.A();
            t1 = T;
            t2 = asm1.B();
            t3 = asm1.C();
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: call Void Cast[T](System.Object)*/
            (asm1.x600000f(T))(BLR.newobj(t0,asm1.x600000a,[null]));
            /* IL_0A: newobj Void .ctor()*/
            /* IL_0F: call Void Cast[T](System.Object)*/
            (asm1.x600000f(T))(BLR.newobj(t2,asm1.x600000b,[null]));
            /* IL_14: newobj Void .ctor()*/
            /* IL_19: call Void Cast[T](System.Object)*/
            (asm1.x600000f(T))(BLR.newobj(t3,asm1.x600000c,[null]));
            /* IL_1E: ret */
            return ;
        };
    };
    /* static System.Void Program.Cast<T>(Object)*/
    asm.x600000f = function (T)
    {
        return function Cast(arg0)
        {
            var __pos_0__;
            var __error_handled_1__;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    
                    try {
                        /* IL_00: ldarg.0 */
                        /* IL_01: unbox.any T*/
                        /* IL_06: pop */
                        BLR.unbox_any(arg0,T);
                        /* IL_07: ldstr Success*/
                        /* IL_0C: call Void Log(System.Object)*/
                        asm1.x6000001(BLR.new_string("Success"));
                        /* IL_11: leave.s IL_20*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x20;
                    }
                    
                    catch (__error__){
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Object"]())){
                            st_03 = __error__;
                            __error_handled_1__ = true;
                            /* IL_13: pop */
                            
                            /* IL_14: ldstr Failure*/
                            /* IL_19: call Void Log(System.Object)*/
                            asm1.x6000001(BLR.new_string("Failure"));
                            /* IL_1E: leave.s IL_20*/
                            __pos_1__ = -1;
                            __pos_0__ = 0x20;
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    break;
                    case 0x20:
                    /* IL_20: ret */
                    return ;
                }
            }
        };
    };;
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
