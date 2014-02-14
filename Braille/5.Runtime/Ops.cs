
namespace Braille.Runtime
{
    class Machine
    {
        public void RunMethod(byte[] bytes)
        {
            var p = new InternalPointer<byte>(bytes);

            switch ((byte)p)
            {
                case 0x0: // nop (0x0)
                    break;
                case 0x1: // break (0x1)
                    break;
                case 0x2: // ldarg.0 (0x2)
                    break;
                case 0x3: // ldarg.1 (0x3)
                    break;
                case 0x4: // ldarg.2 (0x4)
                    break;
                case 0x5: // ldarg.3 (0x5)
                    break;
                case 0x6: // ldloc.0 (0x6)
                    break;
                case 0x7: // ldloc.1 (0x7)
                    break;
                case 0x8: // ldloc.2 (0x8)
                    break;
                case 0x9: // ldloc.3 (0x9)
                    break;
                case 0xa: // stloc.0 (0xa)
                    break;
                case 0xb: // stloc.1 (0xb)
                    break;
                case 0xc: // stloc.2 (0xc)
                    break;
                case 0xd: // stloc.3 (0xd)
                    break;
                case 0xe: // ldarg.s (0xe)
                    break;
                case 0xf: // ldarga.s (0xf)
                    break;
                case 0x10: // starg.s (0x10)
                    break;
                case 0x11: // ldloc.s (0x11)
                    break;
                case 0x12: // ldloca.s (0x12)
                    break;
                case 0x13: // stloc.s (0x13)
                    break;
                case 0x14: // ldnull (0x14)
                    break;
                case 0x15: // ldc.i4.m1 (0x15)
                    break;
                case 0x16: // ldc.i4.0 (0x16)
                    break;
                case 0x17: // ldc.i4.1 (0x17)
                    break;
                case 0x18: // ldc.i4.2 (0x18)
                    break;
                case 0x19: // ldc.i4.3 (0x19)
                    break;
                case 0x1a: // ldc.i4.4 (0x1a)
                    break;
                case 0x1b: // ldc.i4.5 (0x1b)
                    break;
                case 0x1c: // ldc.i4.6 (0x1c)
                    break;
                case 0x1d: // ldc.i4.7 (0x1d)
                    break;
                case 0x1e: // ldc.i4.8 (0x1e)
                    break;
                case 0x1f: // ldc.i4.s (0x1f)
                    break;
                case 0x20: // ldc.i4 (0x20)
                    break;
                case 0x21: // ldc.i8 (0x21)
                    break;
                case 0x22: // ldc.r4 (0x22)
                    break;
                case 0x23: // ldc.r8 (0x23)
                    break;
                case 0x25: // dup (0x25)
                    break;
                case 0x26: // pop (0x26)
                    break;
                case 0x27: // jmp (0x27)
                    break;
                case 0x28: // call (0x28)
                    break;
                case 0x29: // calli (0x29)
                    break;
                case 0x2a: // ret (0x2a)
                    break;
                case 0x2b: // br.s (0x2b)
                    break;
                case 0x2c: // brfalse.s (0x2c)
                    break;
                case 0x2d: // brtrue.s (0x2d)
                    break;
                case 0x2e: // beq.s (0x2e)
                    break;
                case 0x2f: // bge.s (0x2f)
                    break;
                case 0x30: // bgt.s (0x30)
                    break;
                case 0x31: // ble.s (0x31)
                    break;
                case 0x32: // blt.s (0x32)
                    break;
                case 0x33: // bne.un.s (0x33)
                    break;
                case 0x34: // bge.un.s (0x34)
                    break;
                case 0x35: // bgt.un.s (0x35)
                    break;
                case 0x36: // ble.un.s (0x36)
                    break;
                case 0x37: // blt.un.s (0x37)
                    break;
                case 0x38: // br (0x38)
                    break;
                case 0x39: // brfalse (0x39)
                    break;
                case 0x3a: // brtrue (0x3a)
                    break;
                case 0x3b: // beq (0x3b)
                    break;
                case 0x3c: // bge (0x3c)
                    break;
                case 0x3d: // bgt (0x3d)
                    break;
                case 0x3e: // ble (0x3e)
                    break;
                case 0x3f: // blt (0x3f)
                    break;
                case 0x40: // bne.un (0x40)
                    break;
                case 0x41: // bge.un (0x41)
                    break;
                case 0x42: // bgt.un (0x42)
                    break;
                case 0x43: // ble.un (0x43)
                    break;
                case 0x44: // blt.un (0x44)
                    break;
                case 0x45: // switch (0x45)
                    break;
                case 0x46: // ldind.i1 (0x46)
                    break;
                case 0x47: // ldind.u1 (0x47)
                    break;
                case 0x48: // ldind.i2 (0x48)
                    break;
                case 0x49: // ldind.u2 (0x49)
                    break;
                case 0x4a: // ldind.i4 (0x4a)
                    break;
                case 0x4b: // ldind.u4 (0x4b)
                    break;
                case 0x4c: // ldind.i8 (0x4c)
                    break;
                case 0x4d: // ldind.i (0x4d)
                    break;
                case 0x4e: // ldind.r4 (0x4e)
                    break;
                case 0x4f: // ldind.r8 (0x4f)
                    break;
                case 0x50: // ldind.ref (0x50)
                    break;
                case 0x51: // stind.ref (0x51)
                    break;
                case 0x52: // stind.i1 (0x52)
                    break;
                case 0x53: // stind.i2 (0x53)
                    break;
                case 0x54: // stind.i4 (0x54)
                    break;
                case 0x55: // stind.i8 (0x55)
                    break;
                case 0x56: // stind.r4 (0x56)
                    break;
                case 0x57: // stind.r8 (0x57)
                    break;
                case 0x58: // add (0x58)
                    break;
                case 0x59: // sub (0x59)
                    break;
                case 0x5a: // mul (0x5a)
                    break;
                case 0x5b: // div (0x5b)
                    break;
                case 0x5c: // div.un (0x5c)
                    break;
                case 0x5d: // rem (0x5d)
                    break;
                case 0x5e: // rem.un (0x5e)
                    break;
                case 0x5f: // and (0x5f)
                    break;
                case 0x60: // or (0x60)
                    break;
                case 0x61: // xor (0x61)
                    break;
                case 0x62: // shl (0x62)
                    break;
                case 0x63: // shr (0x63)
                    break;
                case 0x64: // shr.un (0x64)
                    break;
                case 0x65: // neg (0x65)
                    break;
                case 0x66: // not (0x66)
                    break;
                case 0x67: // conv.i1 (0x67)
                    break;
                case 0x68: // conv.i2 (0x68)
                    break;
                case 0x69: // conv.i4 (0x69)
                    break;
                case 0x6a: // conv.i8 (0x6a)
                    break;
                case 0x6b: // conv.r4 (0x6b)
                    break;
                case 0x6c: // conv.r8 (0x6c)
                    break;
                case 0x6d: // conv.u4 (0x6d)
                    break;
                case 0x6e: // conv.u8 (0x6e)
                    break;
                case 0x6f: // callvirt (0x6f)
                    break;
                case 0x70: // cpobj (0x70)
                    break;
                case 0x71: // ldobj (0x71)
                    break;
                case 0x72: // ldstr (0x72)
                    break;
                case 0x73: // newobj (0x73)
                    break;
                case 0x74: // castclass (0x74)
                    break;
                case 0x75: // isinst (0x75)
                    break;
                case 0x76: // conv.r.un (0x76)
                    break;
                case 0x79: // unbox (0x79)
                    break;
                case 0x7a: // throw (0x7a)
                    break;
                case 0x7b: // ldfld (0x7b)
                    break;
                case 0x7c: // ldflda (0x7c)
                    break;
                case 0x7d: // stfld (0x7d)
                    break;
                case 0x7e: // ldsfld (0x7e)
                    break;
                case 0x7f: // ldsflda (0x7f)
                    break;
                case 0x80: // stsfld (0x80)
                    break;
                case 0x81: // stobj (0x81)
                    break;
                case 0x82: // conv.ovf.i1.un (0x82)
                    break;
                case 0x83: // conv.ovf.i2.un (0x83)
                    break;
                case 0x84: // conv.ovf.i4.un (0x84)
                    break;
                case 0x85: // conv.ovf.i8.un (0x85)
                    break;
                case 0x86: // conv.ovf.u1.un (0x86)
                    break;
                case 0x87: // conv.ovf.u2.un (0x87)
                    break;
                case 0x88: // conv.ovf.u4.un (0x88)
                    break;
                case 0x89: // conv.ovf.u8.un (0x89)
                    break;
                case 0x8a: // conv.ovf.i.un (0x8a)
                    break;
                case 0x8b: // conv.ovf.u.un (0x8b)
                    break;
                case 0x8c: // box (0x8c)
                    break;
                case 0x8d: // newarr (0x8d)
                    break;
                case 0x8e: // ldlen (0x8e)
                    break;
                case 0x8f: // ldelema (0x8f)
                    break;
                case 0x90: // ldelem.i1 (0x90)
                    break;
                case 0x91: // ldelem.u1 (0x91)
                    break;
                case 0x92: // ldelem.i2 (0x92)
                    break;
                case 0x93: // ldelem.u2 (0x93)
                    break;
                case 0x94: // ldelem.i4 (0x94)
                    break;
                case 0x95: // ldelem.u4 (0x95)
                    break;
                case 0x96: // ldelem.i8 (0x96)
                    break;
                case 0x97: // ldelem.i (0x97)
                    break;
                case 0x98: // ldelem.r4 (0x98)
                    break;
                case 0x99: // ldelem.r8 (0x99)
                    break;
                case 0x9a: // ldelem.ref (0x9a)
                    break;
                case 0x9b: // stelem.i (0x9b)
                    break;
                case 0x9c: // stelem.i1 (0x9c)
                    break;
                case 0x9d: // stelem.i2 (0x9d)
                    break;
                case 0x9e: // stelem.i4 (0x9e)
                    break;
                case 0x9f: // stelem.i8 (0x9f)
                    break;
                case 0xa0: // stelem.r4 (0xa0)
                    break;
                case 0xa1: // stelem.r8 (0xa1)
                    break;
                case 0xa2: // stelem.ref (0xa2)
                    break;
                case 0xa3: // ldelem (0xa3)
                    break;
                case 0xa4: // stelem (0xa4)
                    break;
                case 0xa5: // unbox.any (0xa5)
                    break;
                case 0xb3: // conv.ovf.i1 (0xb3)
                    break;
                case 0xb4: // conv.ovf.u1 (0xb4)
                    break;
                case 0xb5: // conv.ovf.i2 (0xb5)
                    break;
                case 0xb6: // conv.ovf.u2 (0xb6)
                    break;
                case 0xb7: // conv.ovf.i4 (0xb7)
                    break;
                case 0xb8: // conv.ovf.u4 (0xb8)
                    break;
                case 0xb9: // conv.ovf.i8 (0xb9)
                    break;
                case 0xba: // conv.ovf.u8 (0xba)
                    break;
                case 0xc2: // refanyval (0xc2)
                    break;
                case 0xc3: // ckfinite (0xc3)
                    break;
                case 0xc6: // mkrefany (0xc6)
                    break;
                case 0xd0: // ldtoken (0xd0)
                    break;
                case 0xd1: // conv.u2 (0xd1)
                    break;
                case 0xd2: // conv.u1 (0xd2)
                    break;
                case 0xd3: // conv.i (0xd3)
                    break;
                case 0xd4: // conv.ovf.i (0xd4)
                    break;
                case 0xd5: // conv.ovf.u (0xd5)
                    break;
                case 0xd6: // add.ovf (0xd6)
                    break;
                case 0xd7: // add.ovf.un (0xd7)
                    break;
                case 0xd8: // mul.ovf (0xd8)
                    break;
                case 0xd9: // mul.ovf.un (0xd9)
                    break;
                case 0xda: // sub.ovf (0xda)
                    break;
                case 0xdb: // sub.ovf.un (0xdb)
                    break;
                case 0xdc: // endfinally (0xdc)
                    break;
                case 0xdd: // leave (0xdd)
                    break;
                case 0xde: // leave.s (0xde)
                    break;
                case 0xdf: // stind.i (0xdf)
                    break;
                case 0xe0: // conv.u (0xe0)
                    break;
                case 0xf8: // prefix7 (0xf8)
                    break;
                case 0xf9: // prefix6 (0xf9)
                    break;
                case 0xfa: // prefix5 (0xfa)
                    break;
                case 0xfb: // prefix4 (0xfb)
                    break;
                case 0xfc: // prefix3 (0xfc)
                    break;
                case 0xfd: // prefix2 (0xfd)
                    break;
                case 0xfe: // prefix1 (0xfe)
                    RunMethod2(p++);
                    break;
                case 0xff: // prefixref (0xff)
                    break;
            }
        }

