var asm1;(function (asm)
{
    asm.FullName = "iface6.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 D.IA.Add(Int32)*/
    asm.x6000004 = function IA_Add(arg0, arg1)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldc.i4.5  */
        /* IL_02: stloc.0  */
        loc0 = (5|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Int32 D.IB.Add(Int32)*/
    asm.x6000005 = function IB_Add(arg0, arg1)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldc.i4.6  */
        /* IL_02: stloc.0  */
        loc0 = (6|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /*  D..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void E.doom()*/
    asm.x6000008 = function doom(arg0)
    {
        /* IL_00: nop  */
        /* IL_03: ret  */
        return ;
    };;
    /* System.Object E.Clone()*/
    asm.x6000009 = function Clone(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldnull  */
        /* IL_02: stloc.0  */
        loc0 = null;
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Void E.Dispose()*/
    asm.x600000a = function Dispose(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /* System.Int32 E.IA.Add(Int32)*/
    asm.x600000b = function IA_Add(arg0, arg1)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldc.i4.7  */
        /* IL_02: stloc.0  */
        loc0 = (7|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Int32 E.IB.Add(Int32)*/
    asm.x600000c = function IB_Add(arg0, arg1)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldc.i4.8  */
        /* IL_02: stloc.0  */
        loc0 = (8|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /*  E..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: nop  */
        /* IL_08: ret  */
        return ;
    };;
    /* static System.Int32 C.Test(IC)*/
    asm.x600000d_init = function ()
    {
        (asm1.IA().init)();
        (asm1.IB().init)();
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
        var loc0;
        var loc1;
        var loc2;
        t0 = asm1.IA();
        t1 = asm1.IB();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.0  */
                /* IL_03: callvirt Int32 Add(System.Int32) */
                /* IL_08: ldc.i4.5  */
                /* IL_0A: ceq  */
                /* IL_0B: ldc.i4.0  */
                /* IL_0D: ceq  */
                /* IL_0E: stloc.0  */
                loc0 = (((((((arg0.ifacemap)[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(arg0),(0|0)) === (5|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0F: ldloc.0  */
                /* IL_10: brfalse.s IL_16 */
                
                if ((!(loc0))){
                    __pos__ = 0x16;
                    continue;
                }
                /* IL_12: ldc.i4.1  */
                /* IL_13: stloc.1  */
                loc1 = (1|0);
                /* IL_14: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x16:
                /* IL_16: ldarg.0  */
                /* IL_17: ldc.i4.0  */
                /* IL_18: callvirt Int32 Add(System.Int32) */
                /* IL_1D: ldc.i4.6  */
                /* IL_1F: ceq  */
                /* IL_20: ldc.i4.0  */
                /* IL_22: ceq  */
                /* IL_23: stloc.2  */
                loc2 = (((((((arg0.ifacemap)[t1].x6000002)())(CILJS.convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_24: ldloc.2  */
                /* IL_25: brfalse.s IL_2B */
                
                if ((!(loc2))){
                    __pos__ = 0x2B;
                    continue;
                }
                /* IL_27: ldc.i4.1  */
                /* IL_28: stloc.1  */
                loc1 = (1|0);
                /* IL_29: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x2B:
                /* IL_2B: ldc.i4.0  */
                /* IL_2C: stloc.1  */
                loc1 = (0|0);
                case 0x2F:
                /* IL_2F: ldloc.1  */
                /* IL_30: ret  */
                return loc1;
            }
        }
    };
    /* static System.Void C.Test2(IE)*/
    asm.x600000e_init = function ()
    {
        (asm1.IE().init)();
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
        var loc0;
        t0 = asm1.IE();
        t1 = (asm0)["System.ICloneable"]();
        t2 = (asm0)["System.IDisposable"]();
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Void doom() */
        (((arg0.ifacemap)[t0].x6000003)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_07: nop  */
        /* IL_08: ldarg.0  */
        /* IL_09: callvirt Object Clone() */
        /* IL_0E: stloc.0  */
        loc0 = (((arg0.ifacemap)[t1].x6000092)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_0F: ldarg.0  */
        /* IL_10: callvirt Void Dispose() */
        (((arg0.ifacemap)[t2].x6000095)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_15: nop  */
        /* IL_16: ret  */
        return ;
    };
    /* static System.Int32 C.Main()*/
    asm.x600000f_init = function ()
    {
        (asm1.D().init)();
        (asm1.E().init)();
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
        var loc2;
        var loc3;
        CILJS.init_base_types();
        t0 = asm1.D();
        t1 = asm1.E();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000006,[null]);
        /* IL_07: newobj Void .ctor() */
        /* IL_0C: stloc.1  */
        loc1 = CILJS.newobj(t1,asm1.x6000007,[null]);
        /* IL_0D: ldloc.1  */
        /* IL_0E: call Int32 Test(IC) */
        /* IL_13: stloc.2  */
        loc2 = asm1.x600000d(loc1);
        /* IL_14: ldloc.1  */
        /* IL_15: call Void Test2(IE) */
        asm1.x600000e(loc1);
        /* IL_1A: nop  */
        /* IL_1B: ldloc.0  */
        /* IL_1C: call Int32 Test(IC) */
        /* IL_21: stloc.3  */
        loc3 = asm1.x600000d(loc0);
        /* IL_24: ldloc.3  */
        /* IL_25: ret  */
        return loc3;
    };
    /*  C..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
                    [asm1, "x6000001", "Add"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
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
                    [asm1, "x6000002", "Add"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
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
            CILJS.init_type(this,asm,"IC",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                null);
            CILJS.implement_interface(
                this,
                [asm1.IB()],
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
                    [asm1, "x6000003", "doom"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
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
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
            CILJS.declare_virtual(this,"asm1.x6000005","asm1.x6000005");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.IC()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x6000001': function (){ return asm1.x6000004;}
                });
            CILJS.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x6000002': function (){ return asm1.x6000005;}
                });
        });
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[
                    [asm1, "x6000008", "doom"],
                    [asm1, "x6000009", "Clone"],
                    [asm1, "x600000a", "Dispose"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x6000008","asm1.x6000008");
            CILJS.declare_virtual(this,"asm1.x6000009","asm1.x6000009");
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.IE()],
                {
                    'x6000003': function (){ return asm1.x6000008;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.ICloneable"]()],
                {
                    'x6000092': function (){ return asm1.x6000009;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x6000095': function (){ return asm1.x600000a;}
                });
            CILJS.implement_interface(
                this,
                [asm1.IC()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x6000001': function (){ return asm1.x600000b;}
                });
            CILJS.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x6000002': function (){ return asm1.x600000c;}
                });
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
