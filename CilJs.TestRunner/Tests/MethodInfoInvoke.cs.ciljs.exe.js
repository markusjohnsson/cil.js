var asm1;(function (asm)
{
    asm.FullName = "MethodInfoInvoke.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.X(String)*/
    asm.x6000002 = function X(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldc.i4.0  */
                /* IL_03: newarr System.Object */
                /* IL_08: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(arg1,CILJS.new_array(t0,(0|0)));
                /* IL_0D: nop  */
                
                /* IL_0E: ldarg.0  */
                /* IL_0F: ldfld String Y */
                /* IL_14: ldarg.1  */
                /* IL_15: call String Concat(System.String, System.String) */
                /* IL_1A: stloc.0  */
                loc0 = asm0.x6000127(arg0.AY,arg1);
                /* IL_1D: ldloc.0  */
                /* IL_1E: ret  */
                return loc0;
            }
        }
    };;
    /*  A..ctor(String)*/
    asm.x6000001 = function _ctor(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: stfld String Y */
                arg0.AY = arg1;
                /* IL_0F: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        (asm1.A().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init();
        return asm.x6000003_();
    };;
    asm.x6000003_ = function Main()
    {
        var t0;
        var t1;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var in_block_0;
        var __pos__;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldtoken A */
                /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0B: callvirt MethodInfo[] GetMethods() */
                /* IL_10: ldc.i4.0  */
                /* IL_11: ldelem.ref  */
                /* IL_12: stloc.0  */
                loc0 = CILJS.ldelem_ref((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000157"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),(0|0));
                /* IL_13: ldloc.0  */
                st_0B = loc0;
                /* IL_14: ldstr Hello */
                st_05 = CILJS.new_string("Hello");
                /* IL_19: newobj Void .ctor(System.String) */
                st_0C = CILJS.newobj(t0,asm1.x6000001,[null, st_05]);
                /* IL_1E: ldc.i4.1  */
                st_06 = (1|0);
                /* IL_1F: newarr System.Object */
                st_07 = CILJS.new_array(t1,st_06);
                /* IL_24: dup  */
                st_0D = st_08 = st_07;
                /* IL_25: ldc.i4.0  */
                st_09 = (0|0);
                /* IL_26: ldstr World */
                st_0A = CILJS.new_string("World");
                /* IL_2B: stelem.ref  */
                CILJS.stelem_ref(st_08,st_09,st_0A);
                /* IL_2C: callvirt Object Invoke(System.Object, System.Object[]) */
                st_0E = asm0.x60001ac(st_0B,st_0C,st_0D);
                /* IL_31: call Void WriteLine(System.Object) */
                asm0.x600005a(st_0E);
                /* IL_36: nop  */
                
                /* IL_37: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
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
                    [asm1, "x6000002", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A() { c.init();this.AY = null }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000003;
})(asm1 || (asm1 = {}));
