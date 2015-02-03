var asm1; (function (asm)
{
    asm.FullName = "IsInstClass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void Main()*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.A)().init)();
        ((asm1.B)().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.A)();
        t2 = (asm1.B)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void Isa(System.Object)*/
        (asm1.x600000f)((BLR.newobj)(t1,asm1.x600000c,[
            null
        ]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void Isa(System.Object)*/
        (asm1.x600000f)((BLR.newobj)(t2,asm1.x600000d,[
            null
        ]));
        /* IL_14: ldstr hello*/
        /* IL_19: call Void Isa(System.Object)*/
        (asm1.x600000f)((BLR.new_string)("hello"));
        /* IL_1E: ret */
        return ;
    };
    /* static Void Isa(System.Object)*/
    asm.x600000f_init = function ()
    {
        ((asm1.A)().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Isa(arg0)
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
                /* IL_06: brtrue.s IL_0F*/
                
                if ((t0.IsInst)(arg0)){
                    __pos_0__ = 0xF;
                    continue;
                }
                /* IL_08: ldstr false*/
                st_02 = (BLR.new_string)("false");
                /* IL_0D: br.s IL_14*/
                __pos_0__ = 0x14;
                continue;
                case 0xF:
                /* IL_0F: ldstr true*/
                st_02 = (BLR.new_string)("true");
                case 0x14:
                /* IL_14: call Void Log(System.Object)*/
                (asm1.x6000001)(st_02);
                /* IL_19: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000009");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
