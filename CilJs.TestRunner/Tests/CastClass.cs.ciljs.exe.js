var asm1;(function (asm)
{
    asm.FullName = "CastClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000004_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
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
        var t2;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        /* IL_00: call Void Test[A]() */
        (asm1.x6000005(asm1.A()))();
        /* IL_05: call Void Test[B]() */
        (asm1.x6000005(asm1.B()))();
        /* IL_0A: call Void Test[C]() */
        (asm1.x6000005(asm1.C()))();
        /* IL_0F: ret  */
        return ;
    };
    /* static System.Void Program.Test<T>()*/
    asm.x6000005_init = function (T)
    {
        return function ()
        {
            (asm1.A().init)();
            (asm1.B().init)();
            (asm1.C().init)();
            asm.x6000005 = asm.x6000005_;
        };
    };;
    asm.x6000005 = function (T)
    {
        return function ()
        {
            (asm.x6000005_init(T).apply)(this,arguments);
            return (asm.x6000005_(T).apply)(this,arguments);
        };
    };;
    asm.x6000005_ = function (T)
    {
        return function Test()
        {
            var t0;
            var t1;
            var t2;
            var t3;
            t0 = asm1.A();
            t1 = T;
            t2 = asm1.B();
            t3 = asm1.C();
            /* IL_00: newobj Void .ctor() */
            /* IL_05: call Void Cast[T](System.Object) */
            (asm1.x6000006(T))(CILJS.newobj(t0,asm1.x6000001,[null]));
            /* IL_0A: newobj Void .ctor() */
            /* IL_0F: call Void Cast[T](System.Object) */
            (asm1.x6000006(T))(CILJS.newobj(t2,asm1.x6000002,[null]));
            /* IL_14: newobj Void .ctor() */
            /* IL_19: call Void Cast[T](System.Object) */
            (asm1.x6000006(T))(CILJS.newobj(t3,asm1.x6000003,[null]));
            /* IL_1E: ret  */
            return ;
        };
    };
    /* static System.Void Program.Cast<T>(Object)*/
    asm.x6000006 = function (T)
    {
        return function Cast(arg0)
        {
            var t0;
            var in_block_0;
            var __pos__;
            var __error_handled_1__;
            t0 = (asm0)["System.Object"]();
            in_block_0 = true;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    
                    try {
                        /* IL_00: ldarg.0  */
                        /* IL_01: unbox.any T */
                        /* IL_06: pop  */
                        CILJS.unbox_any(arg0,T);
                        /* IL_07: ldstr Success */
                        /* IL_0C: ldc.i4.0  */
                        /* IL_0D: newarr System.Object */
                        /* IL_12: call Void WriteLine(System.String, System.Object[]) */
                        asm0.x600005b(CILJS.new_string("Success"),CILJS.new_array(t0,(0|0)));
                        /* IL_17: leave.s IL_2C */
                        __pos__ = 0x2C;
                    }
                    
                    catch (__error__) {
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Object"]())){
                            st_05 = __error__;
                            __error_handled_1__ = true;
                            /* IL_19: pop  */
                            
                            /* IL_1A: ldstr Failure */
                            /* IL_1F: ldc.i4.0  */
                            /* IL_20: newarr System.Object */
                            /* IL_25: call Void WriteLine(System.String, System.Object[]) */
                            asm0.x600005b(CILJS.new_string("Failure"),CILJS.new_array(t0,(0|0)));
                            /* IL_2A: leave.s IL_2C */
                            __pos__ = 0x2C;
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    break;
                    case 0x2C:
                    /* IL_2C: ret  */
                    return ;
                }
            }
        };
    };;
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
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
    asm.entryPoint = asm.x6000004;
})(asm1 || (asm1 = {}));
