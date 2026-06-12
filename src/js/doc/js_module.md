# JS Module
A JavaScript module is a file that contains JavaScript code. 
The code in a module is executed in strict mode, and the variables and functions declared in a module are not visible outside the module unless they are explicitly exported.

Said simply, in JavaScript you must export variables and functions from a module to make them available for use in other modules. 
This is done using the export keyword. You can export variables and functions individually, or you can export them all at once using the export default syntax.
If you come from C# or Java, you may think of exporting as similar to making a class public.

``` JavaScript
// Export an "add" function
export function add(a, b) {
  return a + b;
}
// Import an "add" function
import { add } from './math.js';
let result = add(2, 3);
```

Modules let you to break up code into separate files.
Modules is a fundamental feature in modern JavaScript.

## Module Files
A JavaScript module is usually a file, but it can also be an HTML script.
A module file is a .js file using import / export.
A module script is an HTML script using import / export.

## How to Use Modules
Modules use export and import to interchange functionalities between modules.
An HTML script using type="module" is treated as a module:

``` HTML
Module File "math.js:
// Export an "add" function
export function add(a, b) {
  return a + b;
}
```


Module Script:
``` HTML
<script type="module">

// Import the add function
import { add } from './math.js';

let result = add(2, 3);

</script>
```

Module files must be stored on a server.
Modules only work with the HTTP(s) protocol.
A web-page opened via the file:// protocol cannot use import / export.

Module File "person.js"
``` JavaScript
// Export name and age
export const name = "Jesse";
export const age = 40;
```

## Module Script
``` HTML
<script type="module">

// Import name and age
import { name, age } from "./person.js";

</script>
```

## Modules Can Export
- Variables
- Functions
- Objects
- Classes
- 
Module File "message.js"
``` JavaScript
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};
export default message;
```
Module Script:
``` HTML	
<script type="module">
import message from "./message.js";
</script>
```

Modules operate in strict mode by default.

Why Modules?
Modules help organizing code.

Modules let you break down large codebases into small self-contained files, each focused on a specific task. Modules are essential for large and complex applications.

## Modules prevent naming conflicts.
Before modules, developers had only the global scope, which can lead to "namespace pollution" where unrelated code can accidentally overwrite other global variables. Modules has a private scope. Variables and functions are not exposed globally, unless explicitly exported.

### Modules have better readability
Modules improves code organization, making it easier to navigate, understand, and manage, especially in larger projects or team environments.
Modules are easily reused across different parts of an application and in entirely new projects.
Modules promote reusability by enabling the export of functions, variables, or objects from one file and their import into other files or projects. This eliminates redundant code and fosters a more efficient development process.
A module can be easily reused across different parts of a project or in entirely new projects. This promotes the "Don't Repeat Yourself" (DRY) principle, reducing code duplication and saving time.

### Modules are easier to maintain and debug.
By dividing code into distinct modules, modifications or bug fixes in one part of the application can be isolated to a specific module, minimizing the impact on other parts of the system. this makes the codebase easier to maintain and scale as the project grows.
Modules allow multiple developers to work on different parts of the codebase simultaneously with less risk of conflicts. Clear module boundaries enhance communication and make it easier to add new features with minimal impact on existing code.

### Modules have better encapsulation and isolation
Variables and functions defined within a module are private by default, only becoming accessible to other modules when explicitly exported. This enhances code isolation, reduces the risk of unintended side effects, and makes code easier to reason about.

### Modules have better dependency management.
Modules use explicit import and export statements to manage dependencies. This makes it easier to understand the relationships between different parts of the application and to manage external libraries or components.
Modules are much more reliable than the older, manual process of ensuring scripts were loaded in the correct order.

## JavaScript Modules Export

A module uses the export keyword to share values with other files.
A module can have many named exports
A module can (optionally) have one default export.

### Named Exports
A named export gives a name to each item.
Items can be exported individually, or wrapped in { } at the bottom:

Module File "person.js"
name and age exported individually:

``` JavaScript
// export name and age
export const name = "Jesse";
export const age = 40;
```

name and age exported at once at the bottom:

``` JavaScript
const name = "Jesse";
const age = 40;

// export name and age
export { name, age };
```
You import named exports by wrapping them in { }.
The names must match exactly.

### Module Script
``` HTML
<script type="module">

// Import name and age
import { name, age } from "./person.js";

</script>
```

Named exports enforce correct naming. If you misspell a name, you get an error.
Here, PI, add, subtract, multiply, and divide are named exports:

``` JavaScript
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  return a / b;
}
```

Module Script
``` HTML
<script type="module">

import { add, subtract, PI } from './math.js';

</script>
```

## Default Exports
Default Export exports one main value from a module.
This gives a clear intent about what the module's primary functionality is.
If a file is meant to expose one primary function, class, or value, default export makes that explicit:

``` JavaScript
export default function calculateSum() { ... }
```

You can have only one default export in a file.

### Default is Flexible
Default exports let you import using any name:

``` JavaScript
import calc from './calculateSum.js'; // calc is the name we choose for the imported function originally named calculateSum
```

The name calc does not need to match the original.
Compared to named exports, where the name must match exactly:

``` JavaScript
import { calculateSum } from './calculateSum.js';
```

Try it yourself using the module file named message.js:

``` JavaScript
Module File "message.js"
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;
```

Module Script 1
``` HTML
<script type="module">
import message from "./message.js";
</script>
```

Module Script 2
``` HTML
<script type="module">
import text from "./message.js";
</script>
```
Many libraries expose a single feature as the default:

``` JavaScript
import React from 'react';
```

## JavaScript Modules Import
You can import modules in two ways, based on if they are named exports or default exports.
Named imports are constructed using curly braces:

``` JavaScript
import { name, age } from "./person.js"; // name and age must match the exported names in person.js
```

Default exports are not:
``` JavaScript
import message from "./message.js"; // message is the name we choose for the default imported function
```

### Importing All
You can import all named exports from a module as a single object using the * syntax.

Examples
``` JavaScript
// Import all named exports from person.js
import * as person from "./person.js";

// Import all named exports from math.js
import * as math from "./math.js";
```

## JS Module Namespace

The Module Namespace Object
When you use the syntax:

``` JavaScript
import * as name from "module";
```

JavaScript creates a module namespace object.
This is an immutable object that contains all the exported bindings from that module.

Example
The math module namespace object bundles all the exports (PI, add, multiply):
``` JavaScript
// math_module.js
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}
```

Import math_module.js into a namespace object:

``` JavaScript
import * as math from "./math_module.js"; // math is the namespace object that contains all exports from math_module.js

// Now you can use the math namespace object:
let myPi = math.PI
let result1 = math.add(2, 3));
let result2 = math.multiply(2, 3));
```

## JavaScript Dynamic Modules
Dynamic Import uses the syntax:
``` JavaScript
import(module);
```
This returns a promise that resolves to the module's exports. This allows you to load modules on demand, which can improve performance by reducing initial load time and enabling code splitting.
Aka Lazy Loading.

Unlike Static Import (which must appear at the top of a file), Dynamic Import can be used anywhere - inside functions, conditionals, event handlers, etc.

Syntax
``` JavaScript
import("./module.js")
```

The argument must be a string or expression that resolves to a path
You must run the import inside a module script (<script type="module">)

### How Dynamic Import Works
Dynamic Modules use modern async/await:

Example:
math.js
``` JavaScript
// Export an "add" function
export function add(a, b) {
  return a + b;
}
```

``` JavaScript
async function run() {
  const module = await import("./math.js");
  let result = module.add(2, 3);
}
run();
```
