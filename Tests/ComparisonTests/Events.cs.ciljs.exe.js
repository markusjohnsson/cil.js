
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "Events.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.add_MyEvent(EventHandler)*/

asm.x6000001_init = function (arg0)
{
    
    (asm1.Program().init)();
    
    (asm0["System.EventHandler"]().init)();
    
    asm.x6000001 = asm.x6000001_;
};;

asm.x6000001 = function (arg0)
{
    
    asm.x6000001_init(arg0);
    
    return asm.x6000001_(arg0);
};;
asm.x6000001_ = function add_MyEvent(arg0)
{
    var t0;
    var t1;
    
    t0 = asm1.Program();
    
    t1 = asm0["System.EventHandler"]();
    /* IL_00: ldsfld EventHandler MyEvent */
    /* IL_05: ldarg.0  */
    /* IL_06: call Delegate Combine(System.Delegate, System.Delegate) */
    /* IL_0B: castclass System.EventHandler */
    /* IL_10: stsfld EventHandler MyEvent */
    
    t0.MyEvent = CILJS.castClass(asm0.x6000039(t0.MyEvent,arg0),t1);
    /* IL_15: ret  */
    
    return ;
};/* static System.Void Program.remove_MyEvent(EventHandler)*/

asm.x6000002_init = function (arg0)
{
    
    (asm1.Program().init)();
    
    (asm0["System.EventHandler"]().init)();
    
    asm.x6000002 = asm.x6000002_;
};;

asm.x6000002 = function (arg0)
{
    
    asm.x6000002_init(arg0);
    
    return asm.x6000002_(arg0);
};;
asm.x6000002_ = function remove_MyEvent(arg0)
{
    var t0;
    var t1;
    
    t0 = asm1.Program();
    
    t1 = asm0["System.EventHandler"]();
    /* IL_00: ldsfld EventHandler MyEvent */
    /* IL_05: ldarg.0  */
    /* IL_06: call Delegate Remove(System.Delegate, System.Delegate) */
    /* IL_0B: castclass System.EventHandler */
    /* IL_10: stsfld EventHandler MyEvent */
    
    t0.MyEvent = CILJS.castClass(asm0.x600003a(t0.MyEvent,arg0),t1);
    /* IL_15: ret  */
    
    return ;
};/* static System.Void Program.Main()*/

asm.x6000003_init = function ()
{
    
    (asm1["Program+<>c"]().init)();
    
    (asm0["System.EventHandler"]().init)();
    
    (asm1.Program().init)();
    
    (asm0["System.EventArgs"]().init)();
    
    asm.x6000003 = asm.x6000003_;
};;

