
Corlib
======

CilJs does not use the mscorlib binary shipped with .NET or mono. 

Baseline corlib
---------------

In this repository, there is a project called CilJs.Corlib.csproj. 
It is the baseline mscorlib implementation for cil.js. 
It contains the parts that is needed to test all aspects of the ciljs transpiler.

You can build an application from just the baseline corlib, all tests under CilJs.Tests are applications built this way.

Mono based corlib
-----------------

However, there is also a experimental CilJs corlib based on the mono corlib sources in a fork tracking the official mono repository.
It can be found here: `http://github.com/markusjohnsson/mono.git` in the branch "braille"


