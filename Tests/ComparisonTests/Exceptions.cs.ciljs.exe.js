
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "Exceptions.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldstr Exception A */
    /* IL_06: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,CILJS.newString("Exception A"));
    /* IL_0B: nop  */
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/*  B..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldstr Exception B */
    /* IL_06: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,CILJS.newString("Exception B"));
    /* IL_0B: nop  */
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/*  B..ctor(String)*/

asm.x6000003 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,arg1);
    /* IL_07: nop  */
    /* IL_08: nop  */
    /* IL_09: ret  */
    
    return ;
};;/*  C..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldstr Exception C */
    /* IL_06: call Void .ctor(System.String) */
    
    asm1.x6000003(arg0,CILJS.newString("Exception C"));
    /* IL_0B: nop  */
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000005_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1.B().init)();
    
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
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm1.B();
    
    t2 = asm1.C();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: call Void TestTryCatch(System.Exception) */
    
    asm1.x6000006(CILJS.newobj(t0,asm1.x6000001,[null]));
    /* IL_0B: nop  */
    /* IL_0C: newobj Void .ctor() */
    /* IL_11: call Void TestTryCatch(System.Exception) */
    
    asm1.x6000006(CILJS.newobj(t1,asm1.x6000002,[null]));
    /* IL_16: nop  */
    /* IL_17: newobj Void .ctor() */
    /* IL_1C: call Void TestTryCatch(System.Exception) */
    
    asm1.x6000006(CILJS.newobj(t2,asm1.x6000004,[null]));
    /* IL_21: nop  */
    /* IL_22: ret  */
    
    return ;
};/* static System.Void Program.TestTryCatch(Exception)*/

