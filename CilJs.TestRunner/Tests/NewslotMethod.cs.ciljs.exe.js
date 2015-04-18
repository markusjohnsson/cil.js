var asm1;(function (asm)
{
    asm.FullName = "NewslotMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* System.Void X.M()*/
    asm.x600000a = function M(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  NewslotMethod.cs:5:5*/
        /* IL_01: ldstr a */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("a"));
        /* IL_0B: nop  */
        /* IL_0C: ret  NewslotMethod.cs:7:5*/
        return ;
    };;
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
    /* System.Void Y.M()*/
    asm.x600000c = function M(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  NewslotMethod.cs:13:5*/
        /* IL_01: ldstr b */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("b"));
        /* IL_0B: nop  */
        /* IL_0C: ret  NewslotMethod.cs:15:5*/
        return ;
    };;
    /*  Y..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000b(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void Z.M()*/
    asm.x600000e = function M(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  NewslotMethod.cs:21:5*/
        /* IL_01: ldstr c */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("c"));
        /* IL_0B: nop  */
        /* IL_0C: ret  NewslotMethod.cs:23:5*/
        return ;
    };;
    /*  Z..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000d(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000010_init = function ()
    {
        (asm1.Z().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        CILJS.init_base_types();
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = asm1.Z();
        __pos__ = 0x0;
        /* IL_00: nop  NewslotMethod.cs:29:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000f,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: callvirt Void M() */
        asm1.x600000e(loc0);
        /* IL_0D: nop  */
        /* IL_0E: ldloc.0  */
        /* IL_0F: stloc.1  */
        loc1 = loc0;
        /* IL_10: ldloc.1  */
        /* IL_11: callvirt Void M() */
        ((loc1.vtable)["asm1.x600000a"]())(loc1);
        /* IL_16: nop  */
        /* IL_17: ldloc.0  */
        /* IL_18: stloc.2  */
        loc2 = loc0;
        /* IL_19: ldloc.2  */
        /* IL_1A: callvirt Void M() */
        ((loc2.vtable)["asm1.x600000a"]())(loc2);
        /* IL_1F: nop  */
        /* IL_20: ret  NewslotMethod.cs:38:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
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
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[
                    [asm1, "x600000a", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Y = CILJS.declare_type(
        "Y",
        [],
        function ()
        {
            return new (asm1.X())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[
                    [asm1, "x600000c", "M"]
                ],asm1.X(),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000c");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Z = CILJS.declare_type(
        "Z",
        [],
        function ()
        {
            return new (asm1.Y())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Z",false,false,false,false,false,[],[
                    [asm1, "x600000e", "M"]
                ],asm1.Y(),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000c");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
