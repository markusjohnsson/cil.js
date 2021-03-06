
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "CastClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A..ctor()*/

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
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm1.B();
    
    t2 = asm1.C();
    /* IL_00: nop  */
    /* IL_01: call Void Test[A]() */
    
    (asm1.x6000005(asm1.A()))();
    /* IL_06: nop  */
    /* IL_07: call Void Test[B]() */
    
    (asm1.x6000005(asm1.B()))();
    /* IL_0C: nop  */
    /* IL_0D: call Void Test[C]() */
    
    (asm1.x6000005(asm1.C()))();
    /* IL_12: nop  */
    /* IL_13: ret  */
    
    return ;
};/* static System.Void Program.Test<T>()*/

asm.x6000005_init = function (T)
{
    
    return function ()
    {
        
        (asm1.A().init)();
        
        (asm1.B().init)();
        
        (asm1.C().init)();
        
        asm.x6000005 = asm.x6000005_;
    };
};;

asm.x6000005 = function (T)
{
    
    return function ()
    {
        
        (asm.x6000005_init(T))();
        
        return (asm.x6000005_(T))();
    };
};;
asm.x6000005_ = function (T)
{
    
    return function Test()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        
        t0 = asm1.A();
        
        t1 = T;
        
        t2 = asm1.B();
        
        t3 = asm1.C();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void Cast[T](System.Object) */
        
        (asm1.x6000006(T))(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void Cast[T](System.Object) */
        
        (asm1.x6000006(T))(CILJS.newobj(t2,asm1.x6000002,[null]));
        /* IL_16: nop  */
        /* IL_17: newobj Void .ctor() */
        /* IL_1C: call Void Cast[T](System.Object) */
        
        (asm1.x6000006(T))(CILJS.newobj(t3,asm1.x6000003,[null]));
        /* IL_21: nop  */
        /* IL_22: ret  */
        
        return ;
    };
};/* static System.Void Program.Cast<T>(Object)*/

asm.x6000006 = function (T)
{
    
    return function Cast(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var in_block_1;
        var loc0;
        var __error_handled_1__;
        
        t0 = T;
        
        t1 = asm0["System.Object"]();
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                try {
                    
                    in_block_1 = true;
                    
                    if (__pos__ < 0x1){
                        
                        __pos__ = 0x1;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x1:
                            /* IL_01: nop  */
                            /* IL_02: ldarg.0  */
                            /* IL_03: unbox.any T */
                            /* IL_08: box T */
                            /* IL_0D: stloc.0  */
                            
                            loc0 = CILJS.box(CILJS.unboxAny(arg0,t0),t0);
                            /* IL_0E: ldstr Success */
                            /* IL_13: ldc.i4.0  */
                            /* IL_14: newarr System.Object */
                            /* IL_19: call Void WriteLine(System.String, System.Object[]) */
                            
                            asm0.x6000073(CILJS.newString("Success"),CILJS.newArray(t1,0));
                            /* IL_1E: nop  */
                            /* IL_1F: nop  */
                            /* IL_20: leave.s IL_38 */
                            
                            in_block_1 = false;
                            
                            __pos__ = 0x38;
                            
                            continue;
                        }
                    }
                }
                
                catch (__error__) {
                    
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof asm0["System.Object"]())){
                        
                        in_block_1 = true;
                        
                        if (__pos__ < 0x22){
                            
                            __pos__ = 0x22;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x22:
                                
                                st_06 = __error__;
                                
                                __error_handled_1__ = true;
                                /* IL_22: pop  */
                                /* IL_23: nop  */
                                /* IL_24: ldstr Failure */
                                /* IL_29: ldc.i4.0  */
                                /* IL_2A: newarr System.Object */
                                /* IL_2F: call Void WriteLine(System.String, System.Object[]) */
                                
                                asm0.x6000073(CILJS.newString("Failure"),CILJS.newArray(t1,0));
                                /* IL_34: nop  */
                                /* IL_35: nop  */
                                /* IL_36: leave.s IL_38 */
                                
                                in_block_1 = false;
                                
                                __pos__ = 0x38;
                                
                                continue;
                            }
                        }
                    }
                    
                    if ((!(__error_handled_1__))){
                        
                        throw __error__;
                    }
                }
                
                continue;
                case 0x38:
                /* IL_38: ret  */
                
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
asm.A = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
        };
    });
asm.B = CILJS.declareType(
    [],
    function ()
    {
        
        return asm1.A();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
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
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
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
asm.entryPoint = asm.x6000004;
CILJS.declareAssembly("CastClass.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=CastClass.cs.ciljs.exe.js.map
