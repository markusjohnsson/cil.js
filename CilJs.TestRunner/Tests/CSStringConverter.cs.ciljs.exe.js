var asm2; (function (asm)
{
    asm.FullName = "CSStringConverter.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: ret */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void S.Append(String)*/
    asm.x6000003 = function Append(arg0,arg1)
    {
        /* IL_00: ldarg.1 */
        /* IL_01: call Void Log(System.Object)*/
        asm1.x6000001(arg1);
        /* IL_06: ret */
        return ;
    };;
    /* System.Void S.Append(Char)*/
    asm.x6000004 = function Append(arg0,arg1)
    {
        var t0;
        t0 = (asm0)["System.Char"]();
        /* IL_00: ldarg.1 */
        /* IL_01: box System.Char*/
        /* IL_06: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': arg1,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0B: ret */
        return ;
    };;
    /*  S..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.String CSStringConverter.Convert(String)*/
    asm.x6000006_init = function ()
    {
        (asm2.S().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0)
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function Convert(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var __switch_value__;
        var __jmp__;
        t0 = asm2.S();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = CILJS.newobj(t0,asm2.x6000005,[null]);
                /* IL_06: ldloc.0 */
                /* IL_07: ldc.i4.s 34*/
                /* IL_09: callvirt Void Append(System.Char)*/
                asm2.x6000004(loc0,(34|0));
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.1 */
                loc1 = (0|0);
                /* IL_10: br IL_DB*/
                __pos__ = 0xDB;
                continue;
                case 0x15:
                /* IL_15: ldarg.0 */
                /* IL_16: ldloc.1 */
                /* IL_17: callvirt Char get_Chars(System.Int32)*/
                /* IL_1C: stloc.2 */
                loc2 = asm0.x6000125(arg0,loc1);
                /* IL_1D: ldloc.2 */
                /* IL_1E: ldc.i4.s 13*/
                /* IL_20: bgt.s IL_48*/
                
                if (loc2 > (13|0)){
                    __pos__ = 0x48;
                    continue;
                }
                /* IL_22: ldloc.2 */
                /* IL_23: ldc.i4.0 */
                /* IL_24: beq.s IL_89*/
                
                if (loc2 === (0|0)){
                    __pos__ = 0x89;
                    continue;
                }
                /* IL_26: ldloc.2 */
                /* IL_27: ldc.i4.s 9*/
                /* IL_29: sub */
                /* IL_2A: switch System.Int32[]*/
                __switch_value__ = CILJS.unsigned_value((loc2 - (9|0)) | (0|0));
                
                if (__switch_value__ >= 0x5){
                    __pos__ = 0x43;
                    continue;
                }
                __jmp__ = [
                    0x53,
                    0x60,
                    0x87,
                    0x87,
                    0x6D
                ];
                __pos__ = (0x43 + (__jmp__)[__switch_value__]);
                continue;
                case 0x43:
                /* IL_43: br IL_CA*/
                __pos__ = 0xCA;
                continue;
                case 0x48:
                /* IL_48: ldloc.2 */
                /* IL_49: ldc.i4.s 34*/
                /* IL_4B: beq.s IL_BD*/
                
                if (loc2 === (34|0)){
                    __pos__ = 0xBD;
                    continue;
                }
                /* IL_4D: ldloc.2 */
                /* IL_4E: ldc.i4.s 92*/
                /* IL_50: beq.s IL_68*/
                
                if (loc2 === (92|0)){
                    __pos__ = 0x68;
                    continue;
                }
                /* IL_52: ldloc.2 */
                /* IL_53: ldc.i4 8232*/
                /* IL_58: sub */
                /* IL_59: switch System.Int32[]*/
                __switch_value__ = CILJS.unsigned_value((loc2 - (8232|0)) | (0|0));
                
                if (__switch_value__ >= 0x2){
                    __pos__ = 0x66;
                    continue;
                }
                __jmp__ = [
                    0xF,
                    0xF
                ];
                __pos__ = (0x66 + (__jmp__)[__switch_value__]);
                continue;
                case 0x66:
                /* IL_66: br.s IL_CA*/
                __pos__ = 0xCA;
                continue;
                case 0x68:
                /* IL_68: ldloc.0 */
                /* IL_69: ldstr \\*/
                /* IL_6E: callvirt Void Append(System.String)*/
                asm2.x6000003(loc0,CILJS.new_string("\\\\"));
                /* IL_73: br.s IL_D7*/
                __pos__ = 0xD7;
                continue;
                case 0x75:
                /* IL_75: ldloc.0 */
                /* IL_76: ldarg.0 */
                /* IL_77: ldloc.1 */
                /* IL_78: callvirt Char get_Chars(System.Int32)*/
                /* IL_7D: call String EscapeChar(System.Char)*/
                /* IL_82: callvirt Void Append(System.String)*/
                asm2.x6000003(loc0,asm2.x6000007(asm0.x6000125(arg0,loc1)));
                /* IL_87: br.s IL_D7*/
                __pos__ = 0xD7;
                continue;
                case 0x89:
                /* IL_89: ldloc.0 */
                /* IL_8A: ldstr \0*/
                /* IL_8F: callvirt Void Append(System.String)*/
                asm2.x6000003(loc0,CILJS.new_string("\\0"));
                /* IL_94: br.s IL_D7*/
                __pos__ = 0xD7;
                continue;
                case 0x96:
                /* IL_96: ldloc.0 */
                /* IL_97: ldstr \t*/
                /* IL_9C: callvirt Void Append(System.String)*/
                asm2.x6000003(loc0,CILJS.new_string("\\t"));
                /* IL_A1: br.s IL_D7*/
                __pos__ = 0xD7;
                continue;
                case 0xA3:
                /* IL_A3: ldloc.0 */
                /* IL_A4: ldstr \n*/
                /* IL_A9: callvirt Void Append(System.String)*/
                asm2.x6000003(loc0,CILJS.new_string("\\n"));
                /* IL_AE: br.s IL_D7*/
                __pos__ = 0xD7;
                continue;
                case 0xB0:
                /* IL_B0: ldloc.0 */
                /* IL_B1: ldstr \r*/
                /* IL_B6: callvirt Void Append(System.String)*/
                asm2.x6000003(loc0,CILJS.new_string("\\r"));
                /* IL_BB: br.s IL_D7*/
                __pos__ = 0xD7;
                continue;
                case 0xBD:
                /* IL_BD: ldloc.0 */
                /* IL_BE: ldstr \"*/
                /* IL_C3: callvirt Void Append(System.String)*/
                asm2.x6000003(loc0,CILJS.new_string("\\\""));
                /* IL_C8: br.s IL_D7*/
                __pos__ = 0xD7;
                continue;
                case 0xCA:
                /* IL_CA: ldloc.0 */
                /* IL_CB: ldarg.0 */
                /* IL_CC: ldloc.1 */
                /* IL_CD: callvirt Char get_Chars(System.Int32)*/
                /* IL_D2: callvirt Void Append(System.Char)*/
                asm2.x6000004(loc0,asm0.x6000125(arg0,loc1));
                case 0xD7:
                /* IL_D7: ldloc.1 */
                /* IL_D8: ldc.i4.1 */
                /* IL_D9: add */
                /* IL_DA: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0xDB:
                /* IL_DB: ldloc.1 */
                /* IL_DC: ldarg.0 */
                /* IL_DD: callvirt Int32 get_Length()*/
                /* IL_E2: blt IL_15*/
                
                if (loc1 < asm0.x600012f(arg0)){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_E7: ldloc.0 */
                /* IL_E8: ldc.i4.s 34*/
                /* IL_EA: callvirt Void Append(System.Char)*/
                asm2.x6000004(loc0,(34|0));
                /* IL_EF: ldloc.0 */
                /* IL_F0: callvirt String ToString()*/
                /* IL_F5: ret */
                return ((loc0.vtable)["asm0.x60000ed"]())(loc0);
            }
        }
    };
    /* static System.String CSStringConverter.EscapeChar(Char)*/
    asm.x6000007 = function EscapeChar(arg0)
    {
        var t0;
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldstr \u*/
        /* IL_05: ldarg.0 */
        /* IL_06: box System.Int32*/
        /* IL_0B: call String Concat(System.Object, System.Object)*/
        /* IL_10: ret */
        return asm0.x600012b(CILJS.new_string("\\u"),{
                'boxed': arg0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
    };;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
                    [asm2, "x6000003", "Append"],
                    [asm2, "x6000004", "Append"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"CSStringConverter",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
