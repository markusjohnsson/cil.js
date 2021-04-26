
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "Closure.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.String A.get_Prop()*/

asm.x6000001 = function get_Prop(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld String <Prop>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["A<Prop>k__BackingField"];
};;/* System.Void A.set_Prop(String)*/

asm.x6000002 = function set_Prop(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld String <Prop>k__BackingField */
    
    arg0["A<Prop>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/*  A..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void X.Invoke()*/

asm.x6000005 = CILJS.delegateInvoke;;/* System.IAsyncResult X.BeginInvoke(AsyncCallback,Object)*/

asm.x6000006 = CILJS.delegateBeginInvoke;;/* System.Void X.EndInvoke(IAsyncResult)*/

asm.x6000007 = CILJS.delegateEndInvoke;;/*  X..ctor(Object,IntPtr)*/

asm.x6000004 = CILJS.delegateCtor;;/* static System.Void Program.Main()*/

asm.x6000008_init = function ()
{
    
    (asm1["Program+<>c__DisplayClass0_0"]().init)();
    
    (asm1.A().init)();
    
    (asm1.X().init)();
    
    asm.x6000008 = asm.x6000008_;
};;

asm.x6000008 = function ()
{
    
    asm.x6000008_init();
    
    return asm.x6000008_();
};;
asm.x6000008_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var loc0;
    var loc1;
    
    CILJS.initBaseTypes();
    
    t0 = asm1["Program+<>c__DisplayClass0_0"]();
    
    t1 = asm1.A();
    
    t2 = asm1.X();
    
    t3 = asm0["System.Object"]();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: newobj Void .ctor() */
    /* IL_05: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm1.x600000a,[null]);
    /* IL_06: nop  */
    /* IL_07: ldloc.0  */
    
    st_04 = loc0;
    /* IL_08: newobj Void .ctor() */
    
    st_01 = CILJS.newobj(t1,asm1.x6000003,[null]);
    /* IL_0D: dup  */
    
    st_05 = st_02 = st_01;
    /* IL_0E: ldstr hello */
    
    st_03 = CILJS.newString("hello");
    /* IL_13: callvirt Void set_Prop(System.String) */
    
    asm1.x6000002(st_02,st_03);
    /* IL_18: nop  */
    /* IL_19: stfld A a */
    
    st_04.a = st_05;
    /* IL_1E: ldloc.0  */
    /* IL_1F: ldnull  */
    /* IL_20: stfld A b */
    
    loc0.b = null;
    /* IL_25: ldloc.0  */
    /* IL_27: ldftn Void <Main>b__0() */
    /* IL_2C: newobj Void .ctor(System.Object, System.IntPtr) */
    /* IL_31: stloc.1  */
    
    loc1 = CILJS.newobj(t2,asm1.x6000004,[null, loc0, asm1.x600000b]);
    /* IL_32: ldloc.1  */
    /* IL_33: callvirt Void Invoke() */
    
    ((loc1._target) ? (loc1._methodPtr(loc1._target)) : (loc1._methodPtr()));
    /* IL_38: nop  */
    /* IL_39: ldloc.0  */
    /* IL_3A: ldfld A b */
    /* IL_3F: callvirt String get_Prop() */
    /* IL_44: ldc.i4.0  */
    /* IL_45: newarr System.Object */
    /* IL_4A: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073((loc0.b)["A<Prop>k__BackingField"],CILJS.newArray(t3,0));
    /* IL_4F: nop  */
    /* IL_50: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000009 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void <>c__DisplayClass0_0.<Main>b__0()*/

asm.x600000b = function _Main_b__0(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.0  */
    /* IL_03: ldfld A a */
    /* IL_08: stfld A b */
    
    arg0.b = arg0.a;
    /* IL_0D: ret  */
    
    return ;
};;/*  <>c__DisplayClass0_0..ctor()*/

asm.x600000a = function _ctor(arg0)
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
        
        CILJS.initType(type,asm,"A",false,false,false,false,false,[],[
                [asm1, "x6000001", "get_Prop"],
                [asm1, "x6000002", "set_Prop"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
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
            
            this["A<Prop>k__BackingField"] = null;
        };
    });
asm.X = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"X",false,false,false,false,false,[],[
                [asm1, "x6000005", "Invoke"],
                [asm1, "x6000006", "BeginInvoke"],
                [asm1, "x6000007", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm1.x6000005",asm1,"x6000005");
        
        CILJS.declareVirtual(type,"asm1.x6000006",asm1,"x6000006");
        
        CILJS.declareVirtual(type,"asm1.x6000007",asm1,"x6000007");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function ()
    {
        
        return function X()
        {
            
            X.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
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
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
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
asm["Program+<>c__DisplayClass0_0"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program+<>c__DisplayClass0_0",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function __c__DisplayClass0_0()
        {
            
            __c__DisplayClass0_0.init();
            
            this.b = null;
            
            this.a = null;
        };
    });
asm.entryPoint = asm.x6000008;
CILJS.declareAssembly("Closure.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Closure.cs.ciljs.exe.js.map
