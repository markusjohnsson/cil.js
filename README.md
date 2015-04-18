cil.js
======

cil.js is a MIT licensed .NET CIL assembly to JavaScript transpiler. In other words, cil.js enables you to write C# code and run it in a web browser, without any plugins.

It provides a small runtime library and a tiny version of mscorlib.dll.

While it is not production quality and is mostly a hobby project, it has support for the most important CIL features:

 * Class, struct and enum types
 * Virtual and interface methods
 * Generics
 * Int64 (emulation)
 * Basic Reflection

Missing features:

 * Multidimensional arrays
 * Unsafe code
 * Await/async
 * Reflection.Emit
 * dynamic
 * others.

### Acknowledgements

cil.js uses IKVM Reflection for working with assemblies.

A few tests and some mscorlib code is originally from the mono project.
