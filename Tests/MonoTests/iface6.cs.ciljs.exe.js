
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "iface6.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Int32 D.IA.Add(Int32)*/

asm.x6000005 = function IA_Add(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.5  */
    /* IL_02: stloc.0  */
    
    loc0 = 5;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Int32 D.IB.Add(Int32)*/

asm.x6000006 = function IB_Add(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.6  */
    /* IL_02: stloc.0  */
    
    loc0 = 6;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  D..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void E.doom()*/

asm.x6000009 = function doom(arg0)
{
    /* IL_00: nop  */
    /* IL_03: ret  */
    
    return ;
};;/* System.Object E.Clone()*/

asm.x600000a = function Clone(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldnull  */
    /* IL_02: stloc.0  */
    
    loc0 = null;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Void E.Dispose()*/

asm.x600000b = function Dispose(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* System.Int32 E.IA.Add(Int32)*/

asm.x600000c = function IA_Add(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.7  */
    /* IL_02: stloc.0  */
    
    loc0 = 7;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Int32 E.IB.Add(Int32)*/

asm.x600000d = function IB_Add(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.8  */
    /* IL_02: stloc.0  */
    
    loc0 = 8;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  E..ctor()*/

asm.x6000008 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* static System.Int32 C.Test(IC)*/

asm.x600000e_init = function (arg0)
{
    
    (asm1.IA().init)();
    
    (asm1.IB().init)();
    
    asm.x600000e = asm.x600000e_;
};;

asm.x600000e = function (arg0)
{
    
    asm.x600000e_init(arg0);
    
    return asm.x600000e_(arg0);
};;
asm.x600000e_ = function Test(arg0)
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    t0 = asm1.IA();
    
    t1 = asm1.IB();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldc.i4.0  */
            /* IL_03: callvirt Int32 Add(System.Int32) */
            /* IL_08: ldc.i4.5  */
            /* IL_0A: ceq  */
            /* IL_0B: ldc.i4.0  */
            /* IL_0D: ceq  */
            /* IL_0E: stloc.0  */
            
            loc0 = ((((((arg0.ifacemap)[t0].x6000001)(CILJS.convert_box_to_pointer_as_needed(arg0),0) === 5) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0F: ldloc.0  */
            /* IL_10: brfalse.s IL_16 */
            
            if ((!(loc0))){
                
                __pos__ = 0x16;
                
                continue;
            }
            /* IL_12: ldc.i4.1  */
            /* IL_13: stloc.1  */
            
            loc1 = 1;
            /* IL_14: br.s IL_2F */
            
            __pos__ = 0x2F;
            
            continue;
            case 0x16:
            /* IL_16: ldarg.0  */
            /* IL_17: ldc.i4.0  */
            /* IL_18: callvirt Int32 Add(System.Int32) */
            /* IL_1D: ldc.i4.6  */
            /* IL_1F: ceq  */
            /* IL_20: ldc.i4.0  */
            /* IL_22: ceq  */
            /* IL_23: stloc.2  */
            
            loc2 = ((((((arg0.ifacemap)[t1].x6000002)(CILJS.convert_box_to_pointer_as_needed(arg0),0) === 6) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_24: ldloc.2  */
            /* IL_25: brfalse.s IL_2B */
            
            if ((!(loc2))){
                
                __pos__ = 0x2B;
                
                continue;
            }
            /* IL_27: ldc.i4.1  */
            /* IL_28: stloc.1  */
            
            loc1 = 1;
            /* IL_29: br.s IL_2F */
            
            __pos__ = 0x2F;
            
            continue;
            case 0x2B:
            /* IL_2B: ldc.i4.0  */
            /* IL_2C: stloc.1  */
            
            loc1 = 0;
            case 0x2F:
            /* IL_2F: ldloc.1  */
            /* IL_30: ret  */
            
            return loc1;
        }
    }
};/* static System.Void C.Test2(IE)*/

asm.x600000f_init = function (arg0)
{
    
    (asm1.IE().init)();
    
    (asm1.ICl().init)();
    
    (asm0["System.IDisposable"]().init)();
    
    asm.x600000f = asm.x600000f_;
};;

asm.x600000f = function (arg0)
{
    
    asm.x600000f_init(arg0);
    
    return asm.x600000f_(arg0);
};;
asm.x600000f_ = function Test2(arg0)
{
    var t0;
    var t1;
    var t2;
    var loc0;
    
    t0 = asm1.IE();
    
    t1 = asm1.ICl();
    
    t2 = asm0["System.IDisposable"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: callvirt Void doom() */
    
    ((arg0.ifacemap)[t0].x6000004)(CILJS.convert_box_to_pointer_as_needed(arg0));
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: callvirt Object Clone() */
    /* IL_0E: stloc.0  */
    
    loc0 = ((arg0.ifacemap)[t1].x6000003)(CILJS.convert_box_to_pointer_as_needed(arg0));
    /* IL_0F: ldarg.0  */
    /* IL_10: callvirt Void Dispose() */
    
    ((arg0.ifacemap)[t2].x600010c)(CILJS.convert_box_to_pointer_as_needed(arg0));
    /* IL_15: nop  */
    /* IL_16: ret  */
    
    return ;
};/* static System.Int32 C.Main()*/

asm.x6000010_init = function ()
{
    
    (asm1.D().init)();
    
    (asm1.E().init)();
    
    asm.x6000010 = asm.x6000010_;
};;

asm.x6000010 = function ()
{
    
    asm.x6000010_init();
    
    return asm.x6000010_();
};;
asm.x6000010_ = function Main()
{
    var t0;
    var t1;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    CILJS.init_base_types();
    
    t0 = asm1.D();
    
    t1 = asm1.E();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm1.x6000007,[null]);
    /* IL_07: newobj Void .ctor() */
    /* IL_0C: stloc.1  */
    
    loc1 = CILJS.newobj(t1,asm1.x6000008,[null]);
    /* IL_0D: ldloc.1  */
    /* IL_0E: call Int32 Test(IC) */
    /* IL_13: stloc.2  */
    
    loc2 = asm1.x600000e(loc1);
    /* IL_14: ldloc.1  */
    /* IL_15: call Void Test2(IE) */
    
    asm1.x600000f(loc1);
    /* IL_1A: nop  */
    /* IL_1B: ldloc.0  */
    /* IL_1C: call Int32 Test(IC) */
    /* IL_21: stloc.3  */
    
    loc3 = asm1.x600000e(loc0);
    /* IL_24: ldloc.3  */
    /* IL_25: ret  */
    
    return loc3;
};/*  C..ctor()*/

asm.x6000011 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.IA = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"IA",false,false,true,false,false,[],[
                [asm1, "x6000001", "Add"]
            ],null,CILJS.is_inst_interface(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(type,"asm1.x6000001",asm1,"x6000001");
    },
    function ()
    {
        
        return function IA()
        {
            
            IA.init();
        };
    });
asm.IB = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"IB",false,false,true,false,false,[],[
                [asm1, "x6000002", "Add"]
            ],null,CILJS.is_inst_interface(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm1.x6000002",asm1,"x6000002");
    },
    function ()
    {
        
        return function IB()
        {
            
            IB.init();
        };
    });
asm.IC = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"IC",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.implement_interface(
            type,
            [asm1.IA()],
            null);
        
        CILJS.implement_interface(
            type,
            [asm1.IB()],
            null);
    },
    function ()
    {
        
        return function IC()
        {
            
            IC.init();
        };
    });
asm.ICl = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"ICl",false,false,true,false,false,[],[
                [asm1, "x6000003", "Clone"]
            ],null,CILJS.is_inst_interface(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declare_virtual(type,"asm1.x6000003",asm1,"x6000003");
    },
    function ()
    {
        
        return function ICl()
        {
            
            ICl.init();
        };
    });
asm.IE = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"IE",false,false,true,false,false,[],[
                [asm1, "x6000004", "doom"]
            ],null,CILJS.is_inst_interface(type),Array,"asm1.t2000006",null);
        
        type.TypeMetadataName = "asm1.t2000006";
        
        CILJS.declare_virtual(type,"asm1.x6000004",asm1,"x6000004");
        
        CILJS.implement_interface(
            type,
            [asm1.ICl()],
            null);
        
        CILJS.implement_interface(
            type,
            [asm0["System.IDisposable"]()],
            null);
    },
    function ()
    {
        
        return function IE()
        {
            
            IE.init();
        };
    });
asm.D = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"D",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000007",null);
        
        type.TypeMetadataName = "asm1.t2000007";
        
        CILJS.declare_virtual(type,"asm1.x6000005",asm1,"x6000005");
        
        CILJS.declare_virtual(type,"asm1.x6000006",asm1,"x6000006");
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            type,
            [asm1.IC()],
            []);
        
        CILJS.implement_interface(
            type,
            [asm1.IA()],
            [
                ["x6000001", asm1, "x6000005"]
            ]);
        
        CILJS.implement_interface(
            type,
            [asm1.IB()],
            [
                ["x6000002", asm1, "x6000006"]
            ]);
    },
    function ()
    {
        
        return function D()
        {
            
            D.init();
        };
    });
