
Boxing
======

Values (instances of structs and primitives (ints of various sizes, bool, char, float and double)) contains no type information at runtime. 

However, *boxed* values *does* contain type information. When they are boxed with the CLI 'box' instruction they are 
wrapped in a classless JavScript object:

```
var x = {
	boxed: value,
	type: type,
	vtable: type.prototype.vtable
};
```

The type is specified by the box instruction in IL-code.
