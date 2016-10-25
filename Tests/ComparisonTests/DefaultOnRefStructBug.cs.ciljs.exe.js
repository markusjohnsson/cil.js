var asm1;(function (asm)
{
    asm.FullName = "DefaultOnRefStructBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A`1.Reset()*/
    asm.x6000001 = function Reset(arg0)
    {
        var t0;
        t0 = ((arg0.r().constructor.GenericArguments)["asm1.t2000002"])[0];
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldflda T X */
        /* IL_08: initobj T */
        arg0.r().X = ((t0.IsValueType) ? (((t0.IsPrimitive) ? (0|0) : (new t0()))) : (null));
        /* IL_0D: ret  */
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
        asm.x6000003_init();
        return asm.x6000003_();
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
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldloca.s 0 */
                /* IL_04: initobj A`1[System.Int32] */
                loc0 = new t1();
                /* IL_09: ldloca.s 0 */
                /* IL_0B: ldc.i4.s 123 */
                /* IL_0D: stfld Managed.Reflection.GenericFieldInstance */
                loc0.X = (123|0);
                /* IL_12: ldloc.0  */
                /* IL_13: ldfld Managed.Reflection.GenericFieldInstance */
                /* IL_18: box System.Int32 */
                /* IL_1D: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0.X,t0));
                /* IL_22: nop  */
                
                /* IL_23: ldloca.s 0 */
                /* IL_25: call Void Reset() */
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
                /* IL_2A: nop  */
                
                /* IL_2B: ldloc.0  */
                /* IL_2C: ldfld Managed.Reflection.GenericFieldInstance */
                /* IL_31: box System.Int32 */
                /* IL_36: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0.X,t0));
                /* IL_3B: nop  */
                
                /* IL_3C: ldloca.s 1 */
                /* IL_3F: initobj A`1[B] */
                loc1 = new t3();
                /* IL_44: ldloca.s 1 */
                /* IL_46: newobj Void .ctor() */
                /* IL_4B: stfld Managed.Reflection.GenericFieldInstance */
                loc1.X = CILJS.newobj(t2,asm1.x6000002,[null]);
                /* IL_50: ldloc.1  */
                /* IL_51: ldfld Managed.Reflection.GenericFieldInstance */
                /* IL_56: brfalse.s IL_5F */
                
                if ((!(loc1.X))){
                    __pos__ = 0x5F;
                    continue;
                }
                /* IL_58: ldstr false */
                st_10 = CILJS.new_string("false");
                /* IL_5D: br.s IL_64 */
                __pos__ = 0x64;
                continue;
                case 0x5F:
                /* IL_5F: ldstr true */
                st_10 = CILJS.new_string("true");
                case 0x64:
                /* IL_64: ldc.i4.0  */
                st_0F = (0|0);
                /* IL_65: newarr System.Object */
                st_11 = CILJS.new_array(t4,st_0F);
                /* IL_6A: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_10,st_11);
                /* IL_6F: nop  */
                
                /* IL_70: ldloca.s 1 */
                /* IL_72: call Void Reset() */
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
                /* IL_77: nop  */
                
                /* IL_78: ldloc.1  */
                /* IL_79: ldfld Managed.Reflection.GenericFieldInstance */
                /* IL_7E: brfalse.s IL_87 */
                
                if ((!(loc1.X))){
                    __pos__ = 0x87;
                    continue;
                }
                /* IL_80: ldstr false */
                st_16 = CILJS.new_string("false");
                /* IL_85: br.s IL_8C */
                __pos__ = 0x8C;
                continue;
                case 0x87:
                /* IL_87: ldstr true */
                st_16 = CILJS.new_string("true");
                case 0x8C:
                /* IL_8C: ldc.i4.0  */
                st_15 = (0|0);
                /* IL_8D: newarr System.Object */
                st_17 = CILJS.new_array(t4,st_15);
                /* IL_92: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_16,st_17);
                /* IL_97: nop  */
                
                /* IL_98: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000002",new ((asm1)["A`1"]((asm0)["CilJs.Runtime.UnboundGenericParameter"]()))());
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A_1() { c.init();this.X = T.Default }");
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function B() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000003;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
