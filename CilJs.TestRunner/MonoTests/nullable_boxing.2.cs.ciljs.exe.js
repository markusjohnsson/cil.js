var asm1; (function (asm)
{
    asm.FullName = "nullable_boxing.2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Int32 Program.Main()*/
    asm.x600000a_init = function ()
    {
        ((asm1)["Program+Button"]().init)();
        ((asm0)["System.Nullable`1"]((asm0)["System.Int32"]()).init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        CILJS.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc2;
        var st_0B;
        var st_0C;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm1)["Program+Button"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.Nullable`1"](t1);
        loc2 = new ((asm0)["System.Nullable`1"]((asm0)["System.Int32"]()))();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                asm1.x600000e();
                /* IL_00: ldsfld Button TheButton*/
                /* IL_05: ldc.i4.1 */
                /* IL_06: newobj Void .ctor(System.Int32)*/
                /* IL_0B: callvirt Int32 Counter(System.Nullable`1[System.Int32])*/
                /* IL_10: ldc.i4.2 */
                /* IL_11: beq.s IL_15*/
                
                if (asm1.x600000c(t0.TheButton,CILJS.clone_value(CILJS.newobj(t2,asm0.x60001a6,[null, (1|0)]))) === (2|0)){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_13: ldc.i4.1 */
                /* IL_14: ret */
                return (1|0);
                case 0x15:
                /* IL_15: ldc.i4.1 */
                /* IL_16: newarr System.Nullable`1[System.Int32]*/
                /* IL_1B: stloc.1 */
                loc1 = CILJS.new_array(t2,(1|0));
                /* IL_1C: ldloc.1 */
                /* IL_1D: ldc.i4.0 */
                /* IL_1E: ldelema System.Nullable`1[System.Int32]*/
                st_0B = {
                    'w': function (v)
                    {
                        (loc1.jsarr)[(0|0)] = v;
                    },
                    'r': function ()
                    {
                        return (loc1.jsarr)[(0|0)];
                    }
                };
                /* IL_23: ldloca.s 2*/
                /* IL_26: initobj System.Nullable`1[System.Int32]*/
                loc2 = new t2();
                /* IL_2B: ldloc.2 */
                st_0C = loc2;
                /* IL_2C: stobj System.Nullable`1[System.Int32]*/
                st_0B.w(st_0C);
                /* IL_31: ldloc.1 */
                /* IL_32: stloc.0 */
                loc0 = loc1;
                /* IL_33: ldloc.0 */
                /* IL_34: ldc.i4.0 */
                /* IL_35: callvirt Object GetValue(System.Int32)*/
                /* IL_3A: brfalse.s IL_3E*/
                
                if ((!(asm0.x6000172(loc0,(0|0))))){
                    __pos__ = 0x3E;
                    continue;
                }
                /* IL_3C: ldc.i4.2 */
                /* IL_3D: ret */
                return (2|0);
                case 0x3E:
                /* IL_3E: ldc.i4.0 */
                /* IL_3F: ret */
                return (0|0);
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 Button.Counter(Nullable`1)*/
    asm.x600000c = function Counter(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarga.s 1*/
                /* IL_02: call Boolean get_HasValue()*/
                /* IL_07: brtrue.s IL_0B*/
                
                if (asm0.x60001a7({
                        'w': function (v)
                        {
                            arg1 = v;
                        },
                        'r': function ()
                        {
                            return arg1;
                        }
                    })){
                    __pos__ = 0xB;
                    continue;
                }
                /* IL_09: ldc.i4.0 */
                /* IL_0A: ret */
                return (0|0);
                case 0xB:
                /* IL_0B: ldarga.s 1*/
                /* IL_0D: call Int32 get_Value()*/
                /* IL_12: ldc.i4.1 */
                /* IL_13: add */
                /* IL_14: ret */
                return (asm0.x60001a8({
                        'w': function (v)
                        {
                            arg1 = v;
                        },
                        'r': function ()
                        {
                            return arg1;
                        }
                    }) + (1|0)) | (0|0);
            }
        }
    };;
    /*  Button..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  Button..cctor()*/
    asm.x600000e_init = function ()
    {
        ((asm1)["Program+Button"]().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function _cctor()
    {
        var t0;
        var __pos__;
        
        if ((asm1)["Program+Button"]().FieldsInitialized){
            return;
        }
        (asm1)["Program+Button"]().FieldsInitialized = true;
        t0 = (asm1)["Program+Button"]();
        __pos__ = 0x0;
        asm1.x600000e();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld Button TheButton*/
        (t0)["TheButton"] = CILJS.newobj(t0,asm1.x600000d,[null]);
        /* IL_0A: ret */
        return ;
    };
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Program+Button"] = CILJS.declare_type(
        "Button",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+Button",false,false,false,false,false,[],[
                    [asm1, "x600000c", "Counter"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.TheButton = null;
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
