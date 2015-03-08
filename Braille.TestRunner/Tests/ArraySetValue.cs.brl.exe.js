var asm1; (function (asm)
{
    asm.FullName = "ArraySetValue.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* String GetValue()*/
    asm.x600000d = function GetValue(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldflda Int32 V*/
        /* IL_06: call String ToString()*/
        /* IL_0B: ret */
        return asm0.x60000a4({
                'w': function (v)
                {
                    arg0.r().V = v;
                },
                'r': function ()
                {
                    return arg0.r().V;
                }
            });
    };;
    /* String GetValue()*/
    asm.x600000e = function GetValue(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String V*/
        /* IL_06: callvirt String ToString()*/
        /* IL_0B: ret */
        return ((arg0.V.vtable)["asm0.x6000005"]())(arg0.V);
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void ObjectArray()*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.Object"]().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function ObjectArray()
    {
        var t0;
        var t1;
        var loc0;
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.1 */
        /* IL_01: newarr System.Object*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_array(t0,(1|0));
        /* IL_07: ldloc.0 */
        /* IL_08: ldc.i4.1 */
        /* IL_09: box System.Int32*/
        /* IL_0E: ldc.i4.0 */
        /* IL_0F: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(loc0,{
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },(0|0));
        /* IL_14: ldloc.0 */
        /* IL_15: ldc.i4.0 */
        /* IL_16: ldelem.ref */
        /* IL_17: call Void Log(System.Object)*/
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_1C: ldloc.0 */
        /* IL_1D: ldstr test*/
        /* IL_22: ldc.i4.0 */
        /* IL_23: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(loc0,BLR.new_string("test"),(0|0));
        /* IL_28: ldloc.0 */
        /* IL_29: ldc.i4.0 */
        /* IL_2A: ldelem.ref */
        /* IL_2B: call Void Log(System.Object)*/
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_30: ldloc.0 */
        /* IL_31: ldnull */
        /* IL_32: ldc.i4.0 */
        /* IL_33: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(loc0,null,(0|0));
        /* IL_38: ldloc.0 */
        /* IL_39: ldc.i4.0 */
        /* IL_3A: ldelem.ref */
        /* IL_3B: call Void Log(System.Object)*/
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_40: ret */
        return ;
    };
    /* static Void ValueTypeArray()*/
    asm.x6000011_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.Int32"]().init)();
        (asm1.A().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function ValueTypeArray()
    {
        var t0;
        var t1;
        var t2;
        var loc1;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var st_0F;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.Int32"]();
        t2 = asm1.A();
        loc1 = new (asm1.A())();
        /* IL_00: ldc.i4.1 */
        /* IL_01: newarr System.ValueType*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_array(t0,(1|0));
        /* IL_07: ldloc.0 */
        /* IL_08: ldc.i4.1 */
        /* IL_09: box System.Int32*/
        /* IL_0E: ldc.i4.0 */
        /* IL_0F: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(loc0,{
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },(0|0));
        /* IL_14: ldloc.0 */
        /* IL_15: ldc.i4.0 */
        /* IL_16: ldelem.ref */
        /* IL_17: call Void Log(System.Object)*/
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_1C: ldloc.0 */
        st_0D = loc0;
        /* IL_1D: ldloca.s 1*/
        /* IL_20: initobj A*/
        loc1 = new t2();
        /* IL_25: ldloca.s 1*/
        st_0A = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_27: ldc.i4.s 123*/
        st_0B = (123|0);
        /* IL_29: stfld Int32 V*/
        st_0A.r().V = st_0B;
        /* IL_2E: ldloc.1 */
        st_0C = loc1;
        /* IL_2F: box A*/
        st_0E = {
            'boxed': BLR.clone_value(st_0C),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        };
        /* IL_34: ldc.i4.0 */
        st_0F = (0|0);
        /* IL_35: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(st_0D,st_0E,st_0F);
        /* IL_3A: ldloc.0 */
        /* IL_3B: ldc.i4.0 */
        /* IL_3C: ldelem.ref */
        /* IL_3D: unbox.any A*/
        /* IL_42: ldfld Int32 V*/
        /* IL_47: box System.Int32*/
        /* IL_4C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.unbox_any(BLR.ldelem_ref(loc0,(0|0)),t2).V,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_51: ldloc.0 */
        /* IL_52: ldnull */
        /* IL_53: ldc.i4.0 */
        /* IL_54: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(loc0,null,(0|0));
        /* IL_59: ldloc.0 */
        /* IL_5A: ldc.i4.0 */
        /* IL_5B: ldelem.ref */
        /* IL_5C: call Void Log(System.Object)*/
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_61: ret */
        return ;
    };
    /* static Void InterfaceArray()*/
    asm.x6000012_init = function ()
    {
        (asm1.I().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function InterfaceArray()
    {
        var t0;
        var t1;
        var t2;
        var loc1;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var loc0;
        var loc2;
        t0 = asm1.I();
        t1 = asm1.A();
        t2 = asm1.B();
        loc1 = new (asm1.A())();
        /* IL_00: ldc.i4.1 */
        /* IL_01: newarr I*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_array(t0,(1|0));
        /* IL_07: ldloc.0 */
        st_06 = loc0;
        /* IL_08: ldloca.s 1*/
        /* IL_0B: initobj A*/
        loc1 = new t1();
        /* IL_10: ldloca.s 1*/
        st_03 = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_12: ldc.i4.s 123*/
        st_04 = (123|0);
        /* IL_14: stfld Int32 V*/
        st_03.r().V = st_04;
        /* IL_19: ldloc.1 */
        st_05 = loc1;
        /* IL_1A: box A*/
        st_07 = {
            'boxed': BLR.clone_value(st_05),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        };
        /* IL_1F: ldc.i4.0 */
        st_08 = (0|0);
        /* IL_20: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(st_06,st_07,st_08);
        /* IL_25: ldloc.0 */
        /* IL_26: ldc.i4.0 */
        /* IL_27: ldelem.ref */
        /* IL_28: callvirt String GetValue()*/
        /* IL_2D: call Void Log(System.Object)*/
        asm1.x6000001((((BLR.ldelem_ref(loc0,(0|0)).ifacemap)[t0].x600000c)())(BLR.convert_box_to_pointer_as_needed(BLR.ldelem_ref(loc0,(0|0)))));
        /* IL_32: ldloc.0 */
        st_10 = loc0;
        /* IL_33: newobj Void .ctor()*/
        /* IL_38: stloc.2 */
        loc2 = BLR.newobj(t2,asm1.x600000f,[null]);
        /* IL_39: ldloc.2 */
        st_0E = loc2;
        /* IL_3A: ldstr hello*/
        st_0F = BLR.new_string("hello");
        /* IL_3F: stfld String V*/
        st_0E.V = st_0F;
        /* IL_44: ldloc.2 */
        st_11 = loc2;
        /* IL_45: ldc.i4.0 */
        st_12 = (0|0);
        /* IL_46: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(st_10,st_11,st_12);
        /* IL_4B: ldloc.0 */
        /* IL_4C: ldc.i4.0 */
        /* IL_4D: ldelem.ref */
        /* IL_4E: callvirt String GetValue()*/
        /* IL_53: call Void Log(System.Object)*/
        asm1.x6000001((((BLR.ldelem_ref(loc0,(0|0)).ifacemap)[t0].x600000c)())(BLR.convert_box_to_pointer_as_needed(BLR.ldelem_ref(loc0,(0|0)))));
        /* IL_58: ldloc.0 */
        /* IL_59: ldnull */
        /* IL_5A: ldc.i4.0 */
        /* IL_5B: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(loc0,null,(0|0));
        /* IL_60: ldloc.0 */
        /* IL_61: ldc.i4.0 */
        /* IL_62: ldelem.ref */
        /* IL_63: call Void Log(System.Object)*/
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_68: ret */
        return ;
    };
    /* static Void AArray()*/
    asm.x6000013_init = function ()
    {
        (asm1.A().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function ()
    {
        asm.x6000013_init.apply(this,arguments);
        return asm.x6000013_.apply(this,arguments);
    };;
    asm.x6000013_ = function AArray()
    {
        var t0;
        var loc1;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var loc0;
        t0 = asm1.A();
        loc1 = new (asm1.A())();
        /* IL_00: ldc.i4.1 */
        /* IL_01: newarr A*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_array(t0,(1|0));
        /* IL_07: ldloc.0 */
        st_06 = loc0;
        /* IL_08: ldloca.s 1*/
        /* IL_0B: initobj A*/
        loc1 = new t0();
        /* IL_10: ldloca.s 1*/
        st_03 = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_12: ldc.i4.s 123*/
        st_04 = (123|0);
        /* IL_14: stfld Int32 V*/
        st_03.r().V = st_04;
        /* IL_19: ldloc.1 */
        st_05 = loc1;
        /* IL_1A: box A*/
        st_07 = {
            'boxed': BLR.clone_value(st_05),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        };
        /* IL_1F: ldc.i4.0 */
        st_08 = (0|0);
        /* IL_20: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(st_06,st_07,st_08);
        /* IL_25: ldloc.0 */
        /* IL_26: ldc.i4.0 */
        /* IL_27: ldelema A*/
        /* IL_2C: call String GetValue()*/
        /* IL_31: call Void Log(System.Object)*/
        asm1.x6000001(asm1.x600000d({
                    'w': function (v)
                    {
                        (loc0.jsarr)[(0|0)] = v;
                    },
                    'r': function ()
                    {
                        return (loc0.jsarr)[(0|0)];
                    }
                }));
        /* IL_36: ldloc.0 */
        /* IL_37: ldnull */
        /* IL_38: ldc.i4.0 */
        /* IL_39: callvirt Void SetValue(System.Object, System.Int32)*/
        asm0.x600014f(loc0,null,(0|0));
        /* IL_3E: ldloc.0 */
        /* IL_3F: ldc.i4.0 */
        /* IL_40: ldelema A*/
        /* IL_45: call String GetValue()*/
        /* IL_4A: call Void Log(System.Object)*/
        asm1.x6000001(asm1.x600000d({
                    'w': function (v)
                    {
                        (loc0.jsarr)[(0|0)] = v;
                    },
                    'r': function ()
                    {
                        return (loc0.jsarr)[(0|0)];
                    }
                }));
        /* IL_4F: ret */
        return ;
    };
    /* static Void Main()*/
    asm.x6000014_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function ()
    {
        asm.x6000014_init.apply(this,arguments);
        return asm.x6000014_.apply(this,arguments);
    };;
    asm.x6000014_ = function Main()
    {
        var t0;
        t0 = (asm0)["System.ValueType"]();
        /* IL_00: call Void ObjectArray()*/
        asm1.x6000010();
        /* IL_05: call Void ValueTypeArray()*/
        asm1.x6000011();
        /* IL_0A: call Void InterfaceArray()*/
        asm1.x6000012();
        /* IL_0F: call Void AArray()*/
        asm1.x6000013();
        /* IL_14: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000015 = function _ctor(arg0)
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
    asm.I = BLR.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I",false,false,true,false,false,[],[
                    [asm1, "x600000c", "GetValue"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
        });
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",true,false,false,false,false,[],[
                    [asm1, "x600000d", "GetValue"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I()],
                {
                    'x600000c': function (){ return asm1.x600000d;}
                });
            this.prototype.V = 0;
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x600000e", "GetValue"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I()],
                {
                    'x600000c': function (){ return asm1.x600000e;}
                });
            this.prototype.V = null;
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000014;
})(asm1 || (asm1 = {}));
