var asm2; (function (asm)
{
    asm.FullName = "iface6.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 D.IA.Add(Int32)*/
    asm.x6000004 = function IA_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* System.Int32 D.IB.Add(Int32)*/
    asm.x6000005 = function IB_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /*  D..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void E.doom()*/
    asm.x6000008 = function doom(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* System.Object E.Clone()*/
    asm.x6000009 = function Clone(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* System.Void E.Dispose()*/
    asm.x600000a = function Dispose(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* System.Int32 E.IA.Add(Int32)*/
    asm.x600000b = function IA_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /* System.Int32 E.IB.Add(Int32)*/
    asm.x600000c = function IB_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /*  E..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Int32 C.Test(IC)*/
    asm.x600000d_init = function ()
    {
        (asm2.IA().init)();
        (asm2.IB().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Test(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        t0 = asm2.IA();
        t1 = asm2.IB();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.0 */
                /* IL_02: callvirt Int32 Add(System.Int32)*/
                /* IL_07: ldc.i4.5 */
                /* IL_08: beq.s IL_0C*/
                
                if ((((arg0.ifacemap)[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(arg0),(0|0)) === (5|0)){
                    __pos__ = 0xC;
                    continue;
                }
                /* IL_0A: ldc.i4.1 */
                /* IL_0B: ret */
                return (1|0);
                case 0xC:
                /* IL_0C: ldarg.0 */
                /* IL_0D: ldc.i4.0 */
                /* IL_0E: callvirt Int32 Add(System.Int32)*/
                /* IL_13: ldc.i4.6 */
                /* IL_14: beq.s IL_18*/
                
                if ((((arg0.ifacemap)[t1].x6000002)())(CILJS.convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_16: ldc.i4.1 */
                /* IL_17: ret */
                return (1|0);
                case 0x18:
                /* IL_18: ldc.i4.0 */
                /* IL_19: ret */
                return (0|0);
            }
        }
    };
    /* static System.Void C.Test2(IE)*/
    asm.x600000e_init = function ()
    {
        (asm2.IE().init)();
        ((asm0)["System.ICloneable"]().init)();
        ((asm0)["System.IDisposable"]().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Test2(arg0)
    {
        var t0;
        var t1;
        var t2;
        t0 = asm2.IE();
        t1 = (asm0)["System.ICloneable"]();
        t2 = (asm0)["System.IDisposable"]();
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Void doom()*/
        (((arg0.ifacemap)[t0].x6000003)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_06: ldarg.0 */
        /* IL_07: callvirt Object Clone()*/
        /* IL_0C: pop */
        (((arg0.ifacemap)[t1].x6000092)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_0D: ldarg.0 */
        /* IL_0E: callvirt Void Dispose()*/
        (((arg0.ifacemap)[t2].x6000095)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_13: ret */
        return ;
    };
    /* static System.Int32 C.Main()*/
    asm.x600000f_init = function ()
    {
        (asm2.D().init)();
        (asm2.E().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = asm2.D();
        t1 = asm2.E();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000006,[null]);
        /* IL_06: newobj Void .ctor()*/
        /* IL_0B: stloc.1 */
        loc1 = CILJS.newobj(t1,asm2.x6000007,[null]);
        /* IL_0C: ldloc.1 */
        /* IL_0D: call Int32 Test(IC)*/
        /* IL_12: pop */
        asm2.x600000d(loc1);
        /* IL_13: ldloc.1 */
        /* IL_14: call Void Test2(IE)*/
        asm2.x600000e(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: call Int32 Test(IC)*/
        /* IL_1F: ret */
        return asm2.x600000d(loc0);
    };
    /*  C..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.IA = CILJS.declare_type(
        "IA",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IA",false,false,true,false,false,[],[
                    [asm2, "x6000001", "Add"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
        });
    asm.IB = CILJS.declare_type(
        "IB",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IB",false,false,true,false,false,[],[
                    [asm2, "x6000002", "Add"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
        });
    asm.IC = CILJS.declare_type(
        "IC",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IC",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.implement_interface(
                this,
                [asm2.IA()],
                null);
            CILJS.implement_interface(
                this,
                [asm2.IB()],
                null);
        });
    asm.IE = CILJS.declare_type(
        "IE",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IE",false,false,true,false,false,[],[
                    [asm2, "x6000003", "doom"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.implement_interface(
                this,
                [(asm0)["System.ICloneable"]()],
                null);
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                null);
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm2.x6000004","asm2.x6000004");
            CILJS.declare_virtual(this,"asm2.x6000005","asm2.x6000005");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.IC()],
                {});
            CILJS.implement_interface(
                this,
                [asm2.IA()],
                {
                    'x6000001': function (){ return asm2.x6000004;}
                });
            CILJS.implement_interface(
                this,
                [asm2.IB()],
                {
                    'x6000002': function (){ return asm2.x6000005;}
                });
        });
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[
                    [asm2, "x6000008", "doom"],
                    [asm2, "x6000009", "Clone"],
                    [asm2, "x600000a", "Dispose"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000007");
            this.GenericTypeMetadataName = "asm2.t2000007";
            CILJS.declare_virtual(this,"asm2.x6000008","asm2.x6000008");
            CILJS.declare_virtual(this,"asm2.x6000009","asm2.x6000009");
            CILJS.declare_virtual(this,"asm2.x600000a","asm2.x600000a");
            CILJS.declare_virtual(this,"asm2.x600000b","asm2.x600000b");
            CILJS.declare_virtual(this,"asm2.x600000c","asm2.x600000c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.IE()],
                {
                    'x6000003': function (){ return asm2.x6000008;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.ICloneable"]()],
                {
                    'x6000092': function (){ return asm2.x6000009;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x6000095': function (){ return asm2.x600000a;}
                });
            CILJS.implement_interface(
                this,
                [asm2.IC()],
                {});
            CILJS.implement_interface(
                this,
                [asm2.IA()],
                {
                    'x6000001': function (){ return asm2.x600000b;}
                });
            CILJS.implement_interface(
                this,
                [asm2.IB()],
                {
                    'x6000002': function (){ return asm2.x600000c;}
                });
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000008");
            this.GenericTypeMetadataName = "asm2.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x600000f;
})(asm2 || (asm2 = {}));
