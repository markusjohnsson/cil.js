
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "CallVirtualMethodOnGenericParameter.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Void A.M()*/

asm.x6000001 = function M(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr A */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("A"),CILJS.newArray(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/*  A..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void B.M()*/

asm.x6000003 = function M(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr B */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("B"),CILJS.newArray(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/*  B..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000002(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.X<T>(T)*/

asm.x6000005 = function (T)
{
    
    return function X(arg0)
    {
        var t0;
        
        t0 = T;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: box T */
        /* IL_07: callvirt Void M() */
        
        ((CILJS.box(arg0,t0).vtable)["asm1.x6000001"])(CILJS.convertBoxToPointerAsNeeded(CILJS.box(arg0,t0)));
        /* IL_0C: nop  */
        /* IL_0D: ret  */
        
        return ;
    };
};;/* static System.Void Program.Main()*/

asm.x6000006_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1.B().init)();
    
    asm.x6000006 = asm.x6000006_;
};;

asm.x6000006 = function ()
{
    
    asm.x6000006_init();
    
    return asm.x6000006_();
};;
asm.x6000006_ = function Main()
{
    var t0;
    var t1;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm1.B();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: call Void X[A](A) */
    
    (asm1.x6000005(asm1.A()))(CILJS.newobj(t0,asm1.x6000002,[null]));
    /* IL_0B: nop  */
    /* IL_0C: newobj Void .ctor() */
    /* IL_11: call Void X[B](B) */
    
    (asm1.x6000005(asm1.B()))(CILJS.newobj(t1,asm1.x6000004,[null]));
    /* IL_16: nop  */
    /* IL_17: newobj Void .ctor() */
    /* IL_1C: call Void X[A](A) */
    
    (asm1.x6000005(asm1.A()))(CILJS.newobj(t1,asm1.x6000004,[null]));
    /* IL_21: nop  */
    /* IL_22: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000007 = function _ctor(arg0)
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
                [asm1, "x6000001", "M"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm1.x6000001",asm1,"x6000001");
        
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
asm.B = CILJS.declareType(
    [],
    function ()
    {
        
        return asm1.A();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"B",false,false,false,false,false,[],[
                [asm1, "x6000003", "M"]
            ],asm1.A(),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm1.x6000001",asm1,"x6000003");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
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
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
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
asm.entryPoint = asm.x6000006;
CILJS.declareAssembly("CallVirtualMethodOnGenericParameter.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=CallVirtualMethodOnGenericParameter.cs.ciljs.exe.js.map
