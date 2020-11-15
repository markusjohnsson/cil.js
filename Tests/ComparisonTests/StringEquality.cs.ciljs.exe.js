
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "StringEquality.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Cmp(String)*/

asm.x6000001 = function Cmp(arg0)
{
    var t0;
    
    t0 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldstr Hello World */
    /* IL_07: call Boolean op_Equality(System.String, System.String) */
    /* IL_0C: box System.Boolean */
    /* IL_11: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(asm0.x60000f5(arg0,CILJS.new_string("Hello World")),t0));
    /* IL_16: nop  */
    /* IL_17: ldarg.0  */
    /* IL_18: ldstr Hello World */
    /* IL_1D: callvirt Boolean Equals(System.String) */
    /* IL_22: box System.Boolean */
    /* IL_27: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box((arg0.vtable)["asm0.x60000f6"](arg0,CILJS.new_string("Hello World")),t0));
    /* IL_2C: nop  */
    /* IL_2D: ldstr Hello World */
    /* IL_32: ldarg.0  */
    /* IL_33: call Boolean Equals(System.String) */
    /* IL_38: box System.Boolean */
    /* IL_3D: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(asm0.x60000f6(CILJS.new_string("Hello World"),arg0),t0));
    /* IL_42: nop  */
    /* IL_43: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000002 = function Main()
{
    
    CILJS.init_base_types();
    /* IL_00: nop  */
    /* IL_01: ldstr Hello World */
    /* IL_06: call Void Cmp(System.String) */
    
    asm1.x6000001(CILJS.new_string("Hello World"));
    /* IL_0B: nop  */
    /* IL_0C: ldstr Hello, World */
    /* IL_11: call Void Cmp(System.String) */
    
    asm1.x6000001(CILJS.new_string("Hello, World"));
    /* IL_16: nop  */
    /* IL_17: ldstr Hello */
    /* IL_1C: call Void Cmp(System.String) */
    
    asm1.x6000001(CILJS.new_string("Hello"));
    /* IL_21: nop  */
    /* IL_22: ret  */
    
    return ;
};;/*  Program..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.Program = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
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
asm.entryPoint = asm.x6000002;
CILJS.declare_assembly("StringEquality.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=StringEquality.cs.ciljs.exe.js.map
