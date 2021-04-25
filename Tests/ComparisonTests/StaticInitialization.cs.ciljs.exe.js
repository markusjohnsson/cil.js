
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "StaticInitialization.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.String A.ToString()*/

asm.x6000001 = function ToString(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldstr A */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newString("A");
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};;/*  A..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.String B.ToString()*/

asm.x6000003 = function ToString(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldstr B */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newString("B");
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};;/*  B..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  X..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static  X..cctor()*/

asm.x6000006_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1.X().init)();
    
    asm.x6000006 = asm.x6000006_;
};;

asm.x6000006 = function ()
{
    
    asm.x6000006_init();
    
    return asm.x6000006_();
};;
asm.x6000006_ = function _cctor()
{
    var t0;
    var t1;
    
    if (asm1.X().FieldsInitialized){
        
        return;
    }
    
    asm1.X().FieldsInitialized = true;
    
    t0 = asm1.A();
    
    t1 = asm1.X();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: stsfld A Prop */
    
    t1.Prop = CILJS.newobj(t0,asm1.x6000002,[null]);
    /* IL_0A: ret  */
    
    return ;
};/*  Y`1..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static  Y`1..cctor()*/

asm.x6000008_init = function (T)
{
    
    return function ()
    {
        
        (asm0["CilJs.Runtime.UnboundGenericParameter"]().init)();
        
        (asm1["Y`1"](T).init)();
    };
};;

asm.x6000008 = function (T)
{
    
    return function ()
    {
        
        (asm.x6000008_init(T))();
        
        return (asm.x6000008_(T))();
    };
};;
asm.x6000008_ = function (T)
{
    
    return function _cctor()
    {
        var t0;
        var t1;
        var t2;
        
        if (asm1["Y`1"](T).FieldsInitialized){
            
            return;
        }
        
        asm1["Y`1"](T).FieldsInitialized = true;
        
        t0 = T;
        
        t1 = asm0["CilJs.Runtime.UnboundGenericParameter"]();
        
        t2 = asm1["Y`1"](t0);
        /* IL_00: call T CreateInstance[T]() */
        /* IL_05: box T */
        /* IL_0A: stsfld Object Prop */
        
        t2.Prop = CILJS.box((asm0.x600006e(T))(),t0);
        /* IL_0F: ret  */
        
        return ;
    };
};/* T2 Func`2.Invoke(T1)*/

asm.x600000a = CILJS.delegateInvoke;;/* System.IAsyncResult Func`2.BeginInvoke(T1,AsyncCallback,Object)*/

asm.x600000b = CILJS.delegateBeginInvoke;;/* T2 Func`2.EndInvoke(IAsyncResult)*/

asm.x600000c = CILJS.delegateEndInvoke;;/*  Func`2..ctor(Object,IntPtr)*/

asm.x6000009 = CILJS.delegateCtor;;/*  P`1..ctor()*/

asm.x600000d = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static  P`1..cctor()*/

asm.x600000e_init = function (T)
{
    
    return function ()
    {
        
        (asm1["P`1+<>c"](T).init)();
        
        (asm1["Func`2"](T,asm0["System.Boolean"]()).init)();
        
        (asm0["CilJs.Runtime.UnboundGenericParameter"]().init)();
        
        (asm1["P`1"](T).init)();
    };
};;

asm.x600000e = function (T)
{
    
    return function ()
    {
        
        (asm.x600000e_init(T))();
        
        return (asm.x600000e_(T))();
    };
};;
asm.x600000e_ = function (T)
{
    
    return function _cctor()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        
        if (asm1["P`1"](T).FieldsInitialized){
            
            return;
        }
        
        asm1["P`1"](T).FieldsInitialized = true;
        
        t0 = T;
        
        t1 = asm1["P`1+<>c"](t0);
        
        t2 = asm0["System.Boolean"]();
        
        t3 = asm1["Func`2"](t0,t2);
        
        t4 = asm0["CilJs.Runtime.UnboundGenericParameter"]();
        
        t5 = asm1["P`1"](t0);
        
        (asm1.x6000018(T))();
        /* IL_00: ldsfld Managed.Reflection.GenericFieldInstance */
        /* IL_06: ldftn Boolean <.cctor>b__2_0(T) */
        /* IL_0B: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_10: stsfld Func`2 Always */
        
        t5.Always = CILJS.newobj(t3,asm1.x6000009,[null, t1["<>9"], asm1.x600001a]);
        /* IL_15: ret  */
        
        return ;
    };
};/* System.Boolean Func.Invoke(Object)*/

