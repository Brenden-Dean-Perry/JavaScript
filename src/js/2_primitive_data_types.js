/* Primitives are the most basic data types in JavaScript. They are immutable, which means that their value cannot be changed once it is set.
 The six primitive data types in JavaScript are:
    1. String: A sequence of characters enclosed in single or double quotes. Example: 'Hello, world!' or "Hello, world!"
    2. Number: A numeric value that can be an integer or a floating-point number. Example: 42 or 3.14
    3. Boolean: A logical value that can be either true or false. Example: true or false
    4. Null: A special value that represents the absence of any object value. Example: null
    5. Undefined: A special value that represents the absence of a defined value. Example: undefined
    6. Symbol: A unique and immutable primitive value that can be used as a key for object properties. Example: Symbol('description')
    7. BigInt: A numeric value that can represent integers with arbitrary precision. Example: 9007199254740991n
 */

let name = 'Alice'; // String
let age = 30; // Number
let isStudent = true; // Boolean
let address = null; // Null
let phoneNumber; // Undefined
let id = Symbol('id'); // Symbol

typeof name; // Output: 'string'
typeof age; // Output: 'number'
typeof isStudent; // Output: 'boolean'
typeof address; // Output: 'object' (this is a known quirk in JavaScript)
typeof phoneNumber; // Output: 'undefined'
typeof id; // Output: 'symbol'

// You can also use the String(), Number(), Boolean(), and Symbol() functions to convert values to their respective primitive types.
let str = String(123); // Converts the number 123 to a string '123'
let num = Number('3.14'); // Converts the string '3.14' to a number 3.14
let bool = Boolean(0); // Converts the number 0 to a boolean false
let sym = Symbol('description'); // Creates a new symbol with the description 'description'

// In addition to primitives, there are also objects
const message = 'hi'; // This is a primitive string
const anotherMessage = new String('hello'); // This creates a String object, which is not a primitive string

/*
Primitive values are immutable, which means that you cannot change their value once it is set.
However, you can reassign a variable that holds a primitive value to a new value.
*/

let x = 10; // x is assigned the value 10
x = 20; // x is now reassigned to the value 20

//JS is a dynamically typed language, which means that you can change the type of a variable by reassigning it to a value of a different type.
let y = 'Hello'; // y is assigned a string value
y = 42; // y is now reassigned to a number value


/*
Undefined is a special value that represents the absence of a defined value. 
It is the default value of variables that have been declared but not initialized.
Undefined is a value and a type in JavaScript. It is not the same as null, which represents the absence of any object value.
*/
let z; // z is declared but not initialized, so it has the value undefined
console.log(z); // Output: undefined

// You can also explicitly assign the value undefined to a variable.
let a = undefined; // a is explicitly assigned the value undefined
console.log(a); // Output: undefined

// Null is a special value that represents the absence of any object value. It is often used to indicate that a variable should have no value or that an object property does not exist.
let b = null; // b is assigned the value null
console.log(b); // Output: null
typeof b; // Output: 'object' (this is a known quirk in JavaScript, null is actually a primitive value, but typeof returns 'object')
