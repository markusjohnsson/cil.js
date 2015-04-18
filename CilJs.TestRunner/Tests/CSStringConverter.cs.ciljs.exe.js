var asm1;(function (asm)
{
    asm.FullName = "CSStringConverter.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  CSStringConverter.cs:7:43*/
        /* IL_01: ret  CSStringConverter.cs:7:45*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void S.Append(String)*/
    asm.x600000c = function Append(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  CSStringConverter.cs:12:5*/
        /* IL_01: ldarg.1  */
        /* IL_02: call Void Log(System.Object) */
        asm1.x6000001(arg1);
        /* IL_07: nop  */
        /* IL_08: ret  CSStringConverter.cs:14:5*/
        return ;
    };;
    /* System.Void S.Append(Char)*/
    asm.x600000d = function Append(arg0, arg1)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Char"]();
        __pos__ = 0x0;
        /* IL_00: nop  CSStringConverter.cs:16:5*/
        /* IL_01: ldarg.1  */
        /* IL_02: box System.Char */
        /* IL_07: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg1,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: nop  */
        /* IL_0D: ret  CSStringConverter.cs:18:5*/
        return ;
    };;
    /*  S..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.String CSStringConverter.Convert(String)*/
    asm.x600000f_init = function ()
    {
        (asm1.S().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Convert(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc3;
        var __switch_value__;
        var __jmp__;
        var loc4;
        var loc2;
        t0 = asm1.S();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  CSStringConverter.cs:24:5*/
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x600000e,[null]);
                /* IL_07: ldloc.0  */
                /* IL_08: ldc.i4.s 34 */
                /* IL_0A: callvirt Void Append(System.Char) */
                asm1.x600000d(loc0,(34|0));
                /* IL_0F: nop  */
                
                /* IL_10: ldc.i4.0  */
                /* IL_11: stloc.1  */
                loc1 = (0|0);
                /* IL_12: br IL_E9 CSStringConverter.cs:16707566:0*/
                __pos__ = 0xE9;
                continue;
                case 0x17:
                /* IL_17: nop  CSStringConverter.cs:30:9*/
                
                /* IL_18: ldarg.0  */
                /* IL_19: ldloc.1  */
                /* IL_1A: callvirt Char get_Chars(System.Int32) */
                /* IL_1F: stloc.3  */
                loc3 = asm0.x60001b9(arg0,loc1);
                /* IL_20: ldloc.3  */
                /* IL_21: ldc.i4.s 13 */
                /* IL_23: bgt.s IL_4B */
                
                if (loc3 > (13|0)){
                    __pos__ = 0x4B;
                    continue;
                }
                /* IL_25: ldloc.3  */
                /* IL_26: ldc.i4.0  */
                /* IL_27: beq.s IL_8E */
                
                if (loc3 === (0|0)){
                    __pos__ = 0x8E;
                    continue;
                }
                /* IL_29: ldloc.3  */
                /* IL_2A: ldc.i4.s 9 */
                /* IL_2C: sub  */
                /* IL_2D: switch System.Int32[] */
                __switch_value__ = CILJS.unsigned_value((loc3 - (9|0)) | (0|0));
                
                if (__switch_value__ >= 0x5){
                    __pos__ = 0x46;
                    continue;
                }
                __jmp__ = [
                    0x56,
                    0x64,
                    0x8E,
                    0x8E,
                    0x72
                ];
                __pos__ = (0x46 + (__jmp__)[__switch_value__]);
                continue;
                case 0x46:
                /* IL_46: br IL_D4 */
                __pos__ = 0xD4;
                continue;
                case 0x4B:
                /* IL_4B: ldloc.3  */
                /* IL_4C: ldc.i4.s 34 */
                /* IL_4E: beq.s IL_C6 */
                
                if (loc3 === (34|0)){
                    __pos__ = 0xC6;
                    continue;
                }
                /* IL_50: ldloc.3  */
                /* IL_51: ldc.i4.s 92 */
                /* IL_53: beq.s IL_6B */
                
                if (loc3 === (92|0)){
                    __pos__ = 0x6B;
                    continue;
                }
                /* IL_55: ldloc.3  */
                /* IL_56: ldc.i4 8232 */
                /* IL_5B: sub  */
                /* IL_5C: switch System.Int32[] */
                __switch_value__ = CILJS.unsigned_value((loc3 - (8232|0)) | (0|0));
                
                if (__switch_value__ >= 0x2){
                    __pos__ = 0x69;
                    continue;
                }
                __jmp__ = [
                    0x10,
                    0x10
                ];
                __pos__ = (0x69 + (__jmp__)[__switch_value__]);
                continue;
                case 0x69:
                /* IL_69: br.s IL_D4 */
                __pos__ = 0xD4;
                continue;
                case 0x6B:
                /* IL_6B: ldloc.0  */
                /* IL_6C: ldstr \\ */
                /* IL_71: callvirt Void Append(System.String) */
                asm1.x600000c(loc0,CILJS.new_string("\\\\"));
                /* IL_76: nop  */
                
                /* IL_77: br.s IL_E4 CSStringConverter.cs:39:21*/
                __pos__ = 0xE4;
                continue;
                case 0x79:
                /* IL_79: ldloc.0  */
                /* IL_7A: ldarg.0  */
                /* IL_7B: ldloc.1  */
                /* IL_7C: callvirt Char get_Chars(System.Int32) */
                /* IL_81: call String EscapeChar(System.Char) */
                /* IL_86: callvirt Void Append(System.String) */
                asm1.x600000c(loc0,asm1.x6000010(asm0.x60001b9(arg0,loc1)));
                /* IL_8B: nop  */
                
                /* IL_8C: br.s IL_E4 CSStringConverter.cs:44:21*/
                __pos__ = 0xE4;
                continue;
                case 0x8E:
                /* IL_8E: ldloc.0  */
                /* IL_8F: ldstr \0 */
                /* IL_94: callvirt Void Append(System.String) */
                asm1.x600000c(loc0,CILJS.new_string("\\0"));
                /* IL_99: nop  */
                
                /* IL_9A: br.s IL_E4 CSStringConverter.cs:48:21*/
                __pos__ = 0xE4;
                continue;
                case 0x9C:
                /* IL_9C: ldloc.0  */
                /* IL_9D: ldstr \t */
                /* IL_A2: callvirt Void Append(System.String) */
                asm1.x600000c(loc0,CILJS.new_string("\\t"));
                /* IL_A7: nop  */
                
                /* IL_A8: br.s IL_E4 CSStringConverter.cs:52:21*/
                __pos__ = 0xE4;
                continue;
                case 0xAA:
                /* IL_AA: ldloc.0  */
                /* IL_AB: ldstr \n */
                /* IL_B0: callvirt Void Append(System.String) */
                asm1.x600000c(loc0,CILJS.new_string("\\n"));
                /* IL_B5: nop  */
                
                /* IL_B6: br.s IL_E4 CSStringConverter.cs:56:21*/
                __pos__ = 0xE4;
                continue;
                case 0xB8:
                /* IL_B8: ldloc.0  */
                /* IL_B9: ldstr \r */
                /* IL_BE: callvirt Void Append(System.String) */
                asm1.x600000c(loc0,CILJS.new_string("\\r"));
                /* IL_C3: nop  */
                
                /* IL_C4: br.s IL_E4 CSStringConverter.cs:60:21*/
                __pos__ = 0xE4;
                continue;
                case 0xC6:
                /* IL_C6: ldloc.0  */
                /* IL_C7: ldstr \" */
                /* IL_CC: callvirt Void Append(System.String) */
                asm1.x600000c(loc0,CILJS.new_string("\\\""));
                /* IL_D1: nop  */
                
                /* IL_D2: br.s IL_E4 CSStringConverter.cs:64:21*/
                __pos__ = 0xE4;
                continue;
                case 0xD4:
                /* IL_D4: ldloc.0  */
                /* IL_D5: ldarg.0  */
                /* IL_D6: ldloc.1  */
                /* IL_D7: callvirt Char get_Chars(System.Int32) */
                /* IL_DC: callvirt Void Append(System.Char) */
                asm1.x600000d(loc0,asm0.x60001b9(arg0,loc1));
                /* IL_E1: nop  */
                
                case 0xE4:
                /* IL_E4: nop  CSStringConverter.cs:70:9*/
                
                /* IL_E5: ldloc.1  */
                /* IL_E6: ldc.i4.1  */
                /* IL_E7: add  */
                /* IL_E8: stloc.1  */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0xE9:
                /* IL_E9: ldloc.1  */
                /* IL_EA: ldarg.0  */
                /* IL_EB: callvirt Int32 get_Length() */
                /* IL_F1: clt  */
                /* IL_F2: stloc.s 4 */
                loc4 = ((loc1 < asm0.x60001c3(arg0)) ? (1) : (0));
                /* IL_F4: ldloc.s 4 */
                /* IL_F6: brtrue IL_17 */
                
                if (loc4){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_FB: ldloc.0  */
                /* IL_FC: ldc.i4.s 34 */
                /* IL_FE: callvirt Void Append(System.Char) */
                asm1.x600000d(loc0,(34|0));
                /* IL_103: nop  */
                
                /* IL_104: ldloc.0  */
                /* IL_105: callvirt String ToString() */
                /* IL_10A: stloc.2  */
                loc2 = ((loc0.vtable)["asm0.x6000005"]())(loc0);
                /* IL_10D: ldloc.2  */
                /* IL_10E: ret  */
                return loc2;
            }
        }
    };
    /* static System.String CSStringConverter.EscapeChar(Char)*/
    asm.x6000010 = function EscapeChar(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  CSStringConverter.cs:78:5*/
        /* IL_01: ldstr \u */
        /* IL_06: ldarg.0  */
        /* IL_07: box System.Int32 */
        /* IL_0C: call String Concat(System.Object, System.Object) */
        /* IL_11: stloc.0  */
        loc0 = asm0.x60001bf(CILJS.new_string("\\u"),{
                'boxed': arg0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_14: ldloc.0  */
        /* IL_15: ret  */
        return loc0;
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
    asm.S = CILJS.declare_type(
        "S",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"S",false,false,false,false,false,[],[
                    [asm1, "x600000c", "Append"],
                    [asm1, "x600000d", "Append"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.CSStringConverter = CILJS.declare_type(
        "CSStringConverter",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CSStringConverter",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
