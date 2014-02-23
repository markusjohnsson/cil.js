
module Braille.Runtime {

    interface CilAssembly {
        name: string;
        types: Array<CilType>;
    }

    interface CilType {
        namespace: string;
        name: string;
        baseType: string;
        methods: Array<CilMethod>;
    }

    interface CilMethod {
        name: string;
        hideBySig: boolean;
        isVirtual: boolean;
        isStatic: boolean;
        metadataToken: string;
        body: Function;
    }

    class AssemblyLoader {
        load(type: CilType, asm: Object) {

            var host = asm;

            if (type.namespace != null)
            {
                var parts = type.namespace.split('.');

                for (var i = 0; i < parts.length; i++)
                {
                    host[parts[i]] = host[parts[i]] || {};
                    host = host[parts[i]];
                }
            }

            host[type.name] = function () { }; // js ctor


        }
    }

}