
Arrays
======

Arrays are standard cil.js objects (instances of `System.Array`). There are two fields: one for the type of the array, and one for a JavaScript array for the content.

`System.Array` is an abstract class which implements IEnumerable:

```
public abstract class Array : IEnumerable
{
    internal object type; // element type
    internal object jsarr; // javascript content array 
}
```

For convenience there is an internal class `System.Array<T>` (which extends `System.Array`), which is the actual implementation used for all arrays. 

Arrays are instantiated with a call to `new_array(type, length)`.

Typed arrays
------------

In JavaScript there are a some typed arrays for primitives: `Int8Array`, `Uint8Array`, `Int16Array`, `UInt16Array`, `Int32Array`, `UInt32Array`, `Float32Array` and `Float64Array`. 
These are used for instances of the inner array (jsarr) for arrays if element type is `sbyte`, `byte`, `short`, `ushort`, `int`, `uint`, `float` and `double` respectivly. 
In addition, `Uint16Array` is used for arrays of char. 