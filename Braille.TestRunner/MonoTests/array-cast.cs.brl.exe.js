var asm1;(function (asm)
{
    asm.FullName = "array-cast.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Int32 Test.Main()*/
    asm.x600000a_init = function ()
    {
        ((asm0)["System.Attribute"]().init)();
        ((asm0)["System.Array`1"]((asm0)["System.Object"]()).init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        BLR.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = (asm0)["System.Attribute"]();
        t1 = (asm0)["System.Object"]();
        t2 = (asm0)["System.Array`1"](t1);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  array-cast.cs:8:9*/
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: newarr System.Attribute */
                /* IL_07: stloc.0  */
                loc0 = BLR.new_array(t0,(1|0));
                /* IL_08: ldloc.0  */
                /* IL_09: stloc.1  */
                loc1 = loc0;
                /* IL_0A: ldloc.1  */
                /* IL_0B: castclass System.Object[] */
                /* IL_10: stloc.2  */
                loc2 = BLR.cast_class(loc1,t2);
                /* IL_11: ldloc.1  */
                /* IL_12: isinst System.Object[] */
                /* IL_17: stloc.2  */
                loc2 = t2.IsInst(loc1);
                /* IL_18: ldloc.2  */
                /* IL_19: ldnull  */
                /* IL_1B: ceq  */
                /* IL_1C: ldc.i4.0  */
                /* IL_1E: ceq  */
                /* IL_1F: stloc.s 4 */
                loc4 = ((((loc2 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_21: ldloc.s 4 */
                /* IL_23: brtrue.s IL_29 */
                
                if (loc4){
                    __pos__ = 0x29;
                    continue;
                }
                /* IL_25: ldc.i4.1  */
                /* IL_26: stloc.3  */
                loc3 = (1|0);
                /* IL_27: br.s IL_2D */
                __pos__ = 0x2D;
                continue;
                case 0x29:
                /* IL_29: ldc.i4.0  */
                /* IL_2A: stloc.3  */
                loc3 = (0|0);
                case 0x2D:
                /* IL_2D: ldloc.3  */
                /* IL_2E: ret  */
                return loc3;
            }
        }
    };
    /*  Test..ctor()*/
    asm.x600000b = function _ctor(arg0)
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
    (asm)["Test.Test"] = BLR.declare_type(
        "Test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Test.Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
