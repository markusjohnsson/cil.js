var asm1; (function (asm)
{
    asm.FullName = "ValueTypeEquality.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
    asm.next_hash = 1;

    function nop() {}

    function clone_value(v) {
        if (v == null) return v;
        if (typeof v === 'number') return v;
        if (typeof v === 'function') return v;
        if (!v.constructor.IsValueType) return v;
        var result = new v.constructor();
        for (var p in v) {
            if (v.hasOwnProperty(p))
                result[p] = clone_value(v[p]);
        }
        return result;
    }

    function value_equals(a, b) {

        if (typeof a !== typeof b)
            return 0;

        if (a === null)
            return b === null ? 1 : 0;

        if (typeof a === 'object' && typeof a.constructor !== 'undefined' && a.constructor.IsValueType) {
            
            for (var p in a) {
                var av = a[p];
                var bv = b[p];
                    
                if (! value_equals(av, bv))
                    return 0;
            }
            
            return 1;
        }
        else 
        {
            return a === b ? 1 : 0;
        }
    }

    function unsigned_value(a) {
        if (a < 0)
            return 0xffffffff + a + 1;
        else
            return a;
    }

    function box(v, type) {
        if (v === null)
            return v;
    
        if (type.IsNullable) {
            if (v.has_value)
                return box(v.value, type.GenericArguments[type.MetadataName][0]);
            else
                return null;
        }

        if (!type.IsValueType)
            return v;
    
        return {
            'boxed': v,
            'type': type,
            'vtable': type.prototype.vtable,
            'ifacemap': type.prototype.ifacemap
        };
    }

    function unbox(o, type) {
        if (o == null) {
            var t = asm0['System.InvalidCastException']();
            var e = new t();
            e.stack = new Error().stack;
            throw e;
        }
        return cast_class(o.boxed, type);
    }

    function unbox_any(o, type) {
        if (type.IsNullable) {
            var result = new type();
            if (o !== null) {
                result.value = cast_class(o.boxed, type.GenericArguments[type.MetadataName][0]);
                result.has_value = true;
            }
            return result;
        }

        if (type.IsValueType) {

            if (o == null) {
                var t = asm0['System.InvalidCastException']();
                throw new t();
            }

            return cast_class(o.boxed, type);
        }
        else
            return cast_class(o, type);
    }

    function convert_box_to_pointer_as_needed(o) {
        if (typeof o.boxed !== "undefined" &&
            typeof o.type !== "undefined" &&
            typeof o.type.IsValueType) 
        {
            return { 'r': function () { return o.boxed; },
                     'w': function (v) { return o.boxed = v; } };
        }
        else {
            return o;
        }
    }

    function dereference_pointer_as_needed(p) {
        if (typeof p.r === "function" &&
            typeof p.w === "function") 
        {
            var v = p.r();
            if (typeof v !== 'number' && ! v.constructor.IsValueType)
            {
                return v;
            }
        }

        return p;
    }

    function tree_get(a, s) {
        var c = s;
        for (var i = 0; c && i < a.length; i++)
            c = c[a[i]];
        return c;
    }

    function tree_set(a, s, v) {
        if (a.length == 1) {
            s[a[0]] = v;
        }
        else {
            var c = s[a[0]];
            if (!c) s[a[0]] = c = {};
            tree_set(a.slice(1), c, v);
        }
    }

    function new_string(jsstr) {
        var r = new (asm0['System.String']())();
        r.jsstr = jsstr;
        return r;
    }

    function new_handle(type, value) {
        var r = new type();
        r.value = value;
        return r;
    }

    function new_array(type, length) {
        var ctor = type.ArrayType || Array;
        var r = new (asm0['System.Array`1'](type))();
        r.etype = type;
        r.jsarr = new ctor(length);
        return r;
    }

    function newobj(type, ctor, args) {
        var result = new type();
        
        if (type.IsValueType)
            args[0] = { 
                w: function(a) { result = a; }, 
                r: function() { return result; } 
            };
        else
            args[0] = result;
        
        ctor.apply(null, args);
        
        return result;
    }

    function cast_class(obj, type) {
        if (type.IsInst(obj) || (!type.IsValueType && obj === null)) {
            return obj;
        }
        else if (type.IsPrimitive) {
            if (typeof obj === 'undefined' || obj === null) {
            }
            else if (typeof obj == 'number') {
                return obj;
            }
            else if (typeof obj.length == 'number' && obj.length == 2) {
                return obj; 
            }
        }
        
        var t = asm0['System.InvalidCastException']();
        var e = new t();
        e.stack = new Error().stack;
        throw e;
    }

    function conv_u8(n) {
        if (n < 0) {
            
            n = 0x100000000 + n;
        }

        return make_uint64(n);
    }

    function conv_i8(n) {
        if (n < 0) {
            
            n = 0x100000000 + n;
            
            
            
            return new Uint32Array([ n | 0, 0xffffffff ]);
        }

        return make_uint64(n);
    }

    function make_uint64(n) {
        var bits32 = 0xffffffff;

        var floorN = Math.floor(n);
        var low = floorN | 0;
        var high = (floorN / 0x100000000) | 0;

        var low = low & bits32;
        var high = high & bits32;

        return new Uint32Array([low, high]);
    }

    function to_number(n) {
        return n[1] * 4294967296 + n[0];
    }
;
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
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000d_init = function ()
    {
        ((asm1.A)().init)();
        ((asm1.B)().init)();
        ((asm1.C)().init)();
        ((asm1.Program)().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        var loc8;
        var loc9;
        var loc10;
        var loc11;
        var loc12;
        var loc13;
        var loc14;
        var loc15;
        var loc16;
        var loc17;
        var loc18;
        var loc19;
        var loc20;
        var loc21;
        var loc22;
        var loc23;
        var loc24;
        var loc25;
        var loc26;
        var st_18;
        var st_19;
        var st_1A;
        var st_1B;
        var st_1F;
        var st_20;
        var st_21;
        var st_22;
        var st_28;
        var st_29;
        var st_2A;
        var st_2B;
        var st_31;
        var st_32;
        var st_33;
        var st_34;
        var st_3A;
        var st_3B;
        var st_3C;
        var st_3D;
        var st_43;
        var st_44;
        var st_45;
        var st_46;
        var st_4A;
        var st_4B;
        var st_4C;
        var st_4D;
        var st_53;
        var st_54;
        var st_55;
        var st_56;
        var st_5C;
        var st_5D;
        var st_5E;
        var st_5F;
        var st_65;
        var st_66;
        var st_67;
        var st_68;
        t0 = (asm1.A)();
        t1 = (asm1.B)();
        t2 = (asm1.C)();
        t3 = (asm1.Program)();
        loc0 = new ((asm1.A)())();
        loc1 = new ((asm1.A)())();
        loc2 = new ((asm1.A)())();
        loc3 = new ((asm1.B)())();
        loc4 = new ((asm1.A)())();
        loc5 = new ((asm1.B)())();
        loc6 = new ((asm1.A)())();
        loc7 = new ((asm1.B)())();
        loc8 = new ((asm1.A)())();
        loc9 = new ((asm1.B)())();
        loc10 = new ((asm1.A)())();
        loc11 = new ((asm1.B)())();
        loc12 = new ((asm1.A)())();
        loc13 = new ((asm1.B)())();
        loc14 = new ((asm1.A)())();
        loc15 = new ((asm1.B)())();
        loc16 = new ((asm1.A)())();
        loc17 = new ((asm1.B)())();
        loc18 = new ((asm1.A)())();
        loc19 = new ((asm1.B)())();
        loc20 = new ((asm1.A)())();
        loc21 = new ((asm1.B)())();
        loc22 = new ((asm1.A)())();
        loc23 = new ((asm1.A)())();
        loc24 = new ((asm1.A)())();
        loc25 = new ((asm1.B)())();
        loc26 = new ((asm1.B)())();
        /* IL_00: ldloca.s 23*/
        /* IL_03: initobj A*/
        ({
            'w': function ()
            {
                loc23 = (arguments)[0];
            },
            'r': function ()
            {
                return loc23;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_08: ldloc.s 23*/
        /* IL_0A: call Void TestA(A)*/
        (asm1.x600000e)(clone_value(loc23));
        /* IL_0F: ldloca.s 0*/
        /* IL_12: initobj A*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_17: ldloca.s 0*/
        /* IL_19: ldc.i4.0 */
        /* IL_1A: stfld Int32 x*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.r)().x = (0|0);
        /* IL_1F: ldloc.0 */
        /* IL_20: call Void TestA(A)*/
        (asm1.x600000e)(clone_value(loc0));
        /* IL_25: ldloca.s 1*/
        /* IL_28: initobj A*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_2D: ldloca.s 1*/
        /* IL_2F: ldc.i4.s 123*/
        /* IL_31: stfld Int32 x*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.r)().x = (123|0);
        /* IL_36: ldloc.1 */
        /* IL_37: call Void TestA(A)*/
        (asm1.x600000e)(clone_value(loc1));
        /* IL_3C: ldloca.s 2*/
        /* IL_3F: initobj A*/
        ({
            'w': function ()
            {
                loc2 = (arguments)[0];
            },
            'r': function ()
            {
                return loc2;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_44: ldloca.s 2*/
        /* IL_46: ldc.i4 321*/
        /* IL_4B: stfld Int32 x*/
        ({
            'w': function ()
            {
                loc2 = (arguments)[0];
            },
            'r': function ()
            {
                return loc2;
            }
        }.r)().x = (321|0);
        /* IL_50: ldloc.2 */
        /* IL_51: call Void TestA(A)*/
        (asm1.x600000e)(clone_value(loc2));
        /* IL_56: ldloca.s 24*/
        /* IL_59: initobj A*/
        ({
            'w': function ()
            {
                loc24 = (arguments)[0];
            },
            'r': function ()
            {
                return loc24;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_5E: ldloc.s 24*/
        /* IL_60: call Void TestA(A)*/
        (asm1.x600000e)(clone_value(loc24));
        /* IL_65: ldloca.s 25*/
        /* IL_68: initobj B*/
        ({
            'w': function ()
            {
                loc25 = (arguments)[0];
            },
            'r': function ()
            {
                return loc25;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_6D: ldloc.s 25*/
        /* IL_6F: ldfld A a*/
        /* IL_74: call Void TestA(A)*/
        (asm1.x600000e)(clone_value(loc25.a));
        /* IL_79: newobj Void .ctor()*/
        /* IL_7E: stsfld C c1*/
        (t3)["c1"] = newobj(t2,asm1.x600000c,[
            null
        ]);
        /* IL_83: ldloca.s 26*/
        /* IL_86: initobj B*/
        ({
            'w': function ()
            {
                loc26 = (arguments)[0];
            },
            'r': function ()
            {
                return loc26;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_8B: ldloc.s 26*/
        /* IL_8D: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc26));
        /* IL_92: ldloca.s 3*/
        /* IL_95: initobj B*/
        ({
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_9A: ldloca.s 3*/
        st_1A = {
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        };
        /* IL_9C: ldloca.s 4*/
        /* IL_9F: initobj A*/
        ({
            'w': function ()
            {
                loc4 = (arguments)[0];
            },
            'r': function ()
            {
                return loc4;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_A4: ldloca.s 4*/
        st_18 = {
            'w': function ()
            {
                loc4 = (arguments)[0];
            },
            'r': function ()
            {
                return loc4;
            }
        };
        /* IL_A6: ldc.i4.s 123*/
        st_19 = (123|0);
        /* IL_A8: stfld Int32 x*/
        (st_18.r)().x = st_19;
        /* IL_AD: ldloc.s 4*/
        st_1B = loc4;
        /* IL_AF: stfld A a*/
        (st_1A.r)().a = st_1B;
        /* IL_B4: ldloc.3 */
        /* IL_B5: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc3));
        /* IL_BA: ldloca.s 5*/
        /* IL_BD: initobj B*/
        ({
            'w': function ()
            {
                loc5 = (arguments)[0];
            },
            'r': function ()
            {
                return loc5;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_C2: ldloca.s 5*/
        st_21 = {
            'w': function ()
            {
                loc5 = (arguments)[0];
            },
            'r': function ()
            {
                return loc5;
            }
        };
        /* IL_C4: ldloca.s 6*/
        /* IL_C7: initobj A*/
        ({
            'w': function ()
            {
                loc6 = (arguments)[0];
            },
            'r': function ()
            {
                return loc6;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_CC: ldloca.s 6*/
        st_1F = {
            'w': function ()
            {
                loc6 = (arguments)[0];
            },
            'r': function ()
            {
                return loc6;
            }
        };
        /* IL_CE: ldc.i4.s 123*/
        st_20 = (123|0);
        /* IL_D0: stfld Int32 x*/
        (st_1F.r)().x = st_20;
        /* IL_D5: ldloc.s 6*/
        st_22 = loc6;
        /* IL_D7: stfld A a*/
        (st_21.r)().a = st_22;
        /* IL_DC: ldloca.s 5*/
        /* IL_DE: ldnull */
        /* IL_DF: stfld C c*/
        ({
            'w': function ()
            {
                loc5 = (arguments)[0];
            },
            'r': function ()
            {
                return loc5;
            }
        }.r)().c = null;
        /* IL_E4: ldloc.s 5*/
        /* IL_E6: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc5));
        /* IL_EB: ldloca.s 7*/
        /* IL_EE: initobj B*/
        ({
            'w': function ()
            {
                loc7 = (arguments)[0];
            },
            'r': function ()
            {
                return loc7;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_F3: ldloca.s 7*/
        st_2A = {
            'w': function ()
            {
                loc7 = (arguments)[0];
            },
            'r': function ()
            {
                return loc7;
            }
        };
        /* IL_F5: ldloca.s 8*/
        /* IL_F8: initobj A*/
        ({
            'w': function ()
            {
                loc8 = (arguments)[0];
            },
            'r': function ()
            {
                return loc8;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_FD: ldloca.s 8*/
        st_28 = {
            'w': function ()
            {
                loc8 = (arguments)[0];
            },
            'r': function ()
            {
                return loc8;
            }
        };
        /* IL_FF: ldc.i4.s 123*/
        st_29 = (123|0);
        /* IL_101: stfld Int32 x*/
        (st_28.r)().x = st_29;
        /* IL_106: ldloc.s 8*/
        st_2B = loc8;
        /* IL_108: stfld A a*/
        (st_2A.r)().a = st_2B;
        /* IL_10D: ldloca.s 7*/
        /* IL_10F: ldsfld C c1*/
        /* IL_114: stfld C c*/
        ({
            'w': function ()
            {
                loc7 = (arguments)[0];
            },
            'r': function ()
            {
                return loc7;
            }
        }.r)().c = t3.c1;
        /* IL_119: ldloc.s 7*/
        /* IL_11B: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc7));
        /* IL_120: ldloca.s 9*/
        /* IL_123: initobj B*/
        ({
            'w': function ()
            {
                loc9 = (arguments)[0];
            },
            'r': function ()
            {
                return loc9;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_128: ldloca.s 9*/
        st_33 = {
            'w': function ()
            {
                loc9 = (arguments)[0];
            },
            'r': function ()
            {
                return loc9;
            }
        };
        /* IL_12A: ldloca.s 10*/
        /* IL_12D: initobj A*/
        ({
            'w': function ()
            {
                loc10 = (arguments)[0];
            },
            'r': function ()
            {
                return loc10;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_132: ldloca.s 10*/
        st_31 = {
            'w': function ()
            {
                loc10 = (arguments)[0];
            },
            'r': function ()
            {
                return loc10;
            }
        };
        /* IL_134: ldc.i4.s 123*/
        st_32 = (123|0);
        /* IL_136: stfld Int32 x*/
        (st_31.r)().x = st_32;
        /* IL_13B: ldloc.s 10*/
        st_34 = loc10;
        /* IL_13D: stfld A a*/
        (st_33.r)().a = st_34;
        /* IL_142: ldloca.s 9*/
        /* IL_144: ldsfld C c2*/
        /* IL_149: stfld C c*/
        ({
            'w': function ()
            {
                loc9 = (arguments)[0];
            },
            'r': function ()
            {
                return loc9;
            }
        }.r)().c = t3.c2;
        /* IL_14E: ldloc.s 9*/
        /* IL_150: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc9));
        /* IL_155: ldloca.s 11*/
        /* IL_158: initobj B*/
        ({
            'w': function ()
            {
                loc11 = (arguments)[0];
            },
            'r': function ()
            {
                return loc11;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_15D: ldloca.s 11*/
        st_3C = {
            'w': function ()
            {
                loc11 = (arguments)[0];
            },
            'r': function ()
            {
                return loc11;
            }
        };
        /* IL_15F: ldloca.s 12*/
        /* IL_162: initobj A*/
        ({
            'w': function ()
            {
                loc12 = (arguments)[0];
            },
            'r': function ()
            {
                return loc12;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_167: ldloca.s 12*/
        st_3A = {
            'w': function ()
            {
                loc12 = (arguments)[0];
            },
            'r': function ()
            {
                return loc12;
            }
        };
        /* IL_169: ldc.i4.s 123*/
        st_3B = (123|0);
        /* IL_16B: stfld Int32 x*/
        (st_3A.r)().x = st_3B;
        /* IL_170: ldloc.s 12*/
        st_3D = loc12;
        /* IL_172: stfld A a*/
        (st_3C.r)().a = st_3D;
        /* IL_177: ldloca.s 11*/
        /* IL_179: newobj Void .ctor()*/
        /* IL_17E: stfld C c*/
        ({
            'w': function ()
            {
                loc11 = (arguments)[0];
            },
            'r': function ()
            {
                return loc11;
            }
        }.r)().c = newobj(t2,asm1.x600000c,[
            null
        ]);
        /* IL_183: ldloc.s 11*/
        /* IL_185: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc11));
        /* IL_18A: ldloca.s 13*/
        /* IL_18D: initobj B*/
        ({
            'w': function ()
            {
                loc13 = (arguments)[0];
            },
            'r': function ()
            {
                return loc13;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_192: ldloca.s 13*/
        st_45 = {
            'w': function ()
            {
                loc13 = (arguments)[0];
            },
            'r': function ()
            {
                return loc13;
            }
        };
        /* IL_194: ldloca.s 14*/
        /* IL_197: initobj A*/
        ({
            'w': function ()
            {
                loc14 = (arguments)[0];
            },
            'r': function ()
            {
                return loc14;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_19C: ldloca.s 14*/
        st_43 = {
            'w': function ()
            {
                loc14 = (arguments)[0];
            },
            'r': function ()
            {
                return loc14;
            }
        };
        /* IL_19E: ldc.i4.s 22*/
        st_44 = (22|0);
        /* IL_1A0: stfld Int32 x*/
        (st_43.r)().x = st_44;
        /* IL_1A5: ldloc.s 14*/
        st_46 = loc14;
        /* IL_1A7: stfld A a*/
        (st_45.r)().a = st_46;
        /* IL_1AC: ldloc.s 13*/
        /* IL_1AE: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc13));
        /* IL_1B3: ldloca.s 15*/
        /* IL_1B6: initobj B*/
        ({
            'w': function ()
            {
                loc15 = (arguments)[0];
            },
            'r': function ()
            {
                return loc15;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_1BB: ldloca.s 15*/
        st_4C = {
            'w': function ()
            {
                loc15 = (arguments)[0];
            },
            'r': function ()
            {
                return loc15;
            }
        };
        /* IL_1BD: ldloca.s 16*/
        /* IL_1C0: initobj A*/
        ({
            'w': function ()
            {
                loc16 = (arguments)[0];
            },
            'r': function ()
            {
                return loc16;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_1C5: ldloca.s 16*/
        st_4A = {
            'w': function ()
            {
                loc16 = (arguments)[0];
            },
            'r': function ()
            {
                return loc16;
            }
        };
        /* IL_1C7: ldc.i4.s 22*/
        st_4B = (22|0);
        /* IL_1C9: stfld Int32 x*/
        (st_4A.r)().x = st_4B;
        /* IL_1CE: ldloc.s 16*/
        st_4D = loc16;
        /* IL_1D0: stfld A a*/
        (st_4C.r)().a = st_4D;
        /* IL_1D5: ldloca.s 15*/
        /* IL_1D7: ldnull */
        /* IL_1D8: stfld C c*/
        ({
            'w': function ()
            {
                loc15 = (arguments)[0];
            },
            'r': function ()
            {
                return loc15;
            }
        }.r)().c = null;
        /* IL_1DD: ldloc.s 15*/
        /* IL_1DF: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc15));
        /* IL_1E4: ldloca.s 17*/
        /* IL_1E7: initobj B*/
        ({
            'w': function ()
            {
                loc17 = (arguments)[0];
            },
            'r': function ()
            {
                return loc17;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_1EC: ldloca.s 17*/
        st_55 = {
            'w': function ()
            {
                loc17 = (arguments)[0];
            },
            'r': function ()
            {
                return loc17;
            }
        };
        /* IL_1EE: ldloca.s 18*/
        /* IL_1F1: initobj A*/
        ({
            'w': function ()
            {
                loc18 = (arguments)[0];
            },
            'r': function ()
            {
                return loc18;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_1F6: ldloca.s 18*/
        st_53 = {
            'w': function ()
            {
                loc18 = (arguments)[0];
            },
            'r': function ()
            {
                return loc18;
            }
        };
        /* IL_1F8: ldc.i4.s 22*/
        st_54 = (22|0);
        /* IL_1FA: stfld Int32 x*/
        (st_53.r)().x = st_54;
        /* IL_1FF: ldloc.s 18*/
        st_56 = loc18;
        /* IL_201: stfld A a*/
        (st_55.r)().a = st_56;
        /* IL_206: ldloca.s 17*/
        /* IL_208: ldsfld C c1*/
        /* IL_20D: stfld C c*/
        ({
            'w': function ()
            {
                loc17 = (arguments)[0];
            },
            'r': function ()
            {
                return loc17;
            }
        }.r)().c = t3.c1;
        /* IL_212: ldloc.s 17*/
        /* IL_214: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc17));
        /* IL_219: ldloca.s 19*/
        /* IL_21C: initobj B*/
        ({
            'w': function ()
            {
                loc19 = (arguments)[0];
            },
            'r': function ()
            {
                return loc19;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_221: ldloca.s 19*/
        st_5E = {
            'w': function ()
            {
                loc19 = (arguments)[0];
            },
            'r': function ()
            {
                return loc19;
            }
        };
        /* IL_223: ldloca.s 20*/
        /* IL_226: initobj A*/
        ({
            'w': function ()
            {
                loc20 = (arguments)[0];
            },
            'r': function ()
            {
                return loc20;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_22B: ldloca.s 20*/
        st_5C = {
            'w': function ()
            {
                loc20 = (arguments)[0];
            },
            'r': function ()
            {
                return loc20;
            }
        };
        /* IL_22D: ldc.i4.s 22*/
        st_5D = (22|0);
        /* IL_22F: stfld Int32 x*/
        (st_5C.r)().x = st_5D;
        /* IL_234: ldloc.s 20*/
        st_5F = loc20;
        /* IL_236: stfld A a*/
        (st_5E.r)().a = st_5F;
        /* IL_23B: ldloca.s 19*/
        /* IL_23D: ldsfld C c2*/
        /* IL_242: stfld C c*/
        ({
            'w': function ()
            {
                loc19 = (arguments)[0];
            },
            'r': function ()
            {
                return loc19;
            }
        }.r)().c = t3.c2;
        /* IL_247: ldloc.s 19*/
        /* IL_249: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc19));
        /* IL_24E: ldloca.s 21*/
        /* IL_251: initobj B*/
        ({
            'w': function ()
            {
                loc21 = (arguments)[0];
            },
            'r': function ()
            {
                return loc21;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_256: ldloca.s 21*/
        st_67 = {
            'w': function ()
            {
                loc21 = (arguments)[0];
            },
            'r': function ()
            {
                return loc21;
            }
        };
        /* IL_258: ldloca.s 22*/
        /* IL_25B: initobj A*/
        ({
            'w': function ()
            {
                loc22 = (arguments)[0];
            },
            'r': function ()
            {
                return loc22;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_260: ldloca.s 22*/
        st_65 = {
            'w': function ()
            {
                loc22 = (arguments)[0];
            },
            'r': function ()
            {
                return loc22;
            }
        };
        /* IL_262: ldc.i4.s 22*/
        st_66 = (22|0);
        /* IL_264: stfld Int32 x*/
        (st_65.r)().x = st_66;
        /* IL_269: ldloc.s 22*/
        st_68 = loc22;
        /* IL_26B: stfld A a*/
        (st_67.r)().a = st_68;
        /* IL_270: ldloca.s 21*/
        /* IL_272: newobj Void .ctor()*/
        /* IL_277: stfld C c*/
        ({
            'w': function ()
            {
                loc21 = (arguments)[0];
            },
            'r': function ()
            {
                return loc21;
            }
        }.r)().c = newobj(t2,asm1.x600000c,[
            null
        ]);
        /* IL_27C: ldloc.s 21*/
        /* IL_27E: call Void TestB(B)*/
        (asm1.x600000f)(clone_value(loc21));
        /* IL_283: ret */
        return ;
    };
    /* static Void TestA(A)*/
    asm.x600000e_init = function ()
    {
        ((asm1.A)().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function TestA(arg0)
    {
        var t0;
        var t1;
        var loc1;
        var loc2;
        var loc3;
        var loc0;
        t0 = (asm1.A)();
        t1 = ((asm0)["System.Boolean"])();
        loc1 = new ((asm1.A)())();
        loc2 = new ((asm1.A)())();
        loc3 = new ((asm1.A)())();
        /* IL_00: ldloca.s 3*/
        /* IL_03: initobj A*/
        ({
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_08: ldloca.s 3*/
        /* IL_0A: ldc.i4 321*/
        /* IL_0F: stfld Int32 x*/
        ({
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        }.r)().x = (321|0);
        /* IL_14: ldloc.3 */
        /* IL_15: stloc.0 */
        loc0 = loc3;
        /* IL_16: ldloca.s 1*/
        /* IL_19: initobj A*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_1E: ldloca.s 2*/
        /* IL_21: initobj A*/
        ({
            'w': function ()
            {
                loc2 = (arguments)[0];
            },
            'r': function ()
            {
                return loc2;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_26: ldarga.s 0*/
        /* IL_28: ldloc.0 */
        /* IL_29: box A*/
        /* IL_34: callvirt Boolean Equals(System.Object)*/
        /* IL_39: box System.Boolean*/
        /* IL_3E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t0.prototype.vtable)["asm0.x6000008"])())({
                'w': function ()
                {
                    arg0 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg0;
                }
            },{
                'boxed': clone_value(loc0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_43: ldarga.s 0*/
        /* IL_45: ldloc.1 */
        /* IL_46: box A*/
        /* IL_51: callvirt Boolean Equals(System.Object)*/
        /* IL_56: box System.Boolean*/
        /* IL_5B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t0.prototype.vtable)["asm0.x6000008"])())({
                'w': function ()
                {
                    arg0 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg0;
                }
            },{
                'boxed': clone_value(loc1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_60: ldarga.s 0*/
        /* IL_62: ldloc.2 */
        /* IL_63: box A*/
        /* IL_6E: callvirt Boolean Equals(System.Object)*/
        /* IL_73: box System.Boolean*/
        /* IL_78: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t0.prototype.vtable)["asm0.x6000008"])())({
                'w': function ()
                {
                    arg0 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg0;
                }
            },{
                'boxed': clone_value(loc2),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_7D: ldarg.0 */
        /* IL_7E: box A*/
        /* IL_83: ldloc.0 */
        /* IL_84: box A*/
        /* IL_89: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_8E: box System.Boolean*/
        /* IL_93: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': clone_value(loc0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_98: ldarg.0 */
        /* IL_99: box A*/
        /* IL_9E: ldloc.1 */
        /* IL_9F: box A*/
        /* IL_A4: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_A9: box System.Boolean*/
        /* IL_AE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': clone_value(loc1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_B3: ldarg.0 */
        /* IL_B4: box A*/
        /* IL_B9: ldloc.2 */
        /* IL_BA: box A*/
        /* IL_BF: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_C4: box System.Boolean*/
        /* IL_C9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': clone_value(loc2),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_CE: ret */
        return ;
    };
    /* static Void TestB(B)*/
    asm.x600000f_init = function ()
    {
        ((asm1.B)().init)();
        ((asm1.A)().init)();
        ((asm1.Program)().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function TestB(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc1;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var loc0;
        var loc2;
        t0 = (asm1.B)();
        t1 = (asm1.A)();
        t2 = (asm1.Program)();
        t3 = ((asm0)["System.Boolean"])();
        loc1 = new ((asm1.B)())();
        loc3 = new ((asm1.B)())();
        loc4 = new ((asm1.A)())();
        loc5 = new ((asm1.B)())();
        loc6 = new ((asm1.A)())();
        /* IL_00: ldloca.s 3*/
        /* IL_03: initobj B*/
        ({
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_08: ldloca.s 3*/
        st_04 = {
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        };
        /* IL_0A: ldloca.s 4*/
        /* IL_0D: initobj A*/
        ({
            'w': function ()
            {
                loc4 = (arguments)[0];
            },
            'r': function ()
            {
                return loc4;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_12: ldloca.s 4*/
        st_02 = {
            'w': function ()
            {
                loc4 = (arguments)[0];
            },
            'r': function ()
            {
                return loc4;
            }
        };
        /* IL_14: ldc.i4.s 123*/
        st_03 = (123|0);
        /* IL_16: stfld Int32 x*/
        (st_02.r)().x = st_03;
        /* IL_1B: ldloc.s 4*/
        st_05 = loc4;
        /* IL_1D: stfld A a*/
        (st_04.r)().a = st_05;
        /* IL_22: ldloc.3 */
        /* IL_23: stloc.0 */
        loc0 = loc3;
        /* IL_24: ldloca.s 1*/
        /* IL_27: initobj B*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_2C: ldloca.s 5*/
        /* IL_2F: initobj B*/
        ({
            'w': function ()
            {
                loc5 = (arguments)[0];
            },
            'r': function ()
            {
                return loc5;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_34: ldloca.s 5*/
        st_0C = {
            'w': function ()
            {
                loc5 = (arguments)[0];
            },
            'r': function ()
            {
                return loc5;
            }
        };
        /* IL_36: ldloca.s 6*/
        /* IL_39: initobj A*/
        ({
            'w': function ()
            {
                loc6 = (arguments)[0];
            },
            'r': function ()
            {
                return loc6;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_3E: ldloca.s 6*/
        st_0A = {
            'w': function ()
            {
                loc6 = (arguments)[0];
            },
            'r': function ()
            {
                return loc6;
            }
        };
        /* IL_40: ldc.i4.s 22*/
        st_0B = (22|0);
        /* IL_42: stfld Int32 x*/
        (st_0A.r)().x = st_0B;
        /* IL_47: ldloc.s 6*/
        st_0D = loc6;
        /* IL_49: stfld A a*/
        (st_0C.r)().a = st_0D;
        /* IL_4E: ldloca.s 5*/
        /* IL_50: ldsfld C c1*/
        /* IL_55: stfld C c*/
        ({
            'w': function ()
            {
                loc5 = (arguments)[0];
            },
            'r': function ()
            {
                return loc5;
            }
        }.r)().c = t2.c1;
        /* IL_5A: ldloc.s 5*/
        /* IL_5C: stloc.2 */
        loc2 = loc5;
        /* IL_5D: ldarga.s 0*/
        /* IL_5F: ldloc.0 */
        /* IL_60: box B*/
        /* IL_6B: callvirt Boolean Equals(System.Object)*/
        /* IL_70: box System.Boolean*/
        /* IL_75: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t0.prototype.vtable)["asm0.x6000008"])())({
                'w': function ()
                {
                    arg0 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg0;
                }
            },{
                'boxed': clone_value(loc0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_7A: ldarga.s 0*/
        /* IL_7C: ldloc.1 */
        /* IL_7D: box B*/
        /* IL_88: callvirt Boolean Equals(System.Object)*/
        /* IL_8D: box System.Boolean*/
        /* IL_92: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t0.prototype.vtable)["asm0.x6000008"])())({
                'w': function ()
                {
                    arg0 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg0;
                }
            },{
                'boxed': clone_value(loc1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_97: ldarga.s 0*/
        /* IL_99: ldloc.2 */
        /* IL_9A: box B*/
        /* IL_A5: callvirt Boolean Equals(System.Object)*/
        /* IL_AA: box System.Boolean*/
        /* IL_AF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t0.prototype.vtable)["asm0.x6000008"])())({
                'w': function ()
                {
                    arg0 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg0;
                }
            },{
                'boxed': clone_value(loc2),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_B4: ldarg.0 */
        /* IL_B5: box B*/
        /* IL_BA: ldloc.0 */
        /* IL_BB: box B*/
        /* IL_C0: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_C5: box System.Boolean*/
        /* IL_CA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': clone_value(loc0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_CF: ldarg.0 */
        /* IL_D0: box B*/
        /* IL_D5: ldloc.1 */
        /* IL_D6: box B*/
        /* IL_DB: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_E0: box System.Boolean*/
        /* IL_E5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': clone_value(loc1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_EA: ldarg.0 */
        /* IL_EB: box B*/
        /* IL_F0: ldloc.2 */
        /* IL_F1: box B*/
        /* IL_F6: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_FB: box System.Boolean*/
        /* IL_100: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': clone_value(loc2),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_105: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestLog()
            {
                (TestLog.init)();
                this.constructor = TestLog;
            };
            c = TestLog;
            ct = c;
            TestLog.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                TestLog.CustomAttributes = [];
                TestLog.Methods = [];
                TestLog.BaseType = ((asm0)["System.Object"])();
                TestLog.FullName = "TestLog";
                TestLog.Assembly = asm;
                TestLog.Interfaces = [];
                TestLog.IsInst = function (t) { return t instanceof TestLog ? t : null; };
                TestLog.IsValueType = false;
                TestLog.IsPrimitive = false;
                TestLog.IsInterface = false;
                TestLog.IsGenericTypeDefinition = false;
                TestLog.IsNullable = false;
                TestLog.ArrayType = Array;
                TestLog.MetadataName = "asm1.t2000002";
                TestLog.GenericArguments = {};
                (TestLog.GenericArguments)["asm1.t2000002"] = [];
                (TestLog.GenericArguments)["asm0.t2000002"] = [];
                TestLog.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                TestLog.prototype.ifacemap = {};
            };
            TestLog.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.TestHelper = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestHelper()
            {
                (TestHelper.init)();
                this.constructor = TestHelper;
            };
            c = TestHelper;
            ct = c;
            TestHelper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                TestHelper.CustomAttributes = [];
                TestHelper.Methods = [];
                TestHelper.BaseType = ((asm0)["System.Object"])();
                TestHelper.FullName = "TestHelper";
                TestHelper.Assembly = asm;
                TestHelper.Interfaces = [];
                TestHelper.IsInst = function (t) { return t instanceof TestHelper ? t : null; };
                TestHelper.IsValueType = false;
                TestHelper.IsPrimitive = false;
                TestHelper.IsInterface = false;
                TestHelper.IsGenericTypeDefinition = false;
                TestHelper.IsNullable = false;
                TestHelper.ArrayType = Array;
                TestHelper.MetadataName = "asm1.t2000006";
                TestHelper.GenericArguments = {};
                (TestHelper.GenericArguments)["asm1.t2000006"] = [];
                (TestHelper.GenericArguments)["asm0.t2000002"] = [];
                TestHelper.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                TestHelper.prototype.ifacemap = {};
            };
            TestHelper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.A = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function A()
            {
                (A.init)();
                this.constructor = A;
            };
            c = A;
            ct = c;
            A.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                A.CustomAttributes = [];
                A.Methods = [];
                A.BaseType = ((asm0)["System.ValueType"])();
                A.FullName = "A";
                A.Assembly = asm;
                A.Interfaces = [];
                A.IsInst = function (t) { return t instanceof A ? t : null; };
                A.IsValueType = true;
                A.IsPrimitive = false;
                A.IsInterface = false;
                A.IsGenericTypeDefinition = false;
                A.IsNullable = false;
                A.ArrayType = Array;
                A.MetadataName = "asm1.t2000007";
                A.GenericArguments = {};
                (A.GenericArguments)["asm1.t2000007"] = [];
                (A.GenericArguments)["asm0.t2000006"] = [];
                (A.GenericArguments)["asm0.t2000002"] = [];
                A.prototype.x = 0;
                A.prototype.vtable = {
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000016;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                A.prototype.ifacemap = {};
            };
            A.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    asm.B = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function B()
            {
                (B.init)();
                this.constructor = B;
            };
            c = B;
            ct = c;
            B.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                B.CustomAttributes = [];
                B.Methods = [];
                B.BaseType = ((asm0)["System.ValueType"])();
                B.FullName = "B";
                B.Assembly = asm;
                B.Interfaces = [];
                B.IsInst = function (t) { return t instanceof B ? t : null; };
                B.IsValueType = true;
                B.IsPrimitive = false;
                B.IsInterface = false;
                B.IsGenericTypeDefinition = false;
                B.IsNullable = false;
                B.ArrayType = Array;
                B.MetadataName = "asm1.t2000008";
                B.GenericArguments = {};
                (B.GenericArguments)["asm1.t2000008"] = [];
                (B.GenericArguments)["asm0.t2000006"] = [];
                (B.GenericArguments)["asm0.t2000002"] = [];
                B.prototype.a = new ((asm1.A)())();
                B.prototype.c = null;
                B.prototype.vtable = {
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000016;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                B.prototype.ifacemap = {};
            };
            B.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    asm.C = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function C()
            {
                (C.init)();
                this.constructor = C;
            };
            c = C;
            ct = c;
            C.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                C.CustomAttributes = [];
                C.Methods = [];
                C.BaseType = ((asm0)["System.Object"])();
                C.FullName = "C";
                C.Assembly = asm;
                C.Interfaces = [];
                C.IsInst = function (t) { return t instanceof C ? t : null; };
                C.IsValueType = false;
                C.IsPrimitive = false;
                C.IsInterface = false;
                C.IsGenericTypeDefinition = false;
                C.IsNullable = false;
                C.ArrayType = Array;
                C.MetadataName = "asm1.t2000009";
                C.GenericArguments = {};
                (C.GenericArguments)["asm1.t2000009"] = [];
                (C.GenericArguments)["asm0.t2000002"] = [];
                C.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                C.prototype.ifacemap = {};
            };
            C.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Program = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function Program()
            {
                (Program.init)();
                this.constructor = Program;
            };
            c = Program;
            ct = c;
            Program.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Program.c1 = null;
                Program.c2 = null;
                Program.CustomAttributes = [];
                Program.Methods = [];
                Program.BaseType = ((asm0)["System.Object"])();
                Program.FullName = "Program";
                Program.Assembly = asm;
                Program.Interfaces = [];
                Program.IsInst = function (t) { return t instanceof Program ? t : null; };
                Program.IsValueType = false;
                Program.IsPrimitive = false;
                Program.IsInterface = false;
                Program.IsGenericTypeDefinition = false;
                Program.IsNullable = false;
                Program.ArrayType = Array;
                Program.MetadataName = "asm1.t200000a";
                Program.GenericArguments = {};
                (Program.GenericArguments)["asm1.t200000a"] = [];
                (Program.GenericArguments)["asm0.t2000002"] = [];
                Program.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                Program.prototype.ifacemap = {};
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
