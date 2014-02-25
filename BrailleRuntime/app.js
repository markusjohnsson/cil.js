var Braille;
(function (Braille) {
    (function (Runtime) {
        var AssemblyLoader = (function () {
            function AssemblyLoader() {
            }
            AssemblyLoader.prototype.load = function (type, asm) {
                var host = asm;

                if (type.namespace != null) {
                    var parts = type.namespace.split('.');

                    for (var i = 0; i < parts.length; i++) {
                        host[parts[i]] = host[parts[i]] || {};
                        host = host[parts[i]];
                    }
                }

                host[type.name] = function () {
                };
            };
            return AssemblyLoader;
        })();
    })(Braille.Runtime || (Braille.Runtime = {}));
    var Runtime = Braille.Runtime;
})(Braille || (Braille = {}));
//# sourceMappingURL=app.js.map
