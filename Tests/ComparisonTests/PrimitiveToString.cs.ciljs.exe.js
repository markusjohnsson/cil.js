var asm1;(function (asm)
{
    asm.FullName = "PrimitiveToString.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
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
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Int64"]();
        t3 = (asm0)["System.UInt64"]();
        t4 = (asm0)["System.Single"]();
        t5 = (asm0)["System.Double"]();
        t6 = (asm0)["System.Byte"]();
        t7 = (asm0)["System.SByte"]();
        t8 = (asm0)["System.Boolean"]();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.0  */
        /* IL_02: box System.Int32 */
        /* IL_07: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((0|0),t0));
        /* IL_0C: nop  */
        /* IL_0D: ldc.i4.s 111 */
        /* IL_0F: box System.Int32 */
        /* IL_14: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((111|0),t0));
        /* IL_19: nop  */
        /* IL_1A: ldc.i4.s 145 */
        /* IL_1C: box System.Int32 */
        /* IL_21: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((-111|0),t0));
        /* IL_26: nop  */
        /* IL_27: ldc.i4 -2147483648 */
        /* IL_2C: box System.Int32 */
        /* IL_31: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((-2147483648|0),t0));
        /* IL_36: nop  */
        /* IL_37: ldc.i4 2147483647 */
        /* IL_3C: box System.Int32 */
        /* IL_41: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((2147483647|0),t0));
        /* IL_46: nop  */
        /* IL_47: ldc.i4.0  */
        /* IL_48: box System.UInt32 */
        /* IL_4D: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((0|0),t1));
        /* IL_52: nop  */
        /* IL_53: ldc.i4 145 */
        /* IL_58: box System.UInt32 */
        /* IL_5D: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((145|0),t1));
        /* IL_62: nop  */
        /* IL_63: ldc.i4 222 */
        /* IL_68: box System.UInt32 */
        /* IL_6D: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((222|0),t1));
        /* IL_72: nop  */
        /* IL_73: ldc.i4.0  */
        /* IL_74: box System.UInt32 */
        /* IL_79: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((0|0),t1));
        /* IL_7E: nop  */
        /* IL_7F: ldc.i4.m1  */
        /* IL_80: box System.UInt32 */
        /* IL_85: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((-1|0),t1));
        /* IL_8A: nop  */
        /* IL_8B: ldc.i4.0  */
        /* IL_8C: conv.i8  */
        /* IL_8D: box System.Int64 */
        /* IL_92: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(CILJS.conv_i8((0|0)),t2));
        /* IL_97: nop  */
        /* IL_98: ldc.i4 333 */
        /* IL_9D: conv.i8  */
        /* IL_9E: box System.Int64 */
        /* IL_A3: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(CILJS.conv_i8((333|0)),t2));
        /* IL_A8: nop  */
        /* IL_A9: ldc.i4 -333 */
        /* IL_AE: conv.i8  */
        /* IL_AF: box System.Int64 */
        /* IL_B4: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(CILJS.conv_i8((-333|0)),t2));
        /* IL_B9: nop  */
        /* IL_BA: ldc.i8 -9223372036854775808 */
        /* IL_C3: box System.Int64 */
        /* IL_C8: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(new Uint32Array([
                    0x0,
                    0x80000000
                ]),t2));
        /* IL_CD: nop  */
        /* IL_CE: ldc.i8 9223372036854775807 */
        /* IL_D7: box System.Int64 */
        /* IL_DC: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(new Uint32Array([
                    0xFFFFFFFF,
                    0x7FFFFFFF
                ]),t2));
        /* IL_E1: nop  */
        /* IL_E2: ldc.i4.0  */
        /* IL_E3: conv.i8  */
        /* IL_E4: box System.UInt64 */
        /* IL_E9: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(CILJS.conv_i8((0|0)),t3));
        /* IL_EE: nop  */
        /* IL_EF: ldc.i4 444 */
        /* IL_F4: conv.i8  */
        /* IL_F5: box System.UInt64 */
        /* IL_FA: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(CILJS.conv_i8((444|0)),t3));
        /* IL_FF: nop  */
        /* IL_100: ldc.i4.0  */
        /* IL_101: conv.i8  */
        /* IL_102: box System.UInt64 */
        /* IL_107: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(CILJS.conv_i8((0|0)),t3));
        /* IL_10C: nop  */
        /* IL_10D: ldc.i4.m1  */
        /* IL_10E: conv.i8  */
        /* IL_10F: box System.UInt64 */
        /* IL_114: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box(CILJS.conv_i8((-1|0)),t3));
        /* IL_119: nop  */
        /* IL_11A: ldc.r4 555 */
        /* IL_11F: box System.Single */
        /* IL_124: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((+555),t4));
        /* IL_129: nop  */
        /* IL_12A: ldc.r4 0 */
        /* IL_12F: box System.Single */
        /* IL_134: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((+0),t4));
        /* IL_139: nop  */
        /* IL_13A: ldc.r4 -555 */
        /* IL_13F: box System.Single */
        /* IL_144: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((+-555),t4));
        /* IL_149: nop  */
        /* IL_14A: ldc.r8 666 */
        /* IL_153: box System.Double */
        /* IL_158: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((+666),t5));
        /* IL_15D: nop  */
        /* IL_15E: ldc.r8 0 */
        /* IL_167: box System.Double */
        /* IL_16C: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((+0),t5));
        /* IL_171: nop  */
        /* IL_172: ldc.r8 -666 */
        /* IL_17B: box System.Double */
        /* IL_180: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((+-666),t5));
        /* IL_185: nop  */
        /* IL_186: ldc.i4.0  */
        /* IL_187: box System.Byte */
        /* IL_18C: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((0|0),t6));
        /* IL_191: nop  */
        /* IL_192: ldc.i4.s 20 */
        /* IL_194: box System.Byte */
        /* IL_199: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((20|0),t6));
        /* IL_19E: nop  */
        /* IL_19F: ldc.i4.0  */
        /* IL_1A0: box System.Byte */
        /* IL_1A5: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((0|0),t6));
        /* IL_1AA: nop  */
        /* IL_1AB: ldc.i4 255 */
        /* IL_1B0: box System.Byte */
        /* IL_1B5: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((255|0),t6));
        /* IL_1BA: nop  */
        /* IL_1BB: ldc.i4.s 206 */
        /* IL_1BD: box System.SByte */
        /* IL_1C2: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((-50|0),t7));
        /* IL_1C7: nop  */
        /* IL_1C8: ldc.i4.0  */
        /* IL_1C9: box System.SByte */
        /* IL_1CE: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((0|0),t7));
        /* IL_1D3: nop  */
        /* IL_1D4: ldc.i4.s 50 */
        /* IL_1D6: box System.SByte */
        /* IL_1DB: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((50|0),t7));
        /* IL_1E0: nop  */
        /* IL_1E1: ldc.i4.s 128 */
        /* IL_1E3: box System.SByte */
        /* IL_1E8: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((-128|0),t7));
        /* IL_1ED: nop  */
        /* IL_1EE: ldc.i4.s 127 */
        /* IL_1F0: box System.SByte */
        /* IL_1F5: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((127|0),t7));
        /* IL_1FA: nop  */
        /* IL_1FB: ldc.i4.1  */
        /* IL_1FC: box System.Boolean */
        /* IL_201: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((1|0),t8));
        /* IL_206: nop  */
        /* IL_207: ldc.i4.0  */
        /* IL_208: box System.Boolean */
        /* IL_20D: call Void PrintObject(System.Object) */
        asm1.x6000002(CILJS.make_box((0|0),t8));
        /* IL_212: nop  */
        /* IL_213: ret  */
        return ;
    };;
    /* static System.Void Program.PrintObject(Object)*/
    asm.x6000002 = function PrintObject(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: call Void WriteLine(System.Object) */
        asm0.x600005a(arg0);
        /* IL_07: nop  */
        /* IL_08: ldc.i4.1  */
        st_01 = (1|0);
        /* IL_09: newarr System.Object */
        st_02 = CILJS.new_array(t0,st_01);
        /* IL_0E: dup  */
        st_06 = st_03 = st_02;
        /* IL_0F: ldc.i4.0  */
        st_04 = (0|0);
        /* IL_10: ldarg.0  */
        st_05 = arg0;
        /* IL_11: stelem.ref  */
        CILJS.stelem_ref(st_03,st_04,st_05);
        /* IL_12: call Void PrintArray(System.Object[]) */
        asm1.x6000003(st_06);
        /* IL_17: nop  */
        /* IL_18: ret  */
        return ;
    };;
    /* static System.Void Program.PrintArray(Object[])*/
    asm.x6000003 = function PrintArray(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldc.i4.0  */
        /* IL_03: ldelem.ref  */
        /* IL_04: callvirt String ToString() */
        /* IL_09: ldc.i4.0  */
        /* IL_0A: newarr System.Object */
        /* IL_0F: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((CILJS.ldelem_ref(arg0,(0|0)).vtable)["asm0.x60000ed"])())(CILJS.convert_box_to_pointer_as_needed(CILJS.ldelem_ref(arg0,(0|0)))),CILJS.new_array(t0,(0|0)));
        /* IL_14: nop  */
        /* IL_15: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
