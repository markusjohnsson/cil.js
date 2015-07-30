var asm2; (function (asm)
{
    asm.FullName = "Foreach.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* Iter A.GetEnumerator()*/
    asm.x6000001_init = function ()
    {
        (asm2.Iter().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function (arg0)
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        t1 = asm2.Iter();
        /* IL_00: ldc.i4.5 */
        /* IL_01: newarr System.Int32*/
        /* IL_06: stloc.0 */
        loc0 = CILJS.new_array(t0,(5|0));
        /* IL_07: ldloc.0 */
        /* IL_08: ldc.i4.0 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: stelem.i4 */
        (loc0.jsarr)[(0|0)] = (0|0);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ldc.i4.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: stelem.i4 */
        (loc0.jsarr)[(1|0)] = (1|0);
        /* IL_0F: ldloc.0 */
        /* IL_10: ldc.i4.2 */
        /* IL_11: ldc.i4.2 */
        /* IL_12: stelem.i4 */
        (loc0.jsarr)[(2|0)] = (2|0);
        /* IL_13: ldloc.0 */
        /* IL_14: ldc.i4.3 */
        /* IL_15: ldc.i4.4 */
        /* IL_16: stelem.i4 */
        (loc0.jsarr)[(3|0)] = (4|0);
        /* IL_17: ldloc.0 */
        /* IL_18: ldc.i4.4 */
        /* IL_19: ldc.i4.8 */
        /* IL_1A: stelem.i4 */
        (loc0.jsarr)[(4|0)] = (8|0);
        /* IL_1B: ldloc.0 */
        /* IL_1C: newobj Void .ctor(System.Int32[])*/
        /* IL_21: ret */
        return CILJS.newobj(t1,asm2.x6000003,[null, loc0]);
    };
    /*  A..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Boolean Iter.MoveNext()*/
    asm.x6000004 = function MoveNext(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var loc0;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: dup */
        st_06 = (st_01 = st_00);
        /* IL_02: ldfld Int32 i*/
        st_02 = st_01.Iteri;
        /* IL_07: ldc.i4.1 */
        st_03 = (1|0);
        /* IL_08: add */
        st_04 = ((st_02 + st_03) | (0|0));
        /* IL_09: dup */
        st_07 = (st_05 = st_04);
        /* IL_0A: stloc.0 */
        loc0 = st_05;
        /* IL_0B: stfld Int32 i*/
        st_06.Iteri = st_07;
        /* IL_10: ldloc.0 */
        /* IL_11: ldarg.0 */
        /* IL_12: ldfld Int32[] nums*/
        /* IL_17: ldlen */
        /* IL_18: conv.i4 */
        /* IL_1A: clt */
        /* IL_1B: ret */
        return ((loc0 < (arg0.Iternums.jsarr.length | (0|0))) ? (1) : (0));
    };;
    /* System.Int32 Iter.get_Current()*/
    asm.x6000005 = function get_Current(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32[] nums*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld Int32 i*/
        /* IL_0C: ldelem.i4 */
        /* IL_0D: ret */
        return (arg0.Iternums.jsarr)[arg0.Iteri];
    };;
    /*  Iter..ctor(Int32[])*/
    asm.x6000003 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.m1 */
        /* IL_02: stfld Int32 i*/
        arg0.Iteri = (-1|0);
        /* IL_07: ldarg.0 */
        /* IL_08: call Void .ctor()*/
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stfld Int32[] nums*/
        arg0.Iternums = arg1;
        /* IL_14: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm2.A().init)();
        ((asm0)["System.IDisposable"]().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc2;
        var in_block_1;
        var __finally_continuation_1__;
        var loc1;
        var loc3;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.IDisposable"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = CILJS.newobj(t0,asm2.x6000002,[null]);
                /* IL_06: ldloc.0 */
                /* IL_07: callvirt Iter GetEnumerator()*/
                /* IL_0C: stloc.2 */
                loc2 = asm2.x6000001(loc0);
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 13;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0xD:
                            /* IL_0D: br.s IL_21*/
                            __pos__ = 0x21;
                            continue;
                            case 0xF:
                            /* IL_0F: ldloc.2 */
                            /* IL_10: callvirt Int32 get_Current()*/
                            /* IL_15: stloc.1 */
                            loc1 = asm2.x6000005(loc2);
                            /* IL_16: ldloc.1 */
                            /* IL_17: box System.Int32*/
                            /* IL_1C: call Void Log(System.Object)*/
                            asm1.x6000001({
                                    'boxed': loc1,
                                    'type': t1,
                                    'vtable': t1.prototype.vtable,
                                    'ifacemap': t1.prototype.ifacemap
                                });
                            case 0x21:
                            /* IL_21: ldloc.2 */
                            /* IL_22: callvirt Boolean MoveNext()*/
                            /* IL_27: brtrue.s IL_0F*/
                            
                            if (asm2.x6000004(loc2)){
                                __pos__ = 0xF;
                                continue;
                            }
                            /* IL_29: leave.s IL_3C*/
                            in_block_1 = false;
                            __pos__ = 0x3C;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 43;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x2B:
                            /* IL_2B: ldloc.2 */
                            /* IL_2C: isinst System.IDisposable*/
                            /* IL_31: stloc.3 */
                            loc3 = t2.IsInst(loc2);
                            /* IL_32: ldloc.3 */
                            /* IL_33: brfalse.s IL_3B*/
                            
                            if ((!(loc3))){
                                __pos__ = 0x3B;
                                continue;
                            }
                            /* IL_35: ldloc.3 */
                            /* IL_36: callvirt Void Dispose()*/
                            (((loc3.ifacemap)[t2].x6000095)())(CILJS.convert_box_to_pointer_as_needed(loc3));
                            case 0x3B:
                            /* IL_3B: endfinally */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                    }
                }
                break;
                case 0x3C:
                /* IL_3C: ret */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000001", "GetEnumerator"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Iter = CILJS.declare_type(
        "Iter",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Iter",false,false,false,false,false,[],[
                    [asm2, "x6000004", "MoveNext"],
                    [asm2, "x6000005", "get_Current"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Iteri = 0;
            this.prototype.Iternums = null;
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm2 || (asm2 = {}));
