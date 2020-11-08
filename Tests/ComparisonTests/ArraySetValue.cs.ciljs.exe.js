var asm1;(function (asm)
{
    asm.FullName = "ArraySetValue.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.GetValue()*/
    asm.x6000002 = function GetValue(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldflda Int32 V */
        /* IL_07: call String ToString() */
        /* IL_0C: stloc.0  */
        loc0 = asm0.x6000180({
                w: function (v)
                {
                    arg0.r().V = v;
                },
                r: function ()
                {
                    return arg0.r().V;
                }
            });
        /* IL_0F: ldloc.0  */
        /* IL_10: ret  */
        return loc0;
    };;
    /* System.String B.GetValue()*/
    asm.x6000003 = function GetValue(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld String V */
        /* IL_07: callvirt String ToString() */
        /* IL_0C: stloc.0  */
        loc0 = (arg0.V.vtable)["asm0.x60000ca"](arg0.V);
        /* IL_0F: ldloc.0  */
        /* IL_10: ret  */
        return loc0;
    };;
    /*  B..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
        /* IL_00: nop  */
        /* IL_01: ldc.i4.1  */
        /* IL_02: newarr System.Object */
        /* IL_07: stloc.0  */
        loc0 = CILJS.new_array(t0,1);
        /* IL_08: ldloc.0  */
        /* IL_09: ldc.i4.1  */
        /* IL_0A: box System.Int32 */
        /* IL_0F: ldc.i4.0  */
        /* IL_10: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(loc0,CILJS.make_box(1,t1),0);
        /* IL_15: nop  */
        /* IL_16: ldloc.0  */
        /* IL_17: ldc.i4.0  */
        /* IL_18: ldelem.ref  */
        /* IL_19: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.ldelem_ref(loc0,0));
        /* IL_1E: nop  */
        /* IL_1F: ldloc.0  */
        /* IL_20: ldstr test */
        /* IL_25: ldc.i4.0  */
        /* IL_26: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(loc0,CILJS.new_string("test"),0);
        /* IL_2B: nop  */
        /* IL_2C: ldloc.0  */
        /* IL_2D: ldc.i4.0  */
        /* IL_2E: ldelem.ref  */
        /* IL_2F: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.ldelem_ref(loc0,0));
        /* IL_34: nop  */
        /* IL_35: ldloc.0  */
        /* IL_36: ldnull  */
        /* IL_37: ldc.i4.0  */
        /* IL_38: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(loc0,null,0);
        /* IL_3D: nop  */
        /* IL_3E: ldloc.0  */
        /* IL_3F: ldc.i4.0  */
        /* IL_40: ldelem.ref  */
        /* IL_41: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.ldelem_ref(loc0,0));
        /* IL_46: nop  */
        /* IL_47: ret  */
        return ;
    };;
    /* static System.Void Program.ValueTypeArray()*/
    asm.x6000006_init = function ()
    {
        (asm1.A().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init();
        return asm.x6000006_();
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
        t2 = asm1.A();
        loc1 = new (asm1.A())();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.1  */
        /* IL_02: newarr System.ValueType */
        /* IL_07: stloc.0  */
        loc0 = CILJS.new_array(t0,1);
        /* IL_08: ldloc.0  */
        /* IL_09: ldc.i4.1  */
        /* IL_0A: box System.Int32 */
        /* IL_0F: ldc.i4.0  */
        /* IL_10: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(loc0,CILJS.make_box(1,t1),0);
        /* IL_15: nop  */
        /* IL_16: ldloc.0  */
        /* IL_17: ldc.i4.0  */
        /* IL_18: ldelem.ref  */
        /* IL_19: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.ldelem_ref(loc0,0));
        /* IL_1E: nop  */
        /* IL_1F: ldloc.0  */
        st_0D = loc0;
        /* IL_20: ldloca.s 1 */
        /* IL_23: initobj A */
        loc1 = new t2();
        /* IL_28: ldloca.s 1 */
        st_0A = {
            w: function (v)
            {
                loc1 = v;
            },
            r: function ()
            {
                return loc1;
            }
        };
        /* IL_2A: ldc.i4.s 123 */
        st_0B = 123;
        /* IL_2C: stfld Int32 V */
        st_0A.r().V = st_0B;
        /* IL_31: ldloc.1  */
        st_0C = loc1;
        /* IL_32: box A */
        st_0E = CILJS.make_box(CILJS.clone_value(st_0C),t2);
        /* IL_37: ldc.i4.0  */
        st_0F = 0;
        /* IL_38: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(st_0D,st_0E,st_0F);
        /* IL_3D: nop  */
        /* IL_3E: ldloc.0  */
        /* IL_3F: ldc.i4.0  */
        /* IL_40: ldelem.ref  */
        /* IL_41: unbox A */
        /* IL_46: ldfld Int32 V */
        /* IL_4B: box System.Int32 */
        /* IL_50: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(CILJS.ldelem_ref(loc0,0).boxed.V,t1));
        /* IL_55: nop  */
        /* IL_56: ldloc.0  */
        /* IL_57: ldnull  */
        /* IL_58: ldc.i4.0  */
        /* IL_59: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(loc0,null,0);
        /* IL_5E: nop  */
        /* IL_5F: ldloc.0  */
        /* IL_60: ldc.i4.0  */
        /* IL_61: ldelem.ref  */
        /* IL_62: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.ldelem_ref(loc0,0));
        /* IL_67: nop  */
        /* IL_68: ret  */
        return ;
    };
    /* static System.Void Program.InterfaceArray()*/
    asm.x6000007_init = function ()
    {
        (asm1.I().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function ()
    {
        asm.x6000007_init();
        return asm.x6000007_();
    };;
    asm.x6000007_ = function InterfaceArray()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc1;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var loc0;
        t0 = asm1.I();
        t1 = asm1.A();
        t2 = (asm0)["System.Object"]();
        t3 = asm1.B();
        loc1 = new (asm1.A())();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.1  */
        /* IL_02: newarr I */
        /* IL_07: stloc.0  */
        loc0 = CILJS.new_array(t0,1);
        /* IL_08: ldloc.0  */
        st_06 = loc0;
        /* IL_09: ldloca.s 1 */
        /* IL_0C: initobj A */
        loc1 = new t1();
        /* IL_11: ldloca.s 1 */
        st_03 = {
            w: function (v)
            {
                loc1 = v;
            },
            r: function ()
            {
                return loc1;
            }
        };
        /* IL_13: ldc.i4.s 123 */
        st_04 = 123;
        /* IL_15: stfld Int32 V */
        st_03.r().V = st_04;
        /* IL_1A: ldloc.1  */
        st_05 = loc1;
        /* IL_1B: box A */
        st_07 = CILJS.make_box(CILJS.clone_value(st_05),t1);
        /* IL_20: ldc.i4.0  */
        st_08 = 0;
        /* IL_21: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(st_06,st_07,st_08);
        /* IL_26: nop  */
        /* IL_27: ldloc.0  */
        /* IL_28: ldc.i4.0  */
        /* IL_29: ldelem.ref  */
        /* IL_2A: callvirt String GetValue() */
        /* IL_2F: ldc.i4.0  */
        /* IL_30: newarr System.Object */
        /* IL_35: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(((CILJS.ldelem_ref(loc0,0).ifacemap)[t0].x6000001)(CILJS.convert_box_to_pointer_as_needed(CILJS.ldelem_ref(loc0,0))),CILJS.new_array(t2,0));
        /* IL_3A: nop  */
        /* IL_3B: ldloc.0  */
        st_12 = loc0;
        /* IL_3C: newobj Void .ctor() */
        st_0F = CILJS.newobj(t3,asm1.x6000004,[null]);
        /* IL_41: dup  */
        st_13 = st_10 = st_0F;
        /* IL_42: ldstr hello */
        st_11 = CILJS.new_string("hello");
        /* IL_47: stfld String V */
        st_10.V = st_11;
        /* IL_4C: ldc.i4.0  */
        st_14 = 0;
        /* IL_4D: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(st_12,st_13,st_14);
        /* IL_52: nop  */
        /* IL_53: ldloc.0  */
        /* IL_54: ldc.i4.0  */
        /* IL_55: ldelem.ref  */
        /* IL_56: callvirt String GetValue() */
        /* IL_5B: ldc.i4.0  */
        /* IL_5C: newarr System.Object */
        /* IL_61: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(((CILJS.ldelem_ref(loc0,0).ifacemap)[t0].x6000001)(CILJS.convert_box_to_pointer_as_needed(CILJS.ldelem_ref(loc0,0))),CILJS.new_array(t2,0));
        /* IL_66: nop  */
        /* IL_67: ldloc.0  */
        /* IL_68: ldnull  */
        /* IL_69: ldc.i4.0  */
        /* IL_6A: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(loc0,null,0);
        /* IL_6F: nop  */
        /* IL_70: ldloc.0  */
        /* IL_71: ldc.i4.0  */
        /* IL_72: ldelem.ref  */
        /* IL_73: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.ldelem_ref(loc0,0));
        /* IL_78: nop  */
        /* IL_79: ret  */
        return ;
    };
    /* static System.Void Program.AArray()*/
    asm.x6000008_init = function ()
    {
        (asm1.A().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init();
        return asm.x6000008_();
    };;
    asm.x6000008_ = function AArray()
    {
        var t0;
        var t1;
        var loc1;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var loc0;
        t0 = asm1.A();
        t1 = (asm0)["System.Object"]();
        loc1 = new (asm1.A())();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.1  */
        /* IL_02: newarr A */
        /* IL_07: stloc.0  */
        loc0 = CILJS.new_array(t0,1);
        /* IL_08: ldloc.0  */
        st_06 = loc0;
        /* IL_09: ldloca.s 1 */
        /* IL_0C: initobj A */
        loc1 = new t0();
        /* IL_11: ldloca.s 1 */
        st_03 = {
            w: function (v)
            {
                loc1 = v;
            },
            r: function ()
            {
                return loc1;
            }
        };
        /* IL_13: ldc.i4.s 123 */
        st_04 = 123;
        /* IL_15: stfld Int32 V */
        st_03.r().V = st_04;
        /* IL_1A: ldloc.1  */
        st_05 = loc1;
        /* IL_1B: box A */
        st_07 = CILJS.make_box(CILJS.clone_value(st_05),t0);
        /* IL_20: ldc.i4.0  */
        st_08 = 0;
        /* IL_21: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(st_06,st_07,st_08);
        /* IL_26: nop  */
        /* IL_27: ldloc.0  */
        /* IL_28: ldc.i4.0  */
        /* IL_29: ldelema A */
        /* IL_2E: call String GetValue() */
        /* IL_33: ldc.i4.0  */
        /* IL_34: newarr System.Object */
        /* IL_39: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(asm1.x6000002({
                    w: function (v)
                    {
                        (loc0.jsarr)[0] = v;
                    },
                    r: function ()
                    {
                        return (loc0.jsarr)[0];
                    }
                }),CILJS.new_array(t1,0));
        /* IL_3E: nop  */
        /* IL_3F: ldloc.0  */
        /* IL_40: ldnull  */
        /* IL_41: ldc.i4.0  */
        /* IL_42: callvirt Void SetValue(System.Object, System.Int32) */
        asm0.x6000135(loc0,null,0);
        /* IL_47: nop  */
        /* IL_48: ldloc.0  */
        /* IL_49: ldc.i4.0  */
        /* IL_4A: ldelema A */
        /* IL_4F: call String GetValue() */
        /* IL_54: ldc.i4.0  */
        /* IL_55: newarr System.Object */
        /* IL_5A: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(asm1.x6000002({
                    w: function (v)
                    {
                        (loc0.jsarr)[0] = v;
                    },
                    r: function ()
                    {
                        return (loc0.jsarr)[0];
                    }
                }),CILJS.new_array(t1,0));
        /* IL_5F: nop  */
        /* IL_60: ret  */
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x6000009 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: nop  */
        /* IL_01: call Void ObjectArray() */
        asm1.x6000005();
        /* IL_06: nop  */
        /* IL_07: call Void ValueTypeArray() */
        asm1.x6000006();
        /* IL_0C: nop  */
        /* IL_0D: call Void InterfaceArray() */
        asm1.x6000007();
        /* IL_12: nop  */
        /* IL_13: call Void AArray() */
        asm1.x6000008();
        /* IL_18: nop  */
        /* IL_19: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
                    [asm1, "x6000001", "GetValue"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
        },
        "function I() { c.init(); }");
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
                    [asm1, "x6000002", "GetValue"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000003",new (asm1.A())());
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x6000148");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
            CILJS.implement_interface(
                this,
                [asm1.I()],
                [
                    ["x6000001", "asm1.x6000002"]
                ]);
        },
        "function A() { c.init();this.V = 0 }");
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
                    [asm1, "x6000003", "GetValue"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
            CILJS.implement_interface(
                this,
                [asm1.I()],
                [
                    ["x6000001", "asm1.x6000003"]
                ]);
        },
        "function B() { c.init();this.V = null }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000009;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=ArraySetValue.cs.ciljs.exe.js.map
