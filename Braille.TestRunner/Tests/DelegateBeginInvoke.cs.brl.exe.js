var asm1;(function (asm)
{
    asm.FullName = "DelegateBeginInvoke.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
    /* System.Void A.Invoke()*/
    asm.x600000b = BLR.delegate_invoke;;
    /* System.IAsyncResult A.BeginInvoke(AsyncCallback,Object)*/
    asm.x600000c = BLR.delegate_begin_invoke;;
    /* System.Void A.EndInvoke(IAsyncResult)*/
    asm.x600000d = BLR.delegate_end_invoke;;
    /*  A..ctor(Object,IntPtr)*/
    asm.x600000a = BLR.delegate_ctor;;
    /* System.Int32 B.Invoke()*/
    asm.x600000f = BLR.delegate_invoke;;
    /* System.IAsyncResult B.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000010 = BLR.delegate_begin_invoke;;
    /* System.Int32 B.EndInvoke(IAsyncResult)*/
    asm.x6000011 = BLR.delegate_end_invoke;;
    /*  B..ctor(Object,IntPtr)*/
    asm.x600000e = BLR.delegate_ctor;;
    /* System.Void C.Invoke(Int32)*/
    asm.x6000013 = BLR.delegate_invoke;;
    /* System.IAsyncResult C.BeginInvoke(Int32,AsyncCallback,Object)*/
    asm.x6000014 = BLR.delegate_begin_invoke;;
    /* System.Void C.EndInvoke(IAsyncResult)*/
    asm.x6000015 = BLR.delegate_end_invoke;;
    /*  C..ctor(Object,IntPtr)*/
    asm.x6000012 = BLR.delegate_ctor;;
    /* static System.Void Program.Main()*/
    asm.x6000016_init = function ()
    {
        asm.x6000016 = asm.x6000016_;
    };;
    asm.x6000016 = function ()
    {
        BLR.init_base_types();
        asm.x6000016_init.apply(this,arguments);
        return asm.x6000016_.apply(this,arguments);
    };;
    asm.x6000016_ = function Main()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  DelegateBeginInvoke.cs:12:5*/
        /* IL_01: call Void Simple() DelegateBeginInvoke.cs:13:9*/
        asm1.x6000018();
        /* IL_06: nop  */
        /* IL_07: call Void WithCallback() DelegateBeginInvoke.cs:14:9*/
        asm1.x6000017();
        /* IL_0C: nop  */
        /* IL_0D: ret  DelegateBeginInvoke.cs:15:5*/
        return ;
    };
    /* static System.Void Program.WithCallback()*/
    asm.x6000017_init = function ()
    {
        ((asm1)["Program+<>c__DisplayClass3"]().init)();
        (asm1.Program().init)();
        (asm1.A().init)();
        ((asm0)["System.AsyncCallback"]().init)();
        ((asm0)["System.IAsyncResult"]().init)();
        asm.x6000017 = asm.x6000017_;
    };;
    asm.x6000017 = function ()
    {
        asm.x6000017_init.apply(this,arguments);
        return asm.x6000017_.apply(this,arguments);
    };;
    asm.x6000017_ = function WithCallback()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc2;
        var loc1;
        var loc0;
        var loc3;
        t0 = (asm1)["Program+<>c__DisplayClass3"]();
        t1 = asm1.Program();
        t2 = asm1.A();
        t3 = (asm0)["System.AsyncCallback"]();
        t4 = (asm0)["System.Int32"]();
        t5 = (asm0)["System.IAsyncResult"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stloc.2  */
                loc2 = BLR.newobj(t0,asm1.x600001d,[null]);
                /* IL_06: nop  DelegateBeginInvoke.cs:18:5*/
                
                /* IL_07: ldloc.2  */
                /* IL_08: ldc.i4.0  */
                /* IL_09: stfld Int32 state */
                loc2.state = (0|0);
                /* IL_0E: ldsfld A CS$<>9__CachedAnonymousMethodDelegate2 */
                /* IL_13: brtrue.s IL_28 */
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate2"]){
                    __pos__ = 0x28;
                    continue;
                }
                /* IL_15: ldnull  */
                /* IL_17: ldftn Void <WithCallback>b__0() */
                /* IL_1C: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_21: stsfld A CS$<>9__CachedAnonymousMethodDelegate2 */
                (t1)["CS$<>9__CachedAnonymousMethodDelegate2"] = BLR.newobj(t2,asm1.x600000a,[null, null, asm1.x600001a]);
                case 0x28:
                /* IL_28: ldsfld A CS$<>9__CachedAnonymousMethodDelegate2 */
                /* IL_2D: stloc.1  */
                loc1 = (t1)["CS$<>9__CachedAnonymousMethodDelegate2"];
                /* IL_2E: ldnull  */
                /* IL_2F: stloc.0  */
                loc0 = null;
                /* IL_30: ldloc.1  */
                /* IL_31: ldloc.2  */
                /* IL_33: ldftn Void <WithCallback>b__1(System.IAsyncResult) */
                /* IL_38: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_3D: ldstr  state  */
                /* IL_42: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object) */
                /* IL_47: stloc.0  */
                loc0 = ((loc1.vtable)["asm1.x600000c"]())(loc1,BLR.newobj(t3,asm0.x6000072,[null, loc2, asm1.x600001e]),BLR.new_string(" state "));
                /* IL_48: br.s IL_52 DelegateBeginInvoke.cs:16707566:0*/
                __pos__ = 0x52;
                continue;
                case 0x4A:
                /* IL_4A: ldc.i4.0  */
                /* IL_4B: conv.i8  */
                /* IL_4C: call Void Sleep(System.Int64) */
                asm0.x600005b(BLR.conv_i8((0|0)));
                /* IL_51: nop  */
                
                case 0x52:
                /* IL_52: ldloc.2  */
                /* IL_53: ldfld Int32 state */
                /* IL_58: ldc.i4.0  */
                /* IL_5A: ceq  */
                /* IL_5B: stloc.3  */
                loc3 = ((loc2.state === (0|0)) ? (1) : (0));
                /* IL_5C: ldloc.3  */
                /* IL_5D: brtrue.s IL_4A */
                
                if (loc3){
                    __pos__ = 0x4A;
                    continue;
                }
                /* IL_5F: ldloc.1  */
                /* IL_60: ldloc.0  */
                /* IL_61: callvirt Void EndInvoke(System.IAsyncResult) */
                ((loc1.vtable)["asm1.x600000d"]())(loc1,loc0);
                /* IL_66: nop  */
                
                /* IL_67: ldloc.2  */
                /* IL_68: ldfld Int32 state */
                /* IL_6D: box System.Int32 */
                /* IL_72: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc2.state,
                        'type': t4,
                        'vtable': t4.prototype.vtable,
                        'ifacemap': t4.prototype.ifacemap
                    });
                /* IL_77: nop  */
                
                /* IL_78: ldloc.0  */
                /* IL_79: callvirt Object get_AsyncState() */
                /* IL_7E: call Void Log(System.Object) */
                asm1.x6000001((((loc0.ifacemap)[t5].x60000be)())(BLR.convert_box_to_pointer_as_needed(loc0)));
                /* IL_83: nop  */
                
                /* IL_84: nop  DelegateBeginInvoke.cs:31:5*/
                
                /* IL_85: ret  */
                return ;
            }
        }
    };
    /* static System.Void Program.Simple()*/
    asm.x6000018_init = function ()
    {
        ((asm1)["Program+<>c__DisplayClassa"]().init)();
        (asm1.Program().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x6000018 = asm.x6000018_;
    };;
    asm.x6000018 = function ()
    {
        asm.x6000018_init.apply(this,arguments);
        return asm.x6000018_.apply(this,arguments);
    };;
    asm.x6000018_ = function Simple()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var st_3B;
        var st_3C;
        var st_47;
        var st_48;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc6;
        var loc1;
        var loc0;
        var loc2;
        var loc5;
        var loc3;
        var loc4;
        t0 = (asm1)["Program+<>c__DisplayClassa"]();
        t1 = asm1.Program();
        t2 = asm1.A();
        t3 = asm1.B();
        t4 = (asm0)["System.Int32"]();
        t5 = asm1.C();
        t6 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stloc.s 6 */
                loc6 = BLR.newobj(t0,asm1.x600001f,[null]);
                /* IL_07: nop  DelegateBeginInvoke.cs:34:5*/
                
                /* IL_08: ldsfld A CS$<>9__CachedAnonymousMethodDelegate8 */
                /* IL_0D: brtrue.s IL_22 */
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate8"]){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_0F: ldnull  */
                /* IL_11: ldftn Void <Simple>b__5() */
                /* IL_16: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_1B: stsfld A CS$<>9__CachedAnonymousMethodDelegate8 */
                (t1)["CS$<>9__CachedAnonymousMethodDelegate8"] = BLR.newobj(t2,asm1.x600000a,[null, null, asm1.x600001b]);
                case 0x22:
                /* IL_22: ldsfld A CS$<>9__CachedAnonymousMethodDelegate8 */
                /* IL_27: stloc.1  */
                loc1 = (t1)["CS$<>9__CachedAnonymousMethodDelegate8"];
                /* IL_28: ldnull  */
                /* IL_29: stloc.0  */
                loc0 = null;
                /* IL_2A: ldloc.1  */
                /* IL_2B: ldnull  */
                /* IL_2C: ldnull  */
                /* IL_2D: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object) */
                /* IL_32: stloc.0  */
                loc0 = ((loc1.vtable)["asm1.x600000c"]())(loc1,null,null);
                /* IL_33: ldloc.1  */
                /* IL_34: ldloc.0  */
                /* IL_35: callvirt Void EndInvoke(System.IAsyncResult) */
                ((loc1.vtable)["asm1.x600000d"]())(loc1,loc0);
                /* IL_3A: nop  */
                
                /* IL_3B: ldsfld B CS$<>9__CachedAnonymousMethodDelegate9 */
                /* IL_40: brtrue.s IL_55 */
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate9"]){
                    __pos__ = 0x55;
                    continue;
                }
                /* IL_42: ldnull  */
                /* IL_44: ldftn Int32 <Simple>b__6() */
                /* IL_49: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_4E: stsfld B CS$<>9__CachedAnonymousMethodDelegate9 */
                (t1)["CS$<>9__CachedAnonymousMethodDelegate9"] = BLR.newobj(t3,asm1.x600000e,[null, null, asm1.x600001c]);
                case 0x55:
                /* IL_55: ldsfld B CS$<>9__CachedAnonymousMethodDelegate9 */
                /* IL_5A: stloc.2  */
                loc2 = (t1)["CS$<>9__CachedAnonymousMethodDelegate9"];
                /* IL_5B: ldnull  */
                /* IL_5C: stloc.0  */
                loc0 = null;
                /* IL_5D: ldloc.2  */
                /* IL_5E: ldnull  */
                /* IL_5F: ldnull  */
                /* IL_60: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object) */
                /* IL_65: stloc.0  */
                loc0 = ((loc2.vtable)["asm1.x6000010"]())(loc2,null,null);
                /* IL_66: ldloc.2  */
                /* IL_67: ldloc.0  */
                /* IL_68: callvirt Int32 EndInvoke(System.IAsyncResult) */
                /* IL_6D: box System.Int32 */
                /* IL_72: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': ((loc2.vtable)["asm1.x6000011"]())(loc2,loc0),
                        'type': t4,
                        'vtable': t4.prototype.vtable,
                        'ifacemap': t4.prototype.ifacemap
                    });
                /* IL_77: nop  */
                
                /* IL_78: ldloc.s 6 */
                /* IL_7A: ldc.i4.0  */
                /* IL_7B: stfld Int32 i */
                loc6.i = (0|0);
                /* IL_80: ldloc.s 6 */
                /* IL_82: ldc.i4.2  */
                /* IL_83: newarr System.Int32 */
                /* IL_88: stfld Int32[] arr */
                loc6.arr = BLR.new_array(t4,(2|0));
                /* IL_8D: ldloc.s 6 */
                /* IL_90: ldftn Void <Simple>b__7(System.Int32) */
                /* IL_95: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_9A: stloc.s 5 */
                loc5 = BLR.newobj(t5,asm1.x6000012,[null, loc6, asm1.x6000020]);
                /* IL_9C: ldloc.s 5 */
                /* IL_9E: ldc.i4.s 123 */
                /* IL_A0: ldnull  */
                /* IL_A1: ldnull  */
                /* IL_A2: callvirt IAsyncResult BeginInvoke(System.Int32, System.AsyncCallback, System.Object) */
                /* IL_A7: stloc.3  */
                loc3 = ((loc5.vtable)["asm1.x6000014"]())(loc5,(123|0),null,null);
                /* IL_A8: ldloc.s 5 */
                /* IL_AA: ldc.i4 456 */
                /* IL_AF: ldnull  */
                /* IL_B0: ldnull  */
                /* IL_B1: callvirt IAsyncResult BeginInvoke(System.Int32, System.AsyncCallback, System.Object) */
                /* IL_B6: stloc.s 4 */
                loc4 = ((loc5.vtable)["asm1.x6000014"]())(loc5,(456|0),null,null);
                /* IL_B8: ldloc.s 5 */
                /* IL_BA: ldloc.3  */
                /* IL_BB: callvirt Void EndInvoke(System.IAsyncResult) */
                ((loc5.vtable)["asm1.x6000015"]())(loc5,loc3);
                /* IL_C0: nop  */
                
                /* IL_C1: ldloc.s 5 */
                /* IL_C3: ldloc.s 4 */
                /* IL_C5: callvirt Void EndInvoke(System.IAsyncResult) */
                ((loc5.vtable)["asm1.x6000015"]())(loc5,loc4);
                /* IL_CA: nop  */
                
                /* IL_CB: ldloc.s 6 */
                /* IL_CD: ldfld Int32[] arr */
                /* IL_D2: ldc.i4.0  */
                /* IL_D3: ldelem.i4  */
                /* IL_D4: ldc.i4.s 123 */
                /* IL_D6: beq.s IL_EA */
                
                if ((loc6.arr.jsarr)[(0|0)] === (123|0)){
                    __pos__ = 0xEA;
                    continue;
                }
                /* IL_D8: ldloc.s 6 */
                /* IL_DA: ldfld Int32[] arr */
                /* IL_DF: ldc.i4.0  */
                /* IL_E0: ldelem.i4  */
                /* IL_E1: ldc.i4 456 */
                /* IL_E7: ceq  */
                st_3B = (((loc6.arr.jsarr)[(0|0)] === (456|0)) ? (1) : (0));
                /* IL_E8: br.s IL_EB */
                __pos__ = 0xEB;
                continue;
                case 0xEA:
                /* IL_EA: ldc.i4.1  */
                st_3B = (1|0);
                case 0xEB:
                /* IL_EB: nop  */
                
                /* IL_EC: box System.Boolean */
                st_3C = {
                    'boxed': st_3B,
                    'type': t6,
                    'vtable': t6.prototype.vtable,
                    'ifacemap': t6.prototype.ifacemap
                };
                /* IL_F1: call Void Log(System.Object) */
                asm1.x6000001(st_3C);
                /* IL_F6: nop  */
                
                /* IL_F7: ldloc.s 6 */
                /* IL_F9: ldfld Int32[] arr */
                /* IL_FE: ldc.i4.1  */
                /* IL_FF: ldelem.i4  */
                /* IL_100: ldc.i4.s 123 */
                /* IL_102: beq.s IL_116 */
                
                if ((loc6.arr.jsarr)[(1|0)] === (123|0)){
                    __pos__ = 0x116;
                    continue;
                }
                /* IL_104: ldloc.s 6 */
                /* IL_106: ldfld Int32[] arr */
                /* IL_10B: ldc.i4.1  */
                /* IL_10C: ldelem.i4  */
                /* IL_10D: ldc.i4 456 */
                /* IL_113: ceq  */
                st_47 = (((loc6.arr.jsarr)[(1|0)] === (456|0)) ? (1) : (0));
                /* IL_114: br.s IL_117 */
                __pos__ = 0x117;
                continue;
                case 0x116:
                /* IL_116: ldc.i4.1  */
                st_47 = (1|0);
                case 0x117:
                /* IL_117: nop  */
                
                /* IL_118: box System.Boolean */
                st_48 = {
                    'boxed': st_47,
                    'type': t6,
                    'vtable': t6.prototype.vtable,
                    'ifacemap': t6.prototype.ifacemap
                };
                /* IL_11D: call Void Log(System.Object) */
                asm1.x6000001(st_48);
                /* IL_122: nop  */
                
                /* IL_123: nop  DelegateBeginInvoke.cs:58:5*/
                
                /* IL_124: ret  */
                return ;
            }
        }
    };
    /* static System.Void Program.<WithCallback>b__0()*/
    asm.x600001a = function _WithCallback_b__0()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  DelegateBeginInvoke.cs:21:21*/
        /* IL_01: ldstr A */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("A"));
        /* IL_0B: nop  */
        /* IL_0C: ret  DelegateBeginInvoke.cs:16707566:0*/
        return ;
    };;
    /* static System.Void Program.<Simple>b__5()*/
    asm.x600001b = function _Simple_b__5()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  DelegateBeginInvoke.cs:37:21*/
        /* IL_01: ldstr A */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("A"));
        /* IL_0B: nop  */
        /* IL_0C: ret  DelegateBeginInvoke.cs:16707566:0*/
        return ;
    };;
    /* static System.Int32 Program.<Simple>b__6()*/
    asm.x600001c = function _Simple_b__6()
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  DelegateBeginInvoke.cs:42:21*/
        /* IL_01: ldstr B */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("B"));
        /* IL_0B: nop  */
        /* IL_0C: ldc.i4.s 123 */
        /* IL_0E: stloc.0  */
        loc0 = (123|0);
        /* IL_11: ldloc.0  */
        /* IL_12: ret  */
        return loc0;
    };;
    /*  Program..ctor()*/
    asm.x6000019 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void <>c__DisplayClass3.<WithCallback>b__1(IAsyncResult)*/
    asm.x600001e = function _WithCallback_b__1(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  DelegateBeginInvoke.cs:23:39*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldc.i4.1  */
        /* IL_03: stfld Int32 state */
        arg0.state = (1|0);
        /* IL_08: ret  DelegateBeginInvoke.cs:16707566:0*/
        return ;
    };;
    /*  <>c__DisplayClass3..ctor()*/
    asm.x600001d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void <>c__DisplayClassa.<Simple>b__7(Int32)*/
    asm.x6000020 = function _Simple_b__7(arg0, arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  DelegateBeginInvoke.cs:50:22*/
                
                /* IL_01: ldarg.0  DelegateBeginInvoke.cs:50:24*/
                st_00 = arg0;
                /* IL_02: ldfld Int32[] arr */
                st_01 = st_00.arr;
                /* IL_07: dup  */
                st_03 = (st_02 = st_01);
                /* IL_08: stloc.0  */
                loc0 = st_02;
                /* IL_09: call Void Enter(System.Object) */
                asm0.x6000057(st_03);
                /* IL_0E: nop  */
                
                
                try {
                    /* IL_0F: nop  DelegateBeginInvoke.cs:50:35*/
                    
                    /* IL_10: ldarg.0  DelegateBeginInvoke.cs:50:37*/
                    st_04 = arg0;
                    /* IL_11: ldfld Int32[] arr */
                    st_0D = st_04.arr;
                    /* IL_16: ldarg.0  */
                    st_05 = arg0;
                    /* IL_17: dup  */
                    st_0B = (st_06 = st_05);
                    /* IL_18: ldfld Int32 i */
                    st_07 = st_06.i;
                    /* IL_1D: dup  */
                    st_09 = (st_08 = st_07);
                    /* IL_1E: stloc.1  */
                    loc1 = st_08;
                    /* IL_1F: ldc.i4.1  */
                    st_0A = (1|0);
                    /* IL_20: add  */
                    st_0C = ((st_09 + st_0A) | (0|0));
                    /* IL_21: stfld Int32 i */
                    st_0B.i = st_0C;
                    /* IL_26: ldloc.1  */
                    st_0E = loc1;
                    /* IL_27: ldarg.1  */
                    st_0F = arg1;
                    /* IL_28: stelem.i4  */
                    (st_0D.jsarr)[st_0E] = st_0F;
                    /* IL_29: nop  DelegateBeginInvoke.cs:50:51*/
                    
                    /* IL_2A: leave.s IL_34 DelegateBeginInvoke.cs:16707566:0*/
                    in_block_1 = false;
                    __pos__ = 0x34;
                }
                
                finally {
                    /* IL_2C: ldloc.0  */
                    /* IL_2D: call Void Exit(System.Object) */
                    asm0.x6000058(loc0);
                    /* IL_32: nop  */
                    
                    /* IL_33: endfinally  */
                    in_block_1 = false;
                }
                break;
                case 0x34:
                /* IL_34: nop  DelegateBeginInvoke.cs:16707566:0*/
                
                /* IL_35: ret  DelegateBeginInvoke.cs:16707566:0*/
                return ;
            }
        }
    };;
    /*  <>c__DisplayClassa..ctor()*/
    asm.x600001f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000b", "Invoke"],
                    [asm1, "x600000c", "BeginInvoke"],
                    [asm1, "x600000d", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x600000f", "Invoke"],
                    [asm1, "x6000010", "BeginInvoke"],
                    [asm1, "x6000011", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[
                    [asm1, "x6000013", "Invoke"],
                    [asm1, "x6000014", "BeginInvoke"],
                    [asm1, "x6000015", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            BLR.declare_virtual(this,"asm1.x6000014","asm1.x6000014");
            BLR.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            (this)["CS$<>9__CachedAnonymousMethodDelegate2"] = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate8"] = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate9"] = null;
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Program+<>c__DisplayClass3"] = BLR.declare_type(
        "__c__DisplayClass3",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+<>c__DisplayClass3",false,false,false,false,false,[],[
                    [asm1, "x600001e", "<WithCallback>b__1"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.state = 0;
        });
    (asm)["Program+<>c__DisplayClassa"] = BLR.declare_type(
        "__c__DisplayClassa",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+<>c__DisplayClassa",false,false,false,false,false,[],[
                    [asm1, "x6000020", "<Simple>b__7"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.i = 0;
            this.prototype.arr = null;
        });
    asm.entryPoint = asm.x6000016;
})(asm1 || (asm1 = {}));
