var asm1;(function (asm)
{
    asm.FullName = "GenericNesting2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
    asm.x6000001 = function _ctor(arg0)
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
    /* static System.Void Program.Main()*/
    asm.x6000002_init = function ()
    {
        ((asm1)["A`1+B+C"]((asm0)["System.Int32"]()).init)();
        ((asm1)["A`1+B+C"]((asm0)["System.String"]()).init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function ()
    {
        asm.x6000002_init();
        return asm.x6000002_();
    };;
    asm.x6000002_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        t1 = (asm1)["A`1+B+C"](t0);
        t2 = (asm0)["System.String"]();
        t3 = (asm1)["A`1+B+C"](t2);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: ldc.i4.s 123 */
                /* IL_08: call Void Foo(System.Int32) */
                asm1.x6000005(CILJS.newobj(t1,asm1.x6000009,[null]),(123|0));
                /* IL_0D: nop  */
                
                /* IL_0E: newobj Void .ctor() */
                /* IL_13: ldstr A */
                /* IL_18: call Void Foo(System.String) */
                asm1.x6000005(CILJS.newobj(t3,asm1.x6000009,[null]),CILJS.new_string("A"));
                /* IL_1D: nop  */
                
                /* IL_1E: ldc.i4.s 123 */
                /* IL_20: call Void Bar(System.Int32) */
                (asm1.x6000006((asm0)["System.Int32"]()))((123|0));
                /* IL_25: nop  */
                
                /* IL_26: ldstr B */
                /* IL_2B: call Void Bar(System.String) */
                (asm1.x6000006((asm0)["System.String"]()))(CILJS.new_string("B"));
                /* IL_30: nop  */
                
                /* IL_31: ldc.i4.s 123 */
                /* IL_33: ldstr C */
                /* IL_38: call Void Baz[System.String](System.Int32, System.String) */
                (asm1.x6000007((asm0)["System.Int32"](),(asm0)["System.String"]()))((123|0),CILJS.new_string("C"));
                /* IL_3D: nop  */
                
                /* IL_3E: newobj Void .ctor() */
                /* IL_43: ldstr C */
                /* IL_48: ldc.i4 321 */
                /* IL_4D: call Void Buz[System.Int32](System.String, System.Int32) */
                (asm1.x6000008((asm0)["System.Int32"]()))(CILJS.newobj(t3,asm1.x6000009,[null]),CILJS.new_string("C"),(321|0));
                /* IL_52: nop  */
                
                /* IL_53: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
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
    /*  B..ctor()*/
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
    /* System.Void C.Foo(T)*/
    asm.x6000005 = function Foo(arg0, arg1)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        t0 = ((arg0.constructor.GenericArguments)["asm1.t2000005"])[0];
        t1 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: box T */
                /* IL_07: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.box(arg1,t0));
                /* IL_0C: nop  */
                
                /* IL_0D: ldarga.s 1 */
                /* IL_15: callvirt Type GetType() */
                /* IL_1A: callvirt String get_FullName() */
                /* IL_1F: ldc.i4.0  */
                /* IL_20: newarr System.Object */
                /* IL_25: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b((((asm0.x60000f2(CILJS.box(arg1,t0)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg1,t0))),CILJS.new_array(t1,(0|0)));
                /* IL_2A: nop  */
                
                /* IL_2B: ret  */
                return ;
            }
        }
    };;
    /* static System.Void C.Bar(T)*/
    asm.x6000006 = function (T)
    {
        return function Bar(arg0)
        {
            var t0;
            var t1;
            var in_block_0;
            var __pos__;
            t0 = T;
            t1 = (asm0)["System.Object"]();
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: box T */
                    /* IL_07: call Void WriteLine(System.Object) */
                    asm0.x600005a(CILJS.box(arg0,t0));
                    /* IL_0C: nop  */
                    
                    /* IL_0D: ldarga.s 0 */
                    /* IL_15: callvirt Type GetType() */
                    /* IL_1A: callvirt String get_FullName() */
                    /* IL_1F: ldc.i4.0  */
                    /* IL_20: newarr System.Object */
                    /* IL_25: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b((((asm0.x60000f2(CILJS.box(arg0,t0)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg0,t0))),CILJS.new_array(t1,(0|0)));
                    /* IL_2A: nop  */
                    
                    /* IL_2B: ret  */
                    return ;
                }
            }
        };
    };;
    /* static System.Void C.Baz<T2>(T,T2)*/
    asm.x6000007 = function (T, T2)
    {
        return function Baz(arg0, arg1)
        {
            var t0;
            var t1;
            var t2;
            var in_block_0;
            var __pos__;
            t0 = T;
            t1 = T2;
            t2 = (asm0)["System.Object"]();
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: box T */
                    /* IL_07: call Void WriteLine(System.Object) */
                    asm0.x600005a(CILJS.box(arg0,t0));
                    /* IL_0C: nop  */
                    
                    /* IL_0D: ldarg.1  */
                    /* IL_0E: box T2 */
                    /* IL_13: call Void WriteLine(System.Object) */
                    asm0.x600005a(CILJS.box(arg1,t1));
                    /* IL_18: nop  */
                    
                    /* IL_19: ldarga.s 0 */
                    /* IL_21: callvirt Type GetType() */
                    /* IL_26: callvirt String get_FullName() */
                    /* IL_2B: ldc.i4.0  */
                    /* IL_2C: newarr System.Object */
                    /* IL_31: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b((((asm0.x60000f2(CILJS.box(arg0,t0)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg0,t0))),CILJS.new_array(t2,(0|0)));
                    /* IL_36: nop  */
                    
                    /* IL_37: ldarga.s 1 */
                    /* IL_3F: callvirt Type GetType() */
                    /* IL_44: callvirt String get_FullName() */
                    /* IL_49: ldc.i4.0  */
                    /* IL_4A: newarr System.Object */
                    /* IL_4F: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b((((asm0.x60000f2(CILJS.box(arg1,t1)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg1,t1))),CILJS.new_array(t2,(0|0)));
                    /* IL_54: nop  */
                    
                    /* IL_55: ret  */
                    return ;
                }
            }
        };
    };;
    /* System.Void C.Buz<T2>(T,T2)*/
    asm.x6000008 = function (T2)
    {
        return function Buz(arg0, arg1, arg2)
        {
            var t0;
            var t1;
            var t2;
            var in_block_0;
            var __pos__;
            t0 = ((arg0.constructor.GenericArguments)["asm1.t2000005"])[0];
            t1 = T2;
            t2 = (asm0)["System.Object"]();
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.1  */
                    /* IL_02: box T */
                    /* IL_07: call Void WriteLine(System.Object) */
                    asm0.x600005a(CILJS.box(arg1,t0));
                    /* IL_0C: nop  */
                    
                    /* IL_0D: ldarg.2  */
                    /* IL_0E: box T2 */
                    /* IL_13: call Void WriteLine(System.Object) */
                    asm0.x600005a(CILJS.box(arg2,t1));
                    /* IL_18: nop  */
                    
                    /* IL_19: ldarga.s 1 */
                    /* IL_21: callvirt Type GetType() */
                    /* IL_26: callvirt String get_FullName() */
                    /* IL_2B: ldc.i4.0  */
                    /* IL_2C: newarr System.Object */
                    /* IL_31: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b((((asm0.x60000f2(CILJS.box(arg1,t0)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg1,t0))),CILJS.new_array(t2,(0|0)));
                    /* IL_36: nop  */
                    
                    /* IL_37: ldarga.s 2 */
                    /* IL_3F: callvirt Type GetType() */
                    /* IL_44: callvirt String get_FullName() */
                    /* IL_49: ldc.i4.0  */
                    /* IL_4A: newarr System.Object */
                    /* IL_4F: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b((((asm0.x60000f2(CILJS.box(arg2,t1)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg2,t1))),CILJS.new_array(t2,(0|0)));
                    /* IL_54: nop  */
                    
                    /* IL_55: ret  */
                    return ;
                }
            }
        };
    };;
    /*  C..ctor()*/
    asm.x6000009 = function _ctor(arg0)
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
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A_1() { c.init(); }");
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
    (asm)["A`1+B"] = CILJS.declare_type(
        "B",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1+B",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            (this.GenericArguments)["asm1.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000004<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function B() { c.init(); }");
    (asm)["A`1+B+C"] = CILJS.declare_type(
        "C",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1+B+C",false,false,false,true,false,[],[
                    [asm1, "x6000005", "Foo"],
                    [asm1, "x6000008", "Buz"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            (this.GenericArguments)["asm1.t2000005"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000005<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function C() { c.init(); }");
    asm.entryPoint = asm.x6000002;
})(asm1 || (asm1 = {}));