asm.E = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"E",false,false,false,false,false,[],[
                [asm1, "x6000009", "doom"],
                [asm1, "x600000a", "Clone"],
                [asm1, "x600000b", "Dispose"]
            ],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000008",null);
        
        type.TypeMetadataName = "asm1.t2000008";
        
        CILJS.declare_virtual(type,"asm1.x6000009",asm1,"x6000009");
        
        CILJS.declare_virtual(type,"asm1.x600000a",asm1,"x600000a");
        
        CILJS.declare_virtual(type,"asm1.x600000b",asm1,"x600000b");
        
        CILJS.declare_virtual(type,"asm1.x600000c",asm1,"x600000c");
        
        CILJS.declare_virtual(type,"asm1.x600000d",asm1,"x600000d");
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            type,
            [asm1.IE()],
            [
                ["x6000004", asm1, "x6000009"]
            ]);
        
        CILJS.implement_interface(
            type,
            [asm1.ICl()],
            [
                ["x6000003", asm1, "x600000a"]
            ]);
        
        CILJS.implement_interface(
            type,
            [asm0["System.IDisposable"]()],
            [
                ["x600010c", asm1, "x600000b"]
            ]);
        
        CILJS.implement_interface(
            type,
            [asm1.IC()],
            []);
        
        CILJS.implement_interface(
            type,
            [asm1.IA()],
            [
                ["x6000001", asm1, "x600000c"]
            ]);
        
        CILJS.implement_interface(
            type,
            [asm1.IB()],
            [
                ["x6000002", asm1, "x600000d"]
            ]);
    },
    function ()
    {
        
        return function E()
        {
            
            E.init();
        };
    });
asm.C = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"C",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000009",null);
        
        type.TypeMetadataName = "asm1.t2000009";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function C()
        {
            
            C.init();
        };
    });
asm.entryPoint = asm.x6000010;
CILJS.declare_assembly("iface6.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=iface6.cs.ciljs.exe.js.map
