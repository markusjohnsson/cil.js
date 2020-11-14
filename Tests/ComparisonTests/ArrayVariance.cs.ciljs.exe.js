
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "ArrayVariance.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  B..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000002_init = function ()
{
    
    (asm1.I().init)();
    
    (asm0["System.Array`1"](asm1.I()).init)();
    
    (asm1.B().init)();
    
    asm.x6000002 = asm.x6000002_;
};;

asm.x6000002 = function ()
{
    
    asm.x6000002_init();
    
    return asm.x6000002_();
};;
asm.x6000002_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm1.I();
    
    t1 = asm0["System.Array`1"](t0);
    
    t2 = asm1.B();
    
    t3 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: newarr I */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.new_array(t0,1);
    /* IL_08: ldloc.0  */
    /* IL_09: call Void M(System.Object) */
    
    asm1.x6000003(loc0);
    /* IL_0E: nop  */
    /* IL_0F: ldloc.0  */
    /* IL_10: castclass I[] */
    /* IL_15: ldc.i4.0  */
    /* IL_16: ldelem.ref  */
    /* IL_17: castclass B */
    /* IL_1C: ldfld String X */
    /* IL_21: ldc.i4.0  */
    /* IL_22: newarr System.Object */
    /* IL_27: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x60000a2(CILJS.cast_class(CILJS.ldelem_ref(CILJS.cast_class(loc0,t1),0),t2).X,CILJS.new_array(t3,0));
    /* IL_2C: nop  */
    /* IL_2D: ret  */
    
    return ;
};/* static System.Void Program.M(Object)*/

asm.x6000003_init = function (arg0)
{
    
    (asm0["System.Array`1"](asm0["System.Object"]()).init)();
    
    (asm1.B().init)();
    
    asm.x6000003 = asm.x6000003_;
};;

asm.x6000003 = function (arg0)
{
    
    asm.x6000003_init(arg0);
    
    return asm.x6000003_(arg0);
};;
asm.x6000003_ = function M(arg0)
{
    var t0;
    var t1;
    var t2;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var st_06;
    var st_07;
    var loc0;
    
    t0 = asm0["System.Object"]();
    
    t1 = asm0["System.Array`1"](t0);
    
    t2 = asm1.B();
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: castclass System.Object[] */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.cast_class(arg0,t1);
    /* IL_08: ldloc.0  */
    
    st_05 = loc0;
    /* IL_09: ldc.i4.0  */
    
    st_06 = 0;
    /* IL_0A: newobj Void .ctor() */
    
    st_02 = CILJS.newobj(t2,asm1.x6000001,[null]);
    /* IL_0F: dup  */
    
    st_07 = st_03 = st_02;
    /* IL_10: ldstr X */
    
    st_04 = CILJS.new_string("X");
    /* IL_15: stfld String X */
    
    st_03.X = st_04;
    /* IL_1A: stelem.ref  */
    
    CILJS.stelem_ref(st_05,st_06,st_07);
    /* IL_1B: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.I = CILJS.declare_type(
    "I",
    [],
    function ()
    {
        
        return {};
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
        
        this.GenericTypeMetadataName = "asm1.t2000002";
    },
    function ()
    {
        
        return function I()
        {
            
            I.init();
        };
    });
asm.B = CILJS.declare_type(
    "B",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
        
        this.GenericTypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            this,
            [asm1.I()],
            []);
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
            
            this.X = null;
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
        
        CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
        
        this.GenericTypeMetadataName = "asm1.t2000004";
        
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
asm.entryPoint = asm.x6000002;
CILJS.declare_assembly("ArrayVariance.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=ArrayVariance.cs.ciljs.exe.js.map
