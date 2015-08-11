var asm1;(function (asm)
{
    asm.FullName = "iface2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 D.IA.Add(Int32)*/
    asm.x6000005 = function IA_Add(arg0, arg1)
    {
        /* IL_00: ldc.i4.5  */
        /* IL_01: ret  */
        return (5|0);
    };;
    /* System.Int32 D.IA.Add2(Int32)*/
    asm.x6000006 = function IA_Add2(arg0, arg1)
    {
        /* IL_00: ldc.i4.6  */
        /* IL_01: ret  */
        return (6|0);
    };;
    /* System.Int32 D.IB.Add(Int32)*/
    asm.x6000007 = function IB_Add(arg0, arg1)
    {
        /* IL_00: ldc.i4.7  */
        /* IL_01: ret  */
        return (7|0);
    };;
    /*  D..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Int32 E.IC.Add(Int32)*/
    asm.x6000009 = function IC_Add(arg0, arg1)
    {
        /* IL_00: ldc.i4.8  */
        /* IL_01: ret  */
        return (8|0);
    };;
    /* System.Int32 E.IA.Add(Int32)*/
    asm.x600000a = function IA_Add(arg0, arg1)
    {
        /* IL_00: ldc.i4.s 9 */
        /* IL_02: ret  */
        return (9|0);
    };;
    /* System.Int32 E.IA.Add2(Int32)*/
    asm.x600000b = function IA_Add2(arg0, arg1)
    {
        /* IL_00: ldc.i4.s 10 */
        /* IL_02: ret  */
        return (10|0);
    };;
    /* System.Int32 E.IB.Add(Int32)*/
    asm.x600000c = function IB_Add(arg0, arg1)
    {
        /* IL_00: ldc.i4.s 11 */
        /* IL_02: ret  */
        return (11|0);
    };;
    /*  E..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Int32 C.Test(ID)*/
    asm.x600000e_init = function ()
    {
        (asm1.IA().init)();
        (asm1.IB().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Test(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        t0 = asm1.IA();
        t1 = asm1.IB();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldc.i4.0  */
                /* IL_02: callvirt Int32 Add2(System.Int32) */
                /* IL_07: ldc.i4.6  */
                /* IL_08: beq.s IL_0C */
                
                if ((((arg0.ifacemap)[t0].x6000002)())(CILJS.convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)){
                    __pos__ = 0xC;
                    continue;
                }
                /* IL_0A: ldc.i4.1  */
                /* IL_0B: ret  */
                return (1|0);
                case 0xC:
                /* IL_0C: ldarg.0  */
                /* IL_0D: ldc.i4.0  */
                /* IL_0E: callvirt Int32 Add(System.Int32) */
                /* IL_13: ldc.i4.7  */
                /* IL_14: beq.s IL_18 */
                
                if ((((arg0.ifacemap)[t1].x6000003)())(CILJS.convert_box_to_pointer_as_needed(arg0),(0|0)) === (7|0)){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_16: ldc.i4.1  */
                /* IL_17: ret  */
                return (1|0);
                case 0x18:
                /* IL_18: ldc.i4.0  */
                /* IL_19: ret  */
                return (0|0);
            }
        }
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
        var in_block_0;
        var __pos__;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.D();
        t1 = asm1.E();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x6000008,[null]);
                /* IL_06: newobj Void .ctor() */
                /* IL_0B: pop  */
                CILJS.newobj(t1,asm1.x600000d,[null]);
                /* IL_0C: ldloc.0  */
                /* IL_0D: call Int32 Test(ID) */
                /* IL_12: brfalse.s IL_16 */
                
                if ((!(asm1.x600000e(loc0)))){
                    __pos__ = 0x16;
                    continue;
                }
                /* IL_14: ldc.i4.1  */
                /* IL_15: ret  */
                return (1|0);
                case 0x16:
                /* IL_16: ldc.i4.0  */
                /* IL_17: ret  */
                return (0|0);
            }
        }
    };
    /*  C..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
                    [asm1, "x6000001", "Add"],
                    [asm1, "x6000002", "Add2"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
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
                    [asm1, "x6000003", "Add"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
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
            CILJS.init_type(this,asm,"IC",false,false,true,false,false,[],[
                    [asm1, "x6000004", "Add"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
        });
    asm.ID = CILJS.declare_type(
        "ID",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"ID",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                null);
            CILJS.implement_interface(
                this,
                [asm1.IB()],
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
            CILJS.declare_virtual(this,"asm1.x6000005","asm1.x6000005");
            CILJS.declare_virtual(this,"asm1.x6000006","asm1.x6000006");
            CILJS.declare_virtual(this,"asm1.x6000007","asm1.x6000007");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.ID()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x6000001': function (){ return asm1.x6000005;},
                    'x6000002': function (){ return asm1.x6000006;}
                });
            CILJS.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x6000003': function (){ return asm1.x6000007;}
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
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x6000009","asm1.x6000009");
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.IC()],
                {
                    'x6000004': function (){ return asm1.x6000009;}
                });
            CILJS.implement_interface(
                this,
                [asm1.ID()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x6000001': function (){ return asm1.x600000a;},
                    'x6000002': function (){ return asm1.x600000b;}
                });
            CILJS.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x6000003': function (){ return asm1.x600000c;}
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
