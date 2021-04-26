
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "Reflection.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  B..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000001(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  X`1..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000004_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1["X`1"](asm1.A()).init)();
    
    (asm0["CilJs.Runtime.UnboundGenericParameter"]().init)();
    
    (asm1["X`1"](asm0["CilJs.Runtime.UnboundGenericParameter"]()).init)();
    
    (asm1.B().init)();
    
    (asm1["X`1"](asm1.B()).init)();
    
    (asm1.I2().init)();
    
    (asm1.I().init)();
    
    (asm1["I3`1"](asm0["System.Int32"]()).init)();
    
    (asm1["X`1"](asm0["System.Int32"]()).init)();
    
    asm.x6000004 = asm.x6000004_;
};;

asm.x6000004 = function ()
{
    
    asm.x6000004_init();
    
    return asm.x6000004_();
};;
asm.x6000004_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
    var t5;
    var t6;
    var t7;
    var t8;
    var t9;
    var t10;
    var t11;
    var t12;
    var t13;
    var t14;
    var t15;
    var st_88;
    var st_89;
    var st_8A;
    var st_8B;
    var st_8C;
    var st_8D;
    var st_8E;
    var st_8F;
    var st_90;
    var st_91;
    var st_92;
    var st_93;
    var st_94;
    var st_95;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm0["System.Object"]();
    
    t2 = asm0["System.Int32"]();
    
    t3 = asm0["System.String"]();
    
    t4 = asm0["System.Boolean"]();
    
    t5 = asm1["X`1"](t0);
    
    t6 = asm0["CilJs.Runtime.UnboundGenericParameter"]();
    
    t7 = asm0["CilJs.Runtime.UnboundGenericParameter"]();
    
    t8 = asm1["X`1"](t7);
    
    t9 = asm1.B();
    
    t10 = asm1["X`1"](t9);
    
    t11 = asm0["System.Type"]();
    
    t12 = asm1.I2();
    
    t13 = asm1.I();
    
    t14 = asm1["I3`1"](t2);
    
    t15 = asm1["X`1"](t2);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldtoken A */
    /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_0B: callvirt String get_Name() */
    /* IL_10: ldc.i4.0  */
    /* IL_11: newarr System.Object */
    /* IL_16: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001ca"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),CILJS.newArray(t1,0));
    /* IL_1B: nop  */
    /* IL_1C: ldtoken System.Int32 */
    /* IL_21: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_26: callvirt String get_Name() */
    /* IL_2B: ldc.i4.0  */
    /* IL_2C: newarr System.Object */
    /* IL_31: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60001ca"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t2))),CILJS.newArray(t1,0));
    /* IL_36: nop  */
    /* IL_37: ldtoken System.String */
    /* IL_3C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_41: callvirt String get_Name() */
    /* IL_46: ldc.i4.0  */
    /* IL_47: newarr System.Object */
    /* IL_4C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x60001ca"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t3))),CILJS.newArray(t1,0));
    /* IL_51: nop  */
    /* IL_52: ldtoken System.Boolean */
    /* IL_57: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_5C: callvirt String get_Name() */
    /* IL_61: ldc.i4.0  */
    /* IL_62: newarr System.Object */
    /* IL_67: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x60001ca"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t4))),CILJS.newArray(t1,0));
    /* IL_6C: nop  */
    /* IL_6D: ldtoken A */
    /* IL_72: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_77: callvirt String get_FullName() */
    /* IL_7C: ldc.i4.0  */
    /* IL_7D: newarr System.Object */
    /* IL_82: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000044"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),CILJS.newArray(t1,0));
    /* IL_87: nop  */
    /* IL_88: ldtoken System.Int32 */
    /* IL_8D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_92: callvirt String get_FullName() */
    /* IL_97: ldc.i4.0  */
    /* IL_98: newarr System.Object */
    /* IL_9D: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x6000044"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t2))),CILJS.newArray(t1,0));
    /* IL_A2: nop  */
    /* IL_A3: ldtoken System.String */
    /* IL_A8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_AD: callvirt String get_FullName() */
    /* IL_B2: ldc.i4.0  */
    /* IL_B3: newarr System.Object */
    /* IL_B8: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x6000044"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t3))),CILJS.newArray(t1,0));
    /* IL_BD: nop  */
    /* IL_BE: ldtoken System.Boolean */
    /* IL_C3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_C8: callvirt String get_FullName() */
    /* IL_CD: ldc.i4.0  */
    /* IL_CE: newarr System.Object */
    /* IL_D3: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x6000044"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t4))),CILJS.newArray(t1,0));
    /* IL_D8: nop  */
    /* IL_D9: ldtoken A */
    /* IL_DE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_E3: callvirt String get_FullName() */
    /* IL_E8: ldc.i4.0  */
    /* IL_E9: newarr System.Object */
    /* IL_EE: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000044"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),CILJS.newArray(t1,0));
    /* IL_F3: nop  */
    /* IL_F4: newobj Void .ctor() */
    /* IL_F9: call Type GetType() */
    /* IL_FE: callvirt String get_FullName() */
    /* IL_103: ldc.i4.0  */
    /* IL_104: newarr System.Object */
    /* IL_109: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x60000a0(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x6000044"])(asm0.x60000a0(CILJS.newobj(t0,asm1.x6000001,[null]))),CILJS.newArray(t1,0));
    /* IL_10E: nop  */
    /* IL_10F: newobj Void .ctor() */
    /* IL_114: call Type GetType() */
    /* IL_119: ldtoken A */
    /* IL_11E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_123: callvirt Boolean Equals(System.Object) */
    /* IL_128: box System.Boolean */
    /* IL_12D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.newobj(t0,asm1.x6000001,[null])),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),t4));
    /* IL_132: nop  */
    /* IL_133: newobj Void .ctor() */
    /* IL_138: call Type GetType() */
    /* IL_13D: ldtoken System.String */
    /* IL_142: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_147: callvirt Boolean Equals(System.Object) */
    /* IL_14C: box System.Boolean */
    /* IL_151: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.newobj(t0,asm1.x6000001,[null])),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t3))),t4));
    /* IL_156: nop  */
    /* IL_157: ldstr  */
    /* IL_15C: call Type GetType() */
    /* IL_161: ldtoken System.String */
    /* IL_166: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_16B: callvirt Boolean Equals(System.Object) */
    /* IL_170: box System.Boolean */
    /* IL_175: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.newString("")).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.newString("")),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t3))),t4));
    /* IL_17A: nop  */
    /* IL_17B: ldstr  */
    /* IL_180: call Type GetType() */
    /* IL_185: ldtoken A */
    /* IL_18A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_18F: callvirt Boolean Equals(System.Object) */
    /* IL_194: box System.Boolean */
    /* IL_199: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.newString("")).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.newString("")),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),t4));
    /* IL_19E: nop  */
    /* IL_19F: ldc.i4.1  */
    /* IL_1A0: box System.Int32 */
    /* IL_1A5: call Type GetType() */
    /* IL_1AA: ldtoken A */
    /* IL_1AF: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_1B4: callvirt Boolean Equals(System.Object) */
    /* IL_1B9: box System.Boolean */
    /* IL_1BE: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.makeBox(1,t2)).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.makeBox(1,t2)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),t4));
    /* IL_1C3: nop  */
    /* IL_1C4: ldc.i4.1  */
    /* IL_1C5: box System.Int32 */
    /* IL_1CA: call Type GetType() */
    /* IL_1CF: ldtoken System.Int32 */
    /* IL_1D4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_1D9: callvirt Boolean Equals(System.Object) */
    /* IL_1DE: box System.Boolean */
    /* IL_1E3: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.makeBox(1,t2)).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.makeBox(1,t2)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t2))),t4));
    /* IL_1E8: nop  */
    /* IL_1E9: ldc.i4.1  */
    /* IL_1EA: box System.Int32 */
    /* IL_1EF: call Type GetType() */
    /* IL_1F4: callvirt String get_FullName() */
    /* IL_1F9: ldc.i4.0  */
    /* IL_1FA: newarr System.Object */
    /* IL_1FF: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm0.x60000a0(CILJS.makeBox(1,t2)).vtable)["asm0.x6000044"])(asm0.x60000a0(CILJS.makeBox(1,t2))),CILJS.newArray(t1,0));
    /* IL_204: nop  */
    /* IL_205: ldtoken A */
    /* IL_20A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_20F: callvirt String get_AssemblyQualifiedName() */
    /* IL_214: ldstr .clr */
    /* IL_219: ldstr .ciljs */
    /* IL_21E: callvirt String Replace(System.String, System.String) */
    /* IL_223: ldc.i4.0  */
    /* IL_224: newarr System.Object */
    /* IL_229: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(asm0.x60000c2(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600004a"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),CILJS.newString(".clr"),CILJS.newString(".ciljs")),CILJS.newArray(t1,0));
    /* IL_22E: nop  */
    /* IL_22F: ldtoken X`1[A] */
    /* IL_234: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_239: callvirt String get_FullName() */
    /* IL_23E: ldstr .clr */
    /* IL_243: ldstr .ciljs */
    /* IL_248: callvirt String Replace(System.String, System.String) */
    /* IL_24D: ldc.i4.0  */
    /* IL_24E: newarr System.Object */
    /* IL_253: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(asm0.x60000c2(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t5)).vtable)["asm0.x6000044"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t5))),CILJS.newString(".clr"),CILJS.newString(".ciljs")),CILJS.newArray(t1,0));
    /* IL_258: nop  */
    /* IL_259: newobj Void .ctor() */
    /* IL_25E: call Type GetType() */
    /* IL_263: callvirt String get_FullName() */
    /* IL_268: ldstr .clr */
    /* IL_26D: ldstr .ciljs */
    /* IL_272: callvirt String Replace(System.String, System.String) */
    /* IL_277: ldc.i4.0  */
    /* IL_278: newarr System.Object */
    /* IL_27D: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(asm0.x60000c2(((asm0.x60000a0(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x6000044"])(asm0.x60000a0(CILJS.newobj(t5,asm1.x6000003,[null]))),CILJS.newString(".clr"),CILJS.newString(".ciljs")),CILJS.newArray(t1,0));
    /* IL_282: nop  */
    /* IL_283: newobj Void .ctor() */
    /* IL_288: call Type GetType() */
    /* IL_28D: ldtoken X`1[T] */
    /* IL_292: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_297: callvirt Boolean Equals(System.Object) */
    /* IL_29C: box System.Boolean */
    /* IL_2A1: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.newobj(t5,asm1.x6000003,[null])),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t8))),t4));
    /* IL_2A6: nop  */
    /* IL_2A7: newobj Void .ctor() */
    /* IL_2AC: call Type GetType() */
    /* IL_2B1: ldtoken X`1[B] */
    /* IL_2B6: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_2BB: callvirt Boolean Equals(System.Object) */
    /* IL_2C0: box System.Boolean */
    /* IL_2C5: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.newobj(t5,asm1.x6000003,[null])),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t10))),t4));
    /* IL_2CA: nop  */
    /* IL_2CB: ldstr  */
    /* IL_2D0: call Type GetType() */
    /* IL_2D5: ldtoken X`1[T] */
    /* IL_2DA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_2DF: callvirt Boolean Equals(System.Object) */
    /* IL_2E4: box System.Boolean */
    /* IL_2E9: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x60000a0(CILJS.newString("")).vtable)["asm0.x600009e"])(asm0.x60000a0(CILJS.newString("")),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t8))),t4));
    /* IL_2EE: nop  */
    /* IL_2EF: ldtoken X`1[T] */
    
    st_88 = CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t8);
    /* IL_2F4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    
    st_8F = asm0.x6000045(st_88);
    /* IL_2F9: ldc.i4.1  */
    
    st_89 = 1;
    /* IL_2FA: newarr System.Type */
    
    st_8A = CILJS.newArray(t11,st_89);
    /* IL_2FF: dup  */
    
    st_90 = st_8C = st_8A;
    /* IL_300: ldc.i4.0  */
    
    st_8D = 0;
    /* IL_301: ldtoken A */
    
    st_8B = CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0);
    /* IL_306: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    
    st_8E = asm0.x6000045(st_8B);
    /* IL_30B: stelem.ref  */
    
    CILJS.stelemRef(st_8C,st_8D,st_8E);
    /* IL_30C: callvirt Type MakeGenericType(System.Type[]) */
    
    st_92 = (st_8F.vtable)["asm0.x6000050"](st_8F,st_90);
    /* IL_311: ldtoken X`1[A] */
    
    st_91 = CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t5);
    /* IL_316: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    
    st_93 = asm0.x6000045(st_91);
    /* IL_31B: callvirt Boolean Equals(System.Object) */
    
    st_94 = (st_92.vtable)["asm0.x600009e"](st_92,st_93);
    /* IL_320: box System.Boolean */
    
    st_95 = CILJS.makeBox(st_94,t4);
    /* IL_325: call Void WriteLine(System.Object) */
    
    asm0.x6000072(st_95);
    /* IL_32A: nop  */
    /* IL_32B: ldtoken System.Object */
    /* IL_330: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_335: call TypeInfo GetTypeInfo(System.Type) */
    /* IL_33A: callvirt Type get_BaseType() */
    /* IL_33F: ldnull  */
    /* IL_341: ceq  */
    /* IL_342: box System.Boolean */
    /* IL_347: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((((asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t1))).vtable)["asm0.x6000049"])(asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t1)))) === null) ? 1 : 0),t4));
    /* IL_34C: nop  */
    /* IL_34D: ldtoken A */
    /* IL_352: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_357: call TypeInfo GetTypeInfo(System.Type) */
    /* IL_35C: callvirt Type get_BaseType() */
    /* IL_361: ldtoken System.Object */
    /* IL_366: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_36B: callvirt Boolean Equals(System.Object) */
    /* IL_370: box System.Boolean */
    /* IL_375: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((((asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000049"])(asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)))).vtable)["asm0.x600009e"])(((asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000049"])(asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)))),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t1))),t4));
    /* IL_37A: nop  */
    /* IL_37B: ldtoken A */
    /* IL_380: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_385: call TypeInfo GetTypeInfo(System.Type) */
    /* IL_38A: callvirt Type get_BaseType() */
    /* IL_38F: ldtoken B */
    /* IL_394: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_399: callvirt Boolean Equals(System.Object) */
    /* IL_39E: box System.Boolean */
    /* IL_3A3: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((((asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000049"])(asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)))).vtable)["asm0.x600009e"])(((asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000049"])(asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)))),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9))),t4));
    /* IL_3A8: nop  */
    /* IL_3A9: ldtoken B */
    /* IL_3AE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_3B3: call TypeInfo GetTypeInfo(System.Type) */
    /* IL_3B8: callvirt Type get_BaseType() */
    /* IL_3BD: ldtoken A */
    /* IL_3C2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_3C7: callvirt Boolean Equals(System.Object) */
    /* IL_3CC: box System.Boolean */
    /* IL_3D1: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((((asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9))).vtable)["asm0.x6000049"])(asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9)))).vtable)["asm0.x600009e"])(((asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9))).vtable)["asm0.x6000049"])(asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9)))),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),t4));
    /* IL_3D6: nop  */
    /* IL_3D7: ldtoken B */
    /* IL_3DC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_3E1: ldtoken A */
    /* IL_3E6: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_3EB: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_3F0: box System.Boolean */
    /* IL_3F5: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),t4));
    /* IL_3FA: nop  */
    /* IL_3FB: ldtoken B */
    /* IL_400: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_405: ldtoken B */
    /* IL_40A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_40F: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_414: box System.Boolean */
    /* IL_419: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9))),t4));
    /* IL_41E: nop  */
    /* IL_41F: ldtoken A */
    /* IL_424: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_429: ldtoken B */
    /* IL_42E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_433: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_438: box System.Boolean */
    /* IL_43D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9))),t4));
    /* IL_442: nop  */
    /* IL_443: ldtoken A */
    /* IL_448: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_44D: ldtoken A */
    /* IL_452: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_457: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_45C: box System.Boolean */
    /* IL_461: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),t4));
    /* IL_466: nop  */
    /* IL_467: ldtoken A */
    /* IL_46C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_471: ldtoken I2 */
    /* IL_476: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_47B: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_480: box System.Boolean */
    /* IL_485: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t12))),t4));
    /* IL_48A: nop  */
    /* IL_48B: ldtoken B */
    /* IL_490: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_495: ldtoken I2 */
    /* IL_49A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_49F: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_4A4: box System.Boolean */
    /* IL_4A9: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t12))),t4));
    /* IL_4AE: nop  */
    /* IL_4AF: ldtoken A */
    /* IL_4B4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_4B9: ldtoken I */
    /* IL_4BE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_4C3: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_4C8: box System.Boolean */
    /* IL_4CD: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t13))),t4));
    /* IL_4D2: nop  */
    /* IL_4D3: ldtoken B */
    /* IL_4D8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_4DD: ldtoken I */
    /* IL_4E2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_4E7: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_4EC: box System.Boolean */
    /* IL_4F1: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t13))),t4));
    /* IL_4F6: nop  */
    /* IL_4F7: ldtoken I2 */
    /* IL_4FC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_501: ldtoken I2 */
    /* IL_506: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_50B: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_510: box System.Boolean */
    /* IL_515: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t12)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t12))),t4));
    /* IL_51A: nop  */
    /* IL_51B: ldtoken I */
    /* IL_520: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_525: ldtoken I2 */
    /* IL_52A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_52F: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_534: box System.Boolean */
    /* IL_539: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t13)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t12))),t4));
    /* IL_53E: nop  */
    /* IL_53F: ldtoken I2 */
    /* IL_544: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_549: ldtoken B */
    /* IL_54E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_553: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_558: box System.Boolean */
    /* IL_55D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t12)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9))),t4));
    /* IL_562: nop  */
    /* IL_563: ldtoken I */
    /* IL_568: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_56D: ldtoken B */
    /* IL_572: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_577: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_57C: box System.Boolean */
    /* IL_581: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t13)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t9))),t4));
    /* IL_586: nop  */
    /* IL_587: ldtoken I3`1[System.Int32] */
    /* IL_58C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_591: ldtoken X`1[System.Int32] */
    /* IL_596: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_59B: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_5A0: box System.Boolean */
    /* IL_5A5: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t14)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t15))),t4));
    /* IL_5AA: nop  */
    /* IL_5AB: ldtoken I */
    /* IL_5B0: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_5B5: ldtoken X`1[System.Int32] */
    /* IL_5BA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_5BF: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_5C4: box System.Boolean */
    /* IL_5C9: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t13)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t15))),t4));
    /* IL_5CE: nop  */
    /* IL_5CF: ldtoken I2 */
    /* IL_5D4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_5D9: ldtoken X`1[System.Int32] */
    /* IL_5DE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_5E3: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_5E8: box System.Boolean */
    /* IL_5ED: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t12)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t15))),t4));
    /* IL_5F2: nop  */
    /* IL_5F3: ldtoken I */
    /* IL_5F8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_5FD: ldtoken I3`1[System.Int32] */
    /* IL_602: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_607: call Boolean IsAssignableFrom(System.Type, System.Type) */
    /* IL_60C: box System.Boolean */
    /* IL_611: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000005(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t13)),asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t14))),t4));
    /* IL_616: nop  */
    /* IL_617: ret  */
    
    return ;
};/* static System.Boolean Program.IsAssignableFrom(Type,Type)*/

