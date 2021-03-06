
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "Nullable.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001_init = function ()
{
    
    (asm1.A().init)();
    
    (asm0["System.Nullable`1"](asm1.A()).init)();
    
    asm.x6000001 = asm.x6000001_;
};;

asm.x6000001 = function ()
{
    
    asm.x6000001_init();
    
    return asm.x6000001_();
};;
asm.x6000001_ = function Main()
{
    var t0;
    var t1;
    var loc0;
    var loc1;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm0["System.Nullable`1"](t0);
    
    loc0 = new (asm0["System.Nullable`1"](asm1.A()))();
    
    loc1 = new (asm1.A())();
    /* IL_00: nop  */
    /* IL_01: ldloca.s 0 */
    /* IL_04: initobj System.Nullable`1[A] */
    
    loc0 = new t1();
    /* IL_09: ldloc.0  */
    /* IL_0A: call Void Print(System.Nullable`1[A]) */
    
    asm1.x6000003(CILJS.cloneValue(loc0));
    /* IL_0F: nop  */
    /* IL_10: ldloca.s 0 */
    /* IL_13: initobj System.Nullable`1[A] */
    
    loc0 = new t1();
    /* IL_18: ldloc.0  */
    /* IL_19: call Void Print(System.Nullable`1[A]) */
    
    asm1.x6000003(CILJS.cloneValue(loc0));
    /* IL_1E: nop  */
    /* IL_1F: ldloca.s 1 */
    /* IL_22: initobj A */
    
    loc1 = new t0();
    /* IL_27: ldloca.s 1 */
    /* IL_29: ldc.i4.s 33 */
    /* IL_2B: stfld Int32 X */
    
    loc1.X = 33;
    /* IL_30: ldloc.1  */
    /* IL_31: newobj Void .ctor(A) */
    /* IL_36: call Void Print(System.Nullable`1[A]) */
    
    asm1.x6000003(CILJS.cloneValue(CILJS.newobj(t1,asm0.x6000084,[null, CILJS.cloneValue(loc1)])));
    /* IL_3B: nop  */
    /* IL_3C: ldloca.s 1 */
    /* IL_3F: initobj A */
    
    loc1 = new t0();
    /* IL_44: ldloc.1  */
    /* IL_45: newobj Void .ctor(A) */
    /* IL_4A: call Void Print(System.Nullable`1[A]) */
    
    asm1.x6000003(CILJS.cloneValue(CILJS.newobj(t1,asm0.x6000084,[null, CILJS.cloneValue(loc1)])));
    /* IL_4F: nop  */
    /* IL_50: ldnull  */
    /* IL_51: call Void PrintObject(System.Object) */
    
    asm1.x6000002(null);
    /* IL_56: nop  */
    /* IL_57: ldnull  */
    /* IL_58: call Void PrintObject(System.Object) */
    
    asm1.x6000002(null);
    /* IL_5D: nop  */
    /* IL_5E: ldloca.s 1 */
    /* IL_61: initobj A */
    
    loc1 = new t0();
    /* IL_66: ldloca.s 1 */
    /* IL_68: ldc.i4.s 33 */
    /* IL_6A: stfld Int32 X */
    
    loc1.X = 33;
    /* IL_6F: ldloc.1  */
    /* IL_70: box A */
    /* IL_75: call Void PrintObject(System.Object) */
    
    asm1.x6000002(CILJS.makeBox(CILJS.cloneValue(loc1),t0));
    /* IL_7A: nop  */
    /* IL_7B: ldloca.s 1 */
    /* IL_7E: initobj A */
    
    loc1 = new t0();
    /* IL_83: ldloc.1  */
    /* IL_84: box A */
    /* IL_89: call Void PrintObject(System.Object) */
    
    asm1.x6000002(CILJS.makeBox(CILJS.cloneValue(loc1),t0));
    /* IL_8E: nop  */
    /* IL_8F: ret  */
    
    return ;
};/* static System.Void Program.PrintObject(Object)*/

asm.x6000002 = function PrintObject(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: unbox.any System.Nullable`1[A] */
    /* IL_07: call Void Print(System.Nullable`1[A]) */
    
    asm1.x6000003(CILJS.cloneValue(CILJS.unboxAny(arg0,asm0["System.Nullable`1"](asm1.A()))));
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/* static System.Void Program.Print(Nullable`1)*/

asm.x6000003 = function Print(arg0)
{
    var t0;
    var t1;
    var st_02;
    var st_03;
    var st_04;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.Object"]();
    
    t1 = asm0["System.Int32"]();
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarga.s 0 */
            /* IL_03: call Boolean get_HasValue() */
            /* IL_08: brtrue.s IL_11 */
            
            if (asm0.x6000085({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                })){
                
                __pos__ = 0x11;
                
                continue;
            }
            /* IL_0A: ldstr false */
            
            st_03 = CILJS.newString("false");
            /* IL_0F: br.s IL_16 */
            
            __pos__ = 0x16;
            
            continue;
            case 0x11:
            /* IL_11: ldstr true */
            
            st_03 = CILJS.newString("true");
            case 0x16:
            /* IL_16: ldc.i4.0  */
            
            st_02 = 0;
            /* IL_17: newarr System.Object */
            
            st_04 = CILJS.newArray(t0,st_02);
            /* IL_1C: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x6000073(st_03,st_04);
            /* IL_21: nop  */
            /* IL_22: ldarga.s 0 */
            /* IL_24: call Boolean get_HasValue() */
            /* IL_29: stloc.0  */
            
            loc0 = asm0.x6000085({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                });
            /* IL_2A: ldloc.0  */
            /* IL_2B: brfalse.s IL_44 */
            
            if ((!(loc0))){
                
                __pos__ = 0x44;
                
                continue;
            }
            /* IL_2D: ldarga.s 0 */
            /* IL_2F: call A get_Value() */
            /* IL_34: ldfld Int32 X */
            /* IL_39: box System.Int32 */
            /* IL_3E: call Void WriteLine(System.Object) */
            
            asm0.x6000072(CILJS.makeBox(asm0.x6000086({
                            w: function (v)
                            {
                                
                                arg0 = v;
                            },
                            r: function ()
                            {
                                
                                return arg0;
                            }
                        }).X,t1));
            /* IL_43: nop  */
            case 0x44:
            /* IL_44: ret  */
            
            return ;
        }
    }
};;/*  Program..ctor()*/

asm.x6000004 = function _ctor(arg0)
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
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000002",new (asm1.A())());
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
            
            this.X = 0;
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
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
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
asm.entryPoint = asm.x6000001;
CILJS.declareAssembly("Nullable.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Nullable.cs.ciljs.exe.js.map
