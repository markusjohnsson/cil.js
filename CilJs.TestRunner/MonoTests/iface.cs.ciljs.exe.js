var asm2;(function (asm)
{
    asm.FullName = "iface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 RealWriter.WriteIt()*/
    asm.x6000002 = function WriteIt(arg0)
    {
        /* IL_00: ldc.i4.s 33 */
        /* IL_02: ret  */
        return (33|0);
    };;
    /*  RealWriter..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Int32 ProjectName.Main()*/
    asm.x6000004_init = function ()
    {
        (asm2.RealWriter().init)();
        (asm2.IHelloWorldWriter().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function ()
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function Main()
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.RealWriter();
        t1 = asm2.IHelloWorldWriter();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stloc.0  */
                loc0 = CILJS.newobj(t0,asm2.x6000003,[null]);
                /* IL_06: ldloc.0  */
                /* IL_07: callvirt Int32 WriteIt() */
                /* IL_0C: ldc.i4.s 33 */
                /* IL_0E: beq.s IL_12 */
                
                if ((((loc0.ifacemap)[t1].x6000001)())(CILJS.convert_box_to_pointer_as_needed(loc0)) === (33|0)){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_10: ldc.i4.1  */
                /* IL_11: ret  */
                return (1|0);
                case 0x12:
                /* IL_12: ldc.i4.0  */
                /* IL_13: ret  */
                return (0|0);
            }
        }
    };
    /*  ProjectName..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
                    [asm2, "x6000001", "WriteIt"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
        });
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
                    [asm2, "x6000002", "WriteIt"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.IHelloWorldWriter()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
        });
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
            CILJS.init_type(this,asm,"ProjectName",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000004;
})(asm2 || (asm2 = {}));
