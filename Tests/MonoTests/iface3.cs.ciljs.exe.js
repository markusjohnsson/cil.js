
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "iface3.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Int32 Base.ICommon.DoIt()*/

asm.x6000002 = function ICommon_DoIt(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stloc.0  */
    
    loc0 = 1;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Int32 Base.DoIt()*/

asm.x6000003 = function DoIt(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.2  */
    /* IL_02: stloc.0  */
    
    loc0 = 2;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  Base..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Int32 Derived.ICommon.DoIt()*/

asm.x6000005 = function ICommon_DoIt(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.3  */
    /* IL_02: stloc.0  */
    
    loc0 = 3;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Int32 Derived.DoIt()*/

asm.x6000006 = function DoIt(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.4  */
    /* IL_02: stloc.0  */
    
    loc0 = 4;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  Derived..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000004(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Int32 ReallyDerived.DoIt()*/

asm.x6000008 = function DoIt(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.5  */
    /* IL_02: stloc.0  */
    
    loc0 = 5;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  ReallyDerived..ctor()*/

asm.x6000009 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000007(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Int32 Test.Main()*/

asm.x600000a_init = function ()
{
    
    (asm1.ReallyDerived().init)();
    
    (asm1.ICommon().init)();
    
    asm.x600000a = asm.x600000a_;
};;

asm.x600000a = function ()
{
    
    asm.x600000a_init();
    
    return asm.x600000a_();
};;
asm.x600000a_ = function Main()
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    var loc5;
    var loc6;
    var loc7;
    var loc8;
    var loc9;
    var loc10;
    
    CILJS.init_base_types();
    
    t0 = asm1.ReallyDerived();
    
    t1 = asm1.ICommon();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: newobj Void .ctor() */
            /* IL_06: stloc.0  */
            
            loc0 = CILJS.newobj(t0,asm1.x6000009,[null]);
            /* IL_07: ldloc.0  */
            /* IL_08: stloc.1  */
            
            loc1 = loc0;
            /* IL_09: ldloc.0  */
            /* IL_0A: stloc.2  */
            
            loc2 = loc0;
            /* IL_0B: ldloc.0  */
            /* IL_0C: stloc.3  */
            
            loc3 = loc0;
            /* IL_0D: ldloc.0  */
            /* IL_0E: stloc.s 4 */
            
            loc4 = loc0;
            /* IL_10: ldloc.0  */
            /* IL_11: callvirt Int32 DoIt() */
            /* IL_16: ldc.i4.5  */
            /* IL_18: ceq  */
            /* IL_19: ldc.i4.0  */
            /* IL_1B: ceq  */
            /* IL_1C: stloc.s 5 */
            
            loc5 = (((((loc0.vtable)["asm1.x6000006"](loc0) === 5) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_1E: ldloc.s 5 */
            /* IL_20: brfalse.s IL_27 */
            
            if ((!(loc5))){
                
                __pos__ = 0x27;
                
                continue;
            }
            /* IL_22: ldc.i4.1  */
            /* IL_23: stloc.s 6 */
            
            loc6 = 1;
            /* IL_25: br.s IL_88 */
            
            __pos__ = 0x88;
            
            continue;
            case 0x27:
            /* IL_27: ldloc.0  */
            /* IL_28: callvirt Int32 DoIt() */
            /* IL_2D: ldc.i4.3  */
            /* IL_2F: ceq  */
            /* IL_30: ldc.i4.0  */
            /* IL_32: ceq  */
            /* IL_33: stloc.s 7 */
            
            loc7 = ((((((loc0.ifacemap)[t1].x6000001)(loc0) === 3) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_35: ldloc.s 7 */
            /* IL_37: brfalse.s IL_3E */
            
            if ((!(loc7))){
                
                __pos__ = 0x3E;
                
                continue;
            }
            /* IL_39: ldc.i4.2  */
            /* IL_3A: stloc.s 6 */
            
            loc6 = 2;
            /* IL_3C: br.s IL_88 */
            
            __pos__ = 0x88;
            
            continue;
            case 0x3E:
            /* IL_3E: ldloc.1  */
            /* IL_3F: callvirt Int32 DoIt() */
            /* IL_44: ldc.i4.5  */
            /* IL_46: ceq  */
            /* IL_47: ldc.i4.0  */
            /* IL_49: ceq  */
            /* IL_4A: stloc.s 8 */
            
            loc8 = (((((loc1.vtable)["asm1.x6000006"](loc1) === 5) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_4C: ldloc.s 8 */
            /* IL_4E: brfalse.s IL_55 */
            
            if ((!(loc8))){
                
                __pos__ = 0x55;
                
                continue;
            }
            /* IL_50: ldc.i4.3  */
            /* IL_51: stloc.s 6 */
            
            loc6 = 3;
            /* IL_53: br.s IL_88 */
            
            __pos__ = 0x88;
            
            continue;
            case 0x55:
            /* IL_55: ldloc.2  */
            /* IL_56: callvirt Int32 DoIt() */
            /* IL_5B: ldc.i4.2  */
            /* IL_5D: ceq  */
            /* IL_5E: ldc.i4.0  */
            /* IL_60: ceq  */
            /* IL_61: stloc.s 9 */
            
            loc9 = (((((loc2.vtable)["asm1.x6000003"](loc2) === 2) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_63: ldloc.s 9 */
            /* IL_65: brfalse.s IL_6C */
            
            if ((!(loc9))){
                
                __pos__ = 0x6C;
                
                continue;
            }
            /* IL_67: ldc.i4.4  */
            /* IL_68: stloc.s 6 */
            
            loc6 = 4;
            /* IL_6A: br.s IL_88 */
            
            __pos__ = 0x88;
            
            continue;
            case 0x6C:
            /* IL_6C: ldloc.3  */
            /* IL_6D: callvirt Int32 DoIt() */
            /* IL_72: ldc.i4.3  */
            /* IL_74: ceq  */
            /* IL_75: ldc.i4.0  */
            /* IL_77: ceq  */
            /* IL_78: stloc.s 10 */
            
            loc10 = ((((((loc3.ifacemap)[t1].x6000001)(CILJS.convert_box_to_pointer_as_needed(loc3)) === 3) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_7A: ldloc.s 10 */
            /* IL_7C: brfalse.s IL_83 */
            
            if ((!(loc10))){
                
                __pos__ = 0x83;
                
                continue;
            }
            /* IL_7E: ldc.i4.5  */
            /* IL_7F: stloc.s 6 */
            
            loc6 = 5;
            /* IL_81: br.s IL_88 */
            
            __pos__ = 0x88;
            
            continue;
            case 0x83:
            /* IL_83: ldc.i4.0  */
            /* IL_84: stloc.s 6 */
            
            loc6 = 0;
            case 0x88:
            /* IL_88: ldloc.s 6 */
            /* IL_8A: ret  */
            
            return loc6;
        }
    }
};/*  Test..ctor()*/

asm.x600000b = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.ICommon = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"ICommon",false,false,true,false,false,[],[
                [asm1, "x6000001", "DoIt"]
            ],null,CILJS.is_inst_interface(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(type,"asm1.x6000001",asm1,"x6000001");
    },
    function ()
    {
        
        return function ICommon()
        {
            
            ICommon.init();
        };
    });
asm.Base = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Base",false,false,false,false,false,[],[
                [asm1, "x6000003", "DoIt"]
            ],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm1.x6000002",asm1,"x6000002");
        
        CILJS.declare_virtual(type,"asm1.x6000003",asm1,"x6000003");
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            type,
            [asm1.ICommon()],
            [
                ["x6000001", asm1, "x6000002"]
            ]);
    },
    function ()
    {
        
        return function Base()
        {
            
            Base.init();
        };
    });
asm.Derived = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm1.Base();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Derived",false,false,false,false,false,[],[
                [asm1, "x6000006", "DoIt"]
            ],asm1.Base(),CILJS.is_inst_default(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declare_virtual(type,"asm1.x6000005",asm1,"x6000005");
        
        CILJS.declare_virtual(type,"asm1.x6000006",asm1,"x6000006");
        
        CILJS.declare_virtual(type,"asm1.x6000003",asm1,"x6000003");
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            type,
            [asm1.ICommon()],
            [
                ["x6000001", asm1, "x6000005"]
            ]);
    },
    function ()
    {
        
        return function Derived()
        {
            
            Derived.init();
        };
    });
asm.ReallyDerived = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm1.Derived();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"ReallyDerived",false,false,false,false,false,[],[
                [asm1, "x6000008", "DoIt"]
            ],asm1.Derived(),CILJS.is_inst_default(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declare_virtual(type,"asm1.x6000006",asm1,"x6000008");
        
        CILJS.declare_virtual(type,"asm1.x6000003",asm1,"x6000003");
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            type,
            [asm1.ICommon()],
            [
                ["x6000001", asm1, "x6000005"]
            ]);
    },
    function ()
    {
        
        return function ReallyDerived()
        {
            
            ReallyDerived.init();
        };
    });
asm.Test = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Test",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000006",null);
        
        type.TypeMetadataName = "asm1.t2000006";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Test()
        {
            
            Test.init();
        };
    });
asm.entryPoint = asm.x600000a;
CILJS.declare_assembly("iface3.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=iface3.cs.ciljs.exe.js.map
