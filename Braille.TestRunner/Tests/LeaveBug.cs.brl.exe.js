var asm1; (function (asm)
{
    asm.FullName = "LeaveBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
    /* static T Program.FirstOrDefault<T>(T[],pred`1)*/
    asm.x600000a = function (T)
    {
        return function FirstOrDefault(arg0,arg1)
        {
            var t0;
            var loc4;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc2;
            var loc3;
            var loc0;
            var loc1;
            t0 = T;
            loc4 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldarg.0 */
                    /* IL_01: stloc.2 */
                    loc2 = arg0;
                    /* IL_02: ldc.i4.0 */
                    /* IL_03: stloc.3 */
                    loc3 = (0|0);
                    /* IL_04: br.s IL_1F*/
                    __pos__ = 0x1F;
                    continue;
                    case 0x6:
                    /* IL_06: ldloc.2 */
                    /* IL_07: ldloc.3 */
                    /* IL_08: ldelem T*/
                    /* IL_0D: stloc.0 */
                    loc0 = (loc2.jsarr)[loc3];
                    /* IL_0E: ldarg.1 */
                    /* IL_0F: ldloc.0 */
                    /* IL_10: callvirt Boolean Invoke(T)*/
                    /* IL_15: brfalse.s IL_1B*/
                    
                    if ((!(arg1._methodPtr.apply(null,((arg1._target) ? ([
                            arg1._target,
                            loc0
                        ]) : ([
                            loc0
                        ])))))){
                        __pos__ = 0x1B;
                        continue;
                    }
                    /* IL_17: ldloc.0 */
                    /* IL_18: stloc.1 */
                    loc1 = loc0;
                    /* IL_19: leave.s IL_30*/
                    __pos__ = 0x30;
                    break;
                    case 0x1B:
                    /* IL_1B: ldloc.3 */
                    /* IL_1C: ldc.i4.1 */
                    /* IL_1D: add */
                    /* IL_1E: stloc.3 */
                    loc3 = (loc3 + (1|0)) | (0|0);
                    case 0x1F:
                    /* IL_1F: ldloc.3 */
                    /* IL_20: ldloc.2 */
                    /* IL_21: ldlen */
                    /* IL_22: conv.i4 */
                    /* IL_23: blt.s IL_06*/
                    
                    if (loc3 < (loc2.jsarr.length | (0|0))){
                        __pos__ = 0x6;
                        continue;
                    }
                    /* IL_25: ldloca.s 4*/
                    /* IL_28: initobj T*/
                    loc4 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_2D: ldloc.s 4*/
                    /* IL_2F: ret */
                    return loc4;
                    case 0x30:
                    /* IL_30: ldloc.1 */
                    /* IL_31: ret */
                    return loc1;
                }
            }
        };
    };;
    /* static System.Void Program.Main()*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.String"]().init)();
        (asm1.Program().init)();
        ((asm1)["Program+pred`1"]((asm0)["System.String"]()).init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.String"]();
        t2 = asm1.Program();
        t3 = (asm1)["Program+pred`1"](t1);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldc.i4.1 */
                /* IL_01: newarr System.String*/
                /* IL_06: stloc.1 */
                loc1 = BLR.new_array(t1,(1|0));
                /* IL_07: ldloc.1 */
                /* IL_08: ldc.i4.0 */
                /* IL_09: ldstr asd*/
                /* IL_0E: stelem.ref */
                BLR.stelem_ref(loc1,(0|0),BLR.new_string("asd"));
                /* IL_0F: ldloc.1 */
                /* IL_10: stloc.0 */
                loc0 = loc1;
                /* IL_11: ldloc.0 */
                st_0A = loc0;
                /* IL_12: ldsfld pred`1 CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_17: brtrue.s IL_2A*/
                
                if ((t2)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos__ = 0x2A;
                    continue;
                }
                /* IL_19: ldnull */
                st_07 = null;
                /* IL_1B: ldftn Boolean <Main>b__0(System.String)*/
                st_08 = asm1.x600000d;
                /* IL_20: newobj Void .ctor(System.Object, System.IntPtr)*/
                st_09 = BLR.newobj(t3,asm1.x600000e,[null, st_07, st_08]);
                /* IL_25: stsfld pred`1 CS$<>9__CachedAnonymousMethodDelegate1*/
                (t2)["CS$<>9__CachedAnonymousMethodDelegate1"] = st_09;
                case 0x2A:
                /* IL_2A: ldsfld pred`1 CS$<>9__CachedAnonymousMethodDelegate1*/
                st_0B = (t2)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_2F: call String FirstOrDefault[System.String](System.String[], Program+pred`1[System.String])*/
                st_0C = (asm1.x600000a((asm0)["System.String"]()))(st_0A,st_0B);
                /* IL_34: call Void Log(System.Object)*/
                asm1.x6000001(st_0C);
                /* IL_39: ret */
                return ;
            }
        }
    };
    /* static System.Boolean Program.<Main>b__0(String)*/
    asm.x600000d = function _Main_b__0(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /*  Program..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Boolean pred`1.Invoke(T)*/
    asm.x600000f = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /*  pred`1..ctor(Object,IntPtr)*/
    asm.x600000e = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Program+pred`1"] = BLR.declare_type(
        "pred_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+pred`1",false,false,false,true,false,[],[
                    [asm1, "x600000f", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm0.x6000079","asm0.x6000082");
            BLR.declare_virtual(this,"asm0.x6000078","asm0.x6000083");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x600007a");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600007d");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));
