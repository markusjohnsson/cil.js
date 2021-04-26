
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "RefParameters.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  C..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.X(Int32&)*/

asm.x6000002 = function X(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldc.i4.2  */
    /* IL_03: stind.i4  */
    
    arg0.w(2);
    /* IL_04: ret  */
    
    return ;
};;/* static System.Void Program.Y(A&)*/

asm.x6000003_init = function (arg0)
{
    
    (asm1.A().init)();
    
    asm.x6000003 = asm.x6000003_;
};;

asm.x6000003 = function (arg0)
{
    
    asm.x6000003_init(arg0);
    
    return asm.x6000003_(arg0);
};;
asm.x6000003_ = function Y(arg0)
{
    var t0;
    var loc0;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    
    t0 = asm1.A();
    
    loc0 = new (asm1.A())();
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    
    st_03 = arg0;
    /* IL_02: ldloca.s 0 */
    /* IL_05: initobj A */
    
    loc0 = new t0();
    /* IL_0A: ldloca.s 0 */
    
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
    /* IL_0C: ldc.i4.3  */
    
    st_02 = 3;
    /* IL_0D: stfld Int32 U */
    
    st_01.r().U = st_02;
    /* IL_12: ldloc.0  */
    
    st_04 = loc0;
    /* IL_13: stobj A */
    
    st_03.w(st_04);
    /* IL_18: ret  */
    
    return ;
};/* static System.Void Program.Z(C&)*/

asm.x6000004_init = function (arg0)
{
    
    (asm1.C().init)();
    
    asm.x6000004 = asm.x6000004_;
};;

asm.x6000004 = function (arg0)
{
    
    asm.x6000004_init(arg0);
    
    return asm.x6000004_(arg0);
};;
asm.x6000004_ = function Z(arg0)
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    
    t0 = asm1.C();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    
    st_03 = arg0;
    /* IL_02: newobj Void .ctor() */
    
    st_00 = CILJS.newobj(t0,asm1.x6000001,[null]);
    /* IL_07: dup  */
    
    st_04 = st_01 = st_00;
    /* IL_08: ldc.i4.4  */
    
    st_02 = 4;
    /* IL_09: stfld Int32 V */
    
    st_01.V = st_02;
    /* IL_0E: stind.ref  */
    
    st_03.w(st_04);
    /* IL_0F: ret  */
    
    return ;
};/* static System.Void Program.Main()*/

asm.x6000005_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1.C().init)();
    
    asm.x6000005 = asm.x6000005_;
};;

asm.x6000005 = function ()
{
    
    asm.x6000005_init();
    
    return asm.x6000005_();
};;
asm.x6000005_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var loc3;
    var st_05;
    var st_06;
    var st_07;
    var st_08;
    var loc0;
    var loc1;
    var loc2;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm1.C();
    
    t2 = asm0["System.Int32"]();
    
    loc3 = new (asm1.A())();
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stloc.0  */
    
    loc0 = 1;
    /* IL_03: ldloca.s 3 */
    /* IL_06: initobj A */
    
    loc3 = new t0();
    /* IL_0B: ldloca.s 3 */
    /* IL_0D: ldc.i4.1  */
    /* IL_0E: stfld Int32 U */
    
    loc3.U = 1;
    /* IL_13: ldloc.3  */
    /* IL_14: stloc.1  */
    
    loc1 = CILJS.cloneValue(loc3);
    /* IL_15: newobj Void .ctor() */
    
    st_05 = CILJS.newobj(t1,asm1.x6000001,[null]);
    /* IL_1A: dup  */
    
    st_08 = st_06 = st_05;
    /* IL_1B: ldc.i4.1  */
    
    st_07 = 1;
    /* IL_1C: stfld Int32 V */
    
    st_06.V = st_07;
    /* IL_21: stloc.2  */
    
    loc2 = st_08;
    /* IL_22: ldloca.s 0 */
    /* IL_24: call Void X(System.Int32&) */
    
    asm1.x6000002({
            w: function (v)
            {
                
                loc0 = v;
            },
            r: function ()
            {
                
                return loc0;
            }
        });
    /* IL_29: nop  */
    /* IL_2A: ldloca.s 1 */
    /* IL_2C: call Void Y(A&) */
    
    asm1.x6000003({
            w: function (v)
            {
                
                loc1 = v;
            },
            r: function ()
            {
                
                return loc1;
            }
        });
    /* IL_31: nop  */
    /* IL_32: ldloca.s 2 */
    /* IL_34: call Void Z(C&) */
    
    asm1.x6000004({
            w: function (v)
            {
                
                loc2 = v;
            },
            r: function ()
            {
                
                return loc2;
            }
        });
    /* IL_39: nop  */
    /* IL_3A: ldloc.0  */
    /* IL_3B: box System.Int32 */
    /* IL_40: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(loc0,t2));
    /* IL_45: nop  */
    /* IL_46: ldloc.1  */
    /* IL_47: ldfld Int32 U */
    /* IL_4C: box System.Int32 */
    /* IL_51: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(loc1.U,t2));
    /* IL_56: nop  */
    /* IL_57: ldloc.2  */
    /* IL_58: ldfld Int32 V */
    /* IL_5D: box System.Int32 */
    /* IL_62: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(loc2.V,t2));
    /* IL_67: nop  */
    /* IL_68: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000006 = function _ctor(arg0)
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
            
            this.U = 0;
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
        
        CILJS.initType(type,asm,"C",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function C()
        {
            
            C.init();
            
            this.V = 0;
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
asm.entryPoint = asm.x6000005;
CILJS.declareAssembly("RefParameters.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=RefParameters.cs.ciljs.exe.js.map
