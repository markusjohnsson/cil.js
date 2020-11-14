
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "LeaveBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static T Program.FirstOrDefault<T>(T[],pred`1)*/

asm.x6000001 = function (T)
{
    
    return function FirstOrDefault(arg0, arg1)
    {
        var t0;
        var loc5;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var in_block_1;
        var loc2;
        var loc3;
        var loc4;
        
        t0 = T;
        
        loc5 = T.Default;
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: nop  */
                /* IL_02: ldarg.0  */
                /* IL_03: stloc.0  */
                
                loc0 = arg0;
                /* IL_04: ldc.i4.0  */
                /* IL_05: stloc.1  */
                
                loc1 = 0;
                /* IL_06: br.s IL_26 */
                
                __pos__ = 0x26;
                
                continue;
                case 0x8:
                case 0x21:
                case 0x26:
                
                in_block_1 = true;
                
                if (__pos__ > 0x2A){
                    
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x8){
                    
                    __pos__ = 0x8;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x8:
                        /* IL_08: ldloc.0  */
                        /* IL_09: ldloc.1  */
                        /* IL_0A: ldelem T */
                        /* IL_0F: stloc.2  */
                        
                        loc2 = (loc0.jsarr)[loc1];
                        /* IL_10: nop  */
                        /* IL_11: ldarg.1  */
                        /* IL_12: ldloc.2  */
                        /* IL_13: callvirt Boolean Invoke(T) */
                        /* IL_18: stloc.3  */
                        
                        loc3 = ((arg1._target) ? (arg1._methodPtr(arg1._target,loc2)) : (arg1._methodPtr(loc2)));
                        /* IL_19: ldloc.3  */
                        /* IL_1A: brfalse.s IL_21 */
                        
                        if ((!(loc3))){
                            
                            __pos__ = 0x21;
                            
                            continue;
                        }
                        /* IL_1C: ldloc.2  */
                        /* IL_1D: stloc.s 4 */
                        
                        loc4 = loc2;
                        /* IL_1F: br.s IL_3A */
                        
                        __pos__ = 0x3A;
                        
                        continue;
                        case 0x21:
                        /* IL_21: nop  */
                        /* IL_22: ldloc.1  */
                        /* IL_23: ldc.i4.1  */
                        /* IL_24: add  */
                        /* IL_25: stloc.1  */
                        
                        loc1 = (loc1 + 1) | 0;
                        case 0x26:
                        /* IL_26: ldloc.1  */
                        /* IL_27: ldloc.0  */
                        /* IL_28: ldlen  */
                        /* IL_29: conv.i4  */
                        /* IL_2A: blt.s IL_08 */
                        
                        if (loc1 < (loc0.jsarr.length | 0)){
                            
                            __pos__ = 0x8;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x26) || (__pos__ < 0x8)){
                    
                    continue;
                }
                /* IL_2C: ldloca.s 5 */
                /* IL_2F: initobj T */
                
                loc5 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? 0 : (new t0()))) : (null));
                /* IL_34: ldloc.s 5 */
                /* IL_36: stloc.s 4 */
                
                loc4 = loc5;
                case 0x3A:
                /* IL_3A: ldloc.s 4 */
                /* IL_3C: ret  */
                
                return loc4;
            }
        }
    };
};;/* static System.Void Program.Main()*/

