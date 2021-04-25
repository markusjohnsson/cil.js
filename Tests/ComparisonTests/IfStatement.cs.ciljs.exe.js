
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "IfStatement.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001 = function Main()
{
    
    CILJS.initBaseTypes();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.0  */
    /* IL_02: call Void X(System.Int32) */
    
    asm1.x6000002(0);
    /* IL_07: nop  */
    /* IL_08: ldc.i4.s 100 */
    /* IL_0A: call Void X(System.Int32) */
    
    asm1.x6000002(100);
    /* IL_0F: nop  */
    /* IL_10: ldc.i4 1000 */
    /* IL_15: call Void X(System.Int32) */
    
    asm1.x6000002(1000);
    /* IL_1A: nop  */
    /* IL_1B: ret  */
    
    return ;
};;/* static System.Void Program.X(Int32)*/

asm.x6000002 = function X(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.Object"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldc.i4.s 100 */
            /* IL_05: cgt  */
            /* IL_06: stloc.0  */
            
            loc0 = ((arg0 > 100) ? 1 : 0);
            /* IL_07: ldloc.0  */
            /* IL_08: brfalse.s IL_1D */
            
            if ((!(loc0))){
                
                __pos__ = 0x1D;
                
                continue;
            }
            /* IL_0A: nop  */
            /* IL_0B: ldstr big */
            /* IL_10: ldc.i4.0  */
            /* IL_11: newarr System.Object */
            /* IL_16: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x6000073(CILJS.newString("big"),CILJS.newArray(t0,0));
            /* IL_1B: nop  */
            /* IL_1C: nop  */
            case 0x1D:
            /* IL_1D: ret  */
            
            return ;
        }
    }
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
CILJS.declareAssembly("IfStatement.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=IfStatement.cs.ciljs.exe.js.map
