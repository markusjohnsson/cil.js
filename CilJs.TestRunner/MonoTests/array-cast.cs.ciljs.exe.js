var asm1;(function (asm)
{
    asm.FullName = "array-cast.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Int32 Test.Main()*/
    asm.x6000001_init = function ()
    {
        ((asm0)["System.Attribute"]().init)();
        ((asm0)["System.Array`1"]((asm0)["System.Object"]()).init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init();
        return asm.x6000001_();
    };;
    asm.x6000001_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        CILJS.init_base_types();
        t0 = (asm0)["System.Attribute"]();
        t1 = (asm0)["System.Object"]();
        t2 = (asm0)["System.Array`1"](t1);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: newarr System.Attribute */
                /* IL_07: stloc.0  */
                loc0 = CILJS.new_array(t0,(1|0));
                /* IL_08: ldloc.0  */
                /* IL_09: stloc.1  */
                loc1 = loc0;
                /* IL_0A: ldloc.1  */
                /* IL_0B: castclass System.Object[] */
                /* IL_10: stloc.2  */
                loc2 = CILJS.cast_class(loc1,t2);
                /* IL_11: ldloc.1  */
                /* IL_12: isinst System.Object[] */
                /* IL_17: stloc.2  */
                loc2 = t2.IsInst(loc1);
                /* IL_18: ldloc.2  */
                /* IL_19: ldnull  */
                /* IL_1B: ceq  */
                /* IL_1C: stloc.3  */
                loc3 = ((loc2 === null) ? 1 : 0);
                /* IL_1D: ldloc.3  */
                /* IL_1E: brfalse.s IL_25 */
                
                if ((!(loc3))){
                    __pos__ = 0x25;
                    continue;
                }
                /* IL_20: ldc.i4.1  */
                /* IL_21: stloc.s 4 */
                loc4 = (1|0);
                /* IL_23: br.s IL_2A */
                __pos__ = 0x2A;
                continue;
                case 0x25:
                /* IL_25: ldc.i4.0  */
                /* IL_26: stloc.s 4 */
                loc4 = (0|0);
                case 0x2A:
                /* IL_2A: ldloc.s 4 */
                /* IL_2C: ret  */
                return loc4;
            }
        }
    };
    /*  Test..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    (asm)["Test.Test"] = CILJS.declare_type(
        "Test",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Test.Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Test() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