        public void RunMethod2(InternalPointer<byte> p)
        {
            // second byte il

            switch ((byte)p)
            {
                case 0x0: // arglist (0xfe00) (-1)
                    break;
                case 0x1: // ceq (0xfe01) (0)
                    break;
                case 0x2: // cgt (0xfe02) (0)
                    break;
                case 0x3: // cgt.un (0xfe03) (0)
                    break;
                case 0x4: // clt (0xfe04) (0)
                    break;
                case 0x5: // clt.un (0xfe05) (0)
                    break;
                case 0x6: // ldftn (0xfe06) (4)
                    break;
                case 0x7: // ldvirtftn (0xfe07) (-1)
                    break;
                case 0x9: // ldarg (0xfe09) (-1)
                    break;
                case 0xa: // ldarga (0xfe0a) (2)
                    break;
                case 0xb: // starg (0xfe0b) (-1)
                    break;
                case 0xc: // ldloc (0xfe0c) (2)
                    break;
                case 0xd: // ldloca (0xfe0d) (2)
                    break;
                case 0xe: // stloc (0xfe0e) (2)
                    break;
                case 0xf: // localloc (0xfe0f) (-1)
                    break;
                case 0x11: // endfilter (0xfe11) (-1)
                    break;
                case 0x12: // unaligned. (0xfe12) (-1)
                    break;
                case 0x13: // volatile. (0xfe13) (0)
                    break;
                case 0x14: // tail. (0xfe14) (-1)
                    break;
                case 0x15: // initobj (0xfe15) (-1)
                    break;
                case 0x16: // constrained. (0xfe16) (4)
                    break;
                case 0x17: // cpblk (0xfe17) (-1)
                    break;
                case 0x18: // initblk (0xfe18) (-1)
                    break;
                case 0x1a: // rethrow (0xfe1a) (-1)
                    break;
                case 0x1c: // sizeof (0xfe1c) (-1)
                    break;
                case 0x1d: // refanytype (0xfe1d) (-1)
                    break;
                case 0x1e: // readonly. (0xfe1e) (-1)
                    break;

            }
        }
    }

