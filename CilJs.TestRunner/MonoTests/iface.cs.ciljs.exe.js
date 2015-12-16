var asm1;(function (asm)
{
    asm.FullName = "iface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 RealWriter.WriteIt()*/
    asm.x6000002 = function WriteIt(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldc.i4.s 33 */
        /* IL_03: stloc.0  */
        loc0 = (33|0);
        /* IL_06: ldloc.0  */
        /* IL_07: ret  */
        return loc0;
    };;
    /*  RealWriter..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Int32 ProjectName.Main()*/
    asm.x6000004_init = function ()
    {
        (asm1.RealWriter().init)();
        (asm1.IHelloWorldWriter().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function ()
    {
        asm.x6000004_init();
        return asm.x6000004_();
    };;
    asm.x6000004_ = function Main()
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.RealWriter();
        t1 = asm1.IHelloWorldWriter();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x6000003,[null]);
                /* IL_07: ldloc.0  */
                /* IL_08: callvirt Int32 WriteIt() */
                /* IL_0D: ldc.i4.s 33 */
                /* IL_10: ceq  */
                /* IL_11: ldc.i4.0  */
                /* IL_13: ceq  */
                /* IL_14: stloc.1  */
                loc1 = (((((((loc0.ifacemap)[t1].x6000001)())(CILJS.convert_box_to_pointer_as_needed(loc0)) === (33|0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_15: ldloc.1  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc1))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };
    /*  ProjectName..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.IHelloWorldWriter = CILJS.declare_type(
        "IHelloWorldWriter",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IHelloWorldWriter",false,false,true,false,false,[],[
                    [asm1, "x6000001", "WriteIt"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
        },
        "function IHelloWorldWriter() { c.init(); }");
    asm.RealWriter = CILJS.declare_type(
        "RealWriter",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"RealWriter",false,false,false,false,false,[],[
                    [asm1, "x6000002", "WriteIt"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.IHelloWorldWriter()],
                {
                    'x6000001': function (){ return asm1.x6000002;}
                });
        },
        "function RealWriter() { c.init(); }");
    asm.ProjectName = CILJS.declare_type(
        "ProjectName",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"ProjectName",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function ProjectName() { c.init(); }");
    asm.entryPoint = asm.x6000004;
})(asm1 || (asm1 = {}));
