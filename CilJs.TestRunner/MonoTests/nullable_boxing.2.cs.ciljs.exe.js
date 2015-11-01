var asm1;(function (asm)
{
    asm.FullName = "nullable_boxing.2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Int32 Program.Main()*/
    asm.x6000001_init = function ()
    {
        ((asm1)["Program+Button"]().init)();
        ((asm0)["System.Nullable`1"]((asm0)["System.Int32"]()).init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var st_0F;
        var in_block_0;
        var __pos__;
        var loc1;
        var loc2;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm1)["Program+Button"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.Nullable`1"](t1);
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                asm1.x6000005();
                /* IL_01: ldsfld Button TheButton */
                /* IL_06: ldc.i4.1  */
                /* IL_07: newobj Void .ctor(System.Int32) */
                /* IL_0C: callvirt Int32 Counter(System.Nullable`1[System.Int32]) */
                /* IL_11: ldc.i4.2  */
                /* IL_13: ceq  */
                /* IL_14: ldc.i4.0  */
                /* IL_16: ceq  */
                /* IL_17: stloc.1  */
                loc1 = ((((asm1.x6000003(t0.TheButton,CILJS.clone_value(CILJS.newobj(t2,asm0.x60000db,[null, (1|0)]))) === (2|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_18: ldloc.1  */
                /* IL_19: brfalse.s IL_1F */
                
                if ((!(loc1))){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_1B: ldc.i4.1  */
                /* IL_1C: stloc.2  */
                loc2 = (1|0);
                /* IL_1D: br.s IL_36 */
                __pos__ = 0x36;
                continue;
                case 0x1F:
                /* IL_1F: ldc.i4.1  */
                /* IL_20: newarr System.Nullable`1[System.Int32] */
                /* IL_25: stloc.0  */
                loc0 = CILJS.new_array(t2,(1|0));
                /* IL_26: ldloc.0  */
                /* IL_27: ldc.i4.0  */
                /* IL_28: callvirt Object GetValue(System.Int32) */
                /* IL_2D: brfalse.s IL_32 */
                
                if ((!(asm0.x600000e(loc0,(0|0))))){
                    __pos__ = 0x32;
                    continue;
                }
                /* IL_2F: ldc.i4.2  */
                st_0F = (2|0);
                /* IL_30: br.s IL_33 */
                __pos__ = 0x33;
                continue;
                case 0x32:
                /* IL_32: ldc.i4.0  */
                st_0F = (0|0);
                case 0x33:
                /* IL_33: stloc.2  */
                loc2 = st_0F;
                case 0x36:
                /* IL_36: ldloc.2  */
                /* IL_37: ret  */
                return loc2;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Int32 Button.Counter(Nullable`1)*/
    asm.x6000003 = function Counter(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarga.s 1 */
                /* IL_03: call Boolean get_HasValue() */
                /* IL_08: ldc.i4.0  */
                /* IL_0A: ceq  */
                /* IL_0B: stloc.0  */
                loc0 = ((asm0.x60000dc({
                        'w': function (v)
                        {
                            arg1 = v;
                        },
                        'r': function ()
                        {
                            return arg1;
                        }
                    }) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.0  */
                /* IL_0D: brfalse.s IL_13 */
                
                if ((!(loc0))){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.0  */
                /* IL_10: stloc.1  */
                loc1 = (0|0);
                /* IL_11: br.s IL_1F */
                __pos__ = 0x1F;
                continue;
                case 0x13:
                /* IL_13: ldarga.s 1 */
                /* IL_15: call Int32 get_Value() */
                /* IL_1A: ldc.i4.1  */
                /* IL_1B: add  */
                /* IL_1C: stloc.1  */
                loc1 = (asm0.x60000dd({
                        'w': function (v)
                        {
                            arg1 = v;
                        },
                        'r': function ()
                        {
                            return arg1;
                        }
                    }) + (1|0)) | (0|0);
                case 0x1F:
                /* IL_1F: ldloc.1  */
                /* IL_20: ret  */
                return loc1;
            }
        }
    };;
    /*  Button..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static  Button..cctor()*/
    asm.x6000005_init = function ()
    {
        ((asm1)["Program+Button"]().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function _cctor()
    {
        var t0;
        
        if ((asm1)["Program+Button"]().FieldsInitialized){
            return;
        }
        (asm1)["Program+Button"]().FieldsInitialized = true;
        t0 = (asm1)["Program+Button"]();
        asm1.x6000005();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stsfld Button TheButton */
        t0.TheButton = CILJS.newobj(t0,asm1.x6000004,[null]);
        /* IL_0A: ret  */
        return ;
    };
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["Program+Button"] = CILJS.declare_type(
        "Button",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+Button",false,false,false,false,false,[],[
                    [asm1, "x6000003", "Counter"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.TheButton = null;
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
