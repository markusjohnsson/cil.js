var asm1;(function (asm)
{
    asm.FullName = "ArrayIteration.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        BLR.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  ArrayIteration.cs:6:5*/
        /* IL_01: ldc.i4.5  */
        /* IL_02: newarr System.Int32 */
        /* IL_07: stloc.0  */
        loc0 = BLR.new_array(t0,(5|0));
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
        asm1.x600000b(loc0);
        /* IL_27: nop  */
        /* IL_28: ret  ArrayIteration.cs:15:5*/
        return ;
    };
    /* static System.Void Program.PrintArray(IEnumerable)*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.Collections.IEnumerable"]().init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
        ((asm0)["System.IDisposable"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function (arg0)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function PrintArray(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var in_block_1;
        var __finally_continuation_1__;
        var loc0;
        var loc2;
        var loc3;
        t0 = (asm0)["System.Collections.IEnumerable"]();
        t1 = (asm0)["System.Collections.IEnumerator"]();
        t2 = (asm0)["System.IDisposable"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  ArrayIteration.cs:18:5*/
                
                /* IL_01: nop  ArrayIteration.cs:19:9*/
                
                /* IL_02: ldarg.0  */
                /* IL_03: callvirt IEnumerator GetEnumerator() */
                /* IL_08: stloc.1  */
                loc1 = (((arg0.ifacemap)[t0].x600000d)())(BLR.convert_box_to_pointer_as_needed(arg0));
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 9;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x9:
                            /* IL_09: br.s IL_19 ArrayIteration.cs:16707566:0*/
                            __pos__ = 0x19;
                            continue;
                            case 0xB:
                            /* IL_0B: ldloc.1  */
                            /* IL_0C: callvirt Object get_Current() */
                            /* IL_11: stloc.0  */
                            loc0 = (((loc1.ifacemap)[t1].x600011f)())(BLR.convert_box_to_pointer_as_needed(loc1));
                            /* IL_12: ldloc.0  */
                            /* IL_13: call Void Log(System.Object) */
                            asm1.x6000001(loc0);
                            /* IL_18: nop  */
                            
                            case 0x19:
                            /* IL_19: ldloc.1  */
                            /* IL_1A: callvirt Boolean MoveNext() */
                            /* IL_1F: stloc.2  */
                            loc2 = (((loc1.ifacemap)[t1].x6000120)())(BLR.convert_box_to_pointer_as_needed(loc1));
                            /* IL_20: ldloc.2  */
                            /* IL_21: brtrue.s IL_0B */
                            
                            if (loc2){
                                __pos__ = 0xB;
                                continue;
                            }
                            /* IL_23: leave.s IL_3C */
                            in_block_1 = false;
                            __pos__ = 0x3C;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 37;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x25:
                            /* IL_25: ldloc.1  */
                            /* IL_26: isinst System.IDisposable */
                            /* IL_2B: stloc.3  */
                            loc3 = t2.IsInst(loc1);
                            /* IL_2C: ldloc.3  */
                            /* IL_2D: ldnull  */
                            /* IL_2F: ceq  */
                            /* IL_30: stloc.2  */
                            loc2 = ((loc3 === null) ? (1) : (0));
                            /* IL_31: ldloc.2  */
                            /* IL_32: brtrue.s IL_3B */
                            
                            if (loc2){
                                __pos__ = 0x3B;
                                continue;
                            }
                            /* IL_34: ldloc.3  */
                            /* IL_35: callvirt Void Dispose() */
                            (((loc3.ifacemap)[t2].x60000c7)())(BLR.convert_box_to_pointer_as_needed(loc3));
                            /* IL_3A: nop  */
                            
                            case 0x3B:
                            /* IL_3B: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                    }
                }
                break;
                case 0x3C:
                /* IL_3C: nop  ArrayIteration.cs:16707566:0*/
                
                /* IL_3D: ret  ArrayIteration.cs:21:5*/
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
