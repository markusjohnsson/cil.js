
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "GenericDelegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* TResult MFunc`2.Invoke(T)*/

asm.x6000002 = CILJS.delegateInvoke;;/* System.IAsyncResult MFunc`2.BeginInvoke(T,AsyncCallback,Object)*/

asm.x6000003 = CILJS.delegateBeginInvoke;;/* TResult MFunc`2.EndInvoke(IAsyncResult)*/

asm.x6000004 = CILJS.delegateEndInvoke;;/*  MFunc`2..ctor(Object,IntPtr)*/

asm.x6000001 = CILJS.delegateCtor;;/*  IntWrapper..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  StringWrapper..ctor()*/

asm.x6000006 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000007_init = function ()
{
    
    (asm1["Program+<>c"]().init)();
    
    (asm1.IntWrapper().init)();
    
    (asm1.StringWrapper().init)();
    
    (asm1["MFunc`2"](asm1.IntWrapper(),asm1.StringWrapper()).init)();
    
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
    var t2;
    var t3;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var st_06;
    var st_07;
    var in_block_0;
    var __pos__;
    
    CILJS.initBaseTypes();
    
    t0 = asm1["Program+<>c"]();
    
    t1 = asm1.IntWrapper();
    
    t2 = asm1.StringWrapper();
    
    t3 = asm1["MFunc`2"](t1,t2);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            
            asm1.x600000a();
            /* IL_01: ldsfld MFunc`2 <>9__0_0 */
            
            st_00 = t0["<>9__0_0"];
            /* IL_06: dup  */
            
            st_07 = st_02 = st_01 = st_00;
            /* IL_07: brtrue.s IL_20 */
            
            if (st_01){
                
                __pos__ = 0x20;
                
                continue;
            }
            /* IL_09: pop  */
            
            asm1.x600000a();
            /* IL_0A: ldsfld <>c <>9 */
            
            st_03 = t0["<>9"];
            /* IL_10: ldftn StringWrapper <Main>b__0_0(IntWrapper) */
            
            st_04 = (function ()
            {
                
                asm1.x600000c_init();
                
                return asm1.x600000c;
            })();
            /* IL_15: newobj Void .ctor(System.Object, System.IntPtr) */
            
            st_05 = CILJS.newobj(t3,asm1.x6000001,[null, st_03, st_04]);
            /* IL_1A: dup  */
            
            st_07 = st_06 = st_05;
            
            asm1.x600000a();
            /* IL_1B: stsfld MFunc`2 <>9__0_0 */
            
            t0["<>9__0_0"] = st_06;
            case 0x20:
            /* IL_20: call Void CallDelegate(MFunc`2[IntWrapper,StringWrapper]) */
            
            asm1.x6000008(st_07);
            /* IL_25: nop  */
            /* IL_26: ret  */
            
            return ;
        }
    }
};/* static System.Void Program.CallDelegate(MFunc`2)*/

asm.x6000008_init = function (arg0)
{
    
    (asm1.IntWrapper().init)();
    
    asm.x6000008 = asm.x6000008_;
};;

