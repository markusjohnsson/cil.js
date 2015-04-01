var asm1;(function (asm) 
{
    asm.FullName = "iface3.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*System.Int32 Base.ICommon.DoIt()*/
    asm.x600000b = function ICommon_DoIt(arg0) 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  iface3.cs:10:24*/
        
        
        /*IL_01: ldc.i4.1  */
        /*IL_02: stloc.0  */
        loc0 = (1|0);
        
        /*IL_05: ldloc.0  */
        /*IL_06: ret  */
        return loc0;
    };;
    
    /*System.Int32 Base.DoIt()*/
    asm.x600000c = function DoIt(arg0) 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  iface3.cs:11:31*/
        
        
        /*IL_01: ldc.i4.2  */
        /*IL_02: stloc.0  */
        loc0 = (2|0);
        
        /*IL_05: ldloc.0  */
        /*IL_06: ret  */
        return loc0;
    };;
    
    /* Base..ctor()*/
    asm.x600000d = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*System.Int32 Derived.ICommon.DoIt()*/
    asm.x600000e = function ICommon_DoIt(arg0) 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  iface3.cs:16:24*/
        
        
        /*IL_01: ldc.i4.3  */
        /*IL_02: stloc.0  */
        loc0 = (3|0);
        
        /*IL_05: ldloc.0  */
        /*IL_06: ret  */
        return loc0;
    };;
    
    /*System.Int32 Derived.DoIt()*/
    asm.x600000f = function DoIt(arg0) 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  iface3.cs:17:35*/
        
        
        /*IL_01: ldc.i4.4  */
        /*IL_02: stloc.0  */
        loc0 = (4|0);
        
        /*IL_05: ldloc.0  */
        /*IL_06: ret  */
        return loc0;
    };;
    
    /* Derived..ctor()*/
    asm.x6000010 = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        asm1.x600000d(arg0);
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*System.Int32 ReallyDerived.DoIt()*/
    asm.x6000011 = function DoIt(arg0) 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  iface3.cs:22:32*/
        
        
        /*IL_01: ldc.i4.5  */
        /*IL_02: stloc.0  */
        loc0 = (5|0);
        
        /*IL_05: ldloc.0  */
        /*IL_06: ret  */
        return loc0;
    };;
    
    /* ReallyDerived..ctor()*/
    asm.x6000012 = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        asm1.x6000010(arg0);
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*static System.Int32 Test.Main()*/
    asm.x6000013_init = function () 
    {
        (asm1.ReallyDerived().init)();
        (asm1.ICommon().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function () 
    {
        BLR.init_base_types();
        asm.x6000013_init.apply(this,arguments);
        return asm.x6000013_.apply(this,arguments);
    };;
    asm.x6000013_ = function Main() 
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc6;
        var loc5;
        t0 = asm1.ReallyDerived();
        t1 = asm1.ICommon();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  iface3.cs:29:5*/
                
                
                /*IL_01: newobj Void .ctor() */
                /*IL_06: stloc.0  */
                loc0 = BLR.newobj(t0,asm1.x6000012,[null]);
                
                /*IL_07: ldloc.0  */
                /*IL_08: stloc.1  */
                loc1 = loc0;
                
                /*IL_09: ldloc.0  */
                /*IL_0A: stloc.2  */
                loc2 = loc0;
                
                /*IL_0B: ldloc.0  */
                /*IL_0C: stloc.3  */
                loc3 = loc0;
                
                /*IL_0D: ldloc.0  */
                /*IL_0E: stloc.s 4 */
                loc4 = loc0;
                
                /*IL_10: ldloc.0  */
                /*IL_11: callvirt Int32 DoIt() */
                /*IL_16: ldc.i4.5  */
                /*IL_18: ceq  */
                /*IL_19: stloc.s 6 */
                loc6 = ((((loc0.vtable)["asm1.x600000f"]())(loc0) === (5|0))?(1):(0));
                
                /*IL_1B: ldloc.s 6 */
                /*IL_1D: brtrue.s IL_24 */
                
                if(loc6){
                    __pos__ = 0x24;
                    continue;
                }
                
                /*IL_1F: ldc.i4.1  */
                /*IL_20: stloc.s 5 */
                loc5 = (1|0);
                
                /*IL_22: br.s IL_79 */
                __pos__ = 0x79;
                continue;
                case 0x24:
                
                /*IL_24: ldloc.0  */
                /*IL_25: callvirt Int32 DoIt() */
                /*IL_2A: ldc.i4.3  */
                /*IL_2C: ceq  */
                /*IL_2D: stloc.s 6 */
                loc6 = (((((loc0.ifacemap)[t1].x600000a)())(loc0) === (3|0))?(1):(0));
                
                /*IL_2F: ldloc.s 6 */
                /*IL_31: brtrue.s IL_38 */
                
                if(loc6){
                    __pos__ = 0x38;
                    continue;
                }
                
                /*IL_33: ldc.i4.2  */
                /*IL_34: stloc.s 5 */
                loc5 = (2|0);
                
                /*IL_36: br.s IL_79 */
                __pos__ = 0x79;
                continue;
                case 0x38:
                
                /*IL_38: ldloc.1  */
                /*IL_39: callvirt Int32 DoIt() */
                /*IL_3E: ldc.i4.5  */
                /*IL_40: ceq  */
                /*IL_41: stloc.s 6 */
                loc6 = ((((loc1.vtable)["asm1.x600000f"]())(loc1) === (5|0))?(1):(0));
                
                /*IL_43: ldloc.s 6 */
                /*IL_45: brtrue.s IL_4C */
                
                if(loc6){
                    __pos__ = 0x4C;
                    continue;
                }
                
                /*IL_47: ldc.i4.3  */
                /*IL_48: stloc.s 5 */
                loc5 = (3|0);
                
                /*IL_4A: br.s IL_79 */
                __pos__ = 0x79;
                continue;
                case 0x4C:
                
                /*IL_4C: ldloc.2  */
                /*IL_4D: callvirt Int32 DoIt() */
                /*IL_52: ldc.i4.2  */
                /*IL_54: ceq  */
                /*IL_55: stloc.s 6 */
                loc6 = ((((loc2.vtable)["asm1.x600000c"]())(loc2) === (2|0))?(1):(0));
                
                /*IL_57: ldloc.s 6 */
                /*IL_59: brtrue.s IL_60 */
                
                if(loc6){
                    __pos__ = 0x60;
                    continue;
                }
                
                /*IL_5B: ldc.i4.4  */
                /*IL_5C: stloc.s 5 */
                loc5 = (4|0);
                
                /*IL_5E: br.s IL_79 */
                __pos__ = 0x79;
                continue;
                case 0x60:
                
                /*IL_60: ldloc.3  */
                /*IL_61: callvirt Int32 DoIt() */
                /*IL_66: ldc.i4.3  */
                /*IL_68: ceq  */
                /*IL_69: stloc.s 6 */
                loc6 = (((((loc3.ifacemap)[t1].x600000a)())(BLR.convert_box_to_pointer_as_needed(loc3)) === (3|0))?(1):(0));
                
                /*IL_6B: ldloc.s 6 */
                /*IL_6D: brtrue.s IL_74 */
                
                if(loc6){
                    __pos__ = 0x74;
                    continue;
                }
                
                /*IL_6F: ldc.i4.5  */
                /*IL_70: stloc.s 5 */
                loc5 = (5|0);
                
                /*IL_72: br.s IL_79 */
                __pos__ = 0x79;
                continue;
                case 0x74:
                
                /*IL_74: ldc.i4.0  */
                /*IL_75: stloc.s 5 */
                loc5 = (0|0);
                case 0x79:
                
                /*IL_79: ldloc.s 5 */
                /*IL_7B: ret  */
                return loc5;
            }
        }
    };
    
    /* Test..ctor()*/
    asm.x6000014 = function _ctor(arg0) 
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
    asm.ICommon = BLR.declare_type("ICommon",
        [],
        function () 
        {
            return {};
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"ICommon",false,false,true,false,false,[],[
                    [asm1,"x600000a","DoIt"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    asm.Base = BLR.declare_type("Base",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Base",false,false,false,false,false,[],[
                    [asm1,"x600000c","DoIt"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,
                [asm1.ICommon()],
                {
                    'x600000a': function () {return asm1.x600000b;}
                });
        });
    asm.Derived = BLR.declare_type("Derived",
        [],
        function () 
        {
            return new (asm1.Base())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Derived",false,false,false,false,false,[],[
                    [asm1,"x600000f","DoIt"]
                ],asm1.Base(),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,
                [asm1.ICommon()],
                {
                    'x600000a': function () {return asm1.x600000e;}
                });
        });
    asm.ReallyDerived = BLR.declare_type("ReallyDerived",
        [],
        function () 
        {
            return new (asm1.Derived())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"ReallyDerived",false,false,false,false,false,[],[
                    [asm1,"x6000011","DoIt"]
                ],asm1.Derived(),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x6000011");
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,
                [asm1.ICommon()],
                {
                    'x600000a': function () {return asm1.x600000e;}
                });
        });
    asm.Test = BLR.declare_type("Test",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000013;
})(asm1 || (asm1 = {}));