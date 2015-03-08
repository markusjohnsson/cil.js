var asm1; (function (asm)
{
    asm.FullName = "NestedClasses.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void M()*/
    asm.x600000d = function M()
    {
        /* IL_00: ldstr A.B.M*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(BLR.new_string("A.B.M"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void X()*/
    asm.x600000e = function X(arg0)
    {
        /* IL_00: ldstr A.B.X*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(BLR.new_string("A.B.X"));
        /* IL_0A: ret */
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
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void Y()*/
    asm.x6000012_init = function ()
    {
        ((asm1)["C+D+E"]().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function (arg0)
    {
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Y(arg0)
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
        t0 = (asm1)["C+D+E"]();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: ldstr C.D.E.Y*/
        st_05 = BLR.new_string("C.D.E.Y");
        asm1.x6000014();
        /* IL_05: ldsfld Int32 y*/
        st_00 = t0.y;
        /* IL_0A: dup */
        st_04 = (st_01 = st_00);
        /* IL_0B: ldc.i4.1 */
        st_02 = (1|0);
        /* IL_0C: add */
        st_03 = ((st_01 + st_02) | (0|0));
        asm1.x6000014();
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
        st_07 = asm0.x600017d(st_05,st_06);
        /* IL_1C: call Void Log(System.Object)*/
        asm1.x6000001(st_07);
        /* IL_21: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x6000014_init = function ()
    {
        ((asm1)["C+D+E"]().init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function ()
    {
        asm.x6000014_init.apply(this,arguments);
        return asm.x6000014_.apply(this,arguments);
    };;
    asm.x6000014_ = function _cctor()
    {
        var t0;
        
        if ((asm1)["C+D+E"]().FieldHasBeenInitialized){
            return;
        }
        (asm1)["C+D+E"]().FieldHasBeenInitialized = true;
        t0 = (asm1)["C+D+E"]();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: stsfld Int32 y*/
        (t0)["y"] = (123|0);
        /* IL_07: ret */
        return ;
    };
    /* static Void Main()*/
    asm.x6000015_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm1)["A+B"]().init)();
        ((asm1)["C+D+E"]().init)();
        asm.x6000015 = asm.x6000015_;
    };;
    asm.x6000015 = function ()
    {
        asm.x6000015_init.apply(this,arguments);
        return asm.x6000015_.apply(this,arguments);
    };;
    asm.x6000015_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm1)["A+B"]();
        t2 = (asm1)["C+D+E"]();
        /* IL_00: call Void M()*/
        asm1.x600000d();
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: stloc.0 */
        loc0 = BLR.newobj(t1,asm1.x600000f,[null]);
        /* IL_0B: ldloc.0 */
        /* IL_0C: callvirt Void X()*/
        asm1.x600000e(loc0);
        asm1.x6000014();
        /* IL_11: newobj Void .ctor()*/
        /* IL_16: stloc.1 */
        loc1 = BLR.newobj(t2,asm1.x6000013,[null]);
        /* IL_17: ldloc.1 */
        /* IL_18: callvirt Void Y()*/
        asm1.x6000012(loc1);
        /* IL_1D: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000016 = function _ctor(arg0)
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
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A+B"] = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A+B",false,false,false,false,false,[],[
                    [asm1, "x600000e", "X"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["C+D"] = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C+D",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["C+D+E"] = BLR.declare_type(
        "E",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C+D+E",false,false,false,false,false,[],[
                    [asm1, "x6000012", "Y"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.y = 0;
            this.GenericTypeMetadataName = "asm1.t200000b";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000015;
})(asm1 || (asm1 = {}));
