
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "StructInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Void S.Foo()*/

asm.x6000002 = function Foo(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr Foo */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("Foo"),CILJS.newArray(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000003_init = function ()
{
    
    (asm1.S().init)();
    
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
    var loc0;
    var loc1;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.S();
    
    loc0 = new (asm1.S())();
    /* IL_00: nop  */
    /* IL_01: ldloca.s 0 */
    /* IL_04: initobj S */
    
    loc0 = new t0();
    /* IL_09: ldloc.0  */
    /* IL_0A: box S */
    /* IL_0F: stloc.1  */
    
    loc1 = CILJS.makeBox(CILJS.cloneValue(loc0),t0);
    /* IL_10: ldloc.1  */
    /* IL_11: call Void Run(I) */
    
    asm1.x6000004(loc1);
    /* IL_16: nop  */
    /* IL_17: ret  */
    
    return ;
};/* static System.Void Program.Run(I)*/

asm.x6000004_init = function (arg0)
{
    
    (asm1.I().init)();
    
    asm.x6000004 = asm.x6000004_;
};;

asm.x6000004 = function (arg0)
{
    
    asm.x6000004_init(arg0);
    
    return asm.x6000004_(arg0);
};;
asm.x6000004_ = function Run(arg0)
{
    var t0;
    
    t0 = asm1.I();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: callvirt Void Foo() */
    
    ((arg0.ifacemap)[t0].x6000001)(CILJS.convertBoxToPointerAsNeeded(arg0));
    /* IL_07: nop  */
    /* IL_08: ret  */
    
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
asm.I = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I",false,false,true,false,false,[],[
                [asm1, "x6000001", "Foo"]
            ],null,CILJS.isInstInterface(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm1.x6000001",asm1,"x6000001");
    },
    function ()
    {
        
        return function I()
        {
            
            I.init();
        };
    });
asm.S = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"S",true,false,false,false,false,[],[
                [asm1, "x6000002", "Foo"]
            ],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000003",new (asm1.S())());
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm1.x6000002",asm1,"x6000002");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1.I()],
            [
                ["x6000001", asm1, "x6000002"]
            ]);
    },
    function ()
    {
        
        return function S()
        {
            
            S.init();
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
asm.entryPoint = asm.x6000003;
CILJS.declareAssembly("StructInterface.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=StructInterface.cs.ciljs.exe.js.map
