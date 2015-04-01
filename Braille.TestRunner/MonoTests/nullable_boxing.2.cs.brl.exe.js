var asm1;(function (asm) 
{
    asm.FullName = "nullable_boxing.2.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*static System.Int32 Program.Main()*/
    asm.x600000a_init = function () 
    {
        ((asm1)["Program+Button"]().init)();
        ((asm0)["System.Nullable`1"]((asm0)["System.Int32"]()).init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function () 
    {
        BLR.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main() 
    {
        var t0;
        var t1;
        var t2;
        var loc4;
        var st_0D;
        var st_0E;
        var st_13;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc2;
        var loc1;
        var loc3;
        var loc0;
        t0 = (asm1)["Program+Button"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.Nullable`1"](t1);
        loc4 = new ((asm0)["System.Nullable`1"]((asm0)["System.Int32"]()))();
        ;
        ;
        ;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  nullable_boxing.2.cs:19:5*/
                
                asm1.x600000e();
                
                /*IL_01: ldsfld Button TheButton */
                /*IL_06: ldc.i4.1  */
                /*IL_07: newobj Void .ctor(System.Int32) */
                /*IL_0C: callvirt Int32 Counter(System.Nullable`1[System.Int32]) */
                /*IL_11: ldc.i4.2  */
                /*IL_13: ceq  */
                /*IL_14: stloc.2  */
                loc2 = ((asm1.x600000c(t0.TheButton,BLR.clone_value(BLR.newobj(t2,asm0.x60001a6,[null,(1|0)]))) === (2|0))?(1):(0));
                
                /*IL_15: ldloc.2  */
                /*IL_16: brtrue.s IL_1C */
                
                if(loc2){
                    __pos__ = 0x1C;
                    continue;
                }
                
                /*IL_18: ldc.i4.1  */
                /*IL_19: stloc.1  */
                loc1 = (1|0);
                
                /*IL_1A: br.s IL_4C */
                __pos__ = 0x4C;
                continue;
                case 0x1C:
                
                /*IL_1C: ldc.i4.1  */
                /*IL_1D: newarr System.Nullable`1[System.Int32] */
                /*IL_22: stloc.3  */
                loc3 = BLR.new_array(t2,(1|0));
                
                /*IL_23: ldloc.3  */
                /*IL_24: ldc.i4.0  */
                /*IL_25: ldelema System.Nullable`1[System.Int32] */
                st_0D = {
                    'w': function (v) 
                    {
                        (loc3.jsarr)[(0|0)] = v;
                    },
                    'r': function () 
                    {
                        return (loc3.jsarr)[(0|0)];
                    }
                };
                
                /*IL_2A: ldloca.s 4 */
                /*IL_2D: initobj System.Nullable`1[System.Int32] */
                loc4 = new t2();
                
                /*IL_32: ldloc.s 4 */
                st_0E = loc4;
                
                /*IL_34: stobj System.Nullable`1[System.Int32] */
                st_0D.w(st_0E);
                
                /*IL_39: ldloc.3  */
                /*IL_3A: stloc.0  */
                loc0 = loc3;
                
                /*IL_3B: ldloc.0  */
                /*IL_3C: ldc.i4.0  */
                /*IL_3D: callvirt Object GetValue(System.Int32) */
                /*IL_42: brfalse.s IL_47 */
                
                if((!(asm0.x6000172(loc0,(0|0))))){
                    __pos__ = 0x47;
                    continue;
                }
                
                /*IL_44: ldc.i4.2  */
                st_13 = (2|0);
                
                /*IL_45: br.s IL_48 */
                __pos__ = 0x48;
                continue;
                case 0x47:
                
                /*IL_47: ldc.i4.0  */
                st_13 = (0|0);
                case 0x48:
                
                /*IL_48: nop  */
                
                
                /*IL_49: stloc.1  */
                loc1 = st_13;
                case 0x4C:
                
                /*IL_4C: ldloc.1  */
                /*IL_4D: ret  */
                return loc1;
            }
        }
    };
    
    /* Program..ctor()*/
    asm.x600000b = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*System.Int32 Button.Counter(Nullable`1)*/
    asm.x600000c = function Counter(arg0, arg1) 
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  nullable_boxing.2.cs:9:9*/
                
                
                /*IL_01: ldarga.s 1 */
                /*IL_03: call Boolean get_HasValue() */
                /*IL_08: stloc.1  */
                loc1 = asm0.x60001a7({
                        'w': function (v) 
                        {
                            arg1 = v;
                        },
                        'r': function () 
                        {
                            return arg1;
                        }
                    });
                
                /*IL_09: ldloc.1  */
                /*IL_0A: brtrue.s IL_10 */
                
                if(loc1){
                    __pos__ = 0x10;
                    continue;
                }
                
                /*IL_0C: ldc.i4.0  */
                /*IL_0D: stloc.0  */
                loc0 = (0|0);
                
                /*IL_0E: br.s IL_1C */
                __pos__ = 0x1C;
                continue;
                case 0x10:
                
                /*IL_10: ldarga.s 1 */
                /*IL_12: call Int32 get_Value() */
                /*IL_17: ldc.i4.1  */
                /*IL_18: add  */
                /*IL_19: stloc.0  */
                loc0 = (asm0.x60001a8({
                        'w': function (v) 
                        {
                            arg1 = v;
                        },
                        'r': function () 
                        {
                            return arg1;
                        }
                    }) + (1|0)) | (0|0);
                case 0x1C:
                
                /*IL_1C: ldloc.0  */
                /*IL_1D: ret  */
                return loc0;
            }
        }
    };;
    
    /* Button..ctor()*/
    asm.x600000d = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*static  Button..cctor()*/
    asm.x600000e_init = function () 
    {
        ((asm1)["Program+Button"]().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function () 
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function _cctor() 
    {
        var t0;
        var __pos__;
        
        if((asm1)["Program+Button"]().FieldsInitialized){
            return;
        }
        (asm1)["Program+Button"]().FieldsInitialized = true;
        t0 = (asm1)["Program+Button"]();
        __pos__ = 0x0;
        asm1.x600000e();
        
        /*IL_00: newobj Void .ctor() */
        /*IL_05: stsfld Button TheButton */
        (t0)["TheButton"] = BLR.newobj(t0,asm1.x600000d,[null]);
        
        /*IL_0A: ret  nullable_boxing.2.cs:16707566:0*/
        return ;
    };
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
    asm.Program = BLR.declare_type("Program",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Program+Button"] = BLR.declare_type("Button",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+Button",false,false,false,false,false,[],[
                    [asm1,"x600000c","Counter"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.TheButton = null;
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));