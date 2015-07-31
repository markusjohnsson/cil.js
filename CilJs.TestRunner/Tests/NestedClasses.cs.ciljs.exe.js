var asm2; (function (asm)
{
    asm.FullName = "NestedClasses.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void B.M()*/
    asm.x6000002 = function M()
    {
        /* IL_00: ldstr A.B.M*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A.B.M"));
        /* IL_0A: ret */
        return ;
    };;
    /* System.Void B.X()*/
    asm.x6000003 = function X(arg0)
    {
        /* IL_00: ldstr A.B.X*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A.B.X"));
        /* IL_0A: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void E.Y()*/
    asm.x6000007_init = function ()
    {
        ((asm2)["C+D+E"]().init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function (arg0)
    {
        asm.x6000007_init.apply(this,arguments);
        return asm.x6000007_.apply(this,arguments);
    };;
    asm.x6000007_ = function Y(arg0)
    {
        var t0;
        var t1;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        t0 = (asm2)["C+D+E"]();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: ldstr C.D.E.Y*/
        st_05 = CILJS.new_string("C.D.E.Y");
        asm2.x6000009();
        /* IL_05: ldsfld Int32 y*/
        st_00 = t0.y;
        /* IL_0A: dup */
        st_04 = (st_01 = st_00);
        /* IL_0B: ldc.i4.1 */
        st_02 = (1|0);
        /* IL_0C: add */
        st_03 = ((st_01 + st_02) | (0|0));
        asm2.x6000009();
        /* IL_0D: stsfld Int32 y*/
        (t0)["y"] = st_03;
        /* IL_12: box System.Int32*/
        st_06 = {
            'boxed': st_04,
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        };
        /* IL_17: call String Concat(System.Object, System.Object)*/
        st_07 = asm0.x600012b(st_05,st_06);
        /* IL_1C: call Void Log(System.Object)*/
        asm1.x6000001(st_07);
        /* IL_21: ret */
        return ;
    };
    /*  E..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  E..cctor()*/
    asm.x6000009_init = function ()
    {
        ((asm2)["C+D+E"]().init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function ()
    {
        asm.x6000009_init.apply(this,arguments);
        return asm.x6000009_.apply(this,arguments);
    };;
    asm.x6000009_ = function _cctor()
    {
        var t0;
        
        if ((asm2)["C+D+E"]().FieldsInitialized){
            return;
        }
        (asm2)["C+D+E"]().FieldsInitialized = true;
        t0 = (asm2)["C+D+E"]();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: stsfld Int32 y*/
        (t0)["y"] = (123|0);
        /* IL_07: ret */
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        ((asm2)["A+B"]().init)();
        ((asm2)["C+D+E"]().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = (asm2)["A+B"]();
        t1 = (asm2)["C+D+E"]();
        /* IL_00: call Void M()*/
        asm2.x6000002();
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000004,[null]);
        /* IL_0B: ldloc.0 */
        /* IL_0C: callvirt Void X()*/
        asm2.x6000003(loc0);
        asm2.x6000009();
        /* IL_11: newobj Void .ctor()*/
        /* IL_16: stloc.1 */
        loc1 = CILJS.newobj(t1,asm2.x6000008,[null]);
        /* IL_17: ldloc.1 */
        /* IL_18: callvirt Void Y()*/
        asm2.x6000007(loc1);
        /* IL_1D: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["A+B"] = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A+B",false,false,false,false,false,[],[
                    [asm2, "x6000003", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["C+D"] = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C+D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["C+D+E"] = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C+D+E",false,false,false,false,false,[],[
                    [asm2, "x6000007", "Y"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.y = 0;
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000007");
            this.GenericTypeMetadataName = "asm2.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x600000a;
})(asm2 || (asm2 = {}));
