var asm1; (function (asm)
{
    asm.FullName = "CastClass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000f_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.A)().init)();
        ((asm1.B)().init)();
        ((asm1.C)().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.A)();
        t2 = (asm1.B)();
        t3 = (asm1.C)();
        /* IL_00: call Void Test[A]()*/
        ((asm1.x6000010)((asm1.A)()))();
        /* IL_05: call Void Test[B]()*/
        ((asm1.x6000010)((asm1.B)()))();
        /* IL_0A: call Void Test[C]()*/
        ((asm1.x6000010)((asm1.C)()))();
        /* IL_0F: ret */
        return ;
    };
    /* static Void Test[T]()*/
    asm.x6000010_init = function (T)
    {
        return function ()
        {
            ((asm1.A)().init)();
            ((asm1.B)().init)();
            ((asm1.C)().init)();
            asm.x6000010 = asm.x6000010_;
        };
    };;
    asm.x6000010 = function (T)
    {
        return function ()
        {
            ((asm.x6000010_init)(T).apply)(this,arguments);
            return ((asm.x6000010_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000010_ = function (T)
    {
        return function Test()
        {
            var t0;
            var t1;
            var t2;
            var t3;
            t0 = (asm1.A)();
            t1 = T;
            t2 = (asm1.B)();
            t3 = (asm1.C)();
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: call Void Cast[T](System.Object)*/
            ((asm1.x6000011)(T))((BLR.newobj)(t0,asm1.x600000c,[
                null
            ]));
            /* IL_0A: newobj Void .ctor()*/
            /* IL_0F: call Void Cast[T](System.Object)*/
            ((asm1.x6000011)(T))((BLR.newobj)(t2,asm1.x600000d,[
                null
            ]));
            /* IL_14: newobj Void .ctor()*/
            /* IL_19: call Void Cast[T](System.Object)*/
            ((asm1.x6000011)(T))((BLR.newobj)(t3,asm1.x600000e,[
                null
            ]));
            /* IL_1E: ret */
            return ;
        };
    };
    /* static Void Cast[T](System.Object)*/
    asm.x6000011 = function (T)
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
                        (BLR.unbox_any)(arg0,T);
                        /* IL_07: ldstr Success*/
                        /* IL_0C: call Void Log(System.Object)*/
                        (asm1.x6000001)((BLR.new_string)("Success"));
                        /* IL_11: leave.s IL_20*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x20;
                    }
                    
                    catch (__error__){
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof ((asm0)["System.Object"])())){
                            st_03 = __error__;
                            __error_handled_1__ = true;
                            /* IL_13: pop */
                            
                            /* IL_14: ldstr Failure*/
                            /* IL_19: call Void Log(System.Object)*/
                            (asm1.x6000001)((BLR.new_string)("Failure"));
                            /* IL_1E: leave.s IL_20*/
                            __pos_1__ = -1;
                            __pos_0__ = 0x20;
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    case 0x20:
                    /* IL_20: ret */
                    return ;
                }
            }
        };
    };;
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (BLR.declare_type)("TestLog",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000002");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.TestHelper = (BLR.declare_type)("TestHelper",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000006");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.A = (BLR.declare_type)("A",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"A",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.B = (BLR.declare_type)("B",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"B",asm,false,false,false,false,false,[],[],(asm1.A)(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new ((asm1.A)())();
    },[]);
    asm.C = (BLR.declare_type)("C",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"C",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000009");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000a");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
