var asm1; (function (asm)
{
    asm.FullName = "TryFinallyBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        CILJS.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var in_block_2;
        var __finally_continuation_2__;
        var __error_handled_1__;
        t0 = (asm0)["System.Exception"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                try {
                    /* IL_00: ldstr Try 1*/
                    /* IL_05: call Void Log(System.Object)*/
                    asm1.x6000001(CILJS.new_string("Try 1"));
                    
                    try {
                        /* IL_0A: ldstr Try 2*/
                        /* IL_0F: call Void Log(System.Object)*/
                        asm1.x6000001(CILJS.new_string("Try 2"));
                        /* IL_14: newobj Void .ctor()*/
                        /* IL_19: throw */
                        throw CILJS.newobj(t0,asm0.x60000a4,[null]);
                    }
                    
                    finally {
                        in_block_2 = true;
                        __finally_continuation_2__ = __pos__;
                        __pos__ = 26;
                        
                        while (in_block_2){
                            
                            switch (__pos__){
                                case 0x1A:
                                /* IL_1A: ldstr Finally with branching*/
                                /* IL_1F: call Void Log(System.Object)*/
                                asm1.x6000001(CILJS.new_string("Finally with branching"));
                                /* IL_24: call Boolean What()*/
                                /* IL_29: brfalse.s IL_35*/
                                
                                if ((!(asm1.x600000b()))){
                                    __pos__ = 0x35;
                                    continue;
                                }
                                /* IL_2B: ldstr In branch*/
                                /* IL_30: call Void Log(System.Object)*/
                                asm1.x6000001(CILJS.new_string("In branch"));
                                case 0x35:
                                /* IL_35: ldstr After branch*/
                                /* IL_3A: call Void Log(System.Object)*/
                                asm1.x6000001(CILJS.new_string("After branch"));
                                /* IL_3F: endfinally */
                                in_block_2 = false;
                                __pos__ = __finally_continuation_2__;
                                break;
                            }
                        }
                    }
                }
                
                catch (__error__){
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Exception"]())){
                        st_07 = __error__;
                        st_07 = __error__;
                        __error_handled_1__ = true;
                        /* IL_40: pop */
                        
                        /* IL_41: ldstr Catch*/
                        /* IL_46: call Void Log(System.Object)*/
                        asm1.x6000001(CILJS.new_string("Catch"));
                        /* IL_4B: leave.s IL_4D*/
                        in_block_1 = false;
                        __pos__ = 0x4D;
                    }
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                }
                break;
                case 0x4D:
                /* IL_4D: ret */
                return ;
            }
        }
    };
    /* static System.Boolean Program.What()*/
    asm.x600000b = function What()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /*  Program..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
