
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "InterfaceCallvirtFromGenericClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Int32 D.Get()*/

asm.x6000002 = function Get(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Int32 x */
    /* IL_07: stloc.0  */
    
    loc0 = arg0.x;
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/*  D..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void C`1.X(T)*/

asm.x6000004_init = function (arg0, arg1)
{
    
    (asm1.I2().init)();
    
    asm.x6000004 = asm.x6000004_;
};;

asm.x6000004 = function (arg0, arg1)
{
    
    asm.x6000004_init(arg0,arg1);
    
    return asm.x6000004_(arg0,arg1);
};;
asm.x6000004_ = function X(arg0, arg1)
{
    var t0;
    var t1;
    
    t0 = asm1.I2();
    
    t1 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: ldarga.s 1 */
    /* IL_09: callvirt Int32 Get() */
    /* IL_0E: box System.Int32 */
    /* IL_13: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((arg1.ifacemap || ((arg0.constructor.GenericArguments)["asm1.t2000005"])[0].prototype.ifacemap)[t0].x6000001)(CILJS.dereferencePointerAsNeeded({
                        w: function (v)
                        {
                            
                            arg1 = v;
                        },
                        r: function ()
                        {
                            
                            return arg1;
                        }
                    })),t1));
    /* IL_18: nop  */
    /* IL_19: ret  */
    
    return ;
};/*  C`1..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000006_init = function ()
{
    
    (asm1.D().init)();
    
    (asm1["C`1"](asm1.D()).init)();
    
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
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.D();
    
    t1 = asm1["C`1"](t0);
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    
    st_03 = CILJS.newobj(t1,asm1.x6000005,[null]);
    /* IL_06: newobj Void .ctor() */
    
    st_00 = CILJS.newobj(t0,asm1.x6000003,[null]);
    /* IL_0B: dup  */
    
    st_04 = st_01 = st_00;
    /* IL_0C: ldc.i4.s 101 */
    
    st_02 = 101;
    /* IL_0E: stfld Int32 x */
    
    st_01.x = st_02;
    /* IL_13: call Void X(D) */
    
    asm1.x6000004(st_03,st_04);
    /* IL_18: nop  */
    /* IL_19: ret  */
    
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
asm.I = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I",false,false,true,false,false,[],[],null,CILJS.isInstInterface(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
    },
    function ()
    {
        
        return function I()
        {
            
            I.init();
        };
    });
asm.I2 = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I2",false,false,true,false,false,[],[
                [asm1, "x6000001", "Get"]
            ],null,CILJS.isInstInterface(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm1.x6000001",asm1,"x6000001");
    },
    function ()
    {
        
        return function I2()
        {
            
            I2.init();
        };
    });
asm.D = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"D",false,false,false,false,false,[],[
                [asm1, "x6000002", "Get"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm1.x6000002",asm1,"x6000002");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1.I2()],
            [
                ["x6000001", asm1, "x6000002"]
            ]);
    },
    function ()
    {
        
        return function D()
        {
            
            D.init();
            
            this.x = 0;
        };
    });
asm["C`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"C`1",false,false,false,true,false,[],[
                [asm1, "x6000004", "X"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000005",null);
        
        (type.GenericArguments)["asm1.t2000005"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000005<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1.I()],
            []);
    },
    function (T)
    {
        
        return function C_1()
        {
            
            C_1.init();
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
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000006",null);
        
        type.TypeMetadataName = "asm1.t2000006";
        
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
CILJS.declareAssembly("InterfaceCallvirtFromGenericClass.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=InterfaceCallvirtFromGenericClass.cs.ciljs.exe.js.map
