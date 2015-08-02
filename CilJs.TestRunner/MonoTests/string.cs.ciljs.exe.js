var asm2;(function (asm)
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
        CILJS.init_base_types();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldstr ddd */
                /* IL_05: stloc.0  */
                loc0 = CILJS.new_string("ddd");
                /* IL_06: ldstr ddd */
                /* IL_0B: stloc.1  */
                loc1 = CILJS.new_string("ddd");
                /* IL_0C: ldstr ddda */
                /* IL_11: stloc.2  */
                loc2 = CILJS.new_string("ddda");
                /* IL_12: ldloc.0  */
                /* IL_13: ldloc.1  */
                /* IL_14: call Boolean op_Inequality(System.String, System.String) */
                /* IL_19: brfalse.s IL_1D */
                
                if ((!(asm0.x6000131(loc0,loc1)))){
                    __pos__ = 0x1D;
                    continue;
                }
                /* IL_1B: ldc.i4.1  */
                /* IL_1C: ret  */
                return (1|0);
                case 0x1D:
                /* IL_1D: ldloc.2  */
                /* IL_1E: ldloc.1  */
                /* IL_1F: ldstr a */
                /* IL_24: call String Concat(System.String, System.String) */
                /* IL_29: call Boolean op_Inequality(System.String, System.String) */
                /* IL_2E: brfalse.s IL_32 */
                
                if ((!(asm0.x6000131(loc2,asm0.x6000127(loc1,CILJS.new_string("a")))))){
                    __pos__ = 0x32;
                    continue;
                }
                /* IL_30: ldc.i4.2  */
                /* IL_31: ret  */
                return (2|0);
                case 0x32:
                /* IL_32: ldloc.2  */
                /* IL_33: ldloc.1  */
                /* IL_34: ldstr a */
                /* IL_39: call String Concat(System.String, System.String) */
                /* IL_3E: call Boolean ReferenceEquals(System.Object, System.Object) */
                /* IL_43: brfalse.s IL_47 */
                
                if ((!(asm0.x60000ef(loc2,asm0.x6000127(loc1,CILJS.new_string("a")))))){
                    __pos__ = 0x47;
                    continue;
                }
                /* IL_45: ldc.i4.4  */
                /* IL_46: ret  */
                return (4|0);
                case 0x47:
                /* IL_47: ldc.i4.0  */
                /* IL_48: ret  */
                return (0|0);
            }
        }
    };;
    /*  TestString..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"TestString",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
