
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

///////////////////////////
// Function Definition (Ways to define funtions)
///////////////////////////

/*
Function Definitions vs Function Declarations
Function definition is a general term for defining a function.
Function declaration is one specific way to define a function.
Examples of function definitions include:

Function declarations
Function expressions
Arrow functions
*/

// Function Declaration
function myFunction(x, y) {
    return x * y;
}

// Function Expression (Named)
const myFunction = function name(x, y) {
    return x * y;
};

// Function Expression (Anonymous)
const myFunction = function (x, y) {
    return x * y;
};

// Arrow Function
const myFunction = (x, y) => x * y;

// Function Constructor
const myFunction = new Function("x", "y", "return x * y");

// Object Method
const obj = {
    myFunction(x, y) {
        return x * y;
    },
};

/////////////////////////
// Callbacks
/////////////////////////
/*
JavaScript Callbacks
"I will call back later!"
A JavaScript callback is a function passed as an argument to another function, which is then executed(or "called back") at a later point in time to complete a specific task.
This mechanism is fundamental to JavaScript's event-driven and asynchronous programming model.

What is a Callback Function ?
    A callback function is a function passed as an argument into another function.

A callback function is intended to be executed later.

Later is typically when a specific event occurs or an asynchronous operation completes.
The name "callback" stems from the idea that the outer function will "call you back" later when it has finished its task
*/

//////////////////////////////
/// Asynchronous Callbacks
//////////////////////////////

/*
Asynchronous callbacks are executed at a later time, allowing the main program to continue running without waiting.
This is essential for preventing the application from freezing during long - running tasks like network requests.

Synchronous Callbacks
Synchronous Callbacks are executed immediately within the outer function, blocking further operations until completion.

Array methods like map(), filter(), and forEach() use synchronous callbacks.

Event Handling
Callbacks are often used in JavaScript, especially in event handling.

User interactions, such as button clicks or key presses, can be handled by providing a callback function to an event listener:

Example:
*/

document.getElementById("myButton").addEventListener("click", displayDate);

/*
In the example above, displayDate is a callback function passed as an argument to the addEventListener() method.
displayDate will be called when a user clicks the button with id = "myButton".

When you pass a function as an argument, remember not to use parenthesis.
    Right: displayDate
    Wrong: displayDate()
    */

///////////////////////////
// Self-invoking Function
//////////////////////////
/*
Self - Invoking Functions
Immediately Invoked Function Expressions
An IIFE is short for an Immediately Invoked Function Expression.
An IIFE is a function that invokes itself when defined.
What Is an IIFE ?
Normally, a function runs only when it is called.

An IIFE runs automatically when the JavaScript engine reads it(compiles it). Example:
*/
    (function () {
        // Code to run immediately
    })();

/*
An IIFE function is defined and executed at the same time.
When is IIFE Used ?
    - To create a private scope
    - To run setup code once
    - In older JavaScript code
    - Avoid Polluting the Global Scope
    Everything inside an IIFE is private to that function.
*/
// Variables inside an IIFE cannot be accessed from outside. Examples:

    (function () {
        let x = 10;
    })();

// x is not accessible here

(function () {
    let hidden = 42;
})();

let result = hidden; // ⛔ Error: hidden is not defined

// Simple IIFE Example:
    (function () {
        let text = "Hello! I called myself.";
})();

// The function above is also called an anonymous self - invoking function (function without name).


//////////////////////////////
// How an IIFE Works
//////////////////////////////
// Function expressions can be made self - invoking.
// A self - invoking function expression is invoked(started) automatically, without being called.
// Function
function () {
    // Code to run
};

// Parentheses around the function tell JavaScript to treat the function as an expression.
// Expression:
    (function () {
        // Code to run
    });

// The function is wrapped in parentheses to turn it into an expression.
// Function expressions will execute automatically if the expression is followed by().
// Final Syntax

    (function () {
        // Code to run
    })();

/*
The final() executes the function immediately.
- You can only self - invoke a function expression.
- You can not self - invoke a function declaration.
*/


////////////////////////////////
// Modern alterntive to Closure
////////////////////////////////
/*
Modern Alternative: Private Class Fields
Since ECMAScript 2022, JavaScript supports real private class fields using the # syntax.
Private fields are enforced by the language and cannot be accessed outside the class.
All modern browsers support private class fields. Example:
*/
class Counter {
    #count = 0;

    increment() {
        this.#count++;
        return this.#count;
    }
}

const myCounter = new Counter();
myCounter.increment();

/*
Private class fields are usually preferred when working with classes.
- They provide true privacy.
- They are simpler than closure - based patterns inside classes.
- They are part of the official ECMAScript standard.
- Closures are still important and useful outside of classes.
Closures are also widely used in older codebases and functional programming patterns.
*/