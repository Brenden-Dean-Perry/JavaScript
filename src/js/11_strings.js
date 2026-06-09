
// Strings in JavaScript are used to represent text. 
//They are sequences of characters enclosed in single quotes(' '), double quotes(" "), or backticks(` `).

let text = "Hello, World!";
console.log(text); // Output: Hello, World!

// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// Template literals (using backticks)
let name = `Hello "Alice"`;
console.log(name); // Output: Hello "Alice"

// Multiple lines with template literals
let multiLine = `This is a string
that spans multiple lines.`;
console.log(multiLine);

// String interpolation with template literals
let age = 30;
let greeting = `My name is ${fullName} and I am ${age} years old.`;
console.log(greeting); // Output: My name is John Doe and I am 30 years old.

// String methods
let str = "Hello, World!";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.includes("World")); // Output: true
console.log(str.indexOf("o")); // Output: 4 (index of the first occurrence of "o")
console.log(str.slice(0, 5)); // Output: Hello (slices the string from index 0 to 5)

// HTML entities in strings
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;