var asm2; (function (asm)
{
    asm.FullName = "static-ctor.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static  X..cctor()*/
    asm.x6000001_init = function ()
    {
        (asm2.test().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function _cctor()
    {
        var t0;
        
        if (asm2.X().FieldsInitialized){
            return;
        }
        asm2.X().FieldsInitialized = true;
        t0 = asm2.test();
        /* IL_00: ldc.i4.1 */
        /* IL_01: stsfld Int32 global*/
        (t0)["global"] = (1|0);
        /* IL_06: ret */
        return ;
    };
    /*  X..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  Y..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000002(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  Z..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000003(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Int32 test.Main()*/
    asm.x6000005_init = function ()
    {
        (asm2.Z().init)();
        (asm2.test().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        t0 = asm2.Z();
        t1 = asm2.test();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                asm2.x6000001();
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: pop */
                CILJS.newobj(t0,asm2.x6000004,[null]);
                /* IL_06: ldsfld Int32 global*/
                /* IL_0B: ldc.i4.1 */
                /* IL_0C: beq.s IL_1A*/
                
                if (t1.global === (1|0)){
                    __pos__ = 0x1A;
                    continue;
                }
                /* IL_0E: ldstr Error*/
                /* IL_13: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Error"));
                /* IL_18: ldc.i4.1 */
                /* IL_19: ret */
                return (1|0);
                case 0x1A:
                /* IL_1A: ldstr Ok*/
                /* IL_1F: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Ok"));
                /* IL_24: ldc.i4.0 */
                /* IL_25: ret */
                return (0|0);
            }
        }
    };
    /*  test..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Y = CILJS.declare_type(
        "Y",
        [],
        function ()
        {
            return new (asm2.X())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[],asm2.X(),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Z = CILJS.declare_type(
        "Z",
        [],
        function ()
        {
            return new (asm2.Y())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Z",false,false,false,false,false,[],[],asm2.Y(),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.test = CILJS.declare_type(
        "test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.global = 0;
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm2 || (asm2 = {}));
