var asm1; (function (asm)
{
    asm.FullName = "ReflectionMethods.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void X()*/
    asm.x600000c = function X(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* Void Y()*/
    asm.x600000d = function Y(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* Void Z()*/
    asm.x600000e = function Z(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.A)().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc3;
        var loc4;
        var loc2;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.A)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldtoken A*/
                /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0A: stloc.0 */
                loc0 = (asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t1));
                /* IL_0B: ldloc.0 */
                /* IL_0C: callvirt MethodInfo[] GetMethods()*/
                /* IL_11: stloc.1 */
                loc1 = (((loc0.vtable)["asm0.x60000bd"])())(loc0);
                /* IL_12: ldloc.1 */
                /* IL_13: stloc.3 */
                loc3 = loc1;
                /* IL_14: ldc.i4.0 */
                /* IL_15: stloc.s 4*/
                loc4 = (0|0);
                /* IL_17: br.s IL_2F*/
                __pos_0__ = 0x2F;
                continue;
                case 0x19:
                /* IL_19: ldloc.3 */
                /* IL_1A: ldloc.s 4*/
                /* IL_1C: ldelem.ref */
                /* IL_1D: stloc.2 */
                loc2 = (loc3.jsarr)[loc4];
                /* IL_1E: ldloc.2 */
                /* IL_1F: callvirt String get_Name()*/
                /* IL_24: call Void Log(System.Object)*/
                (asm1.x6000001)((((loc2.vtable)["asm0.x600003d"])())(loc2));
                /* IL_29: ldloc.s 4*/
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: add */
                /* IL_2D: stloc.s 4*/
                loc4 = (loc4 + (1|0)) | (0|0);
                case 0x2F:
                /* IL_2F: ldloc.s 4*/
                /* IL_31: ldloc.3 */
                /* IL_32: ldlen */
                /* IL_33: conv.i4 */
                /* IL_34: blt.s IL_19*/
                
                if (loc4 < (loc3.jsarr.length | (0|0))){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_36: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
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
        (BLR.init_type)(this,"A",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x600000c",
                "X"
            ],
            [
                asm1,
                "x600000d",
                "Y"
            ],
            [
                asm1,
                "x600000e",
                "Z"
            ]
        ],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
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
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
