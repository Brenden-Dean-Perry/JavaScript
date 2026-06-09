
// There are three types of variables in JavaScript: var, let, and const.

let name = 'Alice'; // A variable that can be reassigned
const age = 30; // A constant variable that cannot be reassigned
var city = 'New York'; // A variable that can be reassigned, but has function scope

// var is the oldest way to declare a variable. It has function scope, which means that it is only accessible within the function it was declared in. It can be re-assigned and re-declared.
// var is not recommended for use in modern JavaScript because it can lead to bugs and confusion due to its function scope and hoisting behavior.
// The 'let' keyword allows you to declare a variable that can be reassigned later, while the 'const' keyword declares a variable that cannot be reassigned after it has been initialized.

let x = 2
let y = 3
let z = x + y
console.log(z) // Output: 5

// You can also declare a variable without initializing it, and then assign a value to it later.
let a
a = 10
console.log(a) // Output: 10

// The 'const' keyword is used to declare a variable that cannot be reassigned after it has been initialized.
const PI = 3.14
console.log(PI) // Output: 3.14
// If you try to reassign a value to a const variable, you will get an error.
// PI = 3.14159 // This will throw an error because PI is a constant variable.

// Declaring two variables in one line
let firstName = 'John', lastName = 'Doe';

// You can also declare multiple variables in one line and assign them values later.
let x, y, z;
x = 1;
y = 2;
z = 3;

// We can also declare multiple variables in one line and assign them values at the same time.
let x, y, z = 0

// Assigning big integers to variables using BigInt
let bigInt1 = BigInt("1234567890123456789012345678901234567890");
let bigInt2 = 1234567890123456789012345678901234567890n; // Using 'n' suffix to denote a BigInt literal

/*
Mixing BigInt and Numbers
Arithmetic between a BigInt and a Number is not allowed(will result in a TypeError).
Explicit conversion must be done first.
*/


////////////////////////////////////////////////////
// Note on number types in JavaScript
////////////////////////////////////////////////////
/*
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:


Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
Beyond that, they may lose precision and be rounded to the nearest representable value. For example:
*/

let num = 12345678901234567890;
console.log(num); // Output: 12345678901234567000

/*
Floating Point Precision
Floating point arithmetic is not always 100% accurate:
*/

let x = 0.2 + 0.1;
console.log(x); // Output: 0.30000000000000004

// To solve the problem above, it helps to multiply and divide:

let x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x); // Output: 0.3


///////////////////////////////
// Const
///////////////////////////////

/*
When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:
    A new Array
    A new Object
    A new Function
    A new RegExp

Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
*/

