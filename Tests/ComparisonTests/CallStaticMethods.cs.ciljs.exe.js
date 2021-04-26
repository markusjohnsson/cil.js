
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "CallStaticMethods.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Callee()*/

asm.x6000001 = function Callee()
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr Called! */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("Called!"),CILJS.newArray(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000002 = function Main()
{
    
    CILJS.initBaseTypes();
    /* IL_00: nop  */
    /* IL_01: call Void Callee() */
    
    asm1.x6000001();
    /* IL_06: nop  */
    /* IL_07: ret  */
    
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
asm.entryPoint = asm.x6000002;
CILJS.declareAssembly("CallStaticMethods.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=CallStaticMethods.cs.ciljs.exe.js.map
