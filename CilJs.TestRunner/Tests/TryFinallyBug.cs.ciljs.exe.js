var asm1;(function (asm)
{
    asm.FullName = "TryFinallyBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var in_block_2;
        var __finally_continuation_2__;
        var __error_handled_1__;
        CILJS.init_base_types();
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Exception"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                try {
                    /* IL_00: ldstr Try 1 */
                    /* IL_05: ldc.i4.0  */
                    /* IL_06: newarr System.Object */
                    /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b(CILJS.new_string("Try 1"),CILJS.new_array(t0,(0|0)));
                    
                    try {
                        /* IL_10: ldstr Try 2 */
                        /* IL_15: ldc.i4.0  */
                        /* IL_16: newarr System.Object */
                        /* IL_1B: call Void WriteLine(System.String, System.Object[]) */
                        asm0.x600005b(CILJS.new_string("Try 2"),CILJS.new_array(t0,(0|0)));
                        /* IL_20: newobj Void .ctor() */
                        /* IL_25: throw  */
                        throw CILJS.newobj(t1,asm0.x6000076,[null]);
                    }
                    
                    finally {
                        in_block_2 = true;
                        __finally_continuation_2__ = __pos__;
                        __pos__ = 38;
                        
                        while (in_block_2){
                            
                            switch (__pos__){
                                case 0x26:
                                /* IL_26: ldstr Finally with branching */
                                /* IL_2B: ldc.i4.0  */
                                /* IL_2C: newarr System.Object */
                                /* IL_31: call Void WriteLine(System.String, System.Object[]) */
                                asm0.x600005b(CILJS.new_string("Finally with branching"),CILJS.new_array(t0,(0|0)));
                                /* IL_36: call Boolean What() */
                                /* IL_3B: brfalse.s IL_4D */
                                
                                if ((!(asm1.x6000002()))){
                                    __pos__ = 0x4D;
                                    continue;
                                }
                                /* IL_3D: ldstr In branch */
                                /* IL_42: ldc.i4.0  */
                                /* IL_43: newarr System.Object */
                                /* IL_48: call Void WriteLine(System.String, System.Object[]) */
                                asm0.x600005b(CILJS.new_string("In branch"),CILJS.new_array(t0,(0|0)));
                                case 0x4D:
                                /* IL_4D: ldstr After branch */
                                /* IL_52: ldc.i4.0  */
                                /* IL_53: newarr System.Object */
                                /* IL_58: call Void WriteLine(System.String, System.Object[]) */
                                asm0.x600005b(CILJS.new_string("After branch"),CILJS.new_array(t0,(0|0)));
                                /* IL_5D: endfinally  */
                                in_block_2 = false;
                                __pos__ = __finally_continuation_2__;
                                break;
                            }
                        }
                    }
                }
                
                catch (__error__) {
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Exception"]())){
                        st_11 = __error__;
                        st_11 = __error__;
                        __error_handled_1__ = true;
                        /* IL_5E: pop  */
                        
                        /* IL_5F: ldstr Catch */
                        /* IL_64: ldc.i4.0  */
                        /* IL_65: newarr System.Object */
                        /* IL_6A: call Void WriteLine(System.String, System.Object[]) */
                        asm0.x600005b(CILJS.new_string("Catch"),CILJS.new_array(t0,(0|0)));
                        /* IL_6F: leave.s IL_71 */
                        __pos__ = 0x71;
                    }
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                }
                break;
                case 0x71:
                /* IL_71: ret  */
                return ;
            }
        }
    };;
    /* static System.Boolean Program.What()*/
    asm.x6000002 = function What()
    {
        /* IL_00: ldc.i4.1  */
        /* IL_01: ret  */
        return (1|0);
    };;
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
