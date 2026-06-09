
// Operators in JavaScript are used to perform operations on variables and values.

/////////////////////////////////////////////////
// Arithmetic Operators
/////////////////////////////////////////////////
let a = 10;
let b = 5;
console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus: 0
console.log(a ** b); // Exponentiation: 100000


// Important!
// Postfix Increment Example.
// The value of a is 10, but it will be incremented after the expression is evaluated.
let a = 10;
let b = a++;
console.log(a); // Output: 11 (a was incremented)
console.log(b); // Output: 10 (b got the original value of a)

// Prefix Increment Example
// The value of a is 10, and it will be incremented before the expression is evaluated.
let x = 10;
let y = ++x;
console.log(x); // Output: 11 (x was incremented)
console.log(y); // Output: 11 (y got the incremented value)


// Adding different data types
console.log('Hello' + ' ' + 'World'); // String concatenation: "Hello World"
console.log('The answer is: ' + 42); // String concatenation with a number: "The answer is: 42"

let result = '5' + 10; // String concatenation: "510"
console.log(result); // Output: "510"


/////////////////////////////////////////////////
// Assignment Operators
/////////////////////////////////////////////////
let c = 10;
c += 5; // c = c + 5. This is addition assignment operator, it adds the value on the right to the variable on the left and assigns the result to the variable on the left.
console.log(c); // 15
c -= 5; // c = c - 5. This is subtraction assignment operator, it subtracts the value on the right from the variable on the left and assigns the result to the variable on the left.
console.log(c); // 10

// Nullish Coalescing Operator
let name = null;
let defaultName = "Guest";
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
let displayName = name ?? defaultName;
console.log(displayName); // Output: "Guest" (since name is null, it uses defaultName)

let age = undefined;
age ??= 18; // age = age ?? 18. This is the logical nullish assignment operator, it assigns the right-hand operand to the left-hand operand only if the left-hand operand is null or undefined.
console.log(age); // Output: 18 (since age is undefined, it uses the assigned value 18)


/////////////////////////////////////////////////
// Comparison Operators
/////////////////////////////////////////////////
let d = 10;
console.log(d == 10); // Equality: true
console.log(d === 10); // Strict Equality: true. Compares both value and type.
console.log(d != 5); // Inequality: true
console.log(d !== 5); // Strict Inequality: true. Compares both value and type.
console.log(d > 5); // Greater than: true
console.log(d < 15); // Less than: true
console.log(d >= 10); // Greater than or equal to: true
console.log(d <= 10); // Less than or equal to: true


/////////////////////////////////////////////////
// Logical Operators
/////////////////////////////////////////////////
let e = true;
let f = false;
console.log(e && f); // Logical AND: false
console.log(e || f); // Logical OR: true
console.log(!e); // Logical NOT: false

///////////////////////////////////////////
// Spread Operator
///////////////////////////////////////////

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // The spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
console.log(arr2); // Output: [1, 2, 3, 4, 5]

///////////////////////////////////////////////
// Ternary Operator
///////////////////////////////////////////////
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: "Yes"