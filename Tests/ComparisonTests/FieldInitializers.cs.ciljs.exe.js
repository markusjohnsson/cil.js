
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "FieldInitializers.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001_init = function ()
{
    
    (asm1.Program().init)();
    
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
    
    CILJS.initBaseTypes();
    
    t0 = asm1.Program();
    
    t1 = asm0["System.Int32"]();
    /* IL_00: nop  */
    
    asm1.x6000003();
    /* IL_01: ldsfld Int32 X */
    /* IL_06: box System.Int32 */
    /* IL_0B: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(t0.X,t1));
    /* IL_10: nop  */
    
    asm1.x6000003();
    /* IL_11: newobj Void .ctor() */
    /* IL_16: ldfld Int32 Y */
    /* IL_1B: box System.Int32 */
    /* IL_20: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(CILJS.newobj(t0,asm1.x6000002,[null]).Y,t1));
    /* IL_25: nop  */
    /* IL_26: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldc.i4 321 */
    /* IL_06: stfld Int32 Y */
    
    arg0.Y = 321;
    /* IL_0B: ldarg.0  */
    /* IL_0C: call Void .ctor() */
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/* static  Program..cctor()*/

asm.x6000003_init = function ()
{
    
    (asm1.Program().init)();
    
    asm.x6000003 = asm.x6000003_;
};;

asm.x6000003 = function ()
{
    
    asm.x6000003_init();
    
    return asm.x6000003_();
};;
asm.x6000003_ = function _cctor()
{
    var t0;
    
    if (asm1.Program().FieldsInitialized){
        
        return;
    }
    
    asm1.Program().FieldsInitialized = true;
    
    t0 = asm1.Program();
    /* IL_00: ldc.i4.s 123 */
    /* IL_02: stsfld Int32 X */
    
    t0.X = 123;
    /* IL_07: ret  */
    
    return ;
};
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
        
        type.X = 0;
        
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
            
            this.Y = 0;
        };
    });
asm.entryPoint = asm.x6000001;
CILJS.declareAssembly("FieldInitializers.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=FieldInitializers.cs.ciljs.exe.js.map
