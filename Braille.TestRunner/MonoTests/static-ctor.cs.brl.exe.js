var asm1;(function (asm)
{
    asm.FullName = "static-ctor.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static  X..cctor()*/
    asm.x600000a_init = function ()
    {
        (asm1.test().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function _cctor()
    {
        var t0;
        var __pos__;
        
        if (asm1.X().FieldsInitialized){
            return;
        }
        asm1.X().FieldsInitialized = true;
        t0 = asm1.test();
        __pos__ = 0x0;
        /* IL_00: nop  static-ctor.cs:6:5*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: stsfld Int32 global */
        (t0)["global"] = (1|0);
        /* IL_07: ret  static-ctor.cs:8:5*/
        return ;
    };
    /*  X..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  Y..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000b(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  Z..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000c(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  static-ctor.cs:18:5*/
        /* IL_08: nop  static-ctor.cs:19:5*/
        /* IL_09: ret  */
        return ;
    };;
    /* static System.Int32 test.Main()*/
    asm.x600000e_init = function ()
    {
        (asm1.Z().init)();
        (asm1.test().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        BLR.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        t0 = asm1.Z();
        t1 = asm1.test();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  static-ctor.cs:27:5*/
                
                asm1.x600000a();
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = BLR.newobj(t0,asm1.x600000d,[null]);
                /* IL_07: ldsfld Int32 global */
                /* IL_0C: ldc.i4.1  */
                /* IL_0E: ceq  */
                /* IL_0F: stloc.2  */
                loc2 = ((t1.global === (1|0)) ? (1) : (0));
                /* IL_10: ldloc.2  */
                /* IL_11: brtrue.s IL_23 */
                
                if (loc2){
                    __pos__ = 0x23;
                    continue;
                }
                /* IL_13: nop  static-ctor.cs:31:9*/
                
                /* IL_14: ldstr Error */
                /* IL_19: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("Error"));
                /* IL_1E: nop  */
                
                /* IL_1F: ldc.i4.1  */
                /* IL_20: stloc.1  */
                loc1 = (1|0);
                /* IL_21: br.s IL_32 */
                __pos__ = 0x32;
                continue;
                case 0x23:
                /* IL_23: ldstr Ok */
                /* IL_28: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("Ok"));
                /* IL_2D: nop  */
                
                /* IL_2E: ldc.i4.0  */
                /* IL_2F: stloc.1  */
                loc1 = (0|0);
                case 0x32:
                /* IL_32: ldloc.1  */
                /* IL_33: ret  */
                return loc1;
            }
        }
    };
    /*  test..ctor()*/
    asm.x600000f = function _ctor(arg0)
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
    asm.X = BLR.declare_type(
        "X",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"X",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Y = BLR.declare_type(
        "Y",
        [],
        function ()
        {
            return new (asm1.X())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Y",false,false,false,false,false,[],[],asm1.X(),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Z = BLR.declare_type(
        "Z",
        [],
        function ()
        {
            return new (asm1.Y())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Z",false,false,false,false,false,[],[],asm1.Y(),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.test = BLR.declare_type(
        "test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"test",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.global = 0;
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
