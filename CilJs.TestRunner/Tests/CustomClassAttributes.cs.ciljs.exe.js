var asm1;(function (asm)
{
    asm.FullName = "CustomClassAttributes.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.String A2.get_P()*/
    asm.x6000003 = function get_P(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String <P>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["A2<P>k__BackingField"];
    };;
    /* System.Void A2.set_P(String)*/
    asm.x6000004 = function set_P(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld String <P>k__BackingField */
        (arg0)["A2<P>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A2..ctor(String)*/
    asm.x6000005 = function _ctor(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  */
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: call Void set_P(System.String) */
        asm1.x6000004(arg0,arg1);
        /* IL_0F: nop  */
        /* IL_10: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main(String[])*/
    asm.x6000008_init = function (arg0)
    {
        (asm1.B().init)();
        (asm1.A().init)();
        (asm1.C().init)();
        (asm1.A2().init)();
        (asm1.D().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function (arg0)
    {
        asm.x6000008_init(arg0);
        return asm.x6000008_(arg0);
    };;
    asm.x6000008_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var t7;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc3;
        var in_block_1;
        var loc4;
        var loc5;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.B();
        t1 = (asm0)["System.Int32"]();
        t2 = asm1.A();
        t3 = (asm0)["System.Boolean"]();
        t4 = (asm0)["System.Object"]();
        t5 = asm1.C();
        t6 = asm1.A2();
        t7 = asm1.D();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldtoken B */
                /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0B: ldc.i4.1  */
                /* IL_0C: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_11: stloc.0  */
                loc0 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),(1|0));
                /* IL_12: ldloc.0  */
                /* IL_13: ldlen  */
                /* IL_14: conv.i4  */
                /* IL_15: box System.Int32 */
                /* IL_1A: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0.jsarr.length | (0|0),t1));
                /* IL_1F: nop  */
                
                /* IL_20: ldc.i4.0  */
                /* IL_21: stloc.3  */
                loc3 = (0|0);
                /* IL_22: br.s IL_69 */
                __pos__ = 0x69;
                continue;
                case 0x24:
                case 0x69:
                in_block_1 = true;
                
                if (__pos__ > 0x73){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x24){
                    __pos__ = 0x24;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x24:
                        /* IL_24: nop  */
                        
                        /* IL_25: ldtoken A */
                        /* IL_2A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                        /* IL_2F: ldloc.0  */
                        /* IL_30: ldloc.3  */
                        /* IL_31: ldelem.ref  */
                        /* IL_32: callvirt Type GetType() */
                        /* IL_37: callvirt Boolean Equals(System.Object) */
                        /* IL_3C: box System.Boolean */
                        /* IL_41: call Void WriteLine(System.Object) */
                        asm0.x600005a(CILJS.make_box((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60000f0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)),asm0.x60000f2(CILJS.ldelem_ref(loc0,loc3))),t3));
                        /* IL_46: nop  */
                        
                        /* IL_47: ldloc.0  */
                        /* IL_48: ldloc.3  */
                        /* IL_49: ldelem.ref  */
                        /* IL_4A: callvirt Type GetType() */
                        /* IL_4F: callvirt String get_FullName() */
                        /* IL_54: ldc.i4.0  */
                        /* IL_55: newarr System.Object */
                        /* IL_5A: call Void WriteLine(System.String, System.Object[]) */
                        asm0.x600005b((((asm0.x60000f2(CILJS.ldelem_ref(loc0,loc3)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.ldelem_ref(loc0,loc3))),CILJS.new_array(t4,(0|0)));
                        /* IL_5F: nop  */
                        
                        /* IL_60: nop  */
                        
                        /* IL_61: ldloc.3  */
                        /* IL_62: stloc.s 4 */
                        loc4 = loc3;
                        /* IL_64: ldloc.s 4 */
                        /* IL_66: ldc.i4.1  */
                        /* IL_67: add  */
                        /* IL_68: stloc.3  */
                        loc3 = (loc4 + (1|0)) | (0|0);
                        case 0x69:
                        /* IL_69: ldloc.3  */
                        /* IL_6A: ldloc.0  */
                        /* IL_6B: ldlen  */
                        /* IL_6C: conv.i4  */
                        /* IL_6E: clt  */
                        /* IL_6F: stloc.s 5 */
                        loc5 = ((loc3 < (loc0.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_71: ldloc.s 5 */
                        /* IL_73: brtrue.s IL_24 */
                        
                        if (loc5){
                            __pos__ = 0x24;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x69) || (__pos__ < 0x24)){
                    continue;
                }
                /* IL_75: ldtoken C */
                /* IL_7A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_7F: ldc.i4.1  */
                /* IL_80: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_85: stloc.1  */
                loc1 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)),(1|0));
                /* IL_86: ldloc.1  */
                /* IL_87: ldc.i4.0  */
                /* IL_88: ldelem.ref  */
                /* IL_89: castclass A2 */
                /* IL_8E: callvirt String get_P() */
                /* IL_93: ldc.i4.0  */
                /* IL_94: newarr System.Object */
                /* IL_99: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b((CILJS.cast_class(CILJS.ldelem_ref(loc1,(0|0)),t6))["A2<P>k__BackingField"],CILJS.new_array(t4,(0|0)));
                /* IL_9E: nop  */
                
                /* IL_9F: ldtoken D */
                /* IL_A4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_A9: ldc.i4.1  */
                /* IL_AA: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_AF: stloc.2  */
                loc2 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t7)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t7)),(1|0));
                /* IL_B0: ldloc.2  */
                /* IL_B1: ldlen  */
                /* IL_B2: conv.i4  */
                /* IL_B3: box System.Int32 */
                /* IL_B8: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc2.jsarr.length | (0|0),t1));
                /* IL_BD: nop  */
                
                /* IL_BE: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A() { c.init(); }");
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[
                    [
                        asm1.A(),
                        asm1.x6000001
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function B() { c.init(); }");
    asm.A2 = CILJS.declare_type(
        "A2",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A2",false,false,false,false,false,[],[
                    [asm1, "x6000003", "get_P"],
                    [asm1, "x6000004", "set_P"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A2() { c.init();(this)[\"A2<P>k__BackingField\"] = null }");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[
                    [
                        asm1.A2(),
                        asm1.x6000005,
                        [
                            CILJS.new_string("xyz")
                        ]
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function C() { c.init(); }");
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
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function D() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007",null);
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000008;
})(asm1 || (asm1 = {}));
