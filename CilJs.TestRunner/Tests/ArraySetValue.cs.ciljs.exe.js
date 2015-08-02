var asm2;(function (asm)
{
    asm.FullName = "ArraySetValue.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.GetValue()*/
    asm.x6000002 = function GetValue(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldflda Int32 V */
        /* IL_06: call String ToString() */
        /* IL_0B: ret  */
        return asm0.x600009d({
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
    /* System.String B.GetValue()*/
    asm.x6000003 = function GetValue(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String V */
        /* IL_06: callvirt String ToString() */
        /* IL_0B: ret  */
        return ((arg0.V.vtable)["asm0.x60000ed"]())(arg0.V);
    };;
    /*  B..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.ObjectArray()*/
    asm.x6000005 = function ObjectArray()
    {
        var t0;
        var t1;
        var loc0;
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.1  */
        /* IL_01: newarr System.Object */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_array(t0,(1|0));
        /* IL_07: ldloc.0  */
        /* IL_08: ldc.i4.1  */
        /* IL_09: box System.Int32 */
        /* IL_0E: ldc.i4.0  */
        /* IL_0F: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(loc0,{
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },(0|0));
        /* IL_14: ldloc.0  */
        /* IL_15: ldc.i4.0  */
        /* IL_16: ldelem.ref  */
        /* IL_17: call Void Log(System.Object) */
        asm1.x6000001(CILJS.ldelem_ref(loc0,(0|0)));
        /* IL_1C: ldloc.0  */
        /* IL_1D: ldstr test */
        /* IL_22: ldc.i4.0  */
        /* IL_23: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(loc0,CILJS.new_string("test"),(0|0));
        /* IL_28: ldloc.0  */
        /* IL_29: ldc.i4.0  */
        /* IL_2A: ldelem.ref  */
        /* IL_2B: call Void Log(System.Object) */
        asm1.x6000001(CILJS.ldelem_ref(loc0,(0|0)));
        /* IL_30: ldloc.0  */
        /* IL_31: ldnull  */
        /* IL_32: ldc.i4.0  */
        /* IL_33: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(loc0,null,(0|0));
        /* IL_38: ldloc.0  */
        /* IL_39: ldc.i4.0  */
        /* IL_3A: ldelem.ref  */
        /* IL_3B: call Void Log(System.Object) */
        asm1.x6000001(CILJS.ldelem_ref(loc0,(0|0)));
        /* IL_40: ret  */
        return ;
    };;
    /* static System.Void Program.ValueTypeArray()*/
    asm.x6000006_init = function ()
    {
        (asm2.A().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function ValueTypeArray()
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
        t2 = asm2.A();
        loc1 = new (asm2.A())();
        /* IL_00: ldc.i4.1  */
        /* IL_01: newarr System.ValueType */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_array(t0,(1|0));
        /* IL_07: ldloc.0  */
        /* IL_08: ldc.i4.1  */
        /* IL_09: box System.Int32 */
        /* IL_0E: ldc.i4.0  */
        /* IL_0F: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(loc0,{
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },(0|0));
        /* IL_14: ldloc.0  */
        /* IL_15: ldc.i4.0  */
        /* IL_16: ldelem.ref  */
        /* IL_17: call Void Log(System.Object) */
        asm1.x6000001(CILJS.ldelem_ref(loc0,(0|0)));
        /* IL_1C: ldloc.0  */
        st_0D = loc0;
        /* IL_1D: ldloca.s 1 */
        /* IL_20: initobj A */
        loc1 = new t2();
        /* IL_25: ldloca.s 1 */
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
        /* IL_27: ldc.i4.s 123 */
        st_0B = (123|0);
        /* IL_29: stfld Int32 V */
        st_0A.r().V = st_0B;
        /* IL_2E: ldloc.1  */
        st_0C = loc1;
        /* IL_2F: box A */
        st_0E = {
            'boxed': CILJS.clone_value(st_0C),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        };
        /* IL_34: ldc.i4.0  */
        st_0F = (0|0);
        /* IL_35: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(st_0D,st_0E,st_0F);
        /* IL_3A: ldloc.0  */
        /* IL_3B: ldc.i4.0  */
        /* IL_3C: ldelem.ref  */
        /* IL_3D: unbox.any A */
        /* IL_42: ldfld Int32 V */
        /* IL_47: box System.Int32 */
        /* IL_4C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.unbox_any(CILJS.ldelem_ref(loc0,(0|0)),t2).V,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_51: ldloc.0  */
        /* IL_52: ldnull  */
        /* IL_53: ldc.i4.0  */
        /* IL_54: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(loc0,null,(0|0));
        /* IL_59: ldloc.0  */
        /* IL_5A: ldc.i4.0  */
        /* IL_5B: ldelem.ref  */
        /* IL_5C: call Void Log(System.Object) */
        asm1.x6000001(CILJS.ldelem_ref(loc0,(0|0)));
        /* IL_61: ret  */
        return ;
    };
    /* static System.Void Program.InterfaceArray()*/
    asm.x6000007_init = function ()
    {
        (asm2.I().init)();
        (asm2.A().init)();
        (asm2.B().init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function ()
    {
        asm.x6000007_init.apply(this,arguments);
        return asm.x6000007_.apply(this,arguments);
    };;
    asm.x6000007_ = function InterfaceArray()
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
        t0 = asm2.I();
        t1 = asm2.A();
        t2 = asm2.B();
        loc1 = new (asm2.A())();
        /* IL_00: ldc.i4.1  */
        /* IL_01: newarr I */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_array(t0,(1|0));
        /* IL_07: ldloc.0  */
        st_06 = loc0;
        /* IL_08: ldloca.s 1 */
        /* IL_0B: initobj A */
        loc1 = new t1();
        /* IL_10: ldloca.s 1 */
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
        /* IL_12: ldc.i4.s 123 */
        st_04 = (123|0);
        /* IL_14: stfld Int32 V */
        st_03.r().V = st_04;
        /* IL_19: ldloc.1  */
        st_05 = loc1;
        /* IL_1A: box A */
        st_07 = {
            'boxed': CILJS.clone_value(st_05),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        };
        /* IL_1F: ldc.i4.0  */
        st_08 = (0|0);
        /* IL_20: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(st_06,st_07,st_08);
        /* IL_25: ldloc.0  */
        /* IL_26: ldc.i4.0  */
        /* IL_27: ldelem.ref  */
        /* IL_28: callvirt String GetValue() */
        /* IL_2D: call Void Log(System.Object) */
        asm1.x6000001((((CILJS.ldelem_ref(loc0,(0|0)).ifacemap)[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(CILJS.ldelem_ref(loc0,(0|0)))));
        /* IL_32: ldloc.0  */
        st_10 = loc0;
        /* IL_33: newobj Void .ctor() */
        /* IL_38: stloc.2  */
        loc2 = CILJS.newobj(t2,asm2.x6000004,[null]);
        /* IL_39: ldloc.2  */
        st_0E = loc2;
        /* IL_3A: ldstr hello */
        st_0F = CILJS.new_string("hello");
        /* IL_3F: stfld String V */
        st_0E.V = st_0F;
        /* IL_44: ldloc.2  */
        st_11 = loc2;
        /* IL_45: ldc.i4.0  */
        st_12 = (0|0);
        /* IL_46: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(st_10,st_11,st_12);
        /* IL_4B: ldloc.0  */
        /* IL_4C: ldc.i4.0  */
        /* IL_4D: ldelem.ref  */
        /* IL_4E: callvirt String GetValue() */
        /* IL_53: call Void Log(System.Object) */
        asm1.x6000001((((CILJS.ldelem_ref(loc0,(0|0)).ifacemap)[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(CILJS.ldelem_ref(loc0,(0|0)))));
        /* IL_58: ldloc.0  */
        /* IL_59: ldnull  */
        /* IL_5A: ldc.i4.0  */
        /* IL_5B: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(loc0,null,(0|0));
        /* IL_60: ldloc.0  */
        /* IL_61: ldc.i4.0  */
        /* IL_62: ldelem.ref  */
        /* IL_63: call Void Log(System.Object) */
        asm1.x6000001(CILJS.ldelem_ref(loc0,(0|0)));
        /* IL_68: ret  */
        return ;
    };
    /* static System.Void Program.AArray()*/
    asm.x6000008_init = function ()
    {
        (asm2.A().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
    };;
    asm.x6000008_ = function AArray()
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
        t0 = asm2.A();
        loc1 = new (asm2.A())();
        /* IL_00: ldc.i4.1  */
        /* IL_01: newarr A */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_array(t0,(1|0));
        /* IL_07: ldloc.0  */
        st_06 = loc0;
        /* IL_08: ldloca.s 1 */
        /* IL_0B: initobj A */
        loc1 = new t0();
        /* IL_10: ldloca.s 1 */
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
        /* IL_12: ldc.i4.s 123 */
        st_04 = (123|0);
        /* IL_14: stfld Int32 V */
        st_03.r().V = st_04;
        /* IL_19: ldloc.1  */
        st_05 = loc1;
        /* IL_1A: box A */
        st_07 = {
            'boxed': CILJS.clone_value(st_05),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        };
        /* IL_1F: ldc.i4.0  */
        st_08 = (0|0);
        /* IL_20: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(st_06,st_07,st_08);
        /* IL_25: ldloc.0  */
        /* IL_26: ldc.i4.0  */
        /* IL_27: ldelema A */
        /* IL_2C: call String GetValue() */
        /* IL_31: call Void Log(System.Object) */
        asm1.x6000001(asm2.x6000002({
                    'w': function (v)
                    {
                        (loc0.jsarr)[(0|0)] = v;
                    },
                    'r': function ()
                    {
                        return (loc0.jsarr)[(0|0)];
                    }
                }));
        /* IL_36: ldloc.0  */
        /* IL_37: ldnull  */
        /* IL_38: ldc.i4.0  */
        /* IL_39: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x600002d(loc0,null,(0|0));
        /* IL_3E: ldloc.0  */
        /* IL_3F: ldc.i4.0  */
        /* IL_40: ldelema A */
        /* IL_45: call String GetValue() */
        /* IL_4A: call Void Log(System.Object) */
        asm1.x6000001(asm2.x6000002({
                    'w': function (v)
                    {
                        (loc0.jsarr)[(0|0)] = v;
                    },
                    'r': function ()
                    {
                        return (loc0.jsarr)[(0|0)];
                    }
                }));
        /* IL_4F: ret  */
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x6000009 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: call Void ObjectArray() */
        asm2.x6000005();
        /* IL_05: call Void ValueTypeArray() */
        asm2.x6000006();
        /* IL_0A: call Void InterfaceArray() */
        asm2.x6000007();
        /* IL_0F: call Void AArray() */
        asm2.x6000008();
        /* IL_14: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.I = CILJS.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[
                    [asm2, "x6000001", "GetValue"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[
                    [asm2, "x6000002", "GetValue"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
            this.prototype.V = 0;
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm2, "x6000003", "GetValue"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I()],
                {
                    'x6000001': function (){ return asm2.x6000003;}
                });
            this.prototype.V = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000009;
})(asm2 || (asm2 = {}));