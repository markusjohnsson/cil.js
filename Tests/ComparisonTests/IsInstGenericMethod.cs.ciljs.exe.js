
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "IsInstGenericMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A..ctor()*/

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
};;/* static System.Void Program.Test<T>(Object)*/

asm.x6000004 = function (T)
{
    
    return function Test(arg0)
    {
        var t0;
        var t1;
        var st_02;
        var st_03;
        var st_04;
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
                /* IL_07: brtrue.s IL_10 */
                
                if (t0.IsInst(arg0)){
                    
                    __pos__ = 0x10;
                    
                    continue;
                }
                /* IL_09: ldstr false */
                
                st_03 = CILJS.new_string("false");
                /* IL_0E: br.s IL_15 */
                
                __pos__ = 0x15;
                
                continue;
                case 0x10:
                /* IL_10: ldstr true */
                
                st_03 = CILJS.new_string("true");
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
    };
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
    
    CILJS.init_base_types();
    
    t0 = asm1.A();
    
    t1 = asm1.B();
    
    t2 = asm1.C();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: call Void Test[A](System.Object) */
    
    (asm1.x6000004(asm1.A()))(CILJS.newobj(t0,asm1.x6000001,[null]));
    /* IL_0B: nop  */
    /* IL_0C: newobj Void .ctor() */
    /* IL_11: call Void Test[A](System.Object) */
    
    (asm1.x6000004(asm1.A()))(CILJS.newobj(t1,asm1.x6000002,[null]));
    /* IL_16: nop  */
    /* IL_17: newobj Void .ctor() */
    /* IL_1C: call Void Test[A](System.Object) */
    
    (asm1.x6000004(asm1.A()))(CILJS.newobj(t2,asm1.x6000003,[null]));
    /* IL_21: nop  */
    /* IL_22: ldnull  */
    /* IL_23: call Void Test[A](System.Object) */
    
    (asm1.x6000004(asm1.A()))(null);
    /* IL_28: nop  */
    /* IL_29: ret  */
    
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
asm.A = CILJS.declare_type(
    "A",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
        
        this.GenericTypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
        };
    });
asm.B = CILJS.declare_type(
    "B",
    [],
    function ()
    {
        
        return asm1.A();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
        
        this.GenericTypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
        };
    });
asm.C = CILJS.declare_type(
    "C",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
        
        this.GenericTypeMetadataName = "asm1.t2000004";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function C()
        {
            
            C.init();
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
asm.entryPoint = asm.x6000005;
CILJS.declare_assembly("IsInstGenericMethod.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=IsInstGenericMethod.cs.ciljs.exe.js.map
