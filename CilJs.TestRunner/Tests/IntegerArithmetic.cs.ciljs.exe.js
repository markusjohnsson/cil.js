var asm1;(function (asm)
{
    asm.FullName = "IntegerArithmetic.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: call Void X(System.Int32) */
                asm1.x6000002((0|0));
                /* IL_07: nop  */
                
                /* IL_08: ldc.i4.1  */
                /* IL_09: call Void X(System.Int32) */
                asm1.x6000002((1|0));
                /* IL_0E: nop  */
                
                /* IL_0F: ldc.i4.2  */
                /* IL_10: call Void X(System.Int32) */
                asm1.x6000002((2|0));
                /* IL_15: nop  */
                
                /* IL_16: ldc.i4.3  */
                /* IL_17: call Void X(System.Int32) */
                asm1.x6000002((3|0));
                /* IL_1C: nop  */
                
                /* IL_1D: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.X(Int32)*/
    asm.x6000002 = function X(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.1  */
                /* IL_03: div  */
                /* IL_04: box System.Int32 */
                /* IL_09: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box((arg0 / (1|0)) | (0|0),t0));
                /* IL_0E: nop  */
                
                /* IL_0F: ldarg.0  */
                /* IL_10: ldc.i4.2  */
                /* IL_11: div  */
                /* IL_12: box System.Int32 */
                /* IL_17: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box((arg0 / (2|0)) | (0|0),t0));
                /* IL_1C: nop  */
                
                /* IL_1D: ldarg.0  */
                /* IL_1E: ldc.i4.3  */
                /* IL_1F: div  */
                /* IL_20: box System.Int32 */
                /* IL_25: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box((arg0 / (3|0)) | (0|0),t0));
                /* IL_2A: nop  */
                
                /* IL_2B: ret  */
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
