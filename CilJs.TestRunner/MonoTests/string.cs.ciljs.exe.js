var asm1;(function (asm)
{
    asm.FullName = "string.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Int32 TestString.Main()*/
    asm.x6000001 = function Main()
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        CILJS.init_base_types();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldstr ddd */
                /* IL_06: stloc.0  */
                loc0 = CILJS.new_string("ddd");
                /* IL_07: ldstr ddd */
                /* IL_0C: stloc.1  */
                loc1 = CILJS.new_string("ddd");
                /* IL_0D: ldstr ddda */
                /* IL_12: stloc.2  */
                loc2 = CILJS.new_string("ddda");
                /* IL_13: ldloc.0  */
                /* IL_14: ldloc.1  */
                /* IL_15: call Boolean op_Inequality(System.String, System.String) */
                /* IL_1A: stloc.3  */
                loc3 = asm0.x6000131(loc0,loc1);
                /* IL_1B: ldloc.3  */
                /* IL_1C: brfalse.s IL_23 */
                
                if ((!(loc3))){
                    __pos__ = 0x23;
                    continue;
                }
                /* IL_1E: ldc.i4.1  */
                /* IL_1F: stloc.s 4 */
                loc4 = (1|0);
                /* IL_21: br.s IL_5D */
                __pos__ = 0x5D;
                continue;
                case 0x23:
                /* IL_23: ldloc.2  */
                /* IL_24: ldloc.1  */
                /* IL_25: ldstr a */
                /* IL_2A: call String Concat(System.String, System.String) */
                /* IL_2F: call Boolean op_Inequality(System.String, System.String) */
                /* IL_34: stloc.s 5 */
                loc5 = asm0.x6000131(loc2,asm0.x6000127(loc1,CILJS.new_string("a")));
                /* IL_36: ldloc.s 5 */
                /* IL_38: brfalse.s IL_3F */
                
                if ((!(loc5))){
                    __pos__ = 0x3F;
                    continue;
                }
                /* IL_3A: ldc.i4.2  */
                /* IL_3B: stloc.s 4 */
                loc4 = (2|0);
                /* IL_3D: br.s IL_5D */
                __pos__ = 0x5D;
                continue;
                case 0x3F:
                /* IL_3F: ldloc.2  */
                /* IL_40: ldloc.1  */
                /* IL_41: ldstr a */
                /* IL_46: call String Concat(System.String, System.String) */
                /* IL_4C: ceq  */
                /* IL_4D: stloc.s 6 */
                loc6 = ((loc2 === asm0.x6000127(loc1,CILJS.new_string("a"))) ? (1) : (0));
                /* IL_4F: ldloc.s 6 */
                /* IL_51: brfalse.s IL_58 */
                
                if ((!(loc6))){
                    __pos__ = 0x58;
                    continue;
                }
                /* IL_53: ldc.i4.4  */
                /* IL_54: stloc.s 4 */
                loc4 = (4|0);
                /* IL_56: br.s IL_5D */
                __pos__ = 0x5D;
                continue;
                case 0x58:
                /* IL_58: ldc.i4.0  */
                /* IL_59: stloc.s 4 */
                loc4 = (0|0);
                case 0x5D:
                /* IL_5D: ldloc.s 4 */
                /* IL_5F: ret  */
                return loc4;
            }
        }
    };;
    /*  TestString..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.TestString = CILJS.declare_type(
        "TestString",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestString",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
