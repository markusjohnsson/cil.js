
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "IntegerConversion.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001 = function Main()
{
    
    CILJS.initBaseTypes();
    /* IL_00: nop  */
    /* IL_01: ldc.r8 2 */
    /* IL_0A: call Void Test(System.Double) */
    
    asm1.x6000002(2);
    /* IL_0F: nop  */
    /* IL_10: ldc.r8 3 */
    /* IL_19: call Void Test(System.Double) */
    
    asm1.x6000002(3);
    /* IL_1E: nop  */
    /* IL_1F: ldc.r8 4 */
    /* IL_28: call Void Test(System.Double) */
    
    asm1.x6000002(4);
    /* IL_2D: nop  */
    /* IL_2E: ldc.r8 8 */
    /* IL_37: call Void Test(System.Double) */
    
    asm1.x6000002(8);
    /* IL_3C: nop  */
    /* IL_3D: ret  */
    
    return ;
};;/* static System.Void Program.Test(Double)*/

asm.x6000002 = function Test(arg0)
{
    var t0;
    
    t0 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Double Sqrt(System.Double) */
    /* IL_07: conv.i4  */
    /* IL_08: ldc.i4.1  */
    /* IL_0A: ceq  */
    /* IL_0B: box System.Boolean */
    /* IL_10: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox((((Math.sqrt(arg0) | 0) === 1) ? 1 : 0),t0));
    /* IL_15: nop  */
    /* IL_16: ldarg.0  */
    /* IL_17: call Double Sqrt(System.Double) */
    /* IL_1C: conv.i4  */
    /* IL_1D: ldc.i4.2  */
    /* IL_1F: ceq  */
    /* IL_20: box System.Boolean */
    /* IL_25: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox((((Math.sqrt(arg0) | 0) === 2) ? 1 : 0),t0));
    /* IL_2A: nop  */
    /* IL_2B: ldarg.0  */
    /* IL_2C: call Double Sqrt(System.Double) */
    /* IL_31: conv.i4  */
    /* IL_32: ldc.i4.3  */
    /* IL_34: ceq  */
    /* IL_35: box System.Boolean */
    /* IL_3A: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox((((Math.sqrt(arg0) | 0) === 3) ? 1 : 0),t0));
    /* IL_3F: nop  */
    /* IL_40: ret  */
    
    return ;
};;/*  Program..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000001;
CILJS.declareAssembly("IntegerConversion.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=IntegerConversion.cs.ciljs.exe.js.map
