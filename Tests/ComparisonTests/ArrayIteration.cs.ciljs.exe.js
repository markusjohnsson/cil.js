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
        /* IL_00: nop  */
        /* IL_01: ldc.i4.5  */
        /* IL_02: newarr System.Int32 */
        /* IL_07: stloc.0  */
        loc0 = CILJS.new_array(t0,(5|0));
        /* IL_08: ldloc.0  */
        /* IL_09: ldc.i4.0  */
        /* IL_0A: ldc.i4.s 44 */
        /* IL_0C: stelem.i4  */
        (loc0.jsarr)[(0|0)] = (44|0);
        /* IL_0D: ldloc.0  */
        /* IL_0E: ldc.i4.1  */
        /* IL_0F: ldc.i4.s 43 */
        /* IL_11: stelem.i4  */
        (loc0.jsarr)[(1|0)] = (43|0);
        /* IL_12: ldloc.0  */
        /* IL_13: ldc.i4.2  */
        /* IL_14: ldc.i4.s 42 */
        /* IL_16: stelem.i4  */
        (loc0.jsarr)[(2|0)] = (42|0);
        /* IL_17: ldloc.0  */
        /* IL_18: ldc.i4.3  */
        /* IL_19: ldc.i4.s 41 */
        /* IL_1B: stelem.i4  */
        (loc0.jsarr)[(3|0)] = (41|0);
        /* IL_1C: ldloc.0  */
        /* IL_1D: ldc.i4.4  */
        /* IL_1E: ldc.i4.s 40 */
        /* IL_20: stelem.i4  */
        (loc0.jsarr)[(4|0)] = (40|0);
        /* IL_21: ldloc.0  */
        /* IL_22: call Void PrintArray(System.Collections.IEnumerable) */
        asm1.x6000002(loc0);
        /* IL_27: nop  */
        /* IL_28: ret  */
        return ;
    };;
    /* static System.Void Program.PrintArray(IEnumerable)*/
    asm.x6000002_init = function (arg0)
    {
        ((asm0)["System.Collections.IEnumerable"]().init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
        ((asm0)["System.IDisposable"]().init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function (arg0)
    {
        asm.x6000002_init(arg0);
        return asm.x6000002_(arg0);
    };;
    asm.x6000002_ = function PrintArray(arg0)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var __finally_continuation_1__;
        var loc1;
        var loc2;
        t0 = (asm0)["System.Collections.IEnumerable"]();
        t1 = (asm0)["System.Collections.IEnumerator"]();
        t2 = (asm0)["System.IDisposable"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: nop  */
                
                /* IL_02: ldarg.0  */
                /* IL_03: callvirt IEnumerator GetEnumerator() */
                /* IL_08: stloc.0  */
                loc0 = (((arg0.ifacemap)[t0].x60001b8)())(CILJS.convert_box_to_pointer_as_needed(arg0));
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    
                    if (__pos__ < 0x9){
                        __pos__ = 0x9;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x9:
                            /* IL_09: br.s IL_19 */
                            __pos__ = 0x19;
                            continue;
                            case 0xB:
                            /* IL_0B: ldloc.0  */
                            /* IL_0C: callvirt Object get_Current() */
                            /* IL_11: stloc.1  */
                            loc1 = (((loc0.ifacemap)[t1].x60001b9)())(CILJS.convert_box_to_pointer_as_needed(loc0));
                            /* IL_12: ldloc.1  */
                            /* IL_13: call Void WriteLine(System.Object) */
                            asm0.x600005a(loc1);
                            /* IL_18: nop  */
                            
                            case 0x19:
                            /* IL_19: ldloc.0  */
                            /* IL_1A: callvirt Boolean MoveNext() */
                            /* IL_1F: brtrue.s IL_0B */
                            
                            if ((((loc0.ifacemap)[t1].x60001ba)())(CILJS.convert_box_to_pointer_as_needed(loc0))){
                                __pos__ = 0xB;
                                continue;
                            }
                            /* IL_21: leave.s IL_35 */
                            in_block_1 = false;
                            __pos__ = 0x35;
                            continue;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0x23;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x23:
                            /* IL_23: ldloc.0  */
                            /* IL_24: isinst System.IDisposable */
                            /* IL_29: stloc.2  */
                            loc2 = t2.IsInst(loc0);
                            /* IL_2A: ldloc.2  */
                            /* IL_2B: brfalse.s IL_34 */
                            
                            if ((!(loc2))){
                                __pos__ = 0x34;
                                continue;
                            }
                            /* IL_2D: ldloc.2  */
                            /* IL_2E: callvirt Void Dispose() */
                            (((loc2.ifacemap)[t2].x6000095)())(CILJS.convert_box_to_pointer_as_needed(loc2));
                            /* IL_33: nop  */
                            
                            case 0x34:
                            /* IL_34: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            continue;
                        }
                        break;
                    }
                }
                continue;
                case 0x35:
                /* IL_35: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
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
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
