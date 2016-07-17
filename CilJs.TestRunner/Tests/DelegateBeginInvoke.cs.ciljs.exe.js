var asm1;(function (asm)
{
    asm.FullName = "DelegateBeginInvoke.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.Invoke()*/
    asm.x6000002 = CILJS.delegate_invoke;;
    /* System.IAsyncResult A.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000003 = CILJS.delegate_begin_invoke;;
    /* System.Void A.EndInvoke(IAsyncResult)*/
    asm.x6000004 = CILJS.delegate_end_invoke;;
    /*  A..ctor(Object,IntPtr)*/
    asm.x6000001 = CILJS.delegate_ctor;;
    /* System.Int32 B.Invoke()*/
    asm.x6000006 = CILJS.delegate_invoke;;
    /* System.IAsyncResult B.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000007 = CILJS.delegate_begin_invoke;;
    /* System.Int32 B.EndInvoke(IAsyncResult)*/
    asm.x6000008 = CILJS.delegate_end_invoke;;
    /*  B..ctor(Object,IntPtr)*/
    asm.x6000005 = CILJS.delegate_ctor;;
    /* System.Void C.Invoke(Int32)*/
    asm.x600000a = CILJS.delegate_invoke;;
    /* System.IAsyncResult C.BeginInvoke(Int32,AsyncCallback,Object)*/
    asm.x600000b = CILJS.delegate_begin_invoke;;
    /* System.Void C.EndInvoke(IAsyncResult)*/
    asm.x600000c = CILJS.delegate_end_invoke;;
    /*  C..ctor(Object,IntPtr)*/
    asm.x6000009 = CILJS.delegate_ctor;;
    /* static System.Void Program.Main()*/
    asm.x600000d = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: nop  */
        /* IL_01: call Void Simple() */
        asm1.x600000f();
        /* IL_06: nop  */
        /* IL_07: call Void WithCallback() */
        asm1.x600000e();
        /* IL_0C: nop  */
        /* IL_0D: ret  */
        return ;
    };;
    /* static System.Void Program.WithCallback()*/
    asm.x600000e_init = function ()
    {
        ((asm1)["Program+<>c__DisplayClass1_0"]().init)();
        ((asm1)["Program+<>c"]().init)();
        (asm1.A().init)();
        ((asm0)["System.AsyncCallback"]().init)();
        ((asm0)["System.IAsyncResult"]().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        asm.x600000e_init();
        return asm.x600000e_();
    };;
    asm.x600000e_ = function WithCallback()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc2;
        var loc1;
        var in_block_1;
        var loc3;
        t0 = (asm1)["Program+<>c__DisplayClass1_0"]();
        t1 = (asm1)["Program+<>c"]();
        t2 = asm1.A();
        t3 = (asm0)["System.AsyncCallback"]();
        t4 = (asm0)["System.Int32"]();
        t5 = (asm0)["System.IAsyncResult"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x6000011,[null]);
                /* IL_06: nop  */
                
                /* IL_07: ldloc.0  */
                /* IL_08: ldc.i4.0  */
                /* IL_09: stfld Int32 state */
                loc0.state = (0|0);
                asm1.x6000013();
                /* IL_0E: ldsfld A <>9__1_0 */
                st_03 = (t1)["<>9__1_0"];
                /* IL_13: dup  */
                st_0A = st_05 = st_04 = st_03;
                /* IL_14: brtrue.s IL_2D */
                
                if (st_04){
                    __pos__ = 0x2D;
                    continue;
                }
                /* IL_16: pop  */
                
                asm1.x6000013();
                /* IL_17: ldsfld <>c <>9 */
                st_06 = (t1)["<>9"];
                /* IL_1D: ldftn Void <WithCallback>b__1_0() */
                st_07 = asm1.x6000015;
                /* IL_22: newobj Void .ctor(System.Object, System.IntPtr) */
                st_08 = CILJS.newobj(t2,asm1.x6000001,[null, st_06, st_07]);
                /* IL_27: dup  */
                st_0A = st_09 = st_08;
                asm1.x6000013();
                /* IL_28: stsfld A <>9__1_0 */
                (t1)["<>9__1_0"] = st_09;
                case 0x2D:
                /* IL_2D: stloc.2  */
                loc2 = st_0A;
                /* IL_2E: ldnull  */
                /* IL_2F: stloc.1  */
                loc1 = null;
                /* IL_30: ldloc.2  */
                /* IL_31: ldloc.0  */
                /* IL_33: ldftn Void <WithCallback>b__1(System.IAsyncResult) */
                /* IL_38: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_3D: ldstr  state  */
                /* IL_42: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object) */
                /* IL_47: stloc.1  */
                loc1 = ((loc2.vtable)["asm1.x6000003"]())(loc2,CILJS.newobj(t3,asm0.x600003a,[null, loc0, asm1.x6000012]),CILJS.new_string(" state "));
                /* IL_48: br.s IL_52 */
                __pos__ = 0x52;
                continue;
                case 0x4A:
                case 0x52:
                in_block_1 = true;
                
                if (__pos__ > 0x5D){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x4A){
                    __pos__ = 0x4A;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x4A:
                        /* IL_4A: ldc.i4.0  */
                        /* IL_4B: conv.i8  */
                        /* IL_4C: call Void Sleep(System.Int64) */
                        asm0.x6000181(CILJS.conv_i8((0|0)));
                        /* IL_51: nop  */
                        
                        case 0x52:
                        /* IL_52: ldloc.0  */
                        /* IL_53: ldfld Int32 state */
                        /* IL_58: ldc.i4.0  */
                        /* IL_5A: ceq  */
                        /* IL_5B: stloc.3  */
                        loc3 = ((loc0.state === (0|0)) ? 1 : 0);
                        /* IL_5C: ldloc.3  */
                        /* IL_5D: brtrue.s IL_4A */
                        
                        if (loc3){
                            __pos__ = 0x4A;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x52) || (__pos__ < 0x4A)){
                    continue;
                }
                /* IL_5F: ldloc.2  */
                /* IL_60: ldloc.1  */
                /* IL_61: callvirt Void EndInvoke(System.IAsyncResult) */
                ((loc2.vtable)["asm1.x6000004"]())(loc2,loc1);
                /* IL_66: nop  */
                
                /* IL_67: ldloc.0  */
                /* IL_68: ldfld Int32 state */
                /* IL_6D: box System.Int32 */
                /* IL_72: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0.state,t4));
                /* IL_77: nop  */
                
                /* IL_78: ldloc.1  */
                /* IL_79: callvirt Object get_AsyncState() */
                /* IL_7E: call Void WriteLine(System.Object) */
                asm0.x600005a((((loc1.ifacemap)[t5].x600008a)())(CILJS.convert_box_to_pointer_as_needed(loc1)));
                /* IL_83: nop  */
                
                /* IL_84: ret  */
                return ;
            }
        }
    };
    /* static System.Void Program.Simple()*/
    asm.x600000f_init = function ()
    {
        ((asm1)["Program+<>c__DisplayClass2_0"]().init)();
        ((asm1)["Program+<>c"]().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        asm.x600000f_init();
        return asm.x600000f_();
    };;
    asm.x600000f_ = function Simple()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var st_15;
        var st_16;
        var st_17;
        var st_41;
        var st_42;
        var st_4D;
        var st_4E;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc2;
        var loc1;
        var loc3;
        var loc6;
        var loc4;
        var loc5;
        t0 = (asm1)["Program+<>c__DisplayClass2_0"]();
        t1 = (asm1)["Program+<>c"]();
        t2 = asm1.A();
        t3 = asm1.B();
        t4 = (asm0)["System.Int32"]();
        t5 = asm1.C();
        t6 = (asm0)["System.Boolean"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x6000018,[null]);
                /* IL_06: nop  */
                
                asm1.x6000013();
                /* IL_07: ldsfld A <>9__2_0 */
                st_01 = (t1)["<>9__2_0"];
                /* IL_0C: dup  */
                st_08 = st_03 = st_02 = st_01;
                /* IL_0D: brtrue.s IL_26 */
                
                if (st_02){
                    __pos__ = 0x26;
                    continue;
                }
                /* IL_0F: pop  */
                
                asm1.x6000013();
                /* IL_10: ldsfld <>c <>9 */
                st_04 = (t1)["<>9"];
                /* IL_16: ldftn Void <Simple>b__2_0() */
                st_05 = asm1.x6000016;
                /* IL_1B: newobj Void .ctor(System.Object, System.IntPtr) */
                st_06 = CILJS.newobj(t2,asm1.x6000001,[null, st_04, st_05]);
                /* IL_20: dup  */
                st_08 = st_07 = st_06;
                asm1.x6000013();
                /* IL_21: stsfld A <>9__2_0 */
                (t1)["<>9__2_0"] = st_07;
                case 0x26:
                /* IL_26: stloc.2  */
                loc2 = st_08;
                /* IL_27: ldnull  */
                /* IL_28: stloc.1  */
                loc1 = null;
                /* IL_29: ldloc.2  */
                /* IL_2A: ldnull  */
                /* IL_2B: ldnull  */
                /* IL_2C: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object) */
                /* IL_31: stloc.1  */
                loc1 = ((loc2.vtable)["asm1.x6000003"]())(loc2,null,null);
                /* IL_32: ldloc.2  */
                /* IL_33: ldloc.1  */
                /* IL_34: callvirt Void EndInvoke(System.IAsyncResult) */
                ((loc2.vtable)["asm1.x6000004"]())(loc2,loc1);
                /* IL_39: nop  */
                
                asm1.x6000013();
                /* IL_3A: ldsfld B <>9__2_1 */
                st_10 = (t1)["<>9__2_1"];
                /* IL_3F: dup  */
                st_17 = st_12 = st_11 = st_10;
                /* IL_40: brtrue.s IL_59 */
                
                if (st_11){
                    __pos__ = 0x59;
                    continue;
                }
                /* IL_42: pop  */
                
                asm1.x6000013();
                /* IL_43: ldsfld <>c <>9 */
                st_13 = (t1)["<>9"];
                /* IL_49: ldftn Int32 <Simple>b__2_1() */
                st_14 = asm1.x6000017;
                /* IL_4E: newobj Void .ctor(System.Object, System.IntPtr) */
                st_15 = CILJS.newobj(t3,asm1.x6000005,[null, st_13, st_14]);
                /* IL_53: dup  */
                st_17 = st_16 = st_15;
                asm1.x6000013();
                /* IL_54: stsfld B <>9__2_1 */
                (t1)["<>9__2_1"] = st_16;
                case 0x59:
                /* IL_59: stloc.3  */
                loc3 = st_17;
                /* IL_5A: ldnull  */
                /* IL_5B: stloc.1  */
                loc1 = null;
                /* IL_5C: ldloc.3  */
                /* IL_5D: ldnull  */
                /* IL_5E: ldnull  */
                /* IL_5F: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object) */
                /* IL_64: stloc.1  */
                loc1 = ((loc3.vtable)["asm1.x6000007"]())(loc3,null,null);
                /* IL_65: ldloc.3  */
                /* IL_66: ldloc.1  */
                /* IL_67: callvirt Int32 EndInvoke(System.IAsyncResult) */
                /* IL_6C: box System.Int32 */
                /* IL_71: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(((loc3.vtable)["asm1.x6000008"]())(loc3,loc1),t4));
                /* IL_76: nop  */
                
                /* IL_77: ldloc.0  */
                /* IL_78: ldc.i4.0  */
                /* IL_79: stfld Int32 i */
                loc0.i = (0|0);
                /* IL_7E: ldloc.0  */
                /* IL_7F: ldc.i4.2  */
                /* IL_80: newarr System.Int32 */
                /* IL_85: stfld Int32[] arr */
                loc0.arr = CILJS.new_array(t4,(2|0));
                /* IL_8A: ldloc.0  */
                /* IL_8C: ldftn Void <Simple>b__2(System.Int32) */
                /* IL_91: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_96: stloc.s 6 */
                loc6 = CILJS.newobj(t5,asm1.x6000009,[null, loc0, asm1.x6000019]);
                /* IL_98: ldloc.s 6 */
                /* IL_9A: ldc.i4.s 123 */
                /* IL_9C: ldnull  */
                /* IL_9D: ldnull  */
                /* IL_9E: callvirt IAsyncResult BeginInvoke(System.Int32, System.AsyncCallback, System.Object) */
                /* IL_A3: stloc.s 4 */
                loc4 = ((loc6.vtable)["asm1.x600000b"]())(loc6,(123|0),null,null);
                /* IL_A5: ldloc.s 6 */
                /* IL_A7: ldc.i4 456 */
                /* IL_AC: ldnull  */
                /* IL_AD: ldnull  */
                /* IL_AE: callvirt IAsyncResult BeginInvoke(System.Int32, System.AsyncCallback, System.Object) */
                /* IL_B3: stloc.s 5 */
                loc5 = ((loc6.vtable)["asm1.x600000b"]())(loc6,(456|0),null,null);
                /* IL_B5: ldloc.s 6 */
                /* IL_B7: ldloc.s 4 */
                /* IL_B9: callvirt Void EndInvoke(System.IAsyncResult) */
                ((loc6.vtable)["asm1.x600000c"]())(loc6,loc4);
                /* IL_BE: nop  */
                
                /* IL_BF: ldloc.s 6 */
                /* IL_C1: ldloc.s 5 */
                /* IL_C3: callvirt Void EndInvoke(System.IAsyncResult) */
                ((loc6.vtable)["asm1.x600000c"]())(loc6,loc5);
                /* IL_C8: nop  */
                
                /* IL_C9: ldloc.0  */
                /* IL_CA: ldfld Int32[] arr */
                /* IL_CF: ldc.i4.0  */
                /* IL_D0: ldelem.i4  */
                /* IL_D1: ldc.i4.s 123 */
                /* IL_D3: beq.s IL_E6 */
                
                if ((loc0.arr.jsarr)[(0|0)] === (123|0)){
                    __pos__ = 0xE6;
                    continue;
                }
                /* IL_D5: ldloc.0  */
                /* IL_D6: ldfld Int32[] arr */
                /* IL_DB: ldc.i4.0  */
                /* IL_DC: ldelem.i4  */
                /* IL_DD: ldc.i4 456 */
                /* IL_E3: ceq  */
                st_41 = (((loc0.arr.jsarr)[(0|0)] === (456|0)) ? 1 : 0);
                /* IL_E4: br.s IL_E7 */
                __pos__ = 0xE7;
                continue;
                case 0xE6:
                /* IL_E6: ldc.i4.1  */
                st_41 = (1|0);
                case 0xE7:
                /* IL_E7: box System.Boolean */
                st_42 = CILJS.make_box(st_41,t6);
                /* IL_EC: call Void WriteLine(System.Object) */
                asm0.x600005a(st_42);
                /* IL_F1: nop  */
                
                /* IL_F2: ldloc.0  */
                /* IL_F3: ldfld Int32[] arr */
                /* IL_F8: ldc.i4.1  */
                /* IL_F9: ldelem.i4  */
                /* IL_FA: ldc.i4.s 123 */
                /* IL_FC: beq.s IL_10F */
                
                if ((loc0.arr.jsarr)[(1|0)] === (123|0)){
                    __pos__ = 0x10F;
                    continue;
                }
                /* IL_FE: ldloc.0  */
                /* IL_FF: ldfld Int32[] arr */
                /* IL_104: ldc.i4.1  */
                /* IL_105: ldelem.i4  */
                /* IL_106: ldc.i4 456 */
                /* IL_10C: ceq  */
                st_4D = (((loc0.arr.jsarr)[(1|0)] === (456|0)) ? 1 : 0);
                /* IL_10D: br.s IL_110 */
                __pos__ = 0x110;
                continue;
                case 0x10F:
                /* IL_10F: ldc.i4.1  */
                st_4D = (1|0);
                case 0x110:
                /* IL_110: box System.Boolean */
                st_4E = CILJS.make_box(st_4D,t6);
                /* IL_115: call Void WriteLine(System.Object) */
                asm0.x600005a(st_4E);
                /* IL_11A: nop  */
                
                /* IL_11B: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void <>c__DisplayClass1_0.<WithCallback>b__1(IAsyncResult)*/
    asm.x6000012 = function _WithCallback_b__1(arg0, arg1)
    {
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldc.i4.1  */
        /* IL_03: stfld Int32 state */
        arg0.state = (1|0);
        /* IL_0A: ret  */
        return ;
    };;
    /*  <>c__DisplayClass1_0..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void <>c.<WithCallback>b__1_0()*/
    asm.x6000015 = function _WithCallback_b__1_0(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr A */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("A"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_14: ret  */
        return ;
    };;
    /* System.Void <>c.<Simple>b__2_0()*/
    asm.x6000016 = function _Simple_b__2_0(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr A */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("A"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_14: ret  */
        return ;
    };;
    /* System.Int32 <>c.<Simple>b__2_1()*/
    asm.x6000017 = function _Simple_b__2_1(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr B */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("B"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ldc.i4.s 123 */
        /* IL_14: stloc.0  */
        loc0 = (123|0);
        /* IL_17: ldloc.0  */
        /* IL_18: ret  */
        return loc0;
    };;
    /* static  <>c..cctor()*/
    asm.x6000013_init = function ()
    {
        ((asm1)["Program+<>c"]().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function ()
    {
        asm.x6000013_init();
        return asm.x6000013_();
    };;
    asm.x6000013_ = function _cctor()
    {
        var t0;
        
        if ((asm1)["Program+<>c"]().FieldsInitialized){
            return;
        }
        (asm1)["Program+<>c"]().FieldsInitialized = true;
        t0 = (asm1)["Program+<>c"]();
        asm1.x6000013();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stsfld <>c <>9 */
        (t0)["<>9"] = CILJS.newobj(t0,asm1.x6000014,[null]);
        /* IL_0A: ret  */
        return ;
    };
    /*  <>c..ctor()*/
    asm.x6000014 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void <>c__DisplayClass2_0.<Simple>b__2(Int32)*/
    asm.x6000019 = function _Simple_b__2(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var __finally_continuation_1__;
        var st_0A;
        var loc1;
        var st_08;
        var st_06;
        var st_07;
        var st_09;
        var st_0B;
        var st_0C;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Int32[] arr */
                /* IL_07: stloc.0  */
                loc0 = arg0.arr;
                /* IL_08: ldloc.0  */
                /* IL_09: call Void Enter(System.Object) */
                asm0.x600017d(loc0);
                /* IL_0E: nop  */
                
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    
                    if (__pos__ < 0xF){
                        __pos__ = 0xF;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0xF:
                            /* IL_0F: nop  */
                            
                            /* IL_10: ldarg.0  */
                            /* IL_11: ldfld Int32[] arr */
                            st_0A = arg0.arr;
                            /* IL_16: ldarg.0  */
                            /* IL_17: ldfld Int32 i */
                            /* IL_1C: stloc.1  */
                            loc1 = arg0.i;
                            /* IL_1D: ldarg.0  */
                            st_08 = arg0;
                            /* IL_1E: ldloc.1  */
                            st_06 = loc1;
                            /* IL_1F: ldc.i4.1  */
                            st_07 = (1|0);
                            /* IL_20: add  */
                            st_09 = (st_06 + st_07) | (0|0);
                            /* IL_21: stfld Int32 i */
                            st_08.i = st_09;
                            /* IL_26: ldloc.1  */
                            st_0B = loc1;
                            /* IL_27: ldarg.1  */
                            st_0C = arg1;
                            /* IL_28: stelem.i4  */
                            (st_0A.jsarr)[st_0B] = st_0C;
                            /* IL_29: nop  */
                            
                            /* IL_2A: leave.s IL_34 */
                            in_block_1 = false;
                            __pos__ = 0x34;
                            continue;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0x2C;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x2C:
                            /* IL_2C: ldloc.0  */
                            /* IL_2D: call Void Exit(System.Object) */
                            asm0.x600017e(loc0);
                            /* IL_32: nop  */
                            
                            /* IL_33: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            continue;
                        }
                        break;
                    }
                }
                continue;
                case 0x34:
                /* IL_34: br.s IL_36 */
                __pos__ = 0x36;
                continue;
                case 0x36:
                /* IL_36: ret  */
                return ;
            }
        }
    };;
    /*  <>c__DisplayClass2_0..ctor()*/
    asm.x6000018 = function _ctor(arg0)
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
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x6000002", "Invoke"],
                    [asm1, "x6000003", "BeginInvoke"],
                    [asm1, "x6000004", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function A() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x6000006", "Invoke"],
                    [asm1, "x6000007", "BeginInvoke"],
                    [asm1, "x6000008", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000006","asm1.x6000006");
            CILJS.declare_virtual(this,"asm1.x6000007","asm1.x6000007");
            CILJS.declare_virtual(this,"asm1.x6000008","asm1.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function B() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[
                    [asm1, "x600000a", "Invoke"],
                    [asm1, "x600000b", "BeginInvoke"],
                    [asm1, "x600000c", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function C() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
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
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    (asm)["Program+<>c__DisplayClass1_0"] = CILJS.declare_type(
        "__c__DisplayClass1_0",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c__DisplayClass1_0",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function __c__DisplayClass1_0() { c.init();this.state = 0 }");
    (asm)["Program+<>c"] = CILJS.declare_type(
        "__c",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007",null);
            (this)["<>9"] = null;
            (this)["<>9__1_0"] = null;
            (this)["<>9__2_0"] = null;
            (this)["<>9__2_1"] = null;
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function __c() { c.init(); }");
    (asm)["Program+<>c__DisplayClass2_0"] = CILJS.declare_type(
        "__c__DisplayClass2_0",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c__DisplayClass2_0",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008",null);
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function __c__DisplayClass2_0() { c.init();this.arr = null;this.i = 0 }");
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
