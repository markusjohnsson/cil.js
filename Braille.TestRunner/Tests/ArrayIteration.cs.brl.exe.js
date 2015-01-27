var asm1; (function (asm)
{
    asm.FullName = "ArrayIteration.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: ldc.i4.5 */
        /* IL_01: newarr System.Int32*/
        /* IL_06: stloc.0 */
        loc0 = (BLR.new_array)(t0,(5|0));
        /* IL_07: ldloc.0 */
        /* IL_08: ldc.i4.0 */
        /* IL_09: ldc.i4.s 44*/
        /* IL_0B: stelem.i4 */
        (loc0.jsarr)[(0|0)] = (44|0);
        /* IL_0C: ldloc.0 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldc.i4.s 43*/
        /* IL_10: stelem.i4 */
        (loc0.jsarr)[(1|0)] = (43|0);
        /* IL_11: ldloc.0 */
        /* IL_12: ldc.i4.2 */
        /* IL_13: ldc.i4.s 42*/
        /* IL_15: stelem.i4 */
        (loc0.jsarr)[(2|0)] = (42|0);
        /* IL_16: ldloc.0 */
        /* IL_17: ldc.i4.3 */
        /* IL_18: ldc.i4.s 41*/
        /* IL_1A: stelem.i4 */
        (loc0.jsarr)[(3|0)] = (41|0);
        /* IL_1B: ldloc.0 */
        /* IL_1C: ldc.i4.4 */
        /* IL_1D: ldc.i4.s 40*/
        /* IL_1F: stelem.i4 */
        (loc0.jsarr)[(4|0)] = (40|0);
        /* IL_20: ldloc.0 */
        /* IL_21: call Void PrintArray(System.Collections.IEnumerable)*/
        (asm1.x600000d)(loc0);
        /* IL_26: ret */
        return ;
    };
    /* static Void PrintArray(System.Collections.IEnumerable)*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.Collections.IEnumerable"])().init)();
        (((asm0)["System.Collections.IEnumerator"])().init)();
        (((asm0)["System.IDisposable"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function PrintArray(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc1;
        var __pos_1__;
        var loc0;
        var loc2;
        t0 = ((asm0)["System.Collections.IEnumerable"])();
        t1 = ((asm0)["System.Collections.IEnumerator"])();
        t2 = ((asm0)["System.IDisposable"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: callvirt IEnumerator GetEnumerator()*/
                /* IL_06: stloc.1 */
                loc1 = (((arg0.ifacemap)[t0].x600000d)())((BLR.convert_box_to_pointer_as_needed)(arg0));
                
                try {
                    __pos_1__ = 0x0;
                    
                    while (__pos_1__ >= 0){
                        
                        switch (__pos_1__){
                            case 0x0:
                            /* IL_07: br.s IL_16*/
                            __pos_1__ = 0x16;
                            continue;
                            case 0x9:
                            /* IL_09: ldloc.1 */
                            /* IL_0A: callvirt Object get_Current()*/
                            /* IL_0F: stloc.0 */
                            loc0 = (((loc1.ifacemap)[t1].x60000e4)())((BLR.convert_box_to_pointer_as_needed)(loc1));
                            /* IL_10: ldloc.0 */
                            /* IL_11: call Void Log(System.Object)*/
                            (asm1.x6000001)(loc0);
                            case 0x16:
                            /* IL_16: ldloc.1 */
                            /* IL_17: callvirt Boolean MoveNext()*/
                            /* IL_1C: brtrue.s IL_09*/
                            
                            if ((((loc1.ifacemap)[t1].x60000e5)())((BLR.convert_box_to_pointer_as_needed)(loc1))){
                                __pos_1__ = 0x9;
                                continue;
                            }
                            /* IL_1E: leave.s IL_2C*/
                            __pos_1__ = -1;
                            __pos_0__ = 0x2C;
                            break;
                        }
                    }
                    break;
                }
                
                finally {
                    __pos_1__ = 0x0;
                    
                    while (__pos_1__ >= 0){
                        
                        switch (__pos_1__){
                            case 0x0:
                            /* IL_20: ldloc.1 */
                            /* IL_21: stloc.2 */
                            loc2 = loc1;
                            /* IL_22: ldloc.2 */
                            /* IL_23: brfalse.s IL_2B*/
                            
                            if ((!(loc2))){
                                __pos_1__ = 0x2B;
                                continue;
                            }
                            /* IL_25: ldloc.2 */
                            /* IL_26: callvirt Void Dispose()*/
                            (((loc2.ifacemap)[t2].x600008f)())((BLR.convert_box_to_pointer_as_needed)(loc2));
                            case 0x2B:
                            /* IL_2B: endfinally */
                            __pos_1__ = -1;
                            break;
                        }
                    }
                    break;
                }
                case 0x2C:
                /* IL_2C: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestLog()
            {
                (TestLog.init)();
                this.constructor = TestLog;
            };
            c = TestLog;
            ct = c;
            TestLog.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestLog,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestLog),Array,"asm1.t2000002");
                TestLog.Interfaces = [];
                (BLR.declare_virtual)(TestLog,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestLog,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestLog,"asm0.x6000009","asm0.x6000009");
            };
            TestLog.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.TestHelper = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestHelper()
            {
                (TestHelper.init)();
                this.constructor = TestHelper;
            };
            c = TestHelper;
            ct = c;
            TestHelper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestHelper,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestHelper),Array,"asm1.t2000006");
                TestHelper.Interfaces = [];
                (BLR.declare_virtual)(TestHelper,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestHelper,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestHelper,"asm0.x6000009","asm0.x6000009");
            };
            TestHelper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Program = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function Program()
            {
                (Program.init)();
                this.constructor = Program;
            };
            c = Program;
            ct = c;
            Program.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t2000007");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
