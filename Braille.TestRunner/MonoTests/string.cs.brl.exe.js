var asm1; (function (asm)
{
    asm.FullName = "string.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Main()*/
    asm.x600000c_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.ValueType"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldstr ddd*/
                /* IL_05: stloc.0 */
                loc0 = BLR.new_string("ddd");
                /* IL_06: ldstr ddd*/
                /* IL_0B: stloc.1 */
                loc1 = BLR.new_string("ddd");
                /* IL_0C: ldstr ddda*/
                /* IL_11: stloc.2 */
                loc2 = BLR.new_string("ddda");
                /* IL_12: ldloc.0 */
                /* IL_13: ldloc.1 */
                /* IL_14: call Boolean op_Inequality(System.String, System.String)*/
                /* IL_19: brfalse.s IL_1D*/
                
                if ((!(asm0.x600017a(loc0,loc1)))){
                    __pos_0__ = 0x1D;
                    continue;
                }
                /* IL_1B: ldc.i4.1 */
                /* IL_1C: ret */
                return (1|0);
                case 0x1D:
                /* IL_1D: ldloc.2 */
                /* IL_1E: ldloc.1 */
                /* IL_1F: ldstr a*/
                /* IL_24: call String Concat(System.String, System.String)*/
                /* IL_29: call Boolean op_Inequality(System.String, System.String)*/
                /* IL_2E: brfalse.s IL_32*/
                
                if ((!(asm0.x600017a(loc2,asm0.x6000170(loc1,BLR.new_string("a")))))){
                    __pos_0__ = 0x32;
                    continue;
                }
                /* IL_30: ldc.i4.2 */
                /* IL_31: ret */
                return (2|0);
                case 0x32:
                /* IL_32: ldloc.2 */
                /* IL_33: ldloc.1 */
                /* IL_34: ldstr a*/
                /* IL_39: call String Concat(System.String, System.String)*/
                /* IL_3E: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_43: brfalse.s IL_47*/
                
                if ((!(asm0.x6000007(loc2,asm0.x6000170(loc1,BLR.new_string("a")))))){
                    __pos_0__ = 0x47;
                    continue;
                }
                /* IL_45: ldc.i4.4 */
                /* IL_46: ret */
                return (4|0);
                case 0x47:
                /* IL_47: ldc.i4.0 */
                /* IL_48: ret */
                return (0|0);
            }
        }
    };
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.TestString = BLR.declare_type(
        "TestString",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestString",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
