
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "MethodInfoInvoke.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.String A.X(String)*/

asm.x6000002 = function X(arg0, arg1)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.1  */
    /* IL_02: ldc.i4.0  */
    /* IL_03: newarr System.Object */
    /* IL_08: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(arg1,CILJS.newArray(t0,0));
    /* IL_0D: nop  */
    /* IL_0E: ldarg.0  */
    /* IL_0F: ldfld String Y */
    /* IL_14: ldarg.1  */
    /* IL_15: call String Concat(System.String, System.String) */
    /* IL_1A: stloc.0  */
    
    loc0 = asm0.x60000bb(arg0.AY,arg1);
    /* IL_1D: ldloc.0  */
    /* IL_1E: ret  */
    
    return loc0;
};;/*  A..ctor(String)*/

asm.x6000001 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld String Y */
    
    arg0.AY = arg1;
    /* IL_0F: ret  */
    
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
    var st_06;
    var st_07;
    var st_08;
    var st_09;
    var st_0A;
    var st_0B;
    var st_0C;
    var st_0D;
    var st_0E;
    var st_0F;
    var loc0;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm0["System.Object"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldtoken A */
    /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_0B: call TypeInfo GetTypeInfo(System.Type) */
    /* IL_10: callvirt MethodInfo[] GetMethods() */
    /* IL_15: ldc.i4.0  */
    /* IL_16: ldelem.ref  */
    /* IL_17: stloc.0  */
    
    loc0 = CILJS.ldelemRef(((asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000055"])(asm0.x60001c4(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)))),0);
    /* IL_18: ldloc.0  */
    
    st_0C = loc0;
    /* IL_19: ldstr Hello */
    
    st_06 = CILJS.newString("Hello");
    /* IL_1E: newobj Void .ctor(System.String) */
    
    st_0D = CILJS.newobj(t0,asm1.x6000001,[null, st_06]);
    /* IL_23: ldc.i4.1  */
    
    st_07 = 1;
    /* IL_24: newarr System.Object */
    
    st_08 = CILJS.newArray(t1,st_07);
    /* IL_29: dup  */
    
    st_0E = st_09 = st_08;
    /* IL_2A: ldc.i4.0  */
    
    st_0A = 0;
    /* IL_2B: ldstr World */
    
    st_0B = CILJS.newString("World");
    /* IL_30: stelem.ref  */
    
    CILJS.stelemRef(st_09,st_0A,st_0B);
    /* IL_31: callvirt Object Invoke(System.Object, System.Object[]) */
    
    st_0F = asm0.x60001c0(st_0C,st_0D,st_0E);
    /* IL_36: call Void WriteLine(System.Object) */
    
    asm0.x6000072(st_0F);
    /* IL_3B: nop  */
    /* IL_3C: ret  */
    
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
                [asm1, "x6000002", "X"]
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
            
            this.AY = null;
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
CILJS.declareAssembly("MethodInfoInvoke.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=MethodInfoInvoke.cs.ciljs.exe.js.map
