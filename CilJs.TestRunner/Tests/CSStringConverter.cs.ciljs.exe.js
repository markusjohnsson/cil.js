var asm1;(function (asm)
{
    asm.FullName = "CSStringConverter.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
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
    /* System.Void S.Append(String)*/
    asm.x6000003 = function Append(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldc.i4.0  */
                /* IL_03: newarr System.Object */
                /* IL_08: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(arg1,CILJS.new_array(t0,(0|0)));
                /* IL_0D: nop  */
                
                /* IL_0E: ret  */
                return ;
            }
        }
    };;
    /* System.Void S.Append(Char)*/
    asm.x6000004 = function Append(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.Char"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: box System.Char */
                /* IL_07: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(arg1,t0));
                /* IL_0C: nop  */
                
                /* IL_0D: ret  */
                return ;
            }
        }
    };;
    /*  S..ctor()*/
    asm.x6000005 = function _ctor(arg0)
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
    /* static System.String CSStringConverter.Convert(String)*/
    asm.x6000006_init = function (arg0)
    {
        (asm1.S().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0)
    {
        asm.x6000006_init(arg0);
        return asm.x6000006_(arg0);
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
        var loc3;
        var loc4;
        var loc5;
        t0 = asm1.S();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x6000005,[null]);
                /* IL_07: ldloc.0  */
                /* IL_08: ldc.i4.s 34 */
                /* IL_0A: callvirt Void Append(System.Char) */
                asm1.x6000004(loc0,(34|0));
                /* IL_0F: nop  */
                
                /* IL_10: ldc.i4.0  */
                /* IL_11: stloc.1  */
                loc1 = (0|0);
                /* IL_12: br IL_EE */
                __pos__ = 0xEE;
                continue;
                case 0x17:
                /* IL_17: nop  */
                
                /* IL_18: ldarg.0  */
                /* IL_19: ldloc.1  */
                /* IL_1A: callvirt Char get_Chars(System.Int32) */
                /* IL_1F: stloc.2  */
                loc2 = asm0.x6000125(arg0,loc1);
                /* IL_20: ldloc.2  */
                /* IL_21: ldc.i4.s 34 */
                /* IL_23: bgt.un.s IL_53 */
                
                if (CILJS.unsigned_value(loc2) > CILJS.unsigned_value((34|0))){
                    __pos__ = 0x53;
                    continue;
                }
                /* IL_25: ldloc.2  */
                /* IL_26: brfalse.s IL_91 */
                
                if ((!(loc2))){
                    __pos__ = 0x91;
                    continue;
                }
                /* IL_2A: ldloc.2  */
                /* IL_2B: ldc.i4.s 9 */
                /* IL_2D: sub  */
                /* IL_2E: switch System.Int32[] */
                __switch_value__ = CILJS.unsigned_value((loc2 - (9|0)) | (0|0));
                
                if (__switch_value__ >= 0x5){
                    __pos__ = 0x47;
                    continue;
                }
                __jmp__ = [
                    0x58,
                    0x66,
                    0x90,
                    0x90,
                    0x74
                ];
                __pos__ = (0x47 + (__jmp__)[__switch_value__]);
                continue;
                case 0x49:
                /* IL_49: ldloc.2  */
                /* IL_4A: ldc.i4.s 34 */
                /* IL_4C: beq.s IL_C9 */
                
                if (loc2 === (34|0)){
                    __pos__ = 0xC9;
                    continue;
                }
                /* IL_4E: br IL_D7 */
                __pos__ = 0xD7;
                continue;
                case 0x53:
                /* IL_53: ldloc.2  */
                /* IL_54: ldc.i4.s 92 */
                /* IL_56: beq.s IL_6E */
                
                if (loc2 === (92|0)){
                    __pos__ = 0x6E;
                    continue;
                }
                /* IL_5A: ldloc.2  */
                /* IL_5B: ldc.i4 8232 */
                /* IL_60: beq.s IL_7C */
                
                if (loc2 === (8232|0)){
                    __pos__ = 0x7C;
                    continue;
                }
                /* IL_64: ldloc.2  */
                /* IL_65: ldc.i4 8233 */
                /* IL_6A: beq.s IL_7C */
                
                if (loc2 === (8233|0)){
                    __pos__ = 0x7C;
                    continue;
                }
                /* IL_6C: br.s IL_D7 */
                __pos__ = 0xD7;
                continue;
                case 0x6E:
                /* IL_6E: ldloc.0  */
                /* IL_6F: ldstr \\ */
                /* IL_74: callvirt Void Append(System.String) */
                asm1.x6000003(loc0,CILJS.new_string("\\\\"));
                /* IL_79: nop  */
                
                /* IL_7A: br.s IL_E7 */
                __pos__ = 0xE7;
                continue;
                case 0x7C:
                /* IL_7C: ldloc.0  */
                /* IL_7D: ldarg.0  */
                /* IL_7E: ldloc.1  */
                /* IL_7F: callvirt Char get_Chars(System.Int32) */
                /* IL_84: call String EscapeChar(System.Char) */
                /* IL_89: callvirt Void Append(System.String) */
                asm1.x6000003(loc0,asm1.x6000007(asm0.x6000125(arg0,loc1)));
                /* IL_8E: nop  */
                
                /* IL_8F: br.s IL_E7 */
                __pos__ = 0xE7;
                continue;
                case 0x91:
                /* IL_91: ldloc.0  */
                /* IL_92: ldstr \0 */
                /* IL_97: callvirt Void Append(System.String) */
                asm1.x6000003(loc0,CILJS.new_string("\\0"));
                /* IL_9C: nop  */
                
                /* IL_9D: br.s IL_E7 */
                __pos__ = 0xE7;
                continue;
                case 0x9F:
                /* IL_9F: ldloc.0  */
                /* IL_A0: ldstr \t */
                /* IL_A5: callvirt Void Append(System.String) */
                asm1.x6000003(loc0,CILJS.new_string("\\t"));
                /* IL_AA: nop  */
                
                /* IL_AB: br.s IL_E7 */
                __pos__ = 0xE7;
                continue;
                case 0xAD:
                /* IL_AD: ldloc.0  */
                /* IL_AE: ldstr \n */
                /* IL_B3: callvirt Void Append(System.String) */
                asm1.x6000003(loc0,CILJS.new_string("\\n"));
                /* IL_B8: nop  */
                
                /* IL_B9: br.s IL_E7 */
                __pos__ = 0xE7;
                continue;
                case 0xBB:
                /* IL_BB: ldloc.0  */
                /* IL_BC: ldstr \r */
                /* IL_C1: callvirt Void Append(System.String) */
                asm1.x6000003(loc0,CILJS.new_string("\\r"));
                /* IL_C6: nop  */
                
                /* IL_C7: br.s IL_E7 */
                __pos__ = 0xE7;
                continue;
                case 0xC9:
                /* IL_C9: ldloc.0  */
                /* IL_CA: ldstr \" */
                /* IL_CF: callvirt Void Append(System.String) */
                asm1.x6000003(loc0,CILJS.new_string("\\\""));
                /* IL_D4: nop  */
                
                /* IL_D5: br.s IL_E7 */
                __pos__ = 0xE7;
                continue;
                case 0xD7:
                /* IL_D7: ldloc.0  */
                /* IL_D8: ldarg.0  */
                /* IL_D9: ldloc.1  */
                /* IL_DA: callvirt Char get_Chars(System.Int32) */
                /* IL_DF: callvirt Void Append(System.Char) */
                asm1.x6000004(loc0,asm0.x6000125(arg0,loc1));
                /* IL_E4: nop  */
                
                case 0xE7:
                /* IL_E7: nop  */
                
                /* IL_E8: ldloc.1  */
                /* IL_E9: stloc.3  */
                loc3 = loc1;
                /* IL_EA: ldloc.3  */
                /* IL_EB: ldc.i4.1  */
                /* IL_EC: add  */
                /* IL_ED: stloc.1  */
                loc1 = (loc3 + (1|0)) | (0|0);
                case 0xEE:
                /* IL_EE: ldloc.1  */
                /* IL_EF: ldarg.0  */
                /* IL_F0: callvirt Int32 get_Length() */
                /* IL_F6: clt  */
                /* IL_F7: stloc.s 4 */
                loc4 = ((loc1 < asm0.x600012f(arg0)) ? 1 : 0);
                /* IL_F9: ldloc.s 4 */
                /* IL_FB: brtrue IL_17 */
                
                if (loc4){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_100: ldloc.0  */
                /* IL_101: ldc.i4.s 34 */
                /* IL_103: callvirt Void Append(System.Char) */
                asm1.x6000004(loc0,(34|0));
                /* IL_108: nop  */
                
                /* IL_109: ldloc.0  */
                /* IL_10A: callvirt String ToString() */
                /* IL_10F: stloc.s 5 */
                loc5 = ((loc0.vtable)["asm0.x60000ed"]())(loc0);
                /* IL_113: ldloc.s 5 */
                /* IL_115: ret  */
                return loc5;
            }
        }
    };
    /* static System.String CSStringConverter.EscapeChar(Char)*/
    asm.x6000007 = function EscapeChar(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldstr \u */
                /* IL_06: ldarg.0  */
                /* IL_07: box System.Int32 */
                /* IL_0C: call String Concat(System.Object, System.Object) */
                /* IL_11: stloc.0  */
                loc0 = asm0.x600012b(CILJS.new_string("\\u"),CILJS.make_box(arg0,t0));
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.S = CILJS.declare_type(
        "S",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"S",false,false,false,false,false,[],[
                    [asm1, "x6000003", "Append"],
                    [asm1, "x6000004", "Append"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function S() { c.init(); }");
    asm.CSStringConverter = CILJS.declare_type(
        "CSStringConverter",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CSStringConverter",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function CSStringConverter() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
