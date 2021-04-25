
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "OutParameters.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  C..ctor()*/

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

asm.x6000005 = function Main()
{
    var t0;
    var loc0;
    var loc1;
    var loc2;
    
    CILJS.initBaseTypes();
    
    t0 = asm0["System.Int32"]();
    
    loc0 = 0;
    
    loc1 = new (asm1.A())();
    
    loc2 = null;
    /* IL_00: nop  */
    /* IL_01: ldloca.s 0 */
    /* IL_03: call Void X(System.Int32&) */
    
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
    /* IL_08: nop  */
    /* IL_09: ldloca.s 1 */
    /* IL_0B: call Void Y(A&) */
    
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
    /* IL_10: nop  */
    /* IL_11: ldloca.s 2 */
    /* IL_13: call Void Z(C&) */
    
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
    /* IL_18: nop  */
    /* IL_19: ldloc.0  */
    /* IL_1A: box System.Int32 */
    /* IL_1F: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(loc0,t0));
    /* IL_24: nop  */
    /* IL_25: ldloc.1  */
    /* IL_26: ldfld Int32 U */
    /* IL_2B: box System.Int32 */
    /* IL_30: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(loc1.U,t0));
    /* IL_35: nop  */
    /* IL_36: ldloc.2  */
    /* IL_37: ldfld Int32 V */
    /* IL_3C: box System.Int32 */
    /* IL_41: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(loc2.V,t0));
    /* IL_46: nop  */
    /* IL_47: ret  */
    
    return ;
};;/*  Program..ctor()*/

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
CILJS.declareAssembly("OutParameters.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=OutParameters.cs.ciljs.exe.js.map
