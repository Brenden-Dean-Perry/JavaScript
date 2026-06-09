
// Functions are invoked with parentheses () and can take parameters. They can return a value using the return statement.
// Without () the function is not invoked, it is just a reference to the function itself.
// For example:

function greet(name) {
    return `Hello, ${name}!`;
}

greet("Alice"); // Invokes the function and returns "Hello, Alice!"
let greeting = greet; // Assigns the function reference to a variable
console.log(greeting("Alice")); // Output: "Hello, Alice!"


////////////////////////////////////////
// Default Parameters
////////////////////////////////////////
function multiply(a, b = 1) { // b has a default value of 1
    return a * b;
}
console.log(multiply(5)); // Output: 5 (since b defaults to 1)


/////////////////////////////////////////
// Arguments
/////////////////////////////////////////

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}


/*
Argument Rules
JavaScript function definitions do not specify data types for arguments.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.
*/

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius("John");
console.log(value); // Output: NaN (Not a Number, because "John" cannot be converted to a number)


function multiply(a, b) {
    return a * b;
}

multiply(4); // Output: NaN (Not a Number, because b is undefined and cannot be used in multiplication)

////////////////////////////////////////////
// Rest Parameters
////////////////////////////////////////////
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);


///////////////////////////////////////////
// Function Expressions
///////////////////////////////////////////
// A function expression is a function that is assigned to a variable. It can be anonymous (without a name) or named. 
// Function expressions are not hoisted, which means they cannot be called before they are defined.

// Standard Function
function multiply(a, b) {
    return a * b;
}

// Function Expression
const multiply = function (a, b) {
    return a * b;
};

// Function Expression with Arrow Function Syntax
const multiply = (a, b) => a * b;



// Anonymous Functions
// Function expressions are commonly used to create anonymous functions.
// The function above is actually function without a name.
// Functions stored in variables do not need names.
// The variable name is used to call the function. But, function expressions can also be a named:

const add = function add(a, b) { return a + b; };


/////////////////////////////////////////////
// Hoisting
/////////////////////////////////////////////
// Function declarations are hoisted, which means they can be called before they are defined in the code.
// Function declarations are "hoisted" to the top of their scope.This means you can call a function before it is defined in the code:

let sum = add(2, 3); // Will work despite being called before the function declaration below.
function add(a, b) { return a + b; }

// Function expressions are not hoisted in the same way as function declarations.
// They are created when the execution reaches their definition, and cannot be called before that point:

let sum = add(2, 3); // ⛔ Will generate error
const add = function (a, b) { return a + b; };



////////////////////////////////////////////
// Arrow Functions
////////////////////////////////////////////
/*
Arrow Functions and the this Keyword
Arrow functions do not have their own this value.
They inherit this from the surrounding code.
Example:
*/
const person = {
    name: "John",
    greet: function () {
        return this.name;
    }
};

// Using an arrow function as a method often gives unexpected results. Example:
const person = {
    name: "John",
    greet: () => {
        return this.name;
    }
};
/*
In this case, this does not refer to the person object.

When to Use Arrow Functions:
- For short functions
- For callbacks and array methods
- When you do not need your own this

When Not to Use Arrow Functions:
- As object methods
- When you need your own this
- When using function declarations
*/