asm.x6000003 = function ()
{
    
    asm.x6000003_init();
    
    return asm.x6000003_();
};;
asm.x6000003_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
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
    
    t1 = asm0["System.EventHandler"]();
    
    t2 = asm1.Program();
    
    t3 = asm0["System.Object"]();
    
    t4 = asm0["System.EventArgs"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            
            asm1.x6000006();
            /* IL_01: ldsfld EventHandler <>9__3_0 */
            
            st_00 = t0["<>9__3_0"];
            /* IL_06: dup  */
            
            st_07 = st_02 = st_01 = st_00;
            /* IL_07: brtrue.s IL_20 */
            
            if (st_01){
                
                __pos__ = 0x20;
                
                continue;
            }
            /* IL_09: pop  */
            
            asm1.x6000006();
            /* IL_0A: ldsfld <>c <>9 */
            
            st_03 = t0["<>9"];
            /* IL_10: ldftn Void <Main>b__3_0(System.Object, System.EventArgs) */
            
            st_04 = asm1.x6000008;
            /* IL_15: newobj Void .ctor(System.Object, System.IntPtr) */
            
            st_05 = CILJS.newobj(t1,asm0.x6000092,[null, st_03, st_04]);
            /* IL_1A: dup  */
            
            st_07 = st_06 = st_05;
            
            asm1.x6000006();
            /* IL_1B: stsfld EventHandler <>9__3_0 */
            
            t0["<>9__3_0"] = st_06;
            case 0x20:
            /* IL_20: call Void add_MyEvent(System.EventHandler) */
            
            asm1.x6000001(st_07);
            /* IL_25: nop  */
            /* IL_26: ldnull  */
            /* IL_28: ldftn Void Handler(System.Object, System.EventArgs) */
            /* IL_2D: newobj Void .ctor(System.Object, System.IntPtr) */
            /* IL_32: call Void add_MyEvent(System.EventHandler) */
            
            asm1.x6000001(CILJS.newobj(t1,asm0.x6000092,[null, null, asm1.x6000004]));
            /* IL_37: nop  */
            
            asm0.x6000032();
            /* IL_38: ldsfld EventHandler MyEvent */
            /* IL_3D: newobj Void .ctor() */
            /* IL_42: newobj Void .ctor() */
            /* IL_47: callvirt Void Invoke(System.Object, System.EventArgs) */
            
            ((t2.MyEvent._target) ? (t2.MyEvent._methodPtr(t2.MyEvent._target,CILJS.newobj(t3,asm0.x6000096,[null]),CILJS.newobj(t4,asm0.x6000031,[null]))) : (t2.MyEvent._methodPtr(CILJS.newobj(t3,asm0.x6000096,[null]),CILJS.newobj(t4,asm0.x6000031,[null]))));
            /* IL_4C: nop  */
            /* IL_4D: ldnull  */
            /* IL_4F: ldftn Void Handler(System.Object, System.EventArgs) */
            /* IL_54: newobj Void .ctor(System.Object, System.IntPtr) */
            /* IL_59: call Void remove_MyEvent(System.EventHandler) */
            
            asm1.x6000002(CILJS.newobj(t1,asm0.x6000092,[null, null, asm1.x6000004]));
            /* IL_5E: nop  */
            
            asm0.x6000032();
            /* IL_5F: ldsfld EventHandler MyEvent */
            /* IL_64: newobj Void .ctor() */
            /* IL_69: newobj Void .ctor() */
            /* IL_6E: callvirt Void Invoke(System.Object, System.EventArgs) */
            
            ((t2.MyEvent._target) ? (t2.MyEvent._methodPtr(t2.MyEvent._target,CILJS.newobj(t3,asm0.x6000096,[null]),CILJS.newobj(t4,asm0.x6000031,[null]))) : (t2.MyEvent._methodPtr(CILJS.newobj(t3,asm0.x6000096,[null]),CILJS.newobj(t4,asm0.x6000031,[null]))));
            /* IL_73: nop  */
            /* IL_74: ret  */
            
            return ;
        }
    }
};/* static System.Void Program.Handler(Object,EventArgs)*/

asm.x6000004 = function Handler(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr Second */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("Second"),CILJS.newArray(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/*  Program..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void <>c.<Main>b__3_0(Object,EventArgs)*/

asm.x6000008 = function _Main_b__3_0(arg0, arg1, arg2)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: ldstr First */
    /* IL_05: ldc.i4.0  */
    /* IL_06: newarr System.Object */
    /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("First"),CILJS.newArray(t0,0));
    /* IL_10: nop  */
    /* IL_11: ret  */
    
    return ;
};;/* static  <>c..cctor()*/

asm.x6000006_init = function ()
{
    
    (asm1["Program+<>c"]().init)();
    
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
    
    if (asm1["Program+<>c"]().FieldsInitialized){
        
        return;
    }
    
    asm1["Program+<>c"]().FieldsInitialized = true;
    
    t0 = asm1["Program+<>c"]();
    
    asm1.x6000006();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: stsfld <>c <>9 */
    
    t0["<>9"] = CILJS.newobj(t0,asm1.x6000007,[null]);
    /* IL_0A: ret  */
    
    return ;
};/*  <>c..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.MyEvent = null;
        
        type.TypeMetadataName = "asm1.t2000002";
        
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
        
        CILJS.initType(type,asm,"Program+<>c",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type["<>9"] = null;
        
        type["<>9__3_0"] = null;
        
        type.TypeMetadataName = "asm1.t2000003";
        
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
asm.entryPoint = asm.x6000003;
CILJS.declareAssembly("Events.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Events.cs.ciljs.exe.js.map
