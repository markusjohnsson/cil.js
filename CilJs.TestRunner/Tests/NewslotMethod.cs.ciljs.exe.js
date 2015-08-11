var asm1;(function (asm)
{
    asm.FullName = "NewslotMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void X.M()*/
    asm.x6000001 = function M(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr a */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("a"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ret  */
        return ;
    };;
    /*  X..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void Y.M()*/
    asm.x6000003 = function M(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr b */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("b"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ret  */
        return ;
    };;
    /*  Y..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000002(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void Z.M()*/
    asm.x6000005 = function M(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr c */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("c"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ret  */
        return ;
    };;
    /*  Z..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000004(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm1.Z().init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function ()
    {
        asm.x6000007_init.apply(this,arguments);
        return asm.x6000007_.apply(this,arguments);
    };;
    asm.x6000007_ = function Main()
    {
        var t0;
        var loc0;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.Z();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000006,[null]);
        /* IL_06: ldloc.0  */
        /* IL_07: callvirt Void M() */
        asm1.x6000005(loc0);
        /* IL_0C: ldloc.0  */
        /* IL_0D: stloc.1  */
        loc1 = loc0;
        /* IL_0E: ldloc.1  */
        /* IL_0F: callvirt Void M() */
        ((loc1.vtable)["asm1.x6000001"]())(loc1);
        /* IL_14: ldloc.0  */
        /* IL_15: stloc.2  */
        loc2 = loc0;
        /* IL_16: ldloc.2  */
        /* IL_17: callvirt Void M() */
        ((loc2.vtable)["asm1.x6000001"]())(loc2);
        /* IL_1C: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000008 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[
                    [asm1, "x6000001", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
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
            CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[
                    [asm1, "x6000003", "M"]
                ],asm1.X(),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000003");
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
            CILJS.init_type(this,asm,"Z",false,false,false,false,false,[],[
                    [asm1, "x6000005", "M"]
                ],asm1.Y(),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm1 || (asm1 = {}));
