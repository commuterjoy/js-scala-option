Scala's Option for JavaScript.

Idiomatically,

```
// Define an option with a value
var o = new Option("hello");

// Get that value
o.get(); 

// Get that value, or else provide a default
o.getOrElse("world"); 

// Or map over the value, transform it and return that instead (or provide a default)
o.map(function (value) {
  return value.toUpperCase();
}).getOrElse("nope!")
```
