
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "Delegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.String Foo.Invoke(Int32)*/

asm.x6000002 = CILJS.delegate_invoke;;/* System.IAsyncResult Foo.BeginInvoke(Int32,AsyncCallback,Object)*/

asm.x6000003 = CILJS.delegate_begin_invoke;;/* System.String Foo.EndInvoke(IAsyncResult)*/

asm.x6000004 = CILJS.delegate_end_invoke;;/*  Foo..ctor(Object,IntPtr)*/

asm.x6000001 = CILJS.delegate_ctor;;/* static System.String Program.X(Int32)*/

asm.x6000005 = function X(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldstr RESULT! */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.new_string("RESULT!");
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};;/* static System.String Program.Y(Int32)*/

asm.x6000006 = function Y(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldstr FOO! */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.new_string("FOO!");
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};;/* static System.Void Program.Main()*/

asm.x6000007_init = function ()
{
    
    (asm1.Foo().init)();
    
    asm.x6000007 = asm.x6000007_;
};;

asm.x6000007 = function ()
{
    
    asm.x6000007_init();
    
    return asm.x6000007_();
};;
asm.x6000007_ = function Main()
{
    var t0;
    var t1;
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm1.Foo();
    
    t1 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldnull  */
    /* IL_03: ldftn String X(System.Int32) */
    /* IL_08: newobj Void .ctor(System.Object, System.IntPtr) */
    /* IL_0D: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm1.x6000001,[null, null, asm1.x6000005]);
    /* IL_0E: ldloc.0  */
    /* IL_0F: call Void CallDelegate(Foo) */
    
    asm1.x6000008(loc0);
    /* IL_14: nop  */
    /* IL_15: ldstr f, f */
    /* IL_1A: ldc.i4.0  */
    /* IL_1B: newarr System.Object */
    /* IL_20: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.new_string("f, f"),CILJS.new_array(t1,0));
    /* IL_25: nop  */
    /* IL_26: ldloc.0  */
    /* IL_27: ldloc.0  */
    /* IL_28: call Void TestEquality(Foo, Foo) */
    
    asm1.x6000009(loc0,loc0);
    /* IL_2D: nop  */
    /* IL_2E: ldstr f, X */
    /* IL_33: ldc.i4.0  */
    /* IL_34: newarr System.Object */
    /* IL_39: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.new_string("f, X"),CILJS.new_array(t1,0));
    /* IL_3E: nop  */
    /* IL_3F: ldloc.0  */
    /* IL_40: ldnull  */
    /* IL_42: ldftn String X(System.Int32) */
    /* IL_47: newobj Void .ctor(System.Object, System.IntPtr) */
    /* IL_4C: call Void TestEquality(Foo, Foo) */
    
    asm1.x6000009(loc0,CILJS.newobj(t0,asm1.x6000001,[null, null, asm1.x6000005]));
    /* IL_51: nop  */
    /* IL_52: ldstr f, Y */
    /* IL_57: ldc.i4.0  */
    /* IL_58: newarr System.Object */
    /* IL_5D: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.new_string("f, Y"),CILJS.new_array(t1,0));
    /* IL_62: nop  */
    /* IL_63: ldloc.0  */
    /* IL_64: ldnull  */
    /* IL_66: ldftn String Y(System.Int32) */
    /* IL_6B: newobj Void .ctor(System.Object, System.IntPtr) */
    /* IL_70: call Void TestEquality(Foo, Foo) */
    
    asm1.x6000009(loc0,CILJS.newobj(t0,asm1.x6000001,[null, null, asm1.x6000006]));
    /* IL_75: nop  */
    /* IL_76: ldstr f, null */
    /* IL_7B: ldc.i4.0  */
    /* IL_7C: newarr System.Object */
    /* IL_81: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.new_string("f, null"),CILJS.new_array(t1,0));
    /* IL_86: nop  */
    /* IL_87: ldloc.0  */
    /* IL_88: ldnull  */
    /* IL_89: call Void TestEquality(Foo, Foo) */
    
    asm1.x6000009(loc0,null);
    /* IL_8E: nop  */
    /* IL_8F: ldstr null, null */
    /* IL_94: ldc.i4.0  */
    /* IL_95: newarr System.Object */
    /* IL_9A: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.new_string("null, null"),CILJS.new_array(t1,0));
    /* IL_9F: nop  */
    /* IL_A0: ldnull  */
    /* IL_A1: ldnull  */
    /* IL_A2: call Void TestEquality(Foo, Foo) */
    
    asm1.x6000009(null,null);
    /* IL_A7: nop  */
    /* IL_A8: ret  */
    
    return ;
};/* static System.Void Program.CallDelegate(Foo)*/

asm.x6000008 = function CallDelegate(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldc.i4.s 123 */
    /* IL_04: callvirt String Invoke(System.Int32) */
    /* IL_09: ldc.i4.0  */
    /* IL_0A: newarr System.Object */
    /* IL_0F: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((arg0._target) ? (arg0._methodPtr(arg0._target,123)) : (arg0._methodPtr(123))),CILJS.new_array(t0,0));
    /* IL_14: nop  */
    /* IL_15: ret  */
    
    return ;
};;/* static System.Void Program.TestEquality(Foo,Foo)*/

asm.x6000009 = function TestEquality(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate) */
    /* IL_08: box System.Boolean */
    /* IL_0D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.make_box(asm0.x600003e(arg0,arg1),t0));
    /* IL_12: nop  */
    /* IL_13: ldarg.0  */
    /* IL_14: ldarg.1  */
    /* IL_15: call Boolean op_Inequality(System.Delegate, System.Delegate) */
    /* IL_1A: box System.Boolean */
    /* IL_1F: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.make_box(asm0.x600003f(arg0,arg1),t0));
    /* IL_24: nop  */
    /* IL_25: ret  */
    
    return ;
};;/*  Program..ctor()*/

asm.x600000a = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.Foo = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Foo",false,false,false,false,false,[],[
                [asm1, "x6000002", "Invoke"],
                [asm1, "x6000003", "BeginInvoke"],
                [asm1, "x6000004", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(type,"asm1.x6000002",asm1,"x6000002");
        
        CILJS.declare_virtual(type,"asm1.x6000003",asm1,"x6000003");
        
        CILJS.declare_virtual(type,"asm1.x6000004",asm1,"x6000004");
        
        CILJS.declare_virtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declare_virtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declare_virtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declare_virtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declare_virtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function ()
    {
        
        return function Foo()
        {
            
            Foo.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
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
asm.entryPoint = asm.x6000007;
CILJS.declare_assembly("Delegate.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Delegate.cs.ciljs.exe.js.map
