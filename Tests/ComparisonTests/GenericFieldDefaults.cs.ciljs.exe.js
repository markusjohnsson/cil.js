
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "GenericFieldDefaults.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A`1..ctor()*/

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
    
    (asm1["A`1"](asm0["System.Object"]()).init)();
    
    (asm1["A`1"](asm0["System.Int32"]()).init)();
    
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
    var loc1;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.Object"]();
    
    t1 = asm1["A`1"](t0);
    
    t2 = asm0["System.Int32"]();
    
    t3 = asm1["A`1"](t2);
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t1,asm1.x6000001,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: ldfld Managed.Reflection.GenericFieldInstance */
    /* IL_0D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(loc0.Value);
    /* IL_12: nop  */
    /* IL_13: newobj Void .ctor() */
    /* IL_18: stloc.1  */
    
    loc1 = CILJS.newobj(t3,asm1.x6000001,[null]);
    /* IL_19: ldloc.1  */
    /* IL_1A: ldfld Managed.Reflection.GenericFieldInstance */
    /* IL_1F: box System.Int32 */
    /* IL_24: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.make_box(loc1.Value,t2));
    /* IL_29: nop  */
    /* IL_2A: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm["A`1"] = CILJS.declare_type(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"A`1",false,false,false,true,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000002<" + (T.TypeMetadataName + ">"));
        
        CILJS.declare_virtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declare_virtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declare_virtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function (T)
    {
        
        return function A_1()
        {
            
            A_1.init();
            
            this.Value = T.Default;
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
        
        CILJS.init_type(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declare_virtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declare_virtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000002;
CILJS.declare_assembly("GenericFieldDefaults.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=GenericFieldDefaults.cs.ciljs.exe.js.map
