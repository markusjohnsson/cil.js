var asm1; (function (asm)
{
    asm.FullName = "ReflectionMethods.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Void A.X()*/
    asm.x600000a = function X(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  ReflectionMethods.cs:4:21*/
        /* IL_01: ret  ReflectionMethods.cs:4:23*/
        return ;
    };;
    /* System.Void A.Y()*/
    asm.x600000b = function Y(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  ReflectionMethods.cs:5:21*/
        /* IL_01: ret  ReflectionMethods.cs:5:23*/
        return ;
    };;
    /* System.Void A.Z()*/
    asm.x600000c = function Z(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  ReflectionMethods.cs:6:21*/
        /* IL_01: ret  ReflectionMethods.cs:6:23*/
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
        BLR.init_base_types();
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
        var loc5;
        t0 = asm1.A();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  ReflectionMethods.cs:12:5*/
                
                /* IL_01: ldtoken A */
                /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0B: stloc.0  */
                loc0 = asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0));
                /* IL_0C: ldloc.0  */
                /* IL_0D: callvirt MethodInfo[] GetMethods() */
                /* IL_12: stloc.1  */
                loc1 = ((loc0.vtable)["asm0.x60000f1"]())(loc0);
                /* IL_13: nop  ReflectionMethods.cs:16:9*/
                
                /* IL_14: ldloc.1  */
                /* IL_15: stloc.3  */
                loc3 = loc1;
                /* IL_16: ldc.i4.0  */
                /* IL_17: stloc.s 4 */
                loc4 = (0|0);
                /* IL_19: br.s IL_32 */
                __pos__ = 0x32;
                continue;
                case 0x1B:
                /* IL_1B: ldloc.3  */
                /* IL_1C: ldloc.s 4 */
                /* IL_1E: ldelem.ref  */
                /* IL_1F: stloc.2  */
                loc2 = BLR.ldelem_ref(loc3,loc4);
                /* IL_20: ldloc.2  */
                /* IL_21: callvirt String get_Name() */
                /* IL_26: call Void Log(System.Object) */
                asm1.x6000001(((loc2.vtable)["asm0.x600003e"]())(loc2));
                /* IL_2B: nop  */
                
                /* IL_2C: ldloc.s 4 */
                /* IL_2E: ldc.i4.1  */
                /* IL_2F: add  */
                /* IL_30: stloc.s 4 */
                loc4 = (loc4 + (1|0)) | (0|0);
                case 0x32:
                /* IL_32: ldloc.s 4 */
                /* IL_34: ldloc.3  */
                /* IL_35: ldlen  */
                /* IL_36: conv.i4  */
                /* IL_38: clt  */
                /* IL_39: stloc.s 5 */
                loc5 = ((loc4 < (loc3.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_3B: ldloc.s 5 */
                /* IL_3D: brtrue.s IL_1B */
                
                if (loc5){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_3F: ret  ReflectionMethods.cs:18:5*/
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000f = function _ctor(arg0)
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000a", "X"],
                    [asm1, "x600000b", "Y"],
                    [asm1, "x600000c", "Z"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
