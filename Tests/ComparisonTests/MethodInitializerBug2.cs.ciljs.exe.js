
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "MethodInitializerBug2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A`1..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void B`1.Foo(Object)*/

asm.x6000002_init = function (arg0, arg1)
{
    
    (asm0["System.Array`1"](((arg0.constructor.GenericArguments)["asm1.t2000003"])[0]).init)();
    
    (asm1["A`1"](((arg0.constructor.GenericArguments)["asm1.t2000003"])[0]).init)();
};;

asm.x6000002 = function (arg0, arg1)
{
    
    asm.x6000002_init(arg0,arg1);
    
    return asm.x6000002_(arg0,arg1);
};;
asm.x6000002_ = function Foo(arg0, arg1)
{
    var t0;
    var t1;
    var t2;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = ((arg0.constructor.GenericArguments)["asm1.t2000003"])[0];
    
    t1 = asm0["System.Array`1"](t0);
    
    t2 = asm1["A`1"](t0);
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst T[] */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: stloc.0  */
            
            loc0 = ((t1.IsInst(arg1) !== null) ? 1 : 0);
            /* IL_0B: ldloc.0  */
            /* IL_0C: brfalse.s IL_1A */
            
            if ((!(loc0))){
                
                __pos__ = 0x1A;
                
                continue;
            }
            /* IL_0E: ldarg.0  */
            /* IL_0F: ldarg.1  */
            /* IL_10: castclass T[] */
            /* IL_15: stfld T[] Array */
            
            arg0.Array = CILJS.castClass(arg1,t1);
            case 0x1A:
            /* IL_1A: ldarg.1  */
            /* IL_1B: isinst A`1[T] */
            /* IL_20: ldnull  */
            /* IL_22: cgt.un  */
            /* IL_23: stloc.1  */
            
            loc1 = ((t2.IsInst(arg1) !== null) ? 1 : 0);
            /* IL_24: ldloc.1  */
            /* IL_25: brfalse.s IL_33 */
            
            if ((!(loc1))){
                
                __pos__ = 0x33;
                
                continue;
            }
            /* IL_27: ldarg.0  */
            /* IL_28: ldarg.1  */
            /* IL_29: castclass A`1[T] */
            /* IL_2E: stfld A`1 Value */
            
            arg0.Value = CILJS.castClass(arg1,t2);
            case 0x33:
            /* IL_33: ret  */
            
            return ;
        }
    }
};/*  B`1..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  C..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  D..ctor()*/

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
    
    (asm1.C().init)();
    
    (asm1["B`1"](asm1.C()).init)();
    
    (asm1.D().init)();
    
    (asm1["B`1"](asm1.D()).init)();
    
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
    var t2;
    var t3;
    var t4;
    var loc0;
    var loc1;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.C();
    
    t1 = asm1["B`1"](t0);
    
    t2 = asm0["System.Boolean"]();
    
    t3 = asm1.D();
    
    t4 = asm1["B`1"](t3);
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t1,asm1.x6000003,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: ldnull  */
    /* IL_09: callvirt Void Foo(System.Object) */
    
    asm1.x6000002(loc0,null);
    /* IL_0E: nop  */
    /* IL_0F: ldloc.0  */
    /* IL_10: ldfld Managed.Reflection.GenericFieldInstance */
    /* IL_15: ldnull  */
    /* IL_17: ceq  */
    /* IL_18: box System.Boolean */
    /* IL_1D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((loc0.Value === null) ? 1 : 0),t2));
    /* IL_22: nop  */
    /* IL_23: ldloc.0  */
    /* IL_24: ldfld Managed.Reflection.GenericFieldInstance */
    /* IL_29: ldnull  */
    /* IL_2B: ceq  */
    /* IL_2C: box System.Boolean */
    /* IL_31: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((loc0.Array === null) ? 1 : 0),t2));
    /* IL_36: nop  */
    /* IL_37: newobj Void .ctor() */
    /* IL_3C: stloc.1  */
    
    loc1 = CILJS.newobj(t4,asm1.x6000003,[null]);
    /* IL_3D: ldloc.1  */
    /* IL_3E: ldnull  */
    /* IL_3F: callvirt Void Foo(System.Object) */
    
    asm1.x6000002(loc1,null);
    /* IL_44: nop  */
    /* IL_45: ldloc.1  */
    /* IL_46: ldfld Managed.Reflection.GenericFieldInstance */
    /* IL_4B: ldnull  */
    /* IL_4D: ceq  */
    /* IL_4E: box System.Boolean */
    /* IL_53: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((loc1.Value === null) ? 1 : 0),t2));
    /* IL_58: nop  */
    /* IL_59: ldloc.1  */
    /* IL_5A: ldfld Managed.Reflection.GenericFieldInstance */
    /* IL_5F: ldnull  */
    /* IL_61: ceq  */
    /* IL_62: box System.Boolean */
    /* IL_67: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((loc1.Array === null) ? 1 : 0),t2));
    /* IL_6C: nop  */
    /* IL_6D: ret  */
    
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
asm["A`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A`1",false,false,false,true,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000002<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function (T)
    {
        
        return function A_1()
        {
            
            A_1.init();
        };
    });
asm["B`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"B`1",false,false,false,true,false,[],[
                [asm1, "x6000002", "Foo"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        (type.GenericArguments)["asm1.t2000003"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000003<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function (T)
    {
        
        return function B_1()
        {
            
            B_1.init();
            
            this.Value = null;
            
            this.Array = null;
        };
    });
asm.C = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"C",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function C()
        {
            
            C.init();
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
        
        CILJS.initType(type,asm,"D",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function D()
        {
            
            D.init();
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
CILJS.declareAssembly("MethodInitializerBug2.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=MethodInitializerBug2.cs.ciljs.exe.js.map
