var asm2; (function (asm)
{
    asm.FullName = "NewslotMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void X.M()*/
    asm.x6000001 = function M(arg0)
    {
        /* IL_00: ldstr a*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("a"));
        /* IL_0A: ret */
        return ;
    };;
    /*  X..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void Y.M()*/
    asm.x6000003 = function M(arg0)
    {
        /* IL_00: ldstr b*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("b"));
        /* IL_0A: ret */
        return ;
    };;
    /*  Y..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000002(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Void Z.M()*/
    asm.x6000005 = function M(arg0)
    {
        /* IL_00: ldstr c*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("c"));
        /* IL_0A: ret */
        return ;
    };;
    /*  Z..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000004(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm2.Z().init)();
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
        t0 = asm2.Z();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000006,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Void M()*/
        asm2.x6000005(loc0);
        /* IL_0C: ldloc.0 */
        /* IL_0D: stloc.1 */
        loc1 = loc0;
        /* IL_0E: ldloc.1 */
        /* IL_0F: callvirt Void M()*/
        ((loc1.vtable)["asm2.x6000001"]())(loc1);
        /* IL_14: ldloc.0 */
        /* IL_15: stloc.2 */
        loc2 = loc0;
        /* IL_16: ldloc.2 */
        /* IL_17: callvirt Void M()*/
        ((loc2.vtable)["asm2.x6000001"]())(loc2);
        /* IL_1C: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000008 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[
                    [asm2, "x6000001", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
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
            CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[
                    [asm2, "x6000003", "M"]
                ],asm2.X(),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000003");
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
            CILJS.init_type(this,asm,"Z",false,false,false,false,false,[],[
                    [asm2, "x6000005", "M"]
                ],asm2.Y(),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm2 || (asm2 = {}));
