// Objects
// Objects in JavaScript are collections of key-value pairs. They can hold various data types, including other objects, arrays, functions, and primitive values.

/*
What are JavaScript Objects?
Objects are variables that can store both values and functions.
Values are stored as key:value pairs called properties.
Functions are stored as key:function() pairs called methods.
*/

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

// Object Literal
// An object literal "literally" describes an object using a concise syntax with zero or more key:value pairs inside curly braces to describe all the object properties:
const person =
{
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// You can also create an empty object, and add the properties later:
// Create an Object
const person2 = {};

// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";


// Create an Object using the Object() Constructor
const person = new Object({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
});

// Accessing Object Properties
// You can access the properties of an object using either dot notation or bracket notation:
// Dot Notation
console.log(person.firstName); // Output: John
// Bracket Notation
console.log(person["lastName"]); // Output: Doe


// Object Methods
const person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Adding new properties and methods to an existing object
person3.national = "American"; // Adding a new property
person3.greet = function () { // Adding a new method
    return "Hello, my name is " + this.fullName();
};
console.log(person3.fullName()); // Output: John Doe
console.log(person3.greet()); // Output: Hello, my name is John Doe


// Deleting Object Properties
delete person3.age; // Deleting the age property
console.log(person3.age); // Output: undefined

// Checking if a property exists in an object
console.log("firstName" in person3); // Output: true

// This keyword in JavaScript objects refers to the current object, allowing you to access its properties and methods from within its own methods.
// The this Keyword
// In an object method, this refers to the object.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    getId: function () {
        return this.id;
    }
};

let number = person.getId();

// Accessing Object Methods
// To call an object method, add parentheses():
// Without parentheses you get the function itself.

//Syntax
objectName.methodName()
//If you call a method with parentheses, it will execute as a function:
name = person.fullName();
// If you call a method without parentheses, it will return the function definition:
name = person.fullName;


// Adding a Method to an Object
// You can add a method to an object by assigning a function to a property:

// Example
// Assign person.name to a function
person.name = function () {
    return this.firstName + " " + this.lastName;
};
// Call the method
name = person.name();

// Display
JSON.stringify(person); // Convert the person object to a JSON string for display

// Constructor Function
// A constructor function is a special type of function that is used to create and initialize objects. It is typically defined with a capitalized name to distinguish it from regular functions. When called with the new keyword, it creates a new object and sets the this keyword to refer to that object.

/*
Object Constructor Functions
Sometimes we need to create many objects of the same type.
To create an object type we use an object constructor function.
It is considered good practice to name constructor functions with an upper -case first letter.
*/
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

/*
Property Default Values
A value given to a property will be a default value for all objects created by the constructor:
*/

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English"; // Default value for all objects created by this constructor
}