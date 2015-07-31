var asm2; (function (asm)
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
        /* IL_00: ldc.i4.0 */
        /* IL_01: box System.Int32*/
        /* IL_06: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0B: ldc.i4.s 111*/
        /* IL_0D: box System.Int32*/
        /* IL_12: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (111|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_17: ldc.i4.s 145*/
        /* IL_19: box System.Int32*/
        /* IL_1E: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (-111|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_23: ldc.i4 -2147483648*/
        /* IL_28: box System.Int32*/
        /* IL_2D: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (-2147483648|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_32: ldc.i4 2147483647*/
        /* IL_37: box System.Int32*/
        /* IL_3C: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (2147483647|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_41: ldc.i4.0 */
        /* IL_42: box System.UInt32*/
        /* IL_47: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_4C: ldc.i4 145*/
        /* IL_51: box System.UInt32*/
        /* IL_56: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (145|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_5B: ldc.i4 222*/
        /* IL_60: box System.UInt32*/
        /* IL_65: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (222|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_6A: ldc.i4.0 */
        /* IL_6B: box System.UInt32*/
        /* IL_70: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_75: ldc.i4.m1 */
        /* IL_76: box System.UInt32*/
        /* IL_7B: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (-1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_80: ldc.i4.0 */
        /* IL_81: conv.i8 */
        /* IL_82: box System.Int64*/
        /* IL_87: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': CILJS.conv_i8((0|0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_8C: ldc.i4 333*/
        /* IL_91: conv.i8 */
        /* IL_92: box System.Int64*/
        /* IL_97: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': CILJS.conv_i8((333|0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_9C: ldc.i4 -333*/
        /* IL_A1: conv.i8 */
        /* IL_A2: box System.Int64*/
        /* IL_A7: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': CILJS.conv_i8((-333|0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_AC: ldc.i8 -9223372036854775808*/
        /* IL_B5: box System.Int64*/
        /* IL_BA: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': new Uint32Array([
                    0x0,
                    0x80000000
                ]),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_BF: ldc.i8 9223372036854775807*/
        /* IL_C8: box System.Int64*/
        /* IL_CD: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': new Uint32Array([
                    0xFFFFFFFF,
                    0x7FFFFFFF
                ]),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_D2: ldc.i4.0 */
        /* IL_D3: conv.i8 */
        /* IL_D4: box System.UInt64*/
        /* IL_D9: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': CILJS.conv_i8((0|0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_DE: ldc.i4 444*/
        /* IL_E3: conv.i8 */
        /* IL_E4: box System.UInt64*/
        /* IL_E9: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': CILJS.conv_i8((444|0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_EE: ldc.i4.0 */
        /* IL_EF: conv.i8 */
        /* IL_F0: box System.UInt64*/
        /* IL_F5: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': CILJS.conv_i8((0|0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_FA: ldc.i4.m1 */
        /* IL_FB: conv.i8 */
        /* IL_FC: box System.UInt64*/
        /* IL_101: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': CILJS.conv_i8((-1|0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_106: ldc.r4 555*/
        /* IL_10B: box System.Single*/
        /* IL_110: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (+555),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_115: ldc.r4 0*/
        /* IL_11A: box System.Single*/
        /* IL_11F: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (+0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_124: ldc.r4 -555*/
        /* IL_129: box System.Single*/
        /* IL_12E: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (+-555),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_133: ldc.r8 666*/
        /* IL_13C: box System.Double*/
        /* IL_141: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (+666),
                'type': t5,
                'vtable': t5.prototype.vtable,
                'ifacemap': t5.prototype.ifacemap
            });
        /* IL_146: ldc.r8 0*/
        /* IL_14F: box System.Double*/
        /* IL_154: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (+0),
                'type': t5,
                'vtable': t5.prototype.vtable,
                'ifacemap': t5.prototype.ifacemap
            });
        /* IL_159: ldc.r8 -666*/
        /* IL_162: box System.Double*/
        /* IL_167: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (+-666),
                'type': t5,
                'vtable': t5.prototype.vtable,
                'ifacemap': t5.prototype.ifacemap
            });
        /* IL_16C: ldc.i4.0 */
        /* IL_16D: box System.Byte*/
        /* IL_172: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (0|0),
                'type': t6,
                'vtable': t6.prototype.vtable,
                'ifacemap': t6.prototype.ifacemap
            });
        /* IL_177: ldc.i4.s 20*/
        /* IL_179: box System.Byte*/
        /* IL_17E: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (20|0),
                'type': t6,
                'vtable': t6.prototype.vtable,
                'ifacemap': t6.prototype.ifacemap
            });
        /* IL_183: ldc.i4.0 */
        /* IL_184: box System.Byte*/
        /* IL_189: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (0|0),
                'type': t6,
                'vtable': t6.prototype.vtable,
                'ifacemap': t6.prototype.ifacemap
            });
        /* IL_18E: ldc.i4 255*/
        /* IL_193: box System.Byte*/
        /* IL_198: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (255|0),
                'type': t6,
                'vtable': t6.prototype.vtable,
                'ifacemap': t6.prototype.ifacemap
            });
        /* IL_19D: ldc.i4.s 206*/
        /* IL_19F: box System.SByte*/
        /* IL_1A4: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (-50|0),
                'type': t7,
                'vtable': t7.prototype.vtable,
                'ifacemap': t7.prototype.ifacemap
            });
        /* IL_1A9: ldc.i4.0 */
        /* IL_1AA: box System.SByte*/
        /* IL_1AF: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (0|0),
                'type': t7,
                'vtable': t7.prototype.vtable,
                'ifacemap': t7.prototype.ifacemap
            });
        /* IL_1B4: ldc.i4.s 50*/
        /* IL_1B6: box System.SByte*/
        /* IL_1BB: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (50|0),
                'type': t7,
                'vtable': t7.prototype.vtable,
                'ifacemap': t7.prototype.ifacemap
            });
        /* IL_1C0: ldc.i4.s 128*/
        /* IL_1C2: box System.SByte*/
        /* IL_1C7: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (-128|0),
                'type': t7,
                'vtable': t7.prototype.vtable,
                'ifacemap': t7.prototype.ifacemap
            });
        /* IL_1CC: ldc.i4.s 127*/
        /* IL_1CE: box System.SByte*/
        /* IL_1D3: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (127|0),
                'type': t7,
                'vtable': t7.prototype.vtable,
                'ifacemap': t7.prototype.ifacemap
            });
        /* IL_1D8: ldc.i4.1 */
        /* IL_1D9: box System.Boolean*/
        /* IL_1DE: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (1|0),
                'type': t8,
                'vtable': t8.prototype.vtable,
                'ifacemap': t8.prototype.ifacemap
            });
        /* IL_1E3: ldc.i4.0 */
        /* IL_1E4: box System.Boolean*/
        /* IL_1E9: call Void PrintObject(System.Object)*/
        asm2.x6000002({
                'boxed': (0|0),
                'type': t8,
                'vtable': t8.prototype.vtable,
                'ifacemap': t8.prototype.ifacemap
            });
        /* IL_1EE: ret */
        return ;
    };;
    /* static System.Void Program.PrintObject(Object)*/
    asm.x6000002 = function PrintObject(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldarg.0 */
        /* IL_01: call Void Log(System.Object)*/
        asm1.x6000001(arg0);
        /* IL_06: ldc.i4.1 */
        /* IL_07: newarr System.Object*/
        /* IL_0C: stloc.0 */
        loc0 = CILJS.new_array(t0,(1|0));
        /* IL_0D: ldloc.0 */
        /* IL_0E: ldc.i4.0 */
        /* IL_0F: ldarg.0 */
        /* IL_10: stelem.ref */
        CILJS.stelem_ref(loc0,(0|0),arg0);
        /* IL_11: ldloc.0 */
        /* IL_12: call Void PrintArray(System.Object[])*/
        asm2.x6000003(loc0);
        /* IL_17: ret */
        return ;
    };;
    /* static System.Void Program.PrintArray(Object[])*/
    asm.x6000003 = function PrintArray(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: ldelem.ref */
        /* IL_03: callvirt String ToString()*/
        /* IL_08: call Void Log(System.Object)*/
        asm1.x6000001((((CILJS.ldelem_ref(arg0,(0|0)).vtable)["asm0.x60000ed"])())(CILJS.convert_box_to_pointer_as_needed(CILJS.ldelem_ref(arg0,(0|0)))));
        /* IL_0D: ret */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
