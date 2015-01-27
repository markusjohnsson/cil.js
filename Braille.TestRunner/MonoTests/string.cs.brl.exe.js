var asm1; (function (asm)
{
    asm.FullName = "string.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Int32 Main()*/
    asm.x600000c = function Main()
    {
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldstr ddd*/
                /* IL_05: stloc.0 */
                loc0 = (BLR.new_string)("ddd");
                /* IL_06: ldstr ddd*/
                /* IL_0B: stloc.1 */
                loc1 = (BLR.new_string)("ddd");
                /* IL_0C: ldstr ddda*/
                /* IL_11: stloc.2 */
                loc2 = (BLR.new_string)("ddda");
                /* IL_12: ldloc.0 */
                /* IL_13: ldloc.1 */
                /* IL_14: call Boolean op_Inequality(System.String, System.String)*/
                /* IL_19: brfalse.s IL_1D*/
                
                if ((!((asm0.x6000179)(loc0,loc1)))){
                    __pos_0__ = 0x1D;
                    continue;
                }
                /* IL_1B: ldc.i4.1 */
                /* IL_1C: ret */
                return (1|0);
                case 0x1D:
                /* IL_1D: ldloc.2 */
                /* IL_1E: ldloc.1 */
                /* IL_1F: ldstr a*/
                /* IL_24: call String Concat(System.String, System.String)*/
                /* IL_29: call Boolean op_Inequality(System.String, System.String)*/
                /* IL_2E: brfalse.s IL_32*/
                
                if ((!((asm0.x6000179)(loc2,(asm0.x600016f)(loc1,(BLR.new_string)("a")))))){
                    __pos_0__ = 0x32;
                    continue;
                }
                /* IL_30: ldc.i4.2 */
                /* IL_31: ret */
                return (2|0);
                case 0x32:
                /* IL_32: ldloc.2 */
                /* IL_33: ldloc.1 */
                /* IL_34: ldstr a*/
                /* IL_39: call String Concat(System.String, System.String)*/
                /* IL_3E: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_43: brfalse.s IL_47*/
                
                if ((!((asm0.x6000007)(loc2,(asm0.x600016f)(loc1,(BLR.new_string)("a")))))){
                    __pos_0__ = 0x47;
                    continue;
                }
                /* IL_45: ldc.i4.4 */
                /* IL_46: ret */
                return (4|0);
                case 0x47:
                /* IL_47: ldc.i4.0 */
                /* IL_48: ret */
                return (0|0);
            }
        }
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
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
    asm.TestString = (function ()
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
            function TestString()
            {
                (TestString.init)();
                this.constructor = TestString;
            };
            c = TestString;
            ct = c;
            TestString.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestString,"TestString",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestString),Array,"asm1.t2000007");
                TestString.Interfaces = [];
                (BLR.declare_virtual)(TestString,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestString,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestString,"asm0.x6000009","asm0.x6000009");
            };
            TestString.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
