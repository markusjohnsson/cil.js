var asm1; (function (asm)
{
    asm.FullName = "ReflectionMethods.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Void A.X()*/
    asm.x600000a = function X(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ret */
        return ;
    };;
    /* System.Void A.Y()*/
    asm.x600000b = function Y(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ret */
        return ;
    };;
    /* System.Void A.Z()*/
    asm.x600000c = function Z(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        (asm1.A().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        CILJS.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc3;
        var loc4;
        var loc2;
        t0 = asm1.A();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldtoken A*/
                /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0A: stloc.0 */
                loc0 = asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0));
                /* IL_0B: ldloc.0 */
                /* IL_0C: callvirt MethodInfo[] GetMethods()*/
                /* IL_11: stloc.1 */
                loc1 = ((loc0.vtable)["asm0.x60000f1"]())(loc0);
                /* IL_12: ldloc.1 */
                /* IL_13: stloc.3 */
                loc3 = loc1;
                /* IL_14: ldc.i4.0 */
                /* IL_15: stloc.s 4*/
                loc4 = (0|0);
                /* IL_17: br.s IL_2F*/
                __pos__ = 0x2F;
                continue;
                case 0x19:
                /* IL_19: ldloc.3 */
                /* IL_1A: ldloc.s 4*/
                /* IL_1C: ldelem.ref */
                /* IL_1D: stloc.2 */
                loc2 = CILJS.ldelem_ref(loc3,loc4);
                /* IL_1E: ldloc.2 */
                /* IL_1F: callvirt String get_Name()*/
                /* IL_24: call Void Log(System.Object)*/
                asm1.x6000001(((loc2.vtable)["asm0.x600003e"]())(loc2));
                /* IL_29: ldloc.s 4*/
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: add */
                /* IL_2D: stloc.s 4*/
                loc4 = (loc4 + (1|0)) | (0|0);
                case 0x2F:
                /* IL_2F: ldloc.s 4*/
                /* IL_31: ldloc.3 */
                /* IL_32: ldlen */
                /* IL_33: conv.i4 */
                /* IL_34: blt.s IL_19*/
                
                if (loc4 < (loc3.jsarr.length | (0|0))){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_36: ret */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000f = function _ctor(arg0)
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000a", "X"],
                    [asm1, "x600000b", "Y"],
                    [asm1, "x600000c", "Z"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