asm.x6000002_init = function ()
{
    
    (asm1["Program+<>c"]().init)();
    
    (asm1["Program+pred`1"](asm0["System.String"]()).init)();
    
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
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var st_06;
    var st_07;
    var st_08;
    var st_09;
    var st_0A;
    var st_0B;
    var st_0C;
    var st_0D;
    var st_0E;
    var st_0F;
    var st_10;
    var st_11;
    var in_block_0;
    var __pos__;
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.String"]();
    
    t1 = asm1["Program+<>c"]();
    
    t2 = asm1["Program+pred`1"](t0);
    
    t3 = asm0["System.Object"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.1  */
            
            st_00 = 1;
            /* IL_02: newarr System.String */
            
            st_01 = CILJS.new_array(t0,st_00);
            /* IL_07: dup  */
            
            st_05 = st_02 = st_01;
            /* IL_08: ldc.i4.0  */
            
            st_03 = 0;
            /* IL_09: ldstr asd */
            
            st_04 = CILJS.new_string("asd");
            /* IL_0E: stelem.ref  */
            
            CILJS.stelem_ref(st_02,st_03,st_04);
            /* IL_0F: stloc.0  */
            
            loc0 = st_05;
            /* IL_10: ldloc.0  */
            
            st_0D = loc0;
            
            asm1.x6000008();
            /* IL_11: ldsfld pred`1 <>9__2_0 */
            
            st_06 = t1["<>9__2_0"];
            /* IL_16: dup  */
            
            st_0E = st_08 = st_07 = st_06;
            /* IL_17: brtrue.s IL_30 */
            
            if (st_07){
                
                __pos__ = 0x30;
                
                continue;
            }
            /* IL_19: pop  */
            
            asm1.x6000008();
            /* IL_1A: ldsfld <>c <>9 */
            
            st_09 = t1["<>9"];
            /* IL_20: ldftn Boolean <Main>b__2_0(System.String) */
            
            st_0A = asm1.x600000a;
            /* IL_25: newobj Void .ctor(System.Object, System.IntPtr) */
            
            st_0B = CILJS.newobj(t2,asm1.x6000004,[null, st_09, st_0A]);
            /* IL_2A: dup  */
            
            st_0E = st_0C = st_0B;
            
            asm1.x6000008();
            /* IL_2B: stsfld pred`1 <>9__2_0 */
            
            t1["<>9__2_0"] = st_0C;
            case 0x30:
            /* IL_30: call String FirstOrDefault[System.String](System.String[], Program+pred`1[System.String]) */
            
            st_10 = (asm1.x6000001(asm0["System.String"]()))(st_0D,st_0E);
            /* IL_35: ldc.i4.0  */
            
            st_0F = 0;
            /* IL_36: newarr System.Object */
            
            st_11 = CILJS.new_array(t3,st_0F);
            /* IL_3B: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x60000a2(st_10,st_11);
            /* IL_40: nop  */
            /* IL_41: ret  */
            
            return ;
        }
    }
};/*  Program..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean pred`1.Invoke(T)*/

asm.x6000005 = CILJS.delegate_invoke;;/* System.IAsyncResult pred`1.BeginInvoke(T,AsyncCallback,Object)*/

asm.x6000006 = CILJS.delegate_begin_invoke;;/* System.Boolean pred`1.EndInvoke(IAsyncResult)*/

asm.x6000007 = CILJS.delegate_end_invoke;;/*  pred`1..ctor(Object,IntPtr)*/

asm.x6000004 = CILJS.delegate_ctor;;/* System.Boolean <>c.<Main>b__2_0(String)*/

asm.x600000a = function _Main_b__2_0(arg0, arg1)
{
    /* IL_00: ldc.i4.1  */
    /* IL_01: ret  */
    
    return 1;
};;/* static  <>c..cctor()*/

asm.x6000008_init = function ()
{
    
    (asm1["Program+<>c"]().init)();
    
    asm.x6000008 = asm.x6000008_;
};;

asm.x6000008 = function ()
{
    
    asm.x6000008_init();
    
    return asm.x6000008_();
};;
asm.x6000008_ = function _cctor()
{
    var t0;
    
    if (asm1["Program+<>c"]().FieldsInitialized){
        
        return;
    }
    
    asm1["Program+<>c"]().FieldsInitialized = true;
    
    t0 = asm1["Program+<>c"]();
    
    asm1.x6000008();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: stsfld <>c <>9 */
    
    t0["<>9"] = CILJS.newobj(t0,asm1.x6000009,[null]);
    /* IL_0A: ret  */
    
    return ;
};/*  <>c..ctor()*/

asm.x6000009 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
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
        
        CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
        
        this.GenericTypeMetadataName = "asm1.t2000002";
        
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
asm["Program+pred`1"] = CILJS.declare_type(
    "pred_1",
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (T)
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"Program+pred`1",false,false,false,true,false,[],[
                [asm1, "x6000005", "Invoke"],
                [asm1, "x6000006", "BeginInvoke"],
                [asm1, "x6000007", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
        
        (this.GenericArguments)["asm1.t2000003"] = [T];
        
        this.GenericTypeMetadataName = ("asm1.t2000003<" + (T.GenericTypeMetadataName + ">"));
        
        CILJS.declare_virtual(this,"asm1.x6000005",asm1,"x6000005");
        
        CILJS.declare_virtual(this,"asm1.x6000006",asm1,"x6000006");
        
        CILJS.declare_virtual(this,"asm1.x6000007",asm1,"x6000007");
        
        CILJS.declare_virtual(this,"asm0.x600006b",asm0,"x60000e0");
        
        CILJS.declare_virtual(this,"asm0.x600006a",asm0,"x60000e1");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x600006c");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x600006f");
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
    },
    function (T)
    {
        
        return function pred_1()
        {
            
            pred_1.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["Program+<>c"] = CILJS.declare_type(
    "__c",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"Program+<>c",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
        
        this["<>9"] = null;
        
        this["<>9__2_0"] = null;
        
        this.GenericTypeMetadataName = "asm1.t2000004";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function __c()
        {
            
            __c.init();
        };
    });
asm.entryPoint = asm.x6000002;
CILJS.declare_assembly("LeaveBug.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=LeaveBug.cs.ciljs.exe.js.map
