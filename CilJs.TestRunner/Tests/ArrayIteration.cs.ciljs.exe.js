var asm1;(function (asm)
{
    asm.FullName = "ArrayIteration.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.5  */
        /* IL_01: newarr System.Int32 */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_array(t0,(5|0));
        /* IL_07: ldloc.0  */
        /* IL_08: ldc.i4.0  */
        /* IL_09: ldc.i4.s 44 */
        /* IL_0B: stelem.i4  */
        (loc0.jsarr)[(0|0)] = (44|0);
        /* IL_0C: ldloc.0  */
        /* IL_0D: ldc.i4.1  */
        /* IL_0E: ldc.i4.s 43 */
        /* IL_10: stelem.i4  */
        (loc0.jsarr)[(1|0)] = (43|0);
        /* IL_11: ldloc.0  */
        /* IL_12: ldc.i4.2  */
        /* IL_13: ldc.i4.s 42 */
        /* IL_15: stelem.i4  */
        (loc0.jsarr)[(2|0)] = (42|0);
        /* IL_16: ldloc.0  */
        /* IL_17: ldc.i4.3  */
        /* IL_18: ldc.i4.s 41 */
        /* IL_1A: stelem.i4  */
        (loc0.jsarr)[(3|0)] = (41|0);
        /* IL_1B: ldloc.0  */
        /* IL_1C: ldc.i4.4  */
        /* IL_1D: ldc.i4.s 40 */
        /* IL_1F: stelem.i4  */
        (loc0.jsarr)[(4|0)] = (40|0);
        /* IL_20: ldloc.0  */
        /* IL_21: call Void PrintArray(System.Collections.IEnumerable) */
        asm1.x6000002(loc0);
        /* IL_26: ret  */
        return ;
    };;
    /* static System.Void Program.PrintArray(IEnumerable)*/
    asm.x6000002_init = function ()
    {
        ((asm0)["System.Collections.IEnumerable"]().init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
        ((asm0)["System.IDisposable"]().init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function (arg0)
    {
        asm.x6000002_init.apply(this,arguments);
        return asm.x6000002_.apply(this,arguments);
    };;
    asm.x6000002_ = function PrintArray(arg0)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc1;
        var in_block_1;
        var __finally_continuation_1__;
        var loc0;
        var loc2;
        t0 = (asm0)["System.Collections.IEnumerable"]();
        t1 = (asm0)["System.Collections.IEnumerator"]();
        t2 = (asm0)["System.IDisposable"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: callvirt IEnumerator GetEnumerator() */
                /* IL_06: stloc.1  */
                loc1 = (((arg0.ifacemap)[t0].x60001b2)())(CILJS.convert_box_to_pointer_as_needed(arg0));
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 7;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x7:
                            /* IL_07: br.s IL_16 */
                            __pos__ = 0x16;
                            continue;
                            case 0x9:
                            /* IL_09: ldloc.1  */
                            /* IL_0A: callvirt Object get_Current() */
                            /* IL_0F: stloc.0  */
                            loc0 = (((loc1.ifacemap)[t1].x60001b3)())(CILJS.convert_box_to_pointer_as_needed(loc1));
                            /* IL_10: ldloc.0  */
                            /* IL_11: call Void WriteLine(System.Object) */
                            asm0.x600005a(loc0);
                            case 0x16:
                            /* IL_16: ldloc.1  */
                            /* IL_17: callvirt Boolean MoveNext() */
                            /* IL_1C: brtrue.s IL_09 */
                            
                            if ((((loc1.ifacemap)[t1].x60001b4)())(CILJS.convert_box_to_pointer_as_needed(loc1))){
                                __pos__ = 0x9;
                                continue;
                            }
                            /* IL_1E: leave.s IL_31 */
                            in_block_1 = false;
                            __pos__ = 0x31;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 32;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x20:
                            /* IL_20: ldloc.1  */
                            /* IL_21: isinst System.IDisposable */
                            /* IL_26: stloc.2  */
                            loc2 = t2.IsInst(loc1);
                            /* IL_27: ldloc.2  */
                            /* IL_28: brfalse.s IL_30 */
                            
                            if ((!(loc2))){
                                __pos__ = 0x30;
                                continue;
                            }
                            /* IL_2A: ldloc.2  */
                            /* IL_2B: callvirt Void Dispose() */
                            (((loc2.ifacemap)[t2].x6000095)())(CILJS.convert_box_to_pointer_as_needed(loc2));
                            case 0x30:
                            /* IL_30: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                    }
                }
                break;
                case 0x31:
                /* IL_31: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
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
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
