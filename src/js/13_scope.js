
/////////////////////////////////////////////
// Global Scope
/////////////////////////////////////////////
/*
Variables declared Globally(outside any block or function) have Global Scope.
Global variables can be accessed from anywhere in a JavaScript program.
Variables declared with var, let and const are quite similar when declared outside a block.
They all have Global Scope:
*/

var x = 1;    // Global scope

let y = 2;    // Global scope

const z = 3;  // Global scope


function myFunction() {
    // code here can also use x, y, and z
}

/////////////////////////////////////////////
// Local Scope
/////////////////////////////////////////////
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName

/////////////////////////////////////////////
// Block Scope
/////////////////////////////////////////////

{
    let x = 2;
}
// x can NOT be used here


// Example of Var  (Not Recommended)
{
    var x = 2;
}
// x CAN be used here. This is becuase var gets hoisted to the top of the function or global scope, and it does not have block scope.
//This can lead to unexpected behavior and bugs in your code, which is why it is generally recommended to use let and const instead of var for variable declarations in modern JavaScript.


/////////////////////////////////////////////
// Unassigned variables are automatically global. This can lead to bugs and is not recommended.
/////////////////////////////////////////////

myFunction();

// code here can use carName
function myFunction() {
    carName = "Volvo";
}
/*
carName is now a global variable, even though it was not declared with var, let, or const.
This can lead to unexpected behavior and bugs in your code, which is why it is generally recommended to always declare your variables with var, let, or const to avoid accidentally creating global variables.
*/

/////////////////////////////////////////////
// Strict mode
/////////////////////////////////////////////
/*
Note: In strict mode, unassigned variables will not be automatically global and will throw an error if you try to use them without declaring them first. 
It is generally recommended to use strict mode in your JavaScript code to catch potential errors and improve the overall quality of your code.

All modern browsers support running JavaScript in "Strict Mode".
In "Strict Mode", undeclared variables are not automatically global.

Note: The "use strict" directive is only recognized at the beginning of a script or a function.
*/

"use strict"; // This is used to enable strict mode in JavaScript. 
// It can be placed at the beginning of a script or a function to enable strict mode for that scope.

q = 3.14; // This will cause an error since q is not declared


// Deleting a variable (or object) is not allowed.
let x = 3.14;
delete x;                // This will cause an error since strict mode does not allow deleting variables declared with let, const, or var.


// Duplicating a parameter name is not allowed:
function x(p1, p1) { };   // This will cause an error since strict mode does not allow duplicate parameter names in a function declaration.