var asm1; (function (asm)
{
    asm.FullName = "DelegateBeginInvoke.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void A.Invoke()*/
    asm.x600000b = CILJS.delegate_invoke;;
    /* System.IAsyncResult A.BeginInvoke(AsyncCallback,Object)*/
    asm.x600000c = CILJS.delegate_begin_invoke;;
    /* System.Void A.EndInvoke(IAsyncResult)*/
    asm.x600000d = CILJS.delegate_end_invoke;;
    /*  A..ctor(Object,IntPtr)*/
    asm.x600000a = CILJS.delegate_ctor;;
    /* System.Int32 B.Invoke()*/
    asm.x600000f = CILJS.delegate_invoke;;
    /* System.IAsyncResult B.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000010 = CILJS.delegate_begin_invoke;;
    /* System.Int32 B.EndInvoke(IAsyncResult)*/
    asm.x6000011 = CILJS.delegate_end_invoke;;
    /*  B..ctor(Object,IntPtr)*/
    asm.x600000e = CILJS.delegate_ctor;;
    /* System.Void C.Invoke(Int32)*/
    asm.x6000013 = CILJS.delegate_invoke;;
    /* System.IAsyncResult C.BeginInvoke(Int32,AsyncCallback,Object)*/
    asm.x6000014 = CILJS.delegate_begin_invoke;;
    /* System.Void C.EndInvoke(IAsyncResult)*/
    asm.x6000015 = CILJS.delegate_end_invoke;;
    /*  C..ctor(Object,IntPtr)*/
    asm.x6000012 = CILJS.delegate_ctor;;
    /* static System.Void Program.Main()*/
    asm.x6000016_init = function ()
    {
        asm.x6000016 = asm.x6000016_;
    };;
    asm.x6000016 = function ()
    {
        CILJS.init_base_types();
        asm.x6000016_init.apply(this,arguments);
        return asm.x6000016_.apply(this,arguments);
    };;
    asm.x6000016_ = function Main()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: call Void Simple()*/
        asm1.x6000018();
        /* IL_05: call Void WithCallback()*/
        asm1.x6000017();
        /* IL_0A: ret */
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
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.2 */
                loc2 = CILJS.newobj(t0,asm1.x600001d,[null]);
                /* IL_06: ldloc.2 */
                /* IL_07: ldc.i4.0 */
                /* IL_08: stfld Int32 state*/
                loc2.state = (0|0);
                /* IL_0D: ldsfld A CS$<>9__CachedAnonymousMethodDelegate2*/
                /* IL_12: brtrue.s IL_25*/
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate2"]){
                    __pos__ = 0x25;
                    continue;
                }
                /* IL_14: ldnull */
                /* IL_16: ldftn Void <WithCallback>b__0()*/
                /* IL_1B: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_20: stsfld A CS$<>9__CachedAnonymousMethodDelegate2*/
                (t1)["CS$<>9__CachedAnonymousMethodDelegate2"] = CILJS.newobj(t2,asm1.x600000a,[null, null, asm1.x600001a]);
                case 0x25:
                /* IL_25: ldsfld A CS$<>9__CachedAnonymousMethodDelegate2*/
                /* IL_2A: stloc.1 */
                loc1 = (t1)["CS$<>9__CachedAnonymousMethodDelegate2"];
                /* IL_2B: ldnull */
                /* IL_2C: stloc.0 */
                loc0 = null;
                /* IL_2D: ldloc.1 */
                /* IL_2E: ldloc.2 */
                /* IL_30: ldftn Void <WithCallback>b__1(System.IAsyncResult)*/
                /* IL_35: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_3A: ldstr  state */
                /* IL_3F: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object)*/
                /* IL_44: stloc.0 */
                loc0 = ((loc1.vtable)["asm1.x600000c"]())(loc1,CILJS.newobj(t3,asm0.x6000072,[null, loc2, asm1.x600001e]),CILJS.new_string(" state "));
                /* IL_45: br.s IL_4E*/
                __pos__ = 0x4E;
                continue;
                case 0x47:
                /* IL_47: ldc.i4.0 */
                /* IL_48: conv.i8 */
                /* IL_49: call Void Sleep(System.Int64)*/
                asm0.x600005b(CILJS.conv_i8((0|0)));
                case 0x4E:
                /* IL_4E: ldloc.2 */
                /* IL_4F: ldfld Int32 state*/
                /* IL_54: brfalse.s IL_47*/
                
                if ((!(loc2.state))){
                    __pos__ = 0x47;
                    continue;
                }
                /* IL_56: ldloc.1 */
                /* IL_57: ldloc.0 */
                /* IL_58: callvirt Void EndInvoke(System.IAsyncResult)*/
                ((loc1.vtable)["asm1.x600000d"]())(loc1,loc0);
                /* IL_5D: ldloc.2 */
                /* IL_5E: ldfld Int32 state*/
                /* IL_63: box System.Int32*/
                /* IL_68: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': loc2.state,
                        'type': t4,
                        'vtable': t4.prototype.vtable,
                        'ifacemap': t4.prototype.ifacemap
                    });
                /* IL_6D: ldloc.0 */
                /* IL_6E: callvirt Object get_AsyncState()*/
                /* IL_73: call Void Log(System.Object)*/
                asm1.x6000001((((loc0.ifacemap)[t5].x60000be)())(CILJS.convert_box_to_pointer_as_needed(loc0)));
                /* IL_78: ret */
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
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.s 6*/
                loc6 = CILJS.newobj(t0,asm1.x600001f,[null]);
                /* IL_07: ldsfld A CS$<>9__CachedAnonymousMethodDelegate8*/
                /* IL_0C: brtrue.s IL_1F*/
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate8"]){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_0E: ldnull */
                /* IL_10: ldftn Void <Simple>b__5()*/
                /* IL_15: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_1A: stsfld A CS$<>9__CachedAnonymousMethodDelegate8*/
                (t1)["CS$<>9__CachedAnonymousMethodDelegate8"] = CILJS.newobj(t2,asm1.x600000a,[null, null, asm1.x600001b]);
                case 0x1F:
                /* IL_1F: ldsfld A CS$<>9__CachedAnonymousMethodDelegate8*/
                /* IL_24: stloc.1 */
                loc1 = (t1)["CS$<>9__CachedAnonymousMethodDelegate8"];
                /* IL_25: ldnull */
                /* IL_26: stloc.0 */
                loc0 = null;
                /* IL_27: ldloc.1 */
                /* IL_28: ldnull */
                /* IL_29: ldnull */
                /* IL_2A: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object)*/
                /* IL_2F: stloc.0 */
                loc0 = ((loc1.vtable)["asm1.x600000c"]())(loc1,null,null);
                /* IL_30: ldloc.1 */
                /* IL_31: ldloc.0 */
                /* IL_32: callvirt Void EndInvoke(System.IAsyncResult)*/
                ((loc1.vtable)["asm1.x600000d"]())(loc1,loc0);
                /* IL_37: ldsfld B CS$<>9__CachedAnonymousMethodDelegate9*/
                /* IL_3C: brtrue.s IL_4F*/
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate9"]){
                    __pos__ = 0x4F;
                    continue;
                }
                /* IL_3E: ldnull */
                /* IL_40: ldftn Int32 <Simple>b__6()*/
                /* IL_45: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_4A: stsfld B CS$<>9__CachedAnonymousMethodDelegate9*/
                (t1)["CS$<>9__CachedAnonymousMethodDelegate9"] = CILJS.newobj(t3,asm1.x600000e,[null, null, asm1.x600001c]);
                case 0x4F:
                /* IL_4F: ldsfld B CS$<>9__CachedAnonymousMethodDelegate9*/
                /* IL_54: stloc.2 */
                loc2 = (t1)["CS$<>9__CachedAnonymousMethodDelegate9"];
                /* IL_55: ldnull */
                /* IL_56: stloc.0 */
                loc0 = null;
                /* IL_57: ldloc.2 */
                /* IL_58: ldnull */
                /* IL_59: ldnull */
                /* IL_5A: callvirt IAsyncResult BeginInvoke(System.AsyncCallback, System.Object)*/
                /* IL_5F: stloc.0 */
                loc0 = ((loc2.vtable)["asm1.x6000010"]())(loc2,null,null);
                /* IL_60: ldloc.2 */
                /* IL_61: ldloc.0 */
                /* IL_62: callvirt Int32 EndInvoke(System.IAsyncResult)*/
                /* IL_67: box System.Int32*/
                /* IL_6C: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': ((loc2.vtable)["asm1.x6000011"]())(loc2,loc0),
                        'type': t4,
                        'vtable': t4.prototype.vtable,
                        'ifacemap': t4.prototype.ifacemap
                    });
                /* IL_71: ldloc.s 6*/
                /* IL_73: ldc.i4.0 */
                /* IL_74: stfld Int32 i*/
                loc6.i = (0|0);
                /* IL_79: ldloc.s 6*/
                /* IL_7B: ldc.i4.2 */
                /* IL_7C: newarr System.Int32*/
                /* IL_81: stfld Int32[] arr*/
                loc6.arr = CILJS.new_array(t4,(2|0));
                /* IL_86: ldloc.s 6*/
                /* IL_89: ldftn Void <Simple>b__7(System.Int32)*/
                /* IL_8E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_93: stloc.s 5*/
                loc5 = CILJS.newobj(t5,asm1.x6000012,[null, loc6, asm1.x6000020]);
                /* IL_95: ldloc.s 5*/
                /* IL_97: ldc.i4.s 123*/
                /* IL_99: ldnull */
                /* IL_9A: ldnull */
                /* IL_9B: callvirt IAsyncResult BeginInvoke(System.Int32, System.AsyncCallback, System.Object)*/
                /* IL_A0: stloc.3 */
                loc3 = ((loc5.vtable)["asm1.x6000014"]())(loc5,(123|0),null,null);
                /* IL_A1: ldloc.s 5*/
                /* IL_A3: ldc.i4 456*/
                /* IL_A8: ldnull */
                /* IL_A9: ldnull */
                /* IL_AA: callvirt IAsyncResult BeginInvoke(System.Int32, System.AsyncCallback, System.Object)*/
                /* IL_AF: stloc.s 4*/
                loc4 = ((loc5.vtable)["asm1.x6000014"]())(loc5,(456|0),null,null);
                /* IL_B1: ldloc.s 5*/
                /* IL_B3: ldloc.3 */
                /* IL_B4: callvirt Void EndInvoke(System.IAsyncResult)*/
                ((loc5.vtable)["asm1.x6000015"]())(loc5,loc3);
                /* IL_B9: ldloc.s 5*/
                /* IL_BB: ldloc.s 4*/
                /* IL_BD: callvirt Void EndInvoke(System.IAsyncResult)*/
                ((loc5.vtable)["asm1.x6000015"]())(loc5,loc4);
                /* IL_C2: ldloc.s 6*/
                /* IL_C4: ldfld Int32[] arr*/
                /* IL_C9: ldc.i4.0 */
                /* IL_CA: ldelem.i4 */
                /* IL_CB: ldc.i4.s 123*/
                /* IL_CD: beq.s IL_E1*/
                
                if ((loc6.arr.jsarr)[(0|0)] === (123|0)){
                    __pos__ = 0xE1;
                    continue;
                }
                /* IL_CF: ldloc.s 6*/
                /* IL_D1: ldfld Int32[] arr*/
                /* IL_D6: ldc.i4.0 */
                /* IL_D7: ldelem.i4 */
                /* IL_D8: ldc.i4 456*/
                /* IL_DE: ceq */
                st_3B = (((loc6.arr.jsarr)[(0|0)] === (456|0)) ? (1) : (0));
                /* IL_DF: br.s IL_E2*/
                __pos__ = 0xE2;
                continue;
                case 0xE1:
                /* IL_E1: ldc.i4.1 */
                st_3B = (1|0);
                case 0xE2:
                /* IL_E2: box System.Boolean*/
                st_3C = {
                    'boxed': st_3B,
                    'type': t6,
                    'vtable': t6.prototype.vtable,
                    'ifacemap': t6.prototype.ifacemap
                };
                /* IL_E7: call Void Log(System.Object)*/
                asm1.x6000001(st_3C);
                /* IL_EC: ldloc.s 6*/
                /* IL_EE: ldfld Int32[] arr*/
                /* IL_F3: ldc.i4.1 */
                /* IL_F4: ldelem.i4 */
                /* IL_F5: ldc.i4.s 123*/
                /* IL_F7: beq.s IL_10B*/
                
                if ((loc6.arr.jsarr)[(1|0)] === (123|0)){
                    __pos__ = 0x10B;
                    continue;
                }
                /* IL_F9: ldloc.s 6*/
                /* IL_FB: ldfld Int32[] arr*/
                /* IL_100: ldc.i4.1 */
                /* IL_101: ldelem.i4 */
                /* IL_102: ldc.i4 456*/
                /* IL_108: ceq */
                st_47 = (((loc6.arr.jsarr)[(1|0)] === (456|0)) ? (1) : (0));
                /* IL_109: br.s IL_10C*/
                __pos__ = 0x10C;
                continue;
                case 0x10B:
                /* IL_10B: ldc.i4.1 */
                st_47 = (1|0);
                case 0x10C:
                /* IL_10C: box System.Boolean*/
                st_48 = {
                    'boxed': st_47,
                    'type': t6,
                    'vtable': t6.prototype.vtable,
                    'ifacemap': t6.prototype.ifacemap
                };
                /* IL_111: call Void Log(System.Object)*/
                asm1.x6000001(st_48);
                /* IL_116: ret */
                return ;
            }
        }
    };
    /* static System.Void Program.<WithCallback>b__0()*/
    asm.x600001a = function _WithCallback_b__0()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr A*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A"));
        /* IL_0A: ret */
        return ;
    };;
    /* static System.Void Program.<Simple>b__5()*/
    asm.x600001b = function _Simple_b__5()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr A*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A"));
        /* IL_0A: ret */
        return ;
    };;
    /* static System.Int32 Program.<Simple>b__6()*/
    asm.x600001c = function _Simple_b__6()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr B*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("B"));
        /* IL_0A: ldc.i4.s 123*/
        /* IL_0C: ret */
        return (123|0);
    };;
    /*  Program..ctor()*/
    asm.x6000019 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void <>c__DisplayClass3.<WithCallback>b__1(IAsyncResult)*/
    asm.x600001e = function _WithCallback_b__1(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stfld Int32 state*/
        arg0.state = (1|0);
        /* IL_07: ret */
        return ;
    };;
    /*  <>c__DisplayClass3..ctor()*/
    asm.x600001d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void <>c__DisplayClassa.<Simple>b__7(Int32)*/
    asm.x6000020 = function _Simple_b__7(arg0,arg1)
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
                /* IL_00: ldarg.0 */
                st_00 = arg0;
                /* IL_01: ldfld Int32[] arr*/
                st_01 = st_00.arr;
                /* IL_06: dup */
                st_03 = (st_02 = st_01);
                /* IL_07: stloc.0 */
                loc0 = st_02;
                /* IL_08: call Void Enter(System.Object)*/
                asm0.x6000057(st_03);
                
                try {
                    /* IL_0D: ldarg.0 */
                    st_04 = arg0;
                    /* IL_0E: ldfld Int32[] arr*/
                    st_0D = st_04.arr;
                    /* IL_13: ldarg.0 */
                    st_05 = arg0;
                    /* IL_14: dup */
                    st_0B = (st_06 = st_05);
                    /* IL_15: ldfld Int32 i*/
                    st_07 = st_06.i;
                    /* IL_1A: dup */
                    st_09 = (st_08 = st_07);
                    /* IL_1B: stloc.1 */
                    loc1 = st_08;
                    /* IL_1C: ldc.i4.1 */
                    st_0A = (1|0);
                    /* IL_1D: add */
                    st_0C = ((st_09 + st_0A) | (0|0));
                    /* IL_1E: stfld Int32 i*/
                    st_0B.i = st_0C;
                    /* IL_23: ldloc.1 */
                    st_0E = loc1;
                    /* IL_24: ldarg.1 */
                    st_0F = arg1;
                    /* IL_25: stelem.i4 */
                    (st_0D.jsarr)[st_0E] = st_0F;
                    /* IL_26: leave.s IL_2F*/
                    in_block_1 = false;
                    __pos__ = 0x2F;
                }
                
                finally {
                    /* IL_28: ldloc.0 */
                    /* IL_29: call Void Exit(System.Object)*/
                    asm0.x6000058(loc0);
                    /* IL_2E: endfinally */
                    in_block_1 = false;
                }
                break;
                case 0x2F:
                /* IL_2F: ret */
                return ;
            }
        }
    };;
    /*  <>c__DisplayClassa..ctor()*/
    asm.x600001f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
                    [asm1, "x600000b", "Invoke"],
                    [asm1, "x600000c", "BeginInvoke"],
                    [asm1, "x600000d", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            CILJS.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            CILJS.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
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
                    [asm1, "x600000f", "Invoke"],
                    [asm1, "x6000010", "BeginInvoke"],
                    [asm1, "x6000011", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            CILJS.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            CILJS.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            CILJS.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
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
                    [asm1, "x6000013", "Invoke"],
                    [asm1, "x6000014", "BeginInvoke"],
                    [asm1, "x6000015", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            CILJS.declare_virtual(this,"asm1.x6000014","asm1.x6000014");
            CILJS.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            CILJS.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
            (this)["CS$<>9__CachedAnonymousMethodDelegate2"] = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate8"] = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate9"] = null;
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Program+<>c__DisplayClass3"] = CILJS.declare_type(
        "__c__DisplayClass3",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c__DisplayClass3",false,false,false,false,false,[],[
                    [asm1, "x600001e", "<WithCallback>b__1"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.state = 0;
        });
    (asm)["Program+<>c__DisplayClassa"] = CILJS.declare_type(
        "__c__DisplayClassa",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c__DisplayClassa",false,false,false,false,false,[],[
                    [asm1, "x6000020", "<Simple>b__7"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.i = 0;
            this.prototype.arr = null;
        });
    asm.entryPoint = asm.x6000016;
})(asm1 || (asm1 = {}));
