var asm1;(function (asm)
{
    asm.FullName = "DefaultOnRefStructBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A`1.Reset()*/
    asm.x6000001 = function Reset(arg0)
    {
        var t0;
        t0 = ((((arguments)[0].r)().constructor.GenericArguments)["asm1.t2000002"])[0];
        /* IL_00: ldarg.0  */
        /* IL_01: ldflda T X */
        /* IL_07: initobj T */
        arg0.r().X = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
        /* IL_0C: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        ((asm1)["A`1"]((asm0)["System.Int32"]()).init)();
        (asm1.B().init)();
        ((asm1)["A`1"](asm1.B()).init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var loc0;
        var loc1;
        var st_0F;
        var st_10;
        var st_11;
        var st_15;
        var st_16;
        var st_17;
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.B();
        t3 = (asm1)["A`1"](t2);
        t4 = (asm0)["System.Object"]();
        loc0 = new ((asm1)["A`1"]((asm0)["System.Int32"]()))();
        loc1 = new ((asm1)["A`1"](asm1.B()))();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldloca.s 0 */
                /* IL_03: initobj A`1[System.Int32] */
                loc0 = new t1();
                /* IL_08: ldloca.s 0 */
                /* IL_0A: ldc.i4.s 123 */
                /* IL_0C: stfld IKVM.Reflection.GenericFieldInstance */
                loc0.X = (123|0);
                /* IL_11: ldloca.s 0 */
                /* IL_13: ldfld IKVM.Reflection.GenericFieldInstance */
                /* IL_18: box System.Int32 */
                /* IL_1D: call Void WriteLine(System.Object) */
                asm0.x600005a({
                        'boxed': loc0.X,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                /* IL_22: ldloca.s 0 */
                /* IL_24: call Void Reset() */
                asm1.x6000001({
                        'w': function (v)
                        {
                            loc0 = v;
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    });
                /* IL_29: ldloca.s 0 */
                /* IL_2B: ldfld IKVM.Reflection.GenericFieldInstance */
                /* IL_30: box System.Int32 */
                /* IL_35: call Void WriteLine(System.Object) */
                asm0.x600005a({
                        'boxed': loc0.X,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                /* IL_3A: ldloca.s 1 */
                /* IL_3D: initobj A`1[B] */
                loc1 = new t3();
                /* IL_42: ldloca.s 1 */
                /* IL_44: newobj Void .ctor() */
                /* IL_49: stfld IKVM.Reflection.GenericFieldInstance */
                loc1.X = CILJS.newobj(t2,asm1.x6000002,[null]);
                /* IL_4E: ldloca.s 1 */
                /* IL_50: ldfld IKVM.Reflection.GenericFieldInstance */
                /* IL_55: brfalse.s IL_5E */
                
                if ((!(loc1.X))){
                    __pos__ = 0x5E;
                    continue;
                }
                /* IL_57: ldstr false */
                st_10 = CILJS.new_string("false");
                /* IL_5C: br.s IL_63 */
                __pos__ = 0x63;
                continue;
                case 0x5E:
                /* IL_5E: ldstr true */
                st_10 = CILJS.new_string("true");
                case 0x63:
                /* IL_63: ldc.i4.0  */
                st_0F = (0|0);
                /* IL_64: newarr System.Object */
                st_11 = CILJS.new_array(t4,st_0F);
                /* IL_69: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_10,st_11);
                /* IL_6E: ldloca.s 1 */
                /* IL_70: call Void Reset() */
                asm1.x6000001({
                        'w': function (v)
                        {
                            loc1 = v;
                        },
                        'r': function ()
                        {
                            return loc1;
                        }
                    });
                /* IL_75: ldloca.s 1 */
                /* IL_77: ldfld IKVM.Reflection.GenericFieldInstance */
                /* IL_7C: brfalse.s IL_85 */
                
                if ((!(loc1.X))){
                    __pos__ = 0x85;
                    continue;
                }
                /* IL_7E: ldstr false */
                st_16 = CILJS.new_string("false");
                /* IL_83: br.s IL_8A */
                __pos__ = 0x8A;
                continue;
                case 0x85:
                /* IL_85: ldstr true */
                st_16 = CILJS.new_string("true");
                case 0x8A:
                /* IL_8A: ldc.i4.0  */
                st_15 = (0|0);
                /* IL_8B: newarr System.Object */
                st_17 = CILJS.new_array(t4,st_15);
                /* IL_90: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_16,st_17);
                /* IL_95: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",true,false,false,true,false,[],[
                    [asm1, "x6000001", "Reset"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000002");
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.X = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm1 || (asm1 = {}));
