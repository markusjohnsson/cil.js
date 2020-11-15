
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "NestedGenericDelegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Void A`1.X()*/

asm.x6000001_init = function (arg0)
{
    
    (asm1["A`1+D`1"](((arg0.constructor.GenericArguments)["asm1.t2000002"])[0],asm0["System.Type"]()).init)();
};;

asm.x6000001 = function (arg0)
{
    
    asm.x6000001_init(arg0);
    
    return asm.x6000001_(arg0);
};;
asm.x6000001_ = function X(arg0)
{
    var t0;
    var t1;
    var t2;
    
    t0 = ((arg0.constructor.GenericArguments)["asm1.t2000002"])[0];
    
    t1 = asm0["System.Type"]();
    
    t2 = asm1["A`1+D`1"](t0,t1);
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldnull  */
    /* IL_04: ldftn Type Y(T) */
    /* IL_09: newobj Void .ctor(System.Object, System.IntPtr) */
    /* IL_0E: call Void Z(A`1+D`1[T,System.Type]) */
    
    asm1.x6000003(arg0,CILJS.newobj(t2,asm1.x6000007,[null, null, asm1.x6000002(((arg0.constructor.GenericArguments)["asm1.t2000002"])[0])]));
    /* IL_13: nop  */
    /* IL_14: ret  */
    
    return ;
};/* static System.Type A`1.Y(T)*/

asm.x6000002 = function (T)
{
    
    return function Y(arg0)
    {
        var t0;
        var loc0;
        
        t0 = T;
        /* IL_00: nop  */
        /* IL_01: ldtoken T */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: stloc.0  */
        
        loc0 = asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t0));
        /* IL_0E: ldloc.0  */
        /* IL_0F: ret  */
        
        return loc0;
    };
};;/* System.Void A`1.Z(D`1)*/

asm.x6000003 = function Z(arg0, arg1)
{
    var t0;
    var t1;
    var loc0;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var st_06;
    
    t0 = ((arg0.constructor.GenericArguments)["asm1.t2000002"])[0];
    
    t1 = asm0["System.Object"]();
    
    loc0 = ((arg0.constructor.GenericArguments)["asm1.t2000002"])[0].Default;
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldarg.1  */
    
    st_01 = arg1;
    /* IL_02: ldloca.s 0 */
    /* IL_05: initobj T */
    
    loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? 0 : (new t0()))) : (null));
    /* IL_0A: ldloc.0  */
    
    st_02 = loc0;
    /* IL_0B: callvirt Type Invoke(T) */
    
    st_03 = ((st_01._target) ? (st_01._methodPtr(st_01._target,st_02)) : (st_01._methodPtr(st_02)));
    /* IL_10: callvirt String get_Name() */
    
    st_05 = (st_03.vtable)["asm0.x60001c5"](st_03);
    /* IL_15: ldc.i4.0  */
    
    st_04 = 0;
    /* IL_16: newarr System.Object */
    
    st_06 = CILJS.new_array(t1,st_04);
    /* IL_1B: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x60000a2(st_05,st_06);
    /* IL_20: nop  */
    /* IL_21: ret  */
    
    return ;
};;/*  A`1..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000005_init = function ()
{
    
    (asm1["A`1"](asm0["System.String"]()).init)();
    
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
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.String"]();
    
    t1 = asm1["A`1"](t0);
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t1,asm1.x6000004,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: callvirt Void X() */
    
    asm1.x6000001(loc0);
    /* IL_0D: nop  */
    /* IL_0E: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000006 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* TResult D`1.Invoke(T)*/

asm.x6000008 = CILJS.delegate_invoke;;/* System.IAsyncResult D`1.BeginInvoke(T,AsyncCallback,Object)*/

asm.x6000009 = CILJS.delegate_begin_invoke;;/* TResult D`1.EndInvoke(IAsyncResult)*/

asm.x600000a = CILJS.delegate_end_invoke;;/*  D`1..ctor(Object,IntPtr)*/

asm.x6000007 = CILJS.delegate_ctor;;
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
                [asm1, "x6000001", "X"]
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
asm["A`1+D`1"] = CILJS.declare_type(
    ["T", "TResult"],
    function (T, TResult)
    {
        
        return {};
    },
    function (type, T, TResult)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"A`1+D`1",false,false,false,true,false,[],[
                [asm1, "x6000008", "Invoke"],
                [asm1, "x6000009", "BeginInvoke"],
                [asm1, "x600000a", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.is_inst_default(type),Array,"asm1.t2000004",null);
        
        (type.GenericArguments)["asm1.t2000004"] = [T, TResult];
        
        type.TypeMetadataName = ("asm1.t2000004<" + ((T.TypeMetadataName + TResult.TypeMetadataName) + ">"));
        
        CILJS.declare_virtual(type,"asm1.x6000008",asm1,"x6000008");
        
        CILJS.declare_virtual(type,"asm1.x6000009",asm1,"x6000009");
        
        CILJS.declare_virtual(type,"asm1.x600000a",asm1,"x600000a");
        
        CILJS.declare_virtual(type,"asm0.x600006b",asm0,"x60000e0");
        
        CILJS.declare_virtual(type,"asm0.x600006a",asm0,"x60000e1");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x600006c");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x600006f");
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
    },
    function (T, TResult)
    {
        
        return function D_1()
        {
            
            D_1.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm.entryPoint = asm.x6000005;
CILJS.declare_assembly("NestedGenericDelegate.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=NestedGenericDelegate.cs.ciljs.exe.js.map
