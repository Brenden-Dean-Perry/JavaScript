# JavaScript
Introduction JavaScript demo project to document language functionality and features. 

## Overview

JavaScript is a versatile programming language commonly used for web development, server-side applications, and more. 
It allows developers to create interactive and dynamic web pages, build server applications, and even develop mobile apps.

It was created in 1995 by Brendan Eich while working at Netscape Communications Corporation. JavaScript has since become one of the most used programming languages in the world, with a large and active community of developers.

It was originally designed to run in web browsers, but it has evolved to be used in various environments, including server-side development with Node.js and mobile app development with frameworks like React Native.
Web browsers have built-in JavaScript engines that allow them to execute JavaScript code, making it an essential part of modern web development.

JavaScript is a high-level, interpreted language that supports multiple programming paradigms, including object-oriented, functional, and procedural programming. 
It is dynamically typed, meaning that variable types are determined at runtime. 
JavaScript does not require a compilation step, allowing developers to write and execute code directly in the browser or on the server without needing to compile it first.

Important! Since JavaScript is dynamically typed, properties and methods can be added to objects at runtime. 
This flexibility allows for dynamic behavior but can also lead to unexpected results if not used carefully.
This is different from statically typed languages, where the structure of objects is defined at compile time and cannot be changed at runtime.

JavaScript is single-threaded, meaning that it can only execute one piece of code at a time.
However, it uses an event-driven, non-blocking I/O model that allows it to handle multiple tasks concurrently without blocking the main thread. 
This is achieved through the use of callbacks, promises, and async/await syntax.

## Notes on JavaScript Parameters and Arguments
### Parameters vs. Arguments
In JavaScript, function parameters and arguments are distinct concepts:
Parameters are the names listed in the function definition.
Arguments are the real values passed to, and received by the function.

### Parameter Rules
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the arguments.
JavaScript functions do not check the number of arguments received.

Note: Arguments passed to a function are accessible via the `arguments` object, which is an array-like object containing all the arguments passed to the function.
Parameters are passed by value, meaning that when a parameter is passed to a function, a copy of the value is created.
Objects and arrays are passed by reference, meaning that when an object or array is passed to a function, a reference to the original object or array is created.

## Getting Started

There are two ways to run JavaScript.
1. In the browser console.

See image below for how to run JavaScript in the browser console:

![GoogleDevToolConsole](GoogleDevToolConsole.png)

2. Using Node.js.

- Install Node.js from the official website: https://nodejs.org/
- After installation, you can run JavaScript files using the command line. For example, if you have a file named `app.js`, you can run it with the following command:
 ```bash
 node app.js
 ```
 ## Language Basics

 Very good language documentation features and examples:  
 https://www.w3schools.com/js/

 ### Variables and Data Types
 JavaScript has several data types, including:
	- **String**: Represents text. Example: `let name = "John";`
	- **Number**: Represents numeric values. Example: `let age = 30;`
	- **Boolean**: Represents true or false values. Example: `let isStudent = true;`
	
### Declarations
JavaScript has three ways to declare variables: `var`, `let`, and `const`.
- `var`: Function-scoped and can be redeclared and updated. Example: `var x = 10;`
- `let`: Block-scoped and can be updated but not redeclared. Example: `let y = 20;`
- `const`: Block-scoped and cannot be updated or redeclared. Example: `const z = 30;`
- `var` is generally not recommended for use in modern JavaScript due to its function-scoping and potential for unintended consequences. `let` and `const` are preferred for better readability and maintainability of code.

### Functions
Functions are reusable blocks of code that perform a specific task. They can be defined using the `function` keyword or as arrow functions. Example:
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
const greetArrow = (name) => `Hello, ${name}!`;
```

## Objects
Objects are collections of key-value pairs. They can represent real-world entities and are fundamental to JavaScript programming. Example:
```javascript
const person = {
  name: "Alice",
  age: 30,
  greet() {
	return `Hello, my name is ${this.name}.`;
  }
};
```
## Arrays
Arrays are ordered lists of values. They can hold any data type and have various methods for manipulation. Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Adds 6 to the end of the array
const firstNumber = numbers[0]; // Accesses the first element (1)
```
## Control Flow
Control flow statements allow you to control the execution of code based on conditions. Common control flow statements include:
- `if...else`: Executes code based on a condition. Example:
```javascript
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```
- `switch`: Executes code based on multiple conditions. Example:
```javascript
switch (day) {
  case "Monday":
	console.log("Start of the week.");
	break;
  case "Friday":
	console.log("End of the week.");
	break;
  default:
	console.log("Midweek.");
}
```
- `for`: Loops through a block of code a specified number of times. Example:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
- `while`: Loops through a block of code as long as a specified condition is true. Example:
```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

## Objects and Construction Methods

Objects can be created using factory functions, constructor functions, or classes.
Factory functions are simple functions that return an object. Example:
```javascript
function createPerson(name, age) {
  return {
	name,
	age,
	greet() {
	  return `Hello, my name is ${this.name}.`;
	}
  };
}
const person1 = createPerson("Alice", 30);
```

Note: Factory functions are a simple way to create objects, but they do not support inheritance or the use of the `new` keyword.
Constructor functions are functions that are used with the `new` keyword to create objects. Example:
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
	return `Hello, my name is ${this.name}.`;
  };
}
const person2 = new Person("Bob", 25);
```

Note: Constructor functions allow for the use of the `new` keyword and support inheritance through the prototype chain.
Classes are a syntactical sugar over constructor functions and provide a more intuitive way to create objects and handle inheritance. Example:
```javascript
class Person {
  constructor(name, age) {
	this.name = name;
	this.age = age;
  }
  greet() {
	return `Hello, my name is ${this.name}.`;
  }
}
const person3 = new Person("Charlie", 35);
```
Note: Classes provide a cleaner syntax for creating objects and handling inheritance, but they are still based on the prototype-based inheritance model of JavaScript.

## Getters and Setters
Getters and setters are special methods that allow you to define how to access and modify the properties of an object.
Getters are used to retrieve the value of a property, while setters are used to set the value of a property.
Example using getters and setters in a class:
```javascript
class Person {
  constructor(firstName, lastName) {
  	this.firstName = firstName;
	this.lastName = lastName;
	}

  get fullName() {
  	return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
	const parts = name.split(" ");
	this.firstName = parts[0];
	this.lastName = parts[1];
  }
}

  const person1 = new Person("Alice", "Smith");
  console.log(person1.fullName); // Output: "Alice Smith". Note that we can access fullName as a property, not a method. Therefore, we do not need to use parentheses when accessing it.
  person1.fullName = "Bob Johnson";
  console.log(person1.firstName); // Output: "Bob"
  console.log(person1.lastName); // Output: "Johnson"
```

In this example, the `fullName` getter allows us to retrieve the full name of the person by combining the `firstName` and `lastName` properties.
The `fullName` setter allows us to set the full name of the person by splitting the input string and assigning the first part to `firstName` and the second part to `lastName`.
Getters and setters can also be defined in object literals using the `get` and `set` keywords.


Getters and setters can be useful for encapsulating the internal state of an object and providing a controlled interface for accessing and modifying that state.

## Best Practices
- Use `const` by default for variables that won't be reassigned, and use `let` for variables that will be reassigned. Avoid using `var`.
- Follow consistent naming conventions (e.g., camelCase for variables and functions) and PascalCase for classes and constructors.