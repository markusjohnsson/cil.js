
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "static-ctor.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static  X..cctor()*/

asm.x6000001_init = function ()
{
    
    (asm1.test().init)();
    
    asm.x6000001 = asm.x6000001_;
};;

asm.x6000001 = function ()
{
    
    asm.x6000001_init();
    
    return asm.x6000001_();
};;
asm.x6000001_ = function _cctor()
{
    var t0;
    
    if (asm1.X().FieldsInitialized){
        
        return;
    }
    
    asm1.X().FieldsInitialized = true;
    
    t0 = asm1.test();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stsfld Int32 global */
    
    t0.global = 1;
    /* IL_07: ret  */
    
    return ;
};/*  X..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  Y..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000002(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  Z..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000003(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* static System.Int32 test.Main()*/

asm.x6000005_init = function ()
{
    
    (asm1.Z().init)();
    
    (asm1.test().init)();
    
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
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    CILJS.init_base_types();
    
    t0 = asm1.Z();
    
    t1 = asm1.test();
    
    t2 = asm0["System.Object"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            
            asm1.x6000001();
            /* IL_01: newobj Void .ctor() */
            /* IL_06: stloc.0  */
            
            loc0 = CILJS.newobj(t0,asm1.x6000004,[null]);
            /* IL_07: ldsfld Int32 global */
            /* IL_0C: ldc.i4.1  */
            /* IL_0E: ceq  */
            /* IL_0F: ldc.i4.0  */
            /* IL_11: ceq  */
            /* IL_12: stloc.1  */
            
            loc1 = ((((t1.global === 1) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_13: ldloc.1  */
            /* IL_14: brfalse.s IL_2C */
            
            if ((!(loc1))){
                
                __pos__ = 0x2C;
                
                continue;
            }
            /* IL_16: nop  */
            /* IL_17: ldstr Error */
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: newarr System.Object */
            /* IL_22: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x60000a2(CILJS.new_string("Error"),CILJS.new_array(t2,0));
            /* IL_27: nop  */
            /* IL_28: ldc.i4.1  */
            /* IL_29: stloc.2  */
            
            loc2 = 1;
            /* IL_2A: br.s IL_41 */
            
            __pos__ = 0x41;
            
            continue;
            case 0x2C:
            /* IL_2C: ldstr Ok */
            /* IL_31: ldc.i4.0  */
            /* IL_32: newarr System.Object */
            /* IL_37: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x60000a2(CILJS.new_string("Ok"),CILJS.new_array(t2,0));
            /* IL_3C: nop  */
            /* IL_3D: ldc.i4.0  */
            /* IL_3E: stloc.2  */
            
            loc2 = 0;
            case 0x41:
            /* IL_41: ldloc.2  */
            /* IL_42: ret  */
            
            return loc2;
        }
    }
};/*  test..ctor()*/

asm.x6000006 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.X = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"X",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function X()
        {
            
            X.init();
        };
    });
asm.Y = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm1.X();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Y",false,false,false,false,false,[],[],asm1.X(),CILJS.is_inst_default(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Y()
        {
            
            Y.init();
        };
    });
asm.Z = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm1.Y();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Z",false,false,false,false,false,[],[],asm1.Y(),CILJS.is_inst_default(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Z()
        {
            
            Z.init();
        };
    });
asm.test = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"test",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000005",null);
        
        type.global = 0;
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function test()
        {
            
            test.init();
        };
    });
asm.entryPoint = asm.x6000005;
CILJS.declare_assembly("static-ctor.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=static-ctor.cs.ciljs.exe.js.map
