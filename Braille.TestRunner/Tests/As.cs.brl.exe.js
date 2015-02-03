var asm1; (function (asm)
{
    asm.FullName = "As.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void AsA(System.Object)*/
        (asm1.x6000010)((BLR.newobj)(t1,asm1.x600000c,[
            null
        ]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void AsA(System.Object)*/
        (asm1.x6000010)((BLR.newobj)(t2,asm1.x600000d,[
            null
        ]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void AsA(System.Object)*/
        (asm1.x6000010)((BLR.newobj)(t3,asm1.x600000e,[
            null
        ]));
        /* IL_1E: newobj Void .ctor()*/
        /* IL_23: call Void As[A](System.Object)*/
        ((asm1.x6000011)((asm1.A)()))((BLR.newobj)(t1,asm1.x600000c,[
            null
        ]));
        /* IL_28: newobj Void .ctor()*/
        /* IL_2D: call Void As[A](System.Object)*/
        ((asm1.x6000011)((asm1.A)()))((BLR.newobj)(t2,asm1.x600000d,[
            null
        ]));
        /* IL_32: newobj Void .ctor()*/
        /* IL_37: call Void As[A](System.Object)*/
        ((asm1.x6000011)((asm1.A)()))((BLR.newobj)(t3,asm1.x600000e,[
            null
        ]));
        /* IL_3C: newobj Void .ctor()*/
        /* IL_41: call Void As[B](System.Object)*/
        ((asm1.x6000011)((asm1.B)()))((BLR.newobj)(t1,asm1.x600000c,[
            null
        ]));
        /* IL_46: newobj Void .ctor()*/
        /* IL_4B: call Void As[B](System.Object)*/
        ((asm1.x6000011)((asm1.B)()))((BLR.newobj)(t2,asm1.x600000d,[
            null
        ]));
        /* IL_50: newobj Void .ctor()*/
        /* IL_55: call Void As[B](System.Object)*/
        ((asm1.x6000011)((asm1.B)()))((BLR.newobj)(t3,asm1.x600000e,[
            null
        ]));
        /* IL_5A: ret */
        return ;
    };
    /* static Void AsA(System.Object)*/
    asm.x6000010_init = function ()
    {
        ((asm1.A)().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function (arg0)
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function AsA(arg0)
    {
        var t0;
        var st_02;
        var __pos_0__;
        t0 = (asm1.A)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst A*/
                /* IL_06: brfalse.s IL_0F*/
                
                if ((!((t0.IsInst)(arg0)))){
                    __pos_0__ = 0xF;
                    continue;
                }
                /* IL_08: ldstr not null*/
                st_02 = (BLR.new_string)("not null");
                /* IL_0D: br.s IL_14*/
                __pos_0__ = 0x14;
                continue;
                case 0xF:
                /* IL_0F: ldstr null*/
                st_02 = (BLR.new_string)("null");
                case 0x14:
                /* IL_14: call Void Log(System.Object)*/
                (asm1.x6000001)(st_02);
                /* IL_19: ret */
                return ;
            }
        }
    };
    /* static Void As[T](System.Object)*/
    asm.x6000011 = function (T)
    {
        return function As(arg0)
        {
            var t0;
            var st_04;
            var __pos_0__;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: ldarg.0 */
                    /* IL_01: isinst T*/
                    /* IL_06: unbox.any T*/
                    /* IL_0B: box T*/
                    /* IL_10: brfalse.s IL_19*/
                    
                    if ((!((BLR.box)((BLR.unbox_any)((t0.IsInst)(arg0),t0),t0)))){
                        __pos_0__ = 0x19;
                        continue;
                    }
                    /* IL_12: ldstr not null*/
                    st_04 = (BLR.new_string)("not null");
                    /* IL_17: br.s IL_1E*/
                    __pos_0__ = 0x1E;
                    continue;
                    case 0x19:
                    /* IL_19: ldstr null*/
                    st_04 = (BLR.new_string)("null");
                    case 0x1E:
                    /* IL_1E: call Void Log(System.Object)*/
                    (asm1.x6000001)(st_04);
                    /* IL_23: ret */
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
