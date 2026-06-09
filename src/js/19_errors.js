
// Errors in JavaScript are objects that represent an error that occurs during the execution of a program.
// They contain information about the error, such as its name, message, and stack trace.
// JavaScript has several built -in error types, including:
// 1. Error: The base error type for all errors.
// 2. SyntaxError: Represents an error that occurs when the JavaScript engine encounters a syntax error.
// 3. ReferenceError: Represents an error that occurs when a non-existent variable is referenced.
// 4. TypeError: Represents an error that occurs when a value is not of the expected type.
// 5. RangeError: Represents an error that occurs when a value is not within a certain range.
// 6. EvalError: Represents an error that occurs when the eval() function is used in an incorrect way.
// 7. URIError: Represents an error that occurs when the encodeURI() or decodeURI() functions are used in an incorrect way.

// Example of catching an error using try...catch
let x = 5;
try {
    x = y + 1;
} catch (err) {
    let text = err.name; // The name of the error (e.g., "ReferenceError") because y is not defined
}


// Example of TypeError 
let anna = 5;
try {
    anna(5);
} catch (err) {
    let text = err.name; // The name of the error (e.g., "TypeError") because anna is not a function
}

// Example of catching a URIError
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
} catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}

// Finally, you can use the finally block to execute code after try...catch, regardless of whether an error was thrown or caught. Example:
try {
    decodeURI("%%%");   // You cannot URI decode percent signs  
} catch (err) {
    document.getElementById("demo").innerHTML = err.name;
} finally {
    document.getElementById("demo").innerHTML += "<br>Finally block executed.";
}


///////////////////////////////////////////
// Silent Errors
///////////////////////////////////////////

/*
Silent Errors
JavaScript can fail siently.
A silent error will not stop your program.The execution will continue.
The reason for silent errors is historical:
The first version of JavaScript did not have catch...try exceptions.
Silent errors are issues that do not throw exceptions or stop execution, but still cause logic bugs, unexpected behavior, or failures that are easy to miss.
*/

// Silent errors will not stop your program.
let x = 1 / 0; // This will not throw an error, but it will result in Infinity, which may not be the intended behavior.

// Assignment, not comparison
let result = "Not Active.";
let isActive = false;

// ❌ Assignment, not comparison
if (isActive = true) {
    let result = "Active!";
}

// Type coercion can lead to silent errors

/*
Type coercion is the automatic(implicit) conversion of values from one data type to another.
Because JavaScript is weakly typed, it doesn't throw errors when types don't match; it just tries to coerce them.
JavaScript coerces types differently per operator, so type coercion can hide bugs.
*/

let result1 = ('5' + '2'); // = 52
let result2 = ('5' - '2'); // = 3

// Loose Equality(==)
// This operator performs coercion to find a "common type" before comparing.

let x = (5 == "5") // x = true



///////////////////////////////////////////
// Throwing Errors
///////////////////////////////////////////

// You can throw your own errors using the throw statement. You can throw any type of value, but it's common to throw Error objects for better error handling and debugging.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed."); // Throwing an error if b is zero
    }
    return a / b; // Otherwise, return the result of the division
}

// Example of using the divide function and catching the error
try {
    let result = divide(10, 0); // This will throw an error
} catch (err) {
    console.error(err.message); // Output: "Division by zero is not allowed."
}

// You can also create custom error classes by extending the built-in Error class. This allows you to create more specific error types for your application.
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = "CustomError"; // Set the error name
    }
}

try {
    throw new CustomError("This is a custom error."); // Throwing a custom error
} catch (err) {
    console.error(err.name + ": " + err.message); // Output: "CustomError: This is a custom error."
}   

// We can also throw primitive values, but it's generally not recommended because it can make error handling more difficult and less consistent.
try {
    throw "This is a string error."; // Throwing a string as an error
} catch (err) {
    console.error(err); // Output: "This is a string error."
}
