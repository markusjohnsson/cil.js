
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "GenericClassBasics.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* T A`1.get_Prop()*/

asm.x6000001 = function get_Prop(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld T <Prop>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["A_1<Prop>k__BackingField"];
};;/* System.Void A`1.set_Prop(T)*/

asm.x6000002 = function set_Prop(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld T <Prop>k__BackingField */
    
    arg0["A_1<Prop>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/*  A`1..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  IntWrapper..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  StringWrapper..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000006_init = function ()
{
    
    (asm1.IntWrapper().init)();
    
    (asm1["A`1"](asm1.IntWrapper()).init)();
    
    (asm1.StringWrapper().init)();
    
    (asm1["A`1"](asm1.StringWrapper()).init)();
    
    asm.x6000006 = asm.x6000006_;
};;

asm.x6000006 = function ()
{
    
    asm.x6000006_init();
    
    return asm.x6000006_();
};;
asm.x6000006_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
    var t5;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var st_07;
    var st_08;
    var st_09;
    var st_0A;
    var st_0B;
    var loc0;
    var loc1;
    
    CILJS.init_base_types();
    
    t0 = asm1.IntWrapper();
    
    t1 = asm1["A`1"](t0);
    
    t2 = asm1.StringWrapper();
    
    t3 = asm1["A`1"](t2);
    
    t4 = asm0["System.Int32"]();
    
    t5 = asm0["System.Object"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t1,asm1.x6000003,[null]);
    /* IL_07: ldloc.0  */
    
    st_04 = loc0;
    /* IL_08: newobj Void .ctor() */
    
    st_01 = CILJS.newobj(t0,asm1.x6000004,[null]);
    /* IL_0D: dup  */
    
    st_05 = st_02 = st_01;
    /* IL_0E: ldc.i4.s 123 */
    
    st_03 = 123;
    /* IL_10: stfld Int32 Value */
    
    st_02.Value = st_03;
    /* IL_15: callvirt Void set_Prop(IntWrapper) */
    
    asm1.x6000002(st_04,st_05);
    /* IL_1A: nop  */
    /* IL_1B: newobj Void .ctor() */
    /* IL_20: stloc.1  */
    
    loc1 = CILJS.newobj(t3,asm1.x6000003,[null]);
    /* IL_21: ldloc.1  */
    
    st_0A = loc1;
    /* IL_22: newobj Void .ctor() */
    
    st_07 = CILJS.newobj(t2,asm1.x6000005,[null]);
    /* IL_27: dup  */
    
    st_0B = st_08 = st_07;
    /* IL_28: ldstr Hello */
    
    st_09 = CILJS.new_string("Hello");
    /* IL_2D: stfld String Value */
    
    st_08.Value = st_09;
    /* IL_32: callvirt Void set_Prop(StringWrapper) */
    
    asm1.x6000002(st_0A,st_0B);
    /* IL_37: nop  */
    /* IL_38: ldloc.0  */
    /* IL_39: callvirt IntWrapper get_Prop() */
    /* IL_3E: ldfld Int32 Value */
    /* IL_43: box System.Int32 */
    /* IL_48: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(loc0["A_1<Prop>k__BackingField"].Value,t4));
    /* IL_4D: nop  */
    /* IL_4E: ldloc.1  */
    /* IL_4F: callvirt StringWrapper get_Prop() */
    /* IL_54: ldfld String Value */
    /* IL_59: ldc.i4.0  */
    /* IL_5A: newarr System.Object */
    /* IL_5F: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x60000a2(loc1["A_1<Prop>k__BackingField"].Value,CILJS.new_array(t5,0));
    /* IL_64: nop  */
    /* IL_65: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000007 = function _ctor(arg0)
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
        
        CILJS.init_type(type,asm,"A`1",false,false,false,true,false,[],[
                [asm1, "x6000001", "get_Prop"],
                [asm1, "x6000002", "set_Prop"]
            ],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000002<" + (T.TypeMetadataName + ">"));
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function (T)
    {
        
        return function A_1()
        {
            
            A_1.init();
            
            this["A_1<Prop>k__BackingField"] = T.Default;
        };
    });
asm.IntWrapper = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"IntWrapper",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function IntWrapper()
        {
            
            IntWrapper.init();
            
            this.Value = 0;
        };
    });
asm.StringWrapper = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"StringWrapper",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function StringWrapper()
        {
            
            StringWrapper.init();
            
            this.Value = null;
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
asm.entryPoint = asm.x6000006;
CILJS.declare_assembly("GenericClassBasics.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=GenericClassBasics.cs.ciljs.exe.js.map
