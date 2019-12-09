var asm1;(function (asm)
{
    asm.FullName = "VirtualMethodBench.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.X()*/
    asm.x6000001 = function X(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void B.X()*/
    asm.x6000003 = function X(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr Hey */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("Hey"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000002(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.B().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init();
        return asm.x6000005_();
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.B();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: stloc.0  */
                loc0 = (0|0);
                /* IL_03: br.s IL_18 */
                __pos__ = 0x18;
                continue;
                case 0x5:
                case 0x18:
                in_block_1 = true;
                
                if (__pos__ > 0x1F){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x5){
                    __pos__ = 0x5;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x5:
                        /* IL_05: nop  */
                        
                        /* IL_06: newobj Void .ctor() */
                        /* IL_0B: stloc.1  */
                        loc1 = CILJS.newobj(t0,asm1.x6000004,[null]);
                        /* IL_0C: ldloc.1  */
                        /* IL_0D: callvirt Void X() */
                        (loc1.vtable)["asm1.x6000001"](loc1);
                        /* IL_12: nop  */
                        
                        /* IL_13: nop  */
                        
                        /* IL_14: ldloc.0  */
                        /* IL_15: ldc.i4.1  */
                        /* IL_16: add  */
                        /* IL_17: stloc.0  */
                        loc0 = (loc0 + (1|0)) | (0|0);
                        case 0x18:
                        /* IL_18: ldloc.0  */
                        /* IL_19: ldc.i4.s 100 */
                        /* IL_1C: clt  */
                        /* IL_1D: stloc.2  */
                        loc2 = ((loc0 < (100|0)) ? 1 : 0);
                        /* IL_1E: ldloc.2  */
                        /* IL_1F: brtrue.s IL_05 */
                        
                        if (loc2){
                            __pos__ = 0x5;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x18) || (__pos__ < 0x5)){
                    continue;
                }
                /* IL_21: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x6000001", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function A() { c.init(); }");
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm1.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x6000003", "X"]
                ],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function B() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
