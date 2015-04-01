var asm1;(function (asm) 
{
    asm.FullName = "CallVirtualMethodOnGenericParameter.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    
    /*static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    
    /* TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*System.Void A.M()*/
    asm.x600000a = function M(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  CallVirtualMethodOnGenericParameter.cs:5:5*/
        
        
        /*IL_01: ldstr A */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("A"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ret  CallVirtualMethodOnGenericParameter.cs:7:5*/
        return ;
    };;
    
    /* A..ctor()*/
    asm.x600000b = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*System.Void B.M()*/
    asm.x600000c = function M(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  CallVirtualMethodOnGenericParameter.cs:13:5*/
        
        
        /*IL_01: ldstr B */
        /*IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("B"));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: ret  CallVirtualMethodOnGenericParameter.cs:15:5*/
        return ;
    };;
    
    /* B..ctor()*/
    asm.x600000d = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        asm1.x600000b(arg0);
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*static System.Void Program.X<T>(T)*/
    asm.x600000e = function (T) 
    {
        return function X(arg0) 
        {
            var __pos__;
            __pos__ = 0x0;
            
            /*IL_00: nop  CallVirtualMethodOnGenericParameter.cs:21:5*/
            
            
            /*IL_01: ldarga.s 0 */
            /*IL_09: callvirt Void M() */
            
            /*warning: ignoring prefixes constrained.*/
            (((arg0.vtable || T.prototype.vtable)["asm1.x600000a"])())(BLR.dereference_pointer_as_needed({
                        'w': function (v) 
                        {
                            arg0 = v;
                        },
                        'r': function () 
                        {
                            return arg0;
                        }
                    }));
            
            /*IL_0E: nop  */
            
            
            /*IL_0F: ret  CallVirtualMethodOnGenericParameter.cs:23:5*/
            return ;
        };
    };;
    
    /*static System.Void Program.Main()*/
    asm.x600000f_init = function () 
    {
        (asm1.A().init)();
        (asm1.B().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function () 
    {
        BLR.init_base_types();
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main() 
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        __pos__ = 0x0;
        
        /*IL_00: nop  CallVirtualMethodOnGenericParameter.cs:26:5*/
        
        
        /*IL_01: newobj Void .ctor() */
        /*IL_06: call Void X[A](A) */
        (asm1.x600000e(asm1.A()))(BLR.newobj(t0,asm1.x600000b,[null]));
        
        /*IL_0B: nop  */
        
        
        /*IL_0C: newobj Void .ctor() */
        /*IL_11: call Void X[B](B) */
        (asm1.x600000e(asm1.B()))(BLR.newobj(t1,asm1.x600000d,[null]));
        
        /*IL_16: nop  */
        
        
        /*IL_17: newobj Void .ctor() */
        /*IL_1C: call Void X[A](A) */
        (asm1.x600000e(asm1.A()))(BLR.newobj(t1,asm1.x600000d,[null]));
        
        /*IL_21: nop  */
        
        
        /*IL_22: ret  CallVirtualMethodOnGenericParameter.cs:30:5*/
        return ;
    };
    
    /* Program..ctor()*/
    asm.x6000010 = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    asm.TestLog = BLR.declare_type("TestLog",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = BLR.declare_type("A",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1,"x600000a","M"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = BLR.declare_type("B",
        [],
        function () 
        {
            return new (asm1.A())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1,"x600000c","M"]
                ],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = BLR.declare_type("Program",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));