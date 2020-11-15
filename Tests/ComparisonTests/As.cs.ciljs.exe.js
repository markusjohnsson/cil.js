
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "As.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  B..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000001(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  C..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000004_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1.B().init)();
    
    (asm1.C().init)();
    
    asm.x6000004 = asm.x6000004_;
};;

asm.x6000004 = function ()
{
    
    asm.x6000004_init();
    
    return asm.x6000004_();
};;
asm.x6000004_ = function Main()
{
    var t0;
    var t1;
    var t2;
    
    CILJS.init_base_types();
    
    t0 = asm1.A();
    
    t1 = asm1.B();
    
    t2 = asm1.C();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: call Void AsA(System.Object) */
    
    asm1.x6000005(CILJS.newobj(t0,asm1.x6000001,[null]));
    /* IL_0B: nop  */
    /* IL_0C: newobj Void .ctor() */
    /* IL_11: call Void AsA(System.Object) */
    
    asm1.x6000005(CILJS.newobj(t1,asm1.x6000002,[null]));
    /* IL_16: nop  */
    /* IL_17: newobj Void .ctor() */
    /* IL_1C: call Void AsA(System.Object) */
    
    asm1.x6000005(CILJS.newobj(t2,asm1.x6000003,[null]));
    /* IL_21: nop  */
    /* IL_22: newobj Void .ctor() */
    /* IL_27: call Void As[A](System.Object) */
    
    (asm1.x6000006(asm1.A()))(CILJS.newobj(t0,asm1.x6000001,[null]));
    /* IL_2C: nop  */
    /* IL_2D: newobj Void .ctor() */
    /* IL_32: call Void As[A](System.Object) */
    
    (asm1.x6000006(asm1.A()))(CILJS.newobj(t1,asm1.x6000002,[null]));
    /* IL_37: nop  */
    /* IL_38: newobj Void .ctor() */
    /* IL_3D: call Void As[A](System.Object) */
    
    (asm1.x6000006(asm1.A()))(CILJS.newobj(t2,asm1.x6000003,[null]));
    /* IL_42: nop  */
    /* IL_43: newobj Void .ctor() */
    /* IL_48: call Void As[B](System.Object) */
    
    (asm1.x6000006(asm1.B()))(CILJS.newobj(t0,asm1.x6000001,[null]));
    /* IL_4D: nop  */
    /* IL_4E: newobj Void .ctor() */
    /* IL_53: call Void As[B](System.Object) */
    
    (asm1.x6000006(asm1.B()))(CILJS.newobj(t1,asm1.x6000002,[null]));
    /* IL_58: nop  */
    /* IL_59: newobj Void .ctor() */
    /* IL_5E: call Void As[B](System.Object) */
    
    (asm1.x6000006(asm1.B()))(CILJS.newobj(t2,asm1.x6000003,[null]));
    /* IL_63: nop  */
    /* IL_64: ret  */
    
    return ;
};/* static System.Void Program.AsA(Object)*/

asm.x6000005_init = function (arg0)
{
    
    (asm1.A().init)();
    
    asm.x6000005 = asm.x6000005_;
};;

asm.x6000005 = function (arg0)
{
    
    asm.x6000005_init(arg0);
    
    return asm.x6000005_(arg0);
};;
asm.x6000005_ = function AsA(arg0)
{
    var t0;
    var t1;
    var st_02;
    var st_03;
    var st_04;
    var in_block_0;
    var __pos__;
    
    t0 = asm1.A();
    
    t1 = asm0["System.Object"]();
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: isinst A */
            /* IL_07: brfalse.s IL_10 */
            
            if ((!(t0.IsInst(arg0)))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_09: ldstr not null */
            
            st_03 = CILJS.new_string("not null");
            /* IL_0E: br.s IL_15 */
            
            __pos__ = 0x15;
            
            continue;
            case 0x10:
            /* IL_10: ldstr null */
            
            st_03 = CILJS.new_string("null");
            case 0x15:
            /* IL_15: ldc.i4.0  */
            
            st_02 = 0;
            /* IL_16: newarr System.Object */
            
            st_04 = CILJS.new_array(t1,st_02);
            /* IL_1B: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x60000a2(st_03,st_04);
            /* IL_20: nop  */
            /* IL_21: ret  */
            
            return ;
        }
    }
};/* static System.Void Program.As<T>(Object)*/

asm.x6000006 = function (T)
{
    
    return function As(arg0)
    {
        var t0;
        var t1;
        var st_04;
        var st_05;
        var st_06;
        var in_block_0;
        var __pos__;
        
        t0 = T;
        
        t1 = asm0["System.Object"]();
        
        
        
        
        
        
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.0  */
                /* IL_02: isinst T */
                /* IL_07: unbox.any T */
                /* IL_0C: box T */
                /* IL_11: brfalse.s IL_1A */
                
                if ((!(CILJS.box(CILJS.unbox_any(t0.IsInst(arg0),t0),t0)))){
                    
                    __pos__ = 0x1A;
                    
                    continue;
                }
                /* IL_13: ldstr not null */
                
                st_05 = CILJS.new_string("not null");
                /* IL_18: br.s IL_1F */
                
                __pos__ = 0x1F;
                
                continue;
                case 0x1A:
                /* IL_1A: ldstr null */
                
                st_05 = CILJS.new_string("null");
                case 0x1F:
                /* IL_1F: ldc.i4.0  */
                
                st_04 = 0;
                /* IL_20: newarr System.Object */
                
                st_06 = CILJS.new_array(t1,st_04);
                /* IL_25: call Void WriteLine(System.String, System.Object[]) */
                
                asm0.x60000a2(st_05,st_06);
                /* IL_2A: nop  */
                /* IL_2B: ret  */
                
                return ;
            }
        }
    };
};;/*  Program..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.A = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"A",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
        };
    });
asm.B = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm1.A();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
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
        
        CILJS.init_type(type,asm,"C",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
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
asm.Program = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000004;
CILJS.declare_assembly("As.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=As.cs.ciljs.exe.js.map
