
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "NewslotMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Void X.M()*/

asm.x6000001 = function M(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr a */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x60000a2(CILJS.new_string("a"),CILJS.new_array(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/*  X..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void Y.M()*/

asm.x6000003 = function M(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr b */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x60000a2(CILJS.new_string("b"),CILJS.new_array(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/*  Y..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000002(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void Z.M()*/

asm.x6000005 = function M(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr c */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x60000a2(CILJS.new_string("c"),CILJS.new_array(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/*  Z..ctor()*/

asm.x6000006 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000004(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000007_init = function ()
{
    
    (asm1.Z().init)();
    
    asm.x6000007 = asm.x6000007_;
};;

asm.x6000007 = function ()
{
    
    asm.x6000007_init();
    
    return asm.x6000007_();
};;
asm.x6000007_ = function Main()
{
    var t0;
    var loc0;
    var loc1;
    var loc2;
    
    CILJS.init_base_types();
    
    t0 = asm1.Z();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm1.x6000006,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: callvirt Void M() */
    
    asm1.x6000005(loc0);
    /* IL_0D: nop  */
    /* IL_0E: ldloc.0  */
    /* IL_0F: stloc.1  */
    
    loc1 = loc0;
    /* IL_10: ldloc.1  */
    /* IL_11: callvirt Void M() */
    
    (loc1.vtable)["asm1.x6000001"](loc1);
    /* IL_16: nop  */
    /* IL_17: ldloc.0  */
    /* IL_18: stloc.2  */
    
    loc2 = loc0;
    /* IL_19: ldloc.2  */
    /* IL_1A: callvirt Void M() */
    
    (loc2.vtable)["asm1.x6000001"](loc2);
    /* IL_1F: nop  */
    /* IL_20: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000008 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.X = CILJS.declare_type(
    "X",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[
                [asm1, "x6000001", "M"]
            ],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
        
        this.GenericTypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(this,"asm1.x6000001",asm1,"x6000001");
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function X()
        {
            
            X.init();
        };
    });
asm.Y = CILJS.declare_type(
    "Y",
    [],
    function ()
    {
        
        return asm1.X();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[
                [asm1, "x6000003", "M"]
            ],asm1.X(),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
        
        this.GenericTypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(this,"asm1.x6000001",asm1,"x6000003");
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Y()
        {
            
            Y.init();
        };
    });
asm.Z = CILJS.declare_type(
    "Z",
    [],
    function ()
    {
        
        return asm1.Y();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"Z",false,false,false,false,false,[],[
                [asm1, "x6000005", "M"]
            ],asm1.Y(),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
        
        this.GenericTypeMetadataName = "asm1.t2000004";
        
        CILJS.declare_virtual(this,"asm1.x6000001",asm1,"x6000003");
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Z()
        {
            
            Z.init();
        };
    });
asm.Program = CILJS.declare_type(
    "Program",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
        
        this.GenericTypeMetadataName = "asm1.t2000005";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000007;
CILJS.declare_assembly("NewslotMethod.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=NewslotMethod.cs.ciljs.exe.js.map