asm.x6000006 = function TestTryCatch(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var in_block_1;
    var __finally_continuation_1__;
    var in_block_2;
    var __error_handled_2__;
    var loc0;
    var loc1;
    var loc2;
    
    t0 = asm0["System.Object"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            
            try {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                if (__pos__ < 0x1){
                    
                    __pos__ = 0x1;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1:
                        
                        try {
                            
                            in_block_2 = true;
                            
                            if (__pos__ < 0x1){
                                
                                __pos__ = 0x1;
                            }
                            
                            while (in_block_2){
                                
                                switch (__pos__){
                                    case 0x1:
                                    /* IL_01: nop  */
                                    /* IL_02: ldarg.0  */
                                    /* IL_03: throw  */
                                    
                                    throw arg0;
                                }
                            }
                        }
                        
                        catch (__error__) {
                            
                            __error_handled_2__ = false;
                            
                            if ((!(__error_handled_2__)) && (__error__ instanceof asm1.C())){
                                
                                in_block_2 = true;
                                
                                if (__pos__ < 0x4){
                                    
                                    __pos__ = 0x4;
                                }
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x4:
                                        
                                        st_01 = __error__;
                                        
                                        __error_handled_2__ = true;
                                        /* IL_04: stloc.0  */
                                        
                                        loc0 = st_01;
                                        /* IL_05: nop  */
                                        /* IL_06: ldloc.0  */
                                        /* IL_07: callvirt String get_Message() */
                                        /* IL_0C: ldc.i4.0  */
                                        /* IL_0D: newarr System.Object */
                                        /* IL_12: call Void WriteLine(System.String, System.Object[]) */
                                        
                                        asm0.x6000073((loc0.vtable)["asm0.x600007a"](loc0),CILJS.newArray(t0,0));
                                        /* IL_17: nop  */
                                        /* IL_18: nop  */
                                        /* IL_19: leave.s IL_49 */
                                        
                                        in_block_2 = false;
                                        
                                        __pos__ = 0x49;
                                        
                                        continue;
                                    }
                                }
                            }
                            
                            if ((!(__error_handled_2__)) && (__error__ instanceof asm1.B())){
                                
                                in_block_2 = true;
                                
                                if (__pos__ < 0x1B){
                                    
                                    __pos__ = 0x1B;
                                }
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x1B:
                                        
                                        st_06 = __error__;
                                        
                                        __error_handled_2__ = true;
                                        /* IL_1B: stloc.1  */
                                        
                                        loc1 = st_06;
                                        /* IL_1C: nop  */
                                        /* IL_1D: ldloc.1  */
                                        /* IL_1E: callvirt String get_Message() */
                                        /* IL_23: ldc.i4.0  */
                                        /* IL_24: newarr System.Object */
                                        /* IL_29: call Void WriteLine(System.String, System.Object[]) */
                                        
                                        asm0.x6000073((loc1.vtable)["asm0.x600007a"](loc1),CILJS.newArray(t0,0));
                                        /* IL_2E: nop  */
                                        /* IL_2F: nop  */
                                        /* IL_30: leave.s IL_49 */
                                        
                                        in_block_2 = false;
                                        
                                        __pos__ = 0x49;
                                        
                                        continue;
                                    }
                                }
                            }
                            
                            if ((!(__error_handled_2__)) && (__error__ instanceof asm1.A())){
                                
                                in_block_2 = true;
                                
                                if (__pos__ < 0x32){
                                    
                                    __pos__ = 0x32;
                                }
                                
                                while (in_block_2){
                                    
                                    switch (__pos__){
                                        case 0x32:
                                        
                                        st_0B = __error__;
                                        
                                        __error_handled_2__ = true;
                                        /* IL_32: stloc.2  */
                                        
                                        loc2 = st_0B;
                                        /* IL_33: nop  */
                                        /* IL_34: ldloc.2  */
                                        /* IL_35: callvirt String get_Message() */
                                        /* IL_3A: ldc.i4.0  */
                                        /* IL_3B: newarr System.Object */
                                        /* IL_40: call Void WriteLine(System.String, System.Object[]) */
                                        
                                        asm0.x6000073((loc2.vtable)["asm0.x600007a"](loc2),CILJS.newArray(t0,0));
                                        /* IL_45: nop  */
                                        /* IL_46: nop  */
                                        /* IL_47: leave.s IL_49 */
                                        
                                        in_block_2 = false;
                                        
                                        __pos__ = 0x49;
                                        
                                        continue;
                                    }
                                }
                            }
                            
                            if ((!(__error_handled_2__))){
                                
                                throw __error__;
                            }
                        }
                        
                        continue;
                        case 0x49:
                        /* IL_49: leave.s IL_5F */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0x5F;
                        
                        continue;
                    }
                }
            }
            
            finally {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                __pos__ = 0x4B;
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x4B:
                        /* IL_4B: nop  */
                        /* IL_4C: ldstr Finally */
                        /* IL_51: ldc.i4.0  */
                        /* IL_52: newarr System.Object */
                        /* IL_57: call Void WriteLine(System.String, System.Object[]) */
                        
                        asm0.x6000073(CILJS.newString("Finally"),CILJS.newArray(t0,0));
                        /* IL_5C: nop  */
                        /* IL_5D: nop  */
                        /* IL_5E: endfinally  */
                        
                        in_block_1 = false;
                        
                        __pos__ = __finally_continuation_1__;
                        
                        continue;
                    }
                    
                    break;
                }
            }
            
            continue;
            case 0x5F:
            /* IL_5F: ret  */
            
            return ;
        }
    }
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
        
        return asm0["System.Exception"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",false,false,false,false,false,[],[],asm0["System.Exception"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
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
        
        return asm0["System.Exception"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"B",false,false,false,false,false,[],[],asm0["System.Exception"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
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
        
        return asm1.B();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"C",false,false,false,false,false,[],[],asm1.B(),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
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
asm.entryPoint = asm.x6000005;
CILJS.declareAssembly("Exceptions.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Exceptions.cs.ciljs.exe.js.map