    //   class Ops
    //   {
    //       private void il_add()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_add_ovf()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_add_ovf_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_and()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_arglist()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_beq /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_beq_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bge /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bge_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bge_un /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bge_un_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bgt /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bgt_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bgt_un /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bgt_un_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ble /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ble_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ble_un /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ble_un_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_blt /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_blt_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_blt_un /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_blt_un_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bne_un /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_bne_un_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_box /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_br /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_br_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_break()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brfalse /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brfalse_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brinst /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brinst_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brnull /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brnull_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brtrue /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brtrue_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brzero /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_brzero_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_call /* <method> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_calli /* <callsitedescr> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_callvirt /* <method> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_castclass /* <class> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ceq()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_cgt()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_cgt_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ckfinite()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_clt()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_clt_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_constrained_ /* <thisType> */ /* [prefix] */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_i()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_i1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_i2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_i4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_i8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i1_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i2_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i4_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_i8_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u1_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u2_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u4_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_ovf_u8_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_r_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_r4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_r8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_u()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_u1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_u2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_u4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_conv_u8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_cpblk()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_cpobj /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_div()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_div_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_dup()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_endfault()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_endfilter()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_endfinally()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_idind_u8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_initblk()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_initobj /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_isinst /* <class> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_jmp /* <method> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldarg /* <uint16 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldarg_0()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldarg_1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldarg_2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldarg_3()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldarg_s /* <uint8 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldarga /* <uint16 (argNum)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldarga_s /* <uint8 (argNum)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4 /* <int32 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_0()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_3()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_5()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_6()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_7()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_m1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_M1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i4_s /* <int8 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_i8 /* <int64 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_r4 /* <float32 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldc_r8 /* <float64 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_i()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_i1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_i2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_i4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_i8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_r4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_r8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_ref()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_u1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_u2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_u4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelem_u8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldelema /* <class> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldfld /* <field> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldflda /* <field> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldftn /* <method> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_i()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_i1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_i2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_i4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_i8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_r4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_r8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_ref()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_u1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_u2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldind_u4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldlen()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldloc /* <uint16 (indx)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldloc_0()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldloc_1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldloc_2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldloc_3()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldloc_s /* <uint8 (indx)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldloca /* <uint16 (indx)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldloca_s /* <uint8 (indx)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldnull()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldobj /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldsfld /* <field> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldsflda /* <field> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldstr /* <string> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldtoken /* <token> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ldvirtftn /* <method> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_leave /* <int32 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_leave_s /* <int8 (target)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_localloc()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_mkrefany /* <class> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_mul()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_mul_ovf()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_mul_ovf_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_neg()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_newarr /* <etype> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_newobj /* <ctor> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_no_ /*{
    //typecheck, rangecheck, nullcheck }*/ /* [prefix] */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_nop()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_not()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_or()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_pop()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_readonly_ /* [prefix] */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_refanytype()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_refanyval /* <type> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_rem()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_rem_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_ret()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_rethrow()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_shl()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_shr()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_shr_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_sizeof /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_starg /* <uint16 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_starg_s /* <uint8 (num)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem_i()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem_i1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem_i2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem_i4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem_i8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem_r4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem_r8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stelem_ref()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stfld /* <field> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stind_i()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stind_i1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stind_i2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stind_i4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stind_i8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stind_r4()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stind_r8()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stind_ref()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stloc /* <uint16 (indx)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stloc_0()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stloc_1()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stloc_2()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stloc_3()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stloc_s /* <uint8 (indx)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stobj /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_stsfld /* <field> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_sub()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_sub_ovf()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_sub_ovf_un()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_switch /* <uint32, int32,int32 (t1__tN)> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_tail_ /* [prefix] */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_throw()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_unaligned_ /*(alignment)*/ /* [prefix] */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_unbox /* <valuetype> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_unbox_any /* <typeTok> */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_volatile_ /* [prefix] */()
    //       {
    //           throw new NotImplementedException();
    //       }

    //       private void il_xor()
    //       {
    //           throw new NotImplementedException();
    //       }

    //   }
}
