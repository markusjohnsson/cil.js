
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "StructArray.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001_init = function ()
{
    
    (asm1.A().init)();
    
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
    var loc0;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: newarr A */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.newArray(t0,1);
    /* IL_08: ldloc.0  */
    /* IL_09: call Void Populate(A[]) */
    
    asm1.x6000004(loc0);
    /* IL_0E: nop  */
    /* IL_0F: ldloc.0  */
    /* IL_10: call Void Print(A[]) */
    
    asm1.x6000003(loc0);
    /* IL_15: nop  */
    /* IL_16: ldloc.0  */
    /* IL_17: call Void PrintAsObject(System.Object) */
    
    asm1.x6000002(loc0);
    /* IL_1C: nop  */
    /* IL_1D: ret  */
    
    return ;
};/* static System.Void Program.PrintAsObject(Object)*/

asm.x6000002_init = function (arg0)
{
    
    (asm1.A().init)();
    
    (asm0["System.Array`1"](asm1.A()).init)();
    
    asm.x6000002 = asm.x6000002_;
};;

asm.x6000002 = function (arg0)
{
    
    asm.x6000002_init(arg0);
    
    return asm.x6000002_(arg0);
};;
asm.x6000002_ = function PrintAsObject(arg0)
{
    var t0;
    var t1;
    var t2;
    
    t0 = asm1.A();
    
    t1 = asm0["System.Array`1"](t0);
    
    t2 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: castclass A[] */
    /* IL_07: ldc.i4.0  */
    /* IL_08: ldelema A */
    /* IL_0D: ldfld Int32 X */
    /* IL_12: box System.Int32 */
    /* IL_17: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox((CILJS.castClass(arg0,t1).jsarr)[0].X,t2));
    /* IL_1C: nop  */
    /* IL_1D: ret  */
    
    return ;
};/* static System.Void Program.Print(A[])*/

asm.x6000003 = function Print(arg0)
{
    var t0;
    
    t0 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldc.i4.0  */
    /* IL_03: ldelema A */
    /* IL_08: ldfld Int32 X */
    /* IL_0D: box System.Int32 */
    /* IL_12: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox((arg0.jsarr)[0].X,t0));
    /* IL_17: nop  */
    /* IL_18: ret  */
    
    return ;
};;/* static System.Void Program.Populate(A[])*/

asm.x6000004_init = function (arg0)
{
    
    (asm1.A().init)();
    
    asm.x6000004 = asm.x6000004_;
};;

asm.x6000004 = function (arg0)
{
    
    asm.x6000004_init(arg0);
    
    return asm.x6000004_(arg0);
};;
asm.x6000004_ = function Populate(arg0)
{
    var t0;
    var loc0;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    
    t0 = asm1.A();
    
    loc0 = new (asm1.A())();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    
    st_03 = arg0;
    /* IL_02: ldc.i4.0  */
    
    st_04 = 0;
    /* IL_03: ldloca.s 0 */
    /* IL_06: initobj A */
    
    loc0 = new t0();
    /* IL_0B: ldloca.s 0 */
    
    st_01 = {
        w: function (v)
        {
            
            loc0 = v;
        },
        r: function ()
        {
            
            return loc0;
        }
    };
    /* IL_0D: ldc.i4.s 123 */
    
    st_02 = 123;
    /* IL_0F: stfld Int32 X */
    
    st_01.r().X = st_02;
    /* IL_14: ldloc.0  */
    
    st_05 = loc0;
    /* IL_15: stelem A */
    
    (st_03.jsarr)[st_04] = st_05;
    /* IL_1A: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000005 = function _ctor(arg0)
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
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000002",new (asm1.A())());
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
            
            this.X = 0;
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
asm.entryPoint = asm.x6000001;
CILJS.declareAssembly("StructArray.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=StructArray.cs.ciljs.exe.js.map
