
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "GenericValueTypeArgAsThis.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.M<T>(T)*/

asm.x6000001 = function (T)
{
    
    return function M(arg0)
    {
        var t0;
        
        t0 = asm0["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldarga.s 0 */
        /* IL_09: callvirt Type GetType() */
        /* IL_0E: callvirt String get_FullName() */
        /* IL_13: ldc.i4.0  */
        /* IL_14: newarr System.Object */
        /* IL_19: call Void WriteLine(System.String, System.Object[]) */
        
        asm0.x6000073(((asm0.x60000a0(CILJS.box(arg0,T)).vtable)["asm0.x6000044"])(asm0.x60000a0(CILJS.box(arg0,T))),CILJS.newArray(t0,0));
        /* IL_1E: nop  */
        /* IL_1F: ret  */
        
        return ;
    };
};;/* static System.Void Program.Main()*/

asm.x6000002 = function Main()
{
    var t0;
    
    CILJS.initBaseTypes();
    
    t0 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.s 123 */
    /* IL_03: call Void M[System.Int32](System.Int32) */
    
    (asm1.x6000001(asm0["System.Int32"]()))(123);
    /* IL_08: nop  */
    /* IL_09: ret  */
    
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
CILJS.declareAssembly("GenericValueTypeArgAsThis.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=GenericValueTypeArgAsThis.cs.ciljs.exe.js.map
