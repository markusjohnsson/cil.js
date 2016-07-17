var asm1;(function (asm)
{
    asm.FullName = "Enums.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: stloc.0  */
                loc0 = (0|0);
                /* IL_03: ldloc.0  */
                /* IL_04: box System.Int32 */
                /* IL_09: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0,t0));
                /* IL_0E: nop  */
                
                /* IL_0F: ldc.i4.0  */
                /* IL_10: stloc.0  */
                loc0 = (0|0);
                /* IL_11: ldloc.0  */
                /* IL_12: box System.Int32 */
                /* IL_17: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0,t0));
                /* IL_1C: nop  */
                
                /* IL_1D: ldc.i4.1  */
                /* IL_1E: stloc.0  */
                loc0 = (1|0);
                /* IL_1F: ldloc.0  */
                /* IL_20: box System.Int32 */
                /* IL_25: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0,t0));
                /* IL_2A: nop  */
                
                /* IL_2B: ldc.i4.2  */
                /* IL_2C: stloc.0  */
                loc0 = (2|0);
                /* IL_2D: ldloc.0  */
                /* IL_2E: box System.Int32 */
                /* IL_33: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0,t0));
                /* IL_38: nop  */
                
                /* IL_39: ret  */
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
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
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return (asm0)["System.Enum"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",true,false,false,false,false,[],[],(asm0)["System.Enum"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000002",new (asm1.X())());
            this.A = new (asm1.X())();
            this.B = new (asm1.X())();
            this.C = new (asm1.X())();
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function X() { c.init();this.value__ = 0 }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
