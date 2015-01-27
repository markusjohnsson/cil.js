var asm1; (function (asm)
{
    asm.FullName = "iface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Int32 WriteIt()*/
    asm.x600000d = function WriteIt(arg0)
    {
        /* IL_00: ldc.i4.s 33*/
        /* IL_02: ret */
        return (33|0);
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Main()*/
    asm.x600000f_init = function ()
    {
        ((asm1.RealWriter)().init)();
        ((asm1.IHelloWorldWriter)().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc0;
        t0 = (asm1.RealWriter)();
        t1 = (asm1.IHelloWorldWriter)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = (BLR.newobj)(t0,asm1.x600000e,[
                    null
                ]);
                /* IL_06: ldloc.0 */
                /* IL_07: callvirt Int32 WriteIt()*/
                /* IL_0C: ldc.i4.s 33*/
                /* IL_0E: beq.s IL_12*/
                
                if ((((loc0.ifacemap)[t1].x600000c)())((BLR.convert_box_to_pointer_as_needed)(loc0)) === (33|0)){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_10: ldc.i4.1 */
                /* IL_11: ret */
                return (1|0);
                case 0x12:
                /* IL_12: ldc.i4.0 */
                /* IL_13: ret */
                return (0|0);
            }
        }
    };
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
    asm.IHelloWorldWriter = (function ()
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
            function IHelloWorldWriter()
            {
                (IHelloWorldWriter.init)();
                this.constructor = IHelloWorldWriter;
            };
            c = IHelloWorldWriter;
            ct = c;
            IHelloWorldWriter.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(IHelloWorldWriter,"IHelloWorldWriter",asm,false,false,true,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "WriteIt"
                    ]
                ],null,(BLR.is_inst_interface)(IHelloWorldWriter),Array,"asm1.t2000007");
                IHelloWorldWriter.Interfaces = [];
                (BLR.declare_virtual)(IHelloWorldWriter,"asm1.x600000c","asm1.x600000c");
            };
            IHelloWorldWriter.prototype = {};
            return c;
        };
    })();
    asm.RealWriter = (function ()
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
            function RealWriter()
            {
                (RealWriter.init)();
                this.constructor = RealWriter;
            };
            c = RealWriter;
            ct = c;
            RealWriter.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(RealWriter,"RealWriter",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000d",
                        "WriteIt"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(RealWriter),Array,"asm1.t2000008");
                RealWriter.Interfaces = [
                    (asm1.IHelloWorldWriter)()
                ];
                (BLR.declare_virtual)(RealWriter,"asm1.x600000d","asm1.x600000d");
                (BLR.declare_virtual)(RealWriter,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(RealWriter,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(RealWriter,"asm0.x6000009","asm0.x6000009");
                (BLR.tree_set)([
                    (asm1.IHelloWorldWriter)()
                ],RealWriter.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            RealWriter.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.ProjectName = (function ()
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
            function ProjectName()
            {
                (ProjectName.init)();
                this.constructor = ProjectName;
            };
            c = ProjectName;
            ct = c;
            ProjectName.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(ProjectName,"ProjectName",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(ProjectName),Array,"asm1.t2000009");
                ProjectName.Interfaces = [];
                (BLR.declare_virtual)(ProjectName,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(ProjectName,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(ProjectName,"asm0.x6000009","asm0.x6000009");
            };
            ProjectName.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
