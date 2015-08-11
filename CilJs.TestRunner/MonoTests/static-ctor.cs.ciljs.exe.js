var asm1;(function (asm)
{
    asm.FullName = "static-ctor.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static  X..cctor()*/
    asm.x6000001_init = function ()
    {
        (asm1.test().init)();
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
        
        if (asm1.X().FieldsInitialized){
            return;
        }
        asm1.X().FieldsInitialized = true;
        t0 = asm1.test();
        /* IL_00: ldc.i4.1  */
        /* IL_01: stsfld Int32 global */
        (t0)["global"] = (1|0);
        /* IL_06: ret  */
        return ;
    };
    /*  X..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  Y..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000002(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  Z..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000003(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Int32 test.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.Z().init)();
        (asm1.test().init)();
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
        var t2;
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        t0 = asm1.Z();
        t1 = asm1.test();
        t2 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                asm1.x6000001();
                /* IL_00: newobj Void .ctor() */
                /* IL_05: pop  */
                CILJS.newobj(t0,asm1.x6000004,[null]);
                /* IL_06: ldsfld Int32 global */
                /* IL_0B: ldc.i4.1  */
                /* IL_0C: beq.s IL_20 */
                
                if (t1.global === (1|0)){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_0E: ldstr Error */
                /* IL_13: ldc.i4.0  */
                /* IL_14: newarr System.Object */
                /* IL_19: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("Error"),CILJS.new_array(t2,(0|0)));
                /* IL_1E: ldc.i4.1  */
                /* IL_1F: ret  */
                return (1|0);
                case 0x20:
                /* IL_20: ldstr Ok */
                /* IL_25: ldc.i4.0  */
                /* IL_26: newarr System.Object */
                /* IL_2B: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("Ok"),CILJS.new_array(t2,(0|0)));
                /* IL_30: ldc.i4.0  */
                /* IL_31: ret  */
                return (0|0);
            }
        }
    };
    /*  test..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Y = CILJS.declare_type(
        "Y",
        [],
        function ()
        {
            return asm1.X();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[],asm1.X(),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Z = CILJS.declare_type(
        "Z",
        [],
        function ()
        {
            return asm1.Y();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Z",false,false,false,false,false,[],[],asm1.Y(),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.test = CILJS.declare_type(
        "test",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.global = 0;
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
