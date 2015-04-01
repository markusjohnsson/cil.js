var asm1;(function (asm) 
{
    asm.FullName = "Foreach.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*Iter A.GetEnumerator()*/
    asm.x600000a_init = function () 
    {
        (asm1.Iter().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function (arg0) 
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function GetEnumerator(arg0) 
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Int32"]();
        t1 = asm1.Iter();
        __pos__ = 0x0;
        
        /*IL_00: nop  Foreach.cs:6:5*/
        
        
        /*IL_01: ldc.i4.5  */
        /*IL_02: newarr System.Int32 */
        /*IL_07: stloc.0  */
        loc0 = BLR.new_array(t0,(5|0));
        
        /*IL_08: ldloc.0  */
        /*IL_09: ldc.i4.0  */
        /*IL_0A: ldc.i4.0  */
        /*IL_0B: stelem.i4  */
        (loc0.jsarr)[(0|0)] = (0|0);
        
        /*IL_0C: ldloc.0  */
        /*IL_0D: ldc.i4.1  */
        /*IL_0E: ldc.i4.1  */
        /*IL_0F: stelem.i4  */
        (loc0.jsarr)[(1|0)] = (1|0);
        
        /*IL_10: ldloc.0  */
        /*IL_11: ldc.i4.2  */
        /*IL_12: ldc.i4.2  */
        /*IL_13: stelem.i4  */
        (loc0.jsarr)[(2|0)] = (2|0);
        
        /*IL_14: ldloc.0  */
        /*IL_15: ldc.i4.3  */
        /*IL_16: ldc.i4.4  */
        /*IL_17: stelem.i4  */
        (loc0.jsarr)[(3|0)] = (4|0);
        
        /*IL_18: ldloc.0  */
        /*IL_19: ldc.i4.4  */
        /*IL_1A: ldc.i4.8  */
        /*IL_1B: stelem.i4  */
        (loc0.jsarr)[(4|0)] = (8|0);
        
        /*IL_1C: ldloc.0  */
        /*IL_1D: newobj Void .ctor(System.Int32[]) */
        /*IL_22: stloc.1  */
        loc1 = BLR.newobj(t1,asm1.x600000c,[null,loc0]);
        
        /*IL_25: ldloc.1  */
        /*IL_26: ret  */
        return loc1;
    };
    
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
    
    /*System.Boolean Iter.MoveNext()*/
    asm.x600000d = function MoveNext(arg0) 
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var __pos__;
        var loc1;
        var loc0;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        __pos__ = 0x0;
        
        /*IL_00: nop  Foreach.cs:27:28*/
        
        
        /*IL_01: ldarg.0  Foreach.cs:27:30*/
        st_00 = arg0;
        
        /*IL_02: dup  */
        st_06 = (st_01 = st_00);
        
        /*IL_03: ldfld Int32 i */
        st_02 = st_01.Iteri;
        
        /*IL_08: ldc.i4.1  */
        st_03 = (1|0);
        
        /*IL_09: add  */
        st_04 = ((st_02 + st_03) | (0|0));
        
        /*IL_0A: dup  */
        st_07 = (st_05 = st_04);
        
        /*IL_0B: stloc.1  */
        loc1 = st_05;
        
        /*IL_0C: stfld Int32 i */
        st_06.Iteri = st_07;
        
        /*IL_11: ldloc.1  */
        /*IL_12: ldarg.0  */
        /*IL_13: ldfld Int32[] nums */
        /*IL_18: ldlen  */
        /*IL_19: conv.i4  */
        /*IL_1B: clt  */
        /*IL_1C: stloc.0  */
        loc0 = ((loc1 < (arg0.Iternums.jsarr.length | (0|0)))?(1):(0));
        
        /*IL_1F: ldloc.0  */
        /*IL_20: ret  */
        return loc0;
    };;
    
    /*System.Int32 Iter.get_Current()*/
    asm.x600000e = function get_Current(arg0) 
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        
        /*IL_00: nop  Foreach.cs:28:30*/
        
        
        /*IL_01: ldarg.0  */
        /*IL_02: ldfld Int32[] nums */
        /*IL_07: ldarg.0  */
        /*IL_08: ldfld Int32 i */
        /*IL_0D: ldelem.i4  */
        /*IL_0E: stloc.0  */
        loc0 = (arg0.Iternums.jsarr)[arg0.Iteri];
        
        /*IL_11: ldloc.0  */
        /*IL_12: ret  */
        return loc0;
    };;
    
    /* Iter..ctor(Int32[])*/
    asm.x600000c = function _ctor(arg0, arg1) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: ldc.i4.m1  */
        /*IL_02: stfld Int32 i */
        arg0.Iteri = (-1|0);
        
        /*IL_07: ldarg.0  */
        /*IL_08: call Void .ctor() */
        
        
        /*IL_0D: nop  */
        
        
        /*IL_0E: nop  Foreach.cs:23:5*/
        
        
        /*IL_0F: ldarg.0  */
        /*IL_10: ldarg.1  */
        /*IL_11: stfld Int32[] nums */
        arg0.Iternums = arg1;
        
        /*IL_16: nop  Foreach.cs:25:5*/
        
        
        /*IL_17: ret  */
        return ;
    };;
    
    /*static System.Void Program.Main()*/
    asm.x600000f_init = function () 
    {
        (asm1.A().init)();
        ((asm0)["System.IDisposable"]().init)();
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
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var in_block_1;
        var __finally_continuation_1__;
        var loc1;
        var loc3;
        var loc4;
        t0 = asm1.A();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.IDisposable"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  Foreach.cs:34:5*/
                
                
                /*IL_01: newobj Void .ctor() */
                /*IL_06: stloc.0  */
                loc0 = BLR.newobj(t0,asm1.x600000b,[null]);
                
                /*IL_07: nop  Foreach.cs:36:9*/
                
                
                /*IL_08: ldloc.0  */
                /*IL_09: callvirt Iter GetEnumerator() */
                /*IL_0E: stloc.2  */
                loc2 = asm1.x600000a(loc0);
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 15;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0xF:
                            
                            /*IL_0F: br.s IL_26 Foreach.cs:16707566:0*/
                            __pos__ = 0x26;
                            continue;
                            case 0x11:
                            
                            /*IL_11: ldloc.2  */
                            /*IL_12: callvirt Int32 get_Current() */
                            /*IL_17: stloc.1  */
                            loc1 = asm1.x600000e(loc2);
                            
                            /*IL_18: nop  Foreach.cs:37:9*/
                            
                            
                            /*IL_19: ldloc.1  */
                            /*IL_1A: box System.Int32 */
                            /*IL_1F: call Void Log(System.Object) */
                            asm1.x6000001({
                                    'boxed': loc1,
                                    'type': t1,
                                    'vtable': t1.prototype.vtable,
                                    'ifacemap': t1.prototype.ifacemap
                                });
                            
                            /*IL_24: nop  */
                            
                            
                            /*IL_25: nop  Foreach.cs:39:9*/
                            
                            case 0x26:
                            
                            /*IL_26: ldloc.2  */
                            /*IL_27: callvirt Boolean MoveNext() */
                            /*IL_2C: stloc.3  */
                            loc3 = asm1.x600000d(loc2);
                            
                            /*IL_2D: ldloc.3  */
                            /*IL_2E: brtrue.s IL_11 */
                            
                            if(loc3){
                                __pos__ = 0x11;
                                continue;
                            }
                            
                            /*IL_30: leave.s IL_4C */
                            in_block_1 = false;
                            __pos__ = 0x4C;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 50;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x32:
                            
                            /*IL_32: ldloc.2  */
                            /*IL_33: isinst System.IDisposable */
                            /*IL_38: stloc.s 4 */
                            loc4 = t2.IsInst(loc2);
                            
                            /*IL_3A: ldloc.s 4 */
                            /*IL_3C: ldnull  */
                            /*IL_3E: ceq  */
                            /*IL_3F: stloc.3  */
                            loc3 = ((loc4 === null)?(1):(0));
                            
                            /*IL_40: ldloc.3  */
                            /*IL_41: brtrue.s IL_4B */
                            
                            if(loc3){
                                __pos__ = 0x4B;
                                continue;
                            }
                            
                            /*IL_43: ldloc.s 4 */
                            /*IL_45: callvirt Void Dispose() */
                            (((loc4.ifacemap)[t2].x60000c7)())(BLR.convert_box_to_pointer_as_needed(loc4));
                            
                            /*IL_4A: nop  */
                            
                            case 0x4B:
                            
                            /*IL_4B: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                    }
                }
                break;
                case 0x4C:
                
                /*IL_4C: nop  Foreach.cs:16707566:0*/
                
                
                /*IL_4D: ret  Foreach.cs:40:5*/
                return ;
            }
        }
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
                    [asm1,"x600000a","GetEnumerator"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Iter = BLR.declare_type("Iter",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Iter",false,false,false,false,false,[],[
                    [asm1,"x600000d","MoveNext"],
                    [asm1,"x600000e","get_Current"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Iteri = 0;
            this.prototype.Iternums = null;
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