asm.x6000010 = CILJS.delegateInvoke;;/* System.IAsyncResult Func.BeginInvoke(Object,AsyncCallback,Object)*/

asm.x6000011 = CILJS.delegateBeginInvoke;;/* System.Boolean Func.EndInvoke(IAsyncResult)*/

asm.x6000012 = CILJS.delegateEndInvoke;;/*  Func..ctor(Object,IntPtr)*/

asm.x600000f = CILJS.delegateCtor;;/*  Q..ctor()*/

asm.x6000013 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static  Q..cctor()*/

asm.x6000014_init = function ()
{
    
    (asm1["Q+<>c"]().init)();
    
    (asm1.Func().init)();
    
    (asm1.Q().init)();
    
    asm.x6000014 = asm.x6000014_;
};;

asm.x6000014 = function ()
{
    
    asm.x6000014_init();
    
    return asm.x6000014_();
};;
asm.x6000014_ = function _cctor()
{
    var t0;
    var t1;
    var t2;
    
    if (asm1.Q().FieldsInitialized){
        
        return;
    }
    
    asm1.Q().FieldsInitialized = true;
    
    t0 = asm1["Q+<>c"]();
    
    t1 = asm1.Func();
    
    t2 = asm1.Q();
    
    asm1.x600001b();
    /* IL_00: ldsfld <>c <>9 */
    /* IL_06: ldftn Boolean <.cctor>b__2_0(System.Object) */
    /* IL_0B: newobj Void .ctor(System.Object, System.IntPtr) */
    /* IL_10: stsfld Func Always */
    
    t2.Always = CILJS.newobj(t1,asm1.x600000f,[null, t0["<>9"], asm1.x600001d]);
    /* IL_15: ret  */
    
    return ;
};/* static System.Void Program.Main()*/

asm.x6000015_init = function ()
{
    
    (asm1.X().init)();
    
    (asm1["Y`1"](asm0["System.Object"]()).init)();
    
    (asm1.A().init)();
    
    (asm1["Y`1"](asm1.A()).init)();
    
    (asm1.B().init)();
    
    (asm1["Y`1"](asm1.B()).init)();
    
    (asm1.Q().init)();
    
    asm.x6000015 = asm.x6000015_;
};;

asm.x6000015 = function ()
{
    
    asm.x6000015_init();
    
    return asm.x6000015_();
};;
asm.x6000015_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
    var t5;
    var t6;
    var t7;
    var t8;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.X();
    
    t1 = asm0["System.Object"]();
    
    t2 = asm1["Y`1"](t1);
    
    t3 = asm1.A();
    
    t4 = asm1["Y`1"](t3);
    
    t5 = asm1.B();
    
    t6 = asm1["Y`1"](t5);
    
    t7 = asm1.Q();
    
    t8 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    
    asm1.x6000006();
    /* IL_01: ldsfld A Prop */
    /* IL_06: call Void Is(System.Object) */
    
    asm1.x6000016(t0.Prop);
    /* IL_0B: nop  */
    
    (asm1.x6000008(asm0["System.Object"]()))();
    /* IL_0C: ldsfld Managed.Reflection.GenericFieldInstance */
    /* IL_11: call Void Is(System.Object) */
    
    asm1.x6000016(t2.Prop);
    /* IL_16: nop  */
    
    (asm1.x6000008(asm1.A()))();
    /* IL_17: ldsfld Managed.Reflection.GenericFieldInstance */
    /* IL_1C: call Void Is(System.Object) */
    
    asm1.x6000016(t4.Prop);
    /* IL_21: nop  */
    
    (asm1.x6000008(asm1.B()))();
    /* IL_22: ldsfld Managed.Reflection.GenericFieldInstance */
    /* IL_27: call Void Is(System.Object) */
    
    asm1.x6000016(t6.Prop);
    /* IL_2C: nop  */
    
    asm1.x6000014();
    /* IL_2D: ldsfld Func Always */
    /* IL_32: ldnull  */
    /* IL_33: callvirt Boolean Invoke(System.Object) */
    /* IL_38: box System.Boolean */
    /* IL_3D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((t7.Always._target) ? (t7.Always._methodPtr(t7.Always._target,null)) : (t7.Always._methodPtr(null))),t8));
    /* IL_42: nop  */
    
    asm1.x6000014();
    /* IL_43: ldsfld Func Always */
    /* IL_48: ldnull  */
    /* IL_49: callvirt Boolean Invoke(System.Object) */
    /* IL_4E: box System.Boolean */
    /* IL_53: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((t7.Always._target) ? (t7.Always._methodPtr(t7.Always._target,null)) : (t7.Always._methodPtr(null))),t8));
    /* IL_58: nop  */
    /* IL_59: ret  */
    
    return ;
};/* static System.Void Program.Is(Object)*/

