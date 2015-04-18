var asm1;(function (asm)
{
    asm.FullName = "GenericClassBasics.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* T A`1.get_Prop()*/
    asm.x600000a = function get_Prop(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld T <Prop>k__BackingField */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["A_1<Prop>k__BackingField"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void A`1.set_Prop(T)*/
    asm.x600000b = function set_Prop(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld T <Prop>k__BackingField */
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  IntWrapper..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  StringWrapper..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000f_init = function ()
    {
        (asm1.IntWrapper().init)();
        ((asm1)["A`1"](asm1.IntWrapper()).init)();
        (asm1.StringWrapper().init)();
        ((asm1)["A`1"](asm1.StringWrapper()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        CILJS.init_base_types();
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var __pos__;
        var loc0;
        var loc2;
        var loc1;
        var loc3;
        t0 = asm1.IntWrapper();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.StringWrapper();
        t3 = (asm1)["A`1"](t2);
        t4 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  GenericClassBasics.cs:21:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t1,asm1.x600000c,[null]);
        /* IL_07: ldloc.0  GenericClassBasics.cs:25:9*/
        st_04 = loc0;
        /* IL_08: newobj Void .ctor() */
        /* IL_0D: stloc.2  */
        loc2 = CILJS.newobj(t0,asm1.x600000d,[null]);
        /* IL_0E: ldloc.2  */
        st_02 = loc2;
        /* IL_0F: ldc.i4.s 123 */
        st_03 = (123|0);
        /* IL_11: stfld Int32 Value */
        st_02.Value = st_03;
        /* IL_16: ldloc.2  */
        st_05 = loc2;
        /* IL_17: callvirt Void set_Prop(IntWrapper) */
        asm1.x600000b(st_04,st_05);
        /* IL_1C: nop  */
        /* IL_1D: newobj Void .ctor() */
        /* IL_22: stloc.1  */
        loc1 = CILJS.newobj(t3,asm1.x600000c,[null]);
        /* IL_23: ldloc.1  GenericClassBasics.cs:28:9*/
        st_0A = loc1;
        /* IL_24: newobj Void .ctor() */
        /* IL_29: stloc.3  */
        loc3 = CILJS.newobj(t2,asm1.x600000e,[null]);
        /* IL_2A: ldloc.3  */
        st_08 = loc3;
        /* IL_2B: ldstr Hello */
        st_09 = CILJS.new_string("Hello");
        /* IL_30: stfld String Value */
        st_08.Value = st_09;
        /* IL_35: ldloc.3  */
        st_0B = loc3;
        /* IL_36: callvirt Void set_Prop(StringWrapper) */
        asm1.x600000b(st_0A,st_0B);
        /* IL_3B: nop  */
        /* IL_3C: ldloc.0  */
        /* IL_3D: callvirt IntWrapper get_Prop() */
        /* IL_42: ldfld Int32 Value */
        /* IL_47: box System.Int32 */
        /* IL_4C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000a(loc0).Value,
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_51: nop  */
        /* IL_52: ldloc.1  */
        /* IL_53: callvirt StringWrapper get_Prop() */
        /* IL_58: ldfld String Value */
        /* IL_5D: call Void Log(System.Object) */
        asm1.x6000001(asm1.x600000a(loc1).Value);
        /* IL_62: nop  */
        /* IL_63: ret  GenericClassBasics.cs:32:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[
                    [asm1, "x600000a", "get_Prop"],
                    [asm1, "x600000b", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
        });
    asm.IntWrapper = CILJS.declare_type(
        "IntWrapper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IntWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = 0;
        });
    asm.StringWrapper = CILJS.declare_type(
        "StringWrapper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"StringWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = null;
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