asm.x6000005 = function IsAssignableFrom(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call TypeInfo GetTypeInfo(System.Type) */
    /* IL_07: ldarg.1  */
    /* IL_08: callvirt Boolean IsAssignableFrom(System.Type) */
    /* IL_0D: stloc.0  */
    
    loc0 = ((asm0.x60001c4(arg0).vtable)["asm0.x6000051"])(asm0.x60001c4(arg0),arg1);
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/*  Program..ctor()*/

asm.x6000006 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.A = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
        };
    });
asm.B = CILJS.declareType(
    [],
    function ()
    {
        
        return asm1.A();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1.I2()],
            []);
        
        CILJS.implementInterface(
            type,
            [asm1.I()],
            []);
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
        };
    });
asm["X`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"X`1",false,false,false,true,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        (type.GenericArguments)["asm1.t2000004"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000004<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1["I3`1"](T), T],
            []);
        
        CILJS.implementInterface(
            type,
            [asm1.I()],
            []);
    },
    function (T)
    {
        
        return function X_1()
        {
            
            X_1.init();
        };
    });
asm.I = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I",false,false,true,false,false,[],[],null,CILJS.isInstInterface(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
    },
    function ()
    {
        
        return function I()
        {
            
            I.init();
        };
    });
asm.I2 = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I2",false,false,true,false,false,[],[],null,CILJS.isInstInterface(type),Array,"asm1.t2000006",null);
        
        type.TypeMetadataName = "asm1.t2000006";
        
        CILJS.implementInterface(
            type,
            [asm1.I()],
            null);
    },
    function ()
    {
        
        return function I2()
        {
            
            I2.init();
        };
    });
asm["I3`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I3`1",false,false,true,true,false,[],[],null,CILJS.isInstInterface(type),Array,"asm1.t2000007",null);
        
        (type.GenericArguments)["asm1.t2000007"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000007<" + (T.TypeMetadataName + ">"));
        
        CILJS.implementInterface(
            type,
            [asm1.I()],
            null);
    },
    function (T)
    {
        
        return function I3_1()
        {
            
            I3_1.init();
        };
    });
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000008",null);
        
        type.TypeMetadataName = "asm1.t2000008";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000004;
CILJS.declareAssembly("Reflection.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Reflection.cs.ciljs.exe.js.map