asm.x6000016_init = function (arg0)
{
    
    (asm1.A().init)();
    
    (asm1.B().init)();
    
    asm.x6000016 = asm.x6000016_;
};;

asm.x6000016 = function (arg0)
{
    
    asm.x6000016_init(arg0);
    
    return asm.x6000016_(arg0);
};;
asm.x6000016_ = function Is(arg0)
{
    var t0;
    var t1;
    var t2;
    var t3;
    
    t0 = asm0["System.Object"]();
    
    t1 = asm1.A();
    
    t2 = asm0["System.Boolean"]();
    
    t3 = asm1.B();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: callvirt String ToString() */
    /* IL_07: ldc.i4.0  */
    /* IL_08: newarr System.Object */
    /* IL_0D: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073((arg0.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(arg0)),CILJS.newArray(t0,0));
    /* IL_12: nop  */
    /* IL_13: ldarg.0  */
    /* IL_14: isinst A */
    /* IL_19: ldnull  */
    /* IL_1B: cgt.un  */
    /* IL_1C: box System.Boolean */
    /* IL_21: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((t1.IsInst(arg0) !== null) ? 1 : 0),t2));
    /* IL_26: nop  */
    /* IL_27: ldarg.0  */
    /* IL_28: isinst B */
    /* IL_2D: ldnull  */
    /* IL_2F: cgt.un  */
    /* IL_30: box System.Boolean */
    /* IL_35: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((t3.IsInst(arg0) !== null) ? 1 : 0),t2));
    /* IL_3A: nop  */
    /* IL_3B: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000017 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean <>c.<.cctor>b__2_0(T)*/

asm.x600001a = function __cctor_b__2_0(arg0, arg1)
{
    /* IL_00: ldc.i4.1  */
    /* IL_01: ret  */
    
    return 1;
};;/* static  <>c..cctor()*/

asm.x6000018_init = function (T)
{
    
    return function ()
    {
        
        (asm0["CilJs.Runtime.UnboundGenericParameter"]().init)();
        
        (asm1["P`1+<>c"](T).init)();
    };
};;

asm.x6000018 = function (T)
{
    
    return function ()
    {
        
        (asm.x6000018_init(T))();
        
        return (asm.x6000018_(T))();
    };
};;
asm.x6000018_ = function (T)
{
    
    return function _cctor()
    {
        var t0;
        var t1;
        var t2;
        
        if (asm1["P`1+<>c"](T).FieldsInitialized){
            
            return;
        }
        
        asm1["P`1+<>c"](T).FieldsInitialized = true;
        
        t0 = asm0["CilJs.Runtime.UnboundGenericParameter"]();
        
        t1 = T;
        
        t2 = asm1["P`1+<>c"](t1);
        
        (asm1.x6000018(T))();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stsfld <>c <>9 */
        
        t2["<>9"] = CILJS.newobj(t2,asm1.x6000019,[null]);
        /* IL_0A: ret  */
        
        return ;
    };
};/*  <>c..ctor()*/

asm.x6000019 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean <>c.<.cctor>b__2_0(Object)*/

asm.x600001d = function __cctor_b__2_0(arg0, arg1)
{
    /* IL_00: ldc.i4.1  */
    /* IL_01: ret  */
    
    return 1;
};;/* static  <>c..cctor()*/

asm.x600001b_init = function ()
{
    
    (asm1["Q+<>c"]().init)();
    
    asm.x600001b = asm.x600001b_;
};;

asm.x600001b = function ()
{
    
    asm.x600001b_init();
    
    return asm.x600001b_();
};;
asm.x600001b_ = function _cctor()
{
    var t0;
    
    if (asm1["Q+<>c"]().FieldsInitialized){
        
        return;
    }
    
    asm1["Q+<>c"]().FieldsInitialized = true;
    
    t0 = asm1["Q+<>c"]();
    
    asm1.x600001b();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: stsfld <>c <>9 */
    
    t0["<>9"] = CILJS.newobj(t0,asm1.x600001c,[null]);
    /* IL_0A: ret  */
    
    return ;
};/*  <>c..ctor()*/

asm.x600001c = function _ctor(arg0)
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
                [asm1, "x6000001", "ToString"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm1,"x6000001");
        
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
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"B",false,false,false,false,false,[],[
                [asm1, "x6000003", "ToString"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm1,"x6000003");
        
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
asm.X = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"X",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.Prop = null;
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function X()
        {
            
            X.init();
        };
    });
