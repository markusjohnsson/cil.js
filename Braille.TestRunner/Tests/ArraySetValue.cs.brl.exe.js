var asm1; (function (asm)
{
    asm.FullName = "ArraySetValue.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.String A.GetValue()*/
    asm.x600000b = function GetValue(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  ArraySetValue.cs:10:30*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldflda Int32 V */
        /* IL_07: call String ToString() */
        /* IL_0C: stloc.0  */
        loc0 = asm0.x60000ce({
                'w': function (v)
                {
                    arg0.r().V = v;
                },
                'r': function ()
                {
                    return arg0.r().V;
                }
            });
        /* IL_0F: ldloc.0  */
        /* IL_10: ret  */
        return loc0;
    };;
    /* System.String B.GetValue()*/
    asm.x600000c = function GetValue(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  ArraySetValue.cs:16:30*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld String V */
        /* IL_07: callvirt String ToString() */
        /* IL_0C: stloc.0  */
        loc0 = ((arg0.V.vtable)["asm0.x6000005"]())(arg0.V);
        /* IL_0F: ldloc.0  */
        /* IL_10: ret  */
        return loc0;
    };;
    /*  B..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.ObjectArray()*/
    asm.x600000e = function ObjectArray()
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  ArraySetValue.cs:22:5*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: newarr System.Object */
        /* IL_07: stloc.0  */
        loc0 = BLR.new_array(t0,(1|0));
        /* IL_08: ldloc.0  */
        /* IL_09: ldc.i4.1  */
        /* IL_0A: box System.Int32 */
        /* IL_0F: ldc.i4.0  */
        /* IL_10: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(loc0,{
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },(0|0));
        /* IL_15: nop  */
        /* IL_16: ldloc.0  */
        /* IL_17: ldc.i4.0  */
        /* IL_18: ldelem.ref  */
        /* IL_19: call Void Log(System.Object) */
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_1E: nop  */
        /* IL_1F: ldloc.0  */
        /* IL_20: ldstr test */
        /* IL_25: ldc.i4.0  */
        /* IL_26: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(loc0,BLR.new_string("test"),(0|0));
        /* IL_2B: nop  */
        /* IL_2C: ldloc.0  */
        /* IL_2D: ldc.i4.0  */
        /* IL_2E: ldelem.ref  */
        /* IL_2F: call Void Log(System.Object) */
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_34: nop  */
        /* IL_35: ldloc.0  */
        /* IL_36: ldnull  */
        /* IL_37: ldc.i4.0  */
        /* IL_38: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(loc0,null,(0|0));
        /* IL_3D: nop  */
        /* IL_3E: ldloc.0  */
        /* IL_3F: ldc.i4.0  */
        /* IL_40: ldelem.ref  */
        /* IL_41: call Void Log(System.Object) */
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_46: nop  */
        /* IL_47: ret  ArraySetValue.cs:30:5*/
        return ;
    };;
    /* static System.Void Program.ValueTypeArray()*/
    asm.x600000f_init = function ()
    {
        (asm1.A().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function ValueTypeArray()
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
        var __pos__;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.Int32"]();
        t2 = asm1.A();
        loc1 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  ArraySetValue.cs:33:5*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: newarr System.ValueType */
        /* IL_07: stloc.0  */
        loc0 = BLR.new_array(t0,(1|0));
        /* IL_08: ldloc.0  */
        /* IL_09: ldc.i4.1  */
        /* IL_0A: box System.Int32 */
        /* IL_0F: ldc.i4.0  */
        /* IL_10: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(loc0,{
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },(0|0));
        /* IL_15: nop  */
        /* IL_16: ldloc.0  */
        /* IL_17: ldc.i4.0  */
        /* IL_18: ldelem.ref  */
        /* IL_19: call Void Log(System.Object) */
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_1E: nop  */
        /* IL_1F: ldloc.0  ArraySetValue.cs:37:9*/
        st_0D = loc0;
        /* IL_20: ldloca.s 1 */
        /* IL_23: initobj A */
        loc1 = new t2();
        /* IL_28: ldloca.s 1 */
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
        /* IL_2A: ldc.i4.s 123 */
        st_0B = (123|0);
        /* IL_2C: stfld Int32 V */
        st_0A.r().V = st_0B;
        /* IL_31: ldloc.1  */
        st_0C = loc1;
        /* IL_32: box A */
        st_0E = {
            'boxed': BLR.clone_value(st_0C),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        };
        /* IL_37: ldc.i4.0  */
        st_0F = (0|0);
        /* IL_38: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(st_0D,st_0E,st_0F);
        /* IL_3D: nop  */
        /* IL_3E: ldloc.0  */
        /* IL_3F: ldc.i4.0  */
        /* IL_40: ldelem.ref  */
        /* IL_41: unbox.any A */
        /* IL_46: ldfld Int32 V */
        /* IL_4B: box System.Int32 */
        /* IL_50: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': BLR.unbox_any(BLR.ldelem_ref(loc0,(0|0)),t2).V,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_55: nop  */
        /* IL_56: ldloc.0  */
        /* IL_57: ldnull  */
        /* IL_58: ldc.i4.0  */
        /* IL_59: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(loc0,null,(0|0));
        /* IL_5E: nop  */
        /* IL_5F: ldloc.0  */
        /* IL_60: ldc.i4.0  */
        /* IL_61: ldelem.ref  */
        /* IL_62: call Void Log(System.Object) */
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_67: nop  */
        /* IL_68: ret  ArraySetValue.cs:41:5*/
        return ;
    };
    /* static System.Void Program.InterfaceArray()*/
    asm.x6000010_init = function ()
    {
        (asm1.I().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function InterfaceArray()
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
        var __pos__;
        var loc0;
        var loc2;
        t0 = asm1.I();
        t1 = asm1.A();
        t2 = asm1.B();
        loc1 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  ArraySetValue.cs:44:5*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: newarr I */
        /* IL_07: stloc.0  */
        loc0 = BLR.new_array(t0,(1|0));
        /* IL_08: ldloc.0  ArraySetValue.cs:46:9*/
        st_06 = loc0;
        /* IL_09: ldloca.s 1 */
        /* IL_0C: initobj A */
        loc1 = new t1();
        /* IL_11: ldloca.s 1 */
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
        /* IL_13: ldc.i4.s 123 */
        st_04 = (123|0);
        /* IL_15: stfld Int32 V */
        st_03.r().V = st_04;
        /* IL_1A: ldloc.1  */
        st_05 = loc1;
        /* IL_1B: box A */
        st_07 = {
            'boxed': BLR.clone_value(st_05),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        };
        /* IL_20: ldc.i4.0  */
        st_08 = (0|0);
        /* IL_21: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(st_06,st_07,st_08);
        /* IL_26: nop  */
        /* IL_27: ldloc.0  */
        /* IL_28: ldc.i4.0  */
        /* IL_29: ldelem.ref  */
        /* IL_2A: callvirt String GetValue() */
        /* IL_2F: call Void Log(System.Object) */
        asm1.x6000001((((BLR.ldelem_ref(loc0,(0|0)).ifacemap)[t0].x600000a)())(BLR.convert_box_to_pointer_as_needed(BLR.ldelem_ref(loc0,(0|0)))));
        /* IL_34: nop  */
        /* IL_35: ldloc.0  ArraySetValue.cs:48:9*/
        st_10 = loc0;
        /* IL_36: newobj Void .ctor() */
        /* IL_3B: stloc.2  */
        loc2 = BLR.newobj(t2,asm1.x600000d,[null]);
        /* IL_3C: ldloc.2  */
        st_0E = loc2;
        /* IL_3D: ldstr hello */
        st_0F = BLR.new_string("hello");
        /* IL_42: stfld String V */
        st_0E.V = st_0F;
        /* IL_47: ldloc.2  */
        st_11 = loc2;
        /* IL_48: ldc.i4.0  */
        st_12 = (0|0);
        /* IL_49: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(st_10,st_11,st_12);
        /* IL_4E: nop  */
        /* IL_4F: ldloc.0  */
        /* IL_50: ldc.i4.0  */
        /* IL_51: ldelem.ref  */
        /* IL_52: callvirt String GetValue() */
        /* IL_57: call Void Log(System.Object) */
        asm1.x6000001((((BLR.ldelem_ref(loc0,(0|0)).ifacemap)[t0].x600000a)())(BLR.convert_box_to_pointer_as_needed(BLR.ldelem_ref(loc0,(0|0)))));
        /* IL_5C: nop  */
        /* IL_5D: ldloc.0  */
        /* IL_5E: ldnull  */
        /* IL_5F: ldc.i4.0  */
        /* IL_60: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(loc0,null,(0|0));
        /* IL_65: nop  */
        /* IL_66: ldloc.0  */
        /* IL_67: ldc.i4.0  */
        /* IL_68: ldelem.ref  */
        /* IL_69: call Void Log(System.Object) */
        asm1.x6000001(BLR.ldelem_ref(loc0,(0|0)));
        /* IL_6E: nop  */
        /* IL_6F: ret  ArraySetValue.cs:52:5*/
        return ;
    };
    /* static System.Void Program.AArray()*/
    asm.x6000011_init = function ()
    {
        (asm1.A().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function AArray()
    {
        var t0;
        var loc1;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var __pos__;
        var loc0;
        t0 = asm1.A();
        loc1 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  ArraySetValue.cs:55:5*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: newarr A */
        /* IL_07: stloc.0  */
        loc0 = BLR.new_array(t0,(1|0));
        /* IL_08: ldloc.0  ArraySetValue.cs:57:9*/
        st_06 = loc0;
        /* IL_09: ldloca.s 1 */
        /* IL_0C: initobj A */
        loc1 = new t0();
        /* IL_11: ldloca.s 1 */
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
        /* IL_13: ldc.i4.s 123 */
        st_04 = (123|0);
        /* IL_15: stfld Int32 V */
        st_03.r().V = st_04;
        /* IL_1A: ldloc.1  */
        st_05 = loc1;
        /* IL_1B: box A */
        st_07 = {
            'boxed': BLR.clone_value(st_05),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        };
        /* IL_20: ldc.i4.0  */
        st_08 = (0|0);
        /* IL_21: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(st_06,st_07,st_08);
        /* IL_26: nop  */
        /* IL_27: ldloc.0  */
        /* IL_28: ldc.i4.0  */
        /* IL_29: ldelema A */
        /* IL_2E: call String GetValue() */
        /* IL_33: call Void Log(System.Object) */
        asm1.x6000001(asm1.x600000b({
                    'w': function (v)
                    {
                        (loc0.jsarr)[(0|0)] = v;
                    },
                    'r': function ()
                    {
                        return (loc0.jsarr)[(0|0)];
                    }
                }));
        /* IL_38: nop  */
        /* IL_39: ldloc.0  */
        /* IL_3A: ldnull  */
        /* IL_3B: ldc.i4.0  */
        /* IL_3C: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000191(loc0,null,(0|0));
        /* IL_41: nop  */
        /* IL_42: ldloc.0  */
        /* IL_43: ldc.i4.0  */
        /* IL_44: ldelema A */
        /* IL_49: call String GetValue() */
        /* IL_4E: call Void Log(System.Object) */
        asm1.x6000001(asm1.x600000b({
                    'w': function (v)
                    {
                        (loc0.jsarr)[(0|0)] = v;
                    },
                    'r': function ()
                    {
                        return (loc0.jsarr)[(0|0)];
                    }
                }));
        /* IL_53: nop  */
        /* IL_54: ret  ArraySetValue.cs:61:5*/
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x6000012_init = function ()
    {
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        BLR.init_base_types();
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  ArraySetValue.cs:64:5*/
        /* IL_01: call Void ObjectArray() ArraySetValue.cs:65:9*/
        asm1.x600000e();
        /* IL_06: nop  */
        /* IL_07: call Void ValueTypeArray() ArraySetValue.cs:66:9*/
        asm1.x600000f();
        /* IL_0C: nop  */
        /* IL_0D: call Void InterfaceArray() ArraySetValue.cs:67:9*/
        asm1.x6000010();
        /* IL_12: nop  */
        /* IL_13: call Void AArray() ArraySetValue.cs:68:9*/
        asm1.x6000011();
        /* IL_18: nop  */
        /* IL_19: ret  ArraySetValue.cs:69:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
                    [asm1, "x600000a", "GetValue"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
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
                    [asm1, "x600000b", "GetValue"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
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
                    [asm1, "x600000c", "GetValue"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I()],
                {
                    'x600000a': function (){ return asm1.x600000c;}
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
