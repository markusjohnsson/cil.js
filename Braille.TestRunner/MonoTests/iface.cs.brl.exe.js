var asm1; (function (asm)
{
    asm.FullName = "iface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Int32 WriteIt()*/
    asm.x600000d = function WriteIt(arg0)
    {
        /* IL_00: ldc.i4.s 33*/
        /* IL_02: ret */
        return (33|0);
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Main()*/
    asm.x600000f_init = function ()
    {
        ((asm1.RealWriter)().init)();
        ((asm1.IHelloWorldWriter)().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc0;
        t0 = (asm1.RealWriter)();
        t1 = (asm1.IHelloWorldWriter)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = newobj(t0,asm1.x600000e,[
                    null
                ]);
                /* IL_06: ldloc.0 */
                /* IL_07: callvirt Int32 WriteIt()*/
                /* IL_0C: ldc.i4.s 33*/
                /* IL_0E: beq.s IL_12*/
                
                if ((((loc0.ifacemap)[t1].x600000c)())(convert_box_to_pointer_as_needed(loc0)) === (33|0)){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_10: ldc.i4.1 */
                /* IL_11: ret */
                return (1|0);
                case 0x12:
                /* IL_12: ldc.i4.0 */
                /* IL_13: ret */
                return (0|0);
            }
        }
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
    asm.IHelloWorldWriter = (function ()
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
            function IHelloWorldWriter()
            {
                (IHelloWorldWriter.init)();
                this.constructor = IHelloWorldWriter;
            };
            c = IHelloWorldWriter;
            ct = c;
            IHelloWorldWriter.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IHelloWorldWriter.CustomAttributes = [];
                IHelloWorldWriter.Methods = [
                    [
                        asm1,
                        "x600000c",
                        "WriteIt"
                    ]
                ];
                IHelloWorldWriter.BaseType = null;
                IHelloWorldWriter.FullName = "IHelloWorldWriter";
                IHelloWorldWriter.Assembly = asm;
                IHelloWorldWriter.Interfaces = [];
                IHelloWorldWriter.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IHelloWorldWriter) != -1 ? t : null; } catch (e) { return false; } };
                IHelloWorldWriter.IsValueType = false;
                IHelloWorldWriter.IsPrimitive = false;
                IHelloWorldWriter.IsInterface = true;
                IHelloWorldWriter.IsGenericTypeDefinition = false;
                IHelloWorldWriter.IsNullable = false;
                IHelloWorldWriter.ArrayType = Array;
                IHelloWorldWriter.MetadataName = "asm1.t2000007";
                IHelloWorldWriter.GenericArguments = {};
                (IHelloWorldWriter.GenericArguments)["asm1.t2000007"] = [];
                IHelloWorldWriter.prototype.vtable = {
                    'asm1.x600000c': function ()
                    {
                        return asm1.x600000c;
                    }
                };
                IHelloWorldWriter.prototype.ifacemap = {};
            };
            IHelloWorldWriter.prototype = {};
            return c;
        };
    })();
    asm.RealWriter = (function ()
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
            function RealWriter()
            {
                (RealWriter.init)();
                this.constructor = RealWriter;
            };
            c = RealWriter;
            ct = c;
            RealWriter.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                RealWriter.CustomAttributes = [];
                RealWriter.Methods = [
                    [
                        asm1,
                        "x600000d",
                        "WriteIt"
                    ]
                ];
                RealWriter.BaseType = ((asm0)["System.Object"])();
                RealWriter.FullName = "RealWriter";
                RealWriter.Assembly = asm;
                RealWriter.Interfaces = [
                    (asm1.IHelloWorldWriter)()
                ];
                RealWriter.IsInst = function (t) { return t instanceof RealWriter ? t : null; };
                RealWriter.IsValueType = false;
                RealWriter.IsPrimitive = false;
                RealWriter.IsInterface = false;
                RealWriter.IsGenericTypeDefinition = false;
                RealWriter.IsNullable = false;
                RealWriter.ArrayType = Array;
                RealWriter.MetadataName = "asm1.t2000008";
                RealWriter.GenericArguments = {};
                (RealWriter.GenericArguments)["asm1.t2000008"] = [];
                (RealWriter.GenericArguments)["asm0.t2000002"] = [];
                RealWriter.prototype.vtable = {
                    'asm1.x600000d': function ()
                    {
                        return asm1.x600000d;
                    },
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
                RealWriter.prototype.ifacemap = {};
                tree_set([
                    (asm1.IHelloWorldWriter)()
                ],RealWriter.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            RealWriter.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.ProjectName = (function ()
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
            function ProjectName()
            {
                (ProjectName.init)();
                this.constructor = ProjectName;
            };
            c = ProjectName;
            ct = c;
            ProjectName.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ProjectName.CustomAttributes = [];
                ProjectName.Methods = [];
                ProjectName.BaseType = ((asm0)["System.Object"])();
                ProjectName.FullName = "ProjectName";
                ProjectName.Assembly = asm;
                ProjectName.Interfaces = [];
                ProjectName.IsInst = function (t) { return t instanceof ProjectName ? t : null; };
                ProjectName.IsValueType = false;
                ProjectName.IsPrimitive = false;
                ProjectName.IsInterface = false;
                ProjectName.IsGenericTypeDefinition = false;
                ProjectName.IsNullable = false;
                ProjectName.ArrayType = Array;
                ProjectName.MetadataName = "asm1.t2000009";
                ProjectName.GenericArguments = {};
                (ProjectName.GenericArguments)["asm1.t2000009"] = [];
                (ProjectName.GenericArguments)["asm0.t2000002"] = [];
                ProjectName.prototype.vtable = {
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
                ProjectName.prototype.ifacemap = {};
            };
            ProjectName.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
