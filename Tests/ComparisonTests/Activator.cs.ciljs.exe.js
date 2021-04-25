
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "Activator.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Int32 A.X()*/

asm.x6000001 = function X(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.s 123 */
    /* IL_03: stloc.0  */
    
    loc0 = 123;
    /* IL_06: ldloc.0  */
    /* IL_07: ret  */
    
    return loc0;
};;/*  A..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000003_init = function ()
{
    
    (asm1.A().init)();
    
    asm.x6000003 = asm.x6000003_;
};;

asm.x6000003 = function ()
{
    
    asm.x6000003_init();
    
    return asm.x6000003_();
};;
asm.x6000003_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var loc0;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm0["System.Boolean"]();
    
    t2 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: ldtoken A */
    /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_0B: call Object CreateInstance(System.Type) */
    /* IL_10: castclass A */
    /* IL_15: stloc.0  */
    
    loc0 = CILJS.castClass(asm0.x600006d(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),t0);
    /* IL_16: ldtoken A */
    /* IL_1B: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_20: ldloc.0  */
    /* IL_21: callvirt Type GetType() */
    /* IL_26: callvirt Boolean Equals(System.Object) */
    /* IL_2B: box System.Boolean */
    /* IL_30: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600009e"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)),asm0.x60000a0(loc0)),t1));
    /* IL_35: nop  */
    /* IL_36: ldloc.0  */
    /* IL_37: callvirt Int32 X() */
    /* IL_3C: box System.Int32 */
    /* IL_41: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(asm1.x6000001(loc0),t2));
    /* IL_46: nop  */
    /* IL_47: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.A = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",false,false,false,false,false,[],[
                [asm1, "x6000001", "X"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
        };
    });
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
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
asm.entryPoint = asm.x6000003;
CILJS.declareAssembly("Activator.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Activator.cs.ciljs.exe.js.map