asm.x6000008 = function (arg0)
{
    
    asm.x6000008_init(arg0);
    
    return asm.x6000008_(arg0);
};;
asm.x6000008_ = function CallDelegate(arg0)
{
    var t0;
    var t1;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var st_06;
    var st_07;
    var st_08;
    
    t0 = asm1.IntWrapper();
    
    t1 = asm0["System.Object"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    
    st_03 = arg0;
    /* IL_02: newobj Void .ctor() */
    
    st_00 = CILJS.newobj(t0,asm1.x6000005,[null]);
    /* IL_07: dup  */
    
    st_04 = st_01 = st_00;
    /* IL_08: ldc.i4.s 123 */
    
    st_02 = 123;
    /* IL_0A: stfld Int32 Value */
    
    st_01.Value = st_02;
    /* IL_0F: callvirt StringWrapper Invoke(IntWrapper) */
    
    st_05 = ((st_03._target) ? (st_03._methodPtr(st_03._target,st_04)) : (st_03._methodPtr(st_04)));
    /* IL_14: ldfld String Value */
    
    st_07 = st_05.Value;
    /* IL_19: ldc.i4.0  */
    
    st_06 = 0;
    /* IL_1A: newarr System.Object */
    
    st_08 = CILJS.newArray(t1,st_06);
    /* IL_1F: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(st_07,st_08);
    /* IL_24: nop  */
    /* IL_25: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000009 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* StringWrapper <>c.<Main>b__0_0(IntWrapper)*/

asm.x600000c_init = function (arg0, arg1)
{
    
    (asm1.StringWrapper().init)();
    
    asm.x600000c = asm.x600000c_;
};;

asm.x600000c = function (arg0, arg1)
{
    
    asm.x600000c_init(arg0,arg1);
    
    return asm.x600000c_(arg0,arg1);
};;
asm.x600000c_ = function _Main_b__0_0(arg0, arg1)
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    
    t0 = asm1.StringWrapper();
    
    
    
    
    
    
    
    
    /* IL_00: newobj Void .ctor() */
    
    st_00 = CILJS.newobj(t0,asm1.x6000006,[null]);
    /* IL_05: dup  */
    
    st_03 = st_01 = st_00;
    /* IL_06: ldstr Result */
    
    st_02 = CILJS.newString("Result");
    /* IL_0B: stfld String Value */
    
    st_01.Value = st_02;
    /* IL_10: ret  */
    
    return st_03;
};/* static  <>c..cctor()*/

asm.x600000a_init = function ()
{
    
    (asm1["Program+<>c"]().init)();
    
    asm.x600000a = asm.x600000a_;
};;

asm.x600000a = function ()
{
    
    asm.x600000a_init();
    
    return asm.x600000a_();
};;
asm.x600000a_ = function _cctor()
{
    var t0;
    
    if (asm1["Program+<>c"]().FieldsInitialized){
        
        return;
    }
    
    asm1["Program+<>c"]().FieldsInitialized = true;
    
    t0 = asm1["Program+<>c"]();
    
    asm1.x600000a();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: stsfld <>c <>9 */
    
    t0["<>9"] = CILJS.newobj(t0,asm1.x600000b,[null]);
    /* IL_0A: ret  */
    
    return ;
};/*  <>c..ctor()*/

asm.x600000b = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm["MFunc`2"] = CILJS.declareType(
    ["T", "TResult"],
    function (T, TResult)
    {
        
        return {};
    },
    function (type, T, TResult)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"MFunc`2",false,false,false,true,false,[],[
                [asm1, "x6000002", "Invoke"],
                [asm1, "x6000003", "BeginInvoke"],
                [asm1, "x6000004", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [T, TResult];
        
        type.TypeMetadataName = ("asm1.t2000002<" + ((T.TypeMetadataName + TResult.TypeMetadataName) + ">"));
        
        CILJS.declareVirtual(type,"asm1.x6000002",asm1,"x6000002");
        
        CILJS.declareVirtual(type,"asm1.x6000003",asm1,"x6000003");
        
        CILJS.declareVirtual(type,"asm1.x6000004",asm1,"x6000004");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function (T, TResult)
    {
        
        return function MFunc_2()
        {
            
            MFunc_2.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm.IntWrapper = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"IntWrapper",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function IntWrapper()
        {
            
            IntWrapper.init();
            
            this.Value = 0;
        };
    });
asm.StringWrapper = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"StringWrapper",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function StringWrapper()
        {
            
            StringWrapper.init();
            
            this.Value = null;
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
asm["Program+<>c"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program+<>c",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000006",null);
        
        type["<>9"] = null;
        
        type["<>9__0_0"] = null;
        
        type.TypeMetadataName = "asm1.t2000006";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function __c()
        {
            
            __c.init();
        };
    });
asm.entryPoint = asm.x6000007;
CILJS.declareAssembly("GenericDelegate.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=GenericDelegate.cs.ciljs.exe.js.map