asm["Y`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Y`1",false,false,false,true,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000005",null);
        
        type.Prop = null;
        
        (type.GenericArguments)["asm1.t2000005"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000005<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function (T)
    {
        
        return function Y_1()
        {
            
            Y_1.init();
        };
    });
asm["Func`2"] = CILJS.declareType(
    ["T1", "T2"],
    function (T1, T2)
    {
        
        return {};
    },
    function (type, T1, T2)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Func`2",false,false,false,true,false,[],[
                [asm1, "x600000a", "Invoke"],
                [asm1, "x600000b", "BeginInvoke"],
                [asm1, "x600000c", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm1.t2000006",null);
        
        (type.GenericArguments)["asm1.t2000006"] = [T1, T2];
        
        type.TypeMetadataName = ("asm1.t2000006<" + ((T1.TypeMetadataName + T2.TypeMetadataName) + ">"));
        
        CILJS.declareVirtual(type,"asm1.x600000a",asm1,"x600000a");
        
        CILJS.declareVirtual(type,"asm1.x600000b",asm1,"x600000b");
        
        CILJS.declareVirtual(type,"asm1.x600000c",asm1,"x600000c");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function (T1, T2)
    {
        
        return function Func_2()
        {
            
            Func_2.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["P`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"P`1",false,false,false,true,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000007",null);
        
        type.Always = null;
        
        (type.GenericArguments)["asm1.t2000007"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000007<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function (T)
    {
        
        return function P_1()
        {
            
            P_1.init();
        };
    });
asm.Func = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Func",false,false,false,false,false,[],[
                [asm1, "x6000010", "Invoke"],
                [asm1, "x6000011", "BeginInvoke"],
                [asm1, "x6000012", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm1.t2000008",null);
        
        type.TypeMetadataName = "asm1.t2000008";
        
        CILJS.declareVirtual(type,"asm1.x6000010",asm1,"x6000010");
        
        CILJS.declareVirtual(type,"asm1.x6000011",asm1,"x6000011");
        
        CILJS.declareVirtual(type,"asm1.x6000012",asm1,"x6000012");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function ()
    {
        
        return function Func()
        {
            
            Func.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm.Q = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Q",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000009",null);
        
        type.Always = null;
        
        type.TypeMetadataName = "asm1.t2000009";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Q()
        {
            
            Q.init();
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
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t200000a",null);
        
        type.TypeMetadataName = "asm1.t200000a";
        
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
asm["P`1+<>c"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"P`1+<>c",false,false,false,true,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t200000b",null);
        
        type["<>9"] = null;
        
        (type.GenericArguments)["asm1.t200000b"] = [T];
        
        type.TypeMetadataName = ("asm1.t200000b<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function (T)
    {
        
        return function __c()
        {
            
            __c.init();
        };
    });
asm["Q+<>c"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Q+<>c",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t200000c",null);
        
        type["<>9"] = null;
        
        type.TypeMetadataName = "asm1.t200000c";
        
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
asm.entryPoint = asm.x6000015;
CILJS.declareAssembly("StaticInitialization.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=StaticInitialization.cs.ciljs.exe.js.map
