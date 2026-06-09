/*
In JavaScript, reference types are objects that store a reference to a value rather than the value itself. 
When you assign an object to a variable, you are actually assigning a reference to that object in memory. 
This means that if you change the object through one variable, it will affect all variables that reference that same object.
The most common reference types in JavaScript are:
1. Object: A collection of key-value pairs. Example: { name: 'Alice', age: 30 }
2. Array: An ordered list of values. Example: [1, 2, 3]
3. Function: A block of code that can be executed when called. Example: function greet() { console.log('Hello!'); }
*/



///////////////////////////////////////////////
// Arrays
///////////////////////////////////////////////
/*
Arrays are a type of object that store an ordered list of values. 
They are created with square brackets[] and can contain any data type, including other arrays or objects.
*/
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
// Output: 1 (accessing the first element of the array)
numbers.push(6); // Adding a new element to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// We can add different data types to an array, including objects and other arrays.
let mixedArray = [1, 'Hello', true, { name: 'Alice' }, [1, 2, 3]];


///////////////////////////////////////////////
// Functions
///////////////////////////////////////////////

//Functions are also objects in JavaScript, and they can be assigned to variables, passed as arguments to other functions, and returned from functions.
function greet() {
    console.log('Hello!');
}
let sayHello = greet; // sayHello references the same function as greet
sayHello(); // Output: 'Hello!' (both variables reference the same function)

// You can also define functions using function expressions or arrow functions.
let greet2 = function () {
    console.log('Hi!');
};
greet2(); // Output: 'Hi!'

// Arrow functions provide a more concise syntax for writing functions.
let greet3 = () => {
    console.log('Hey!');
};
greet3(); // Output: 'Hey!'

// Functions can also have parameters and return values.
// Note: A parameter is a variable that is used to pass information into a function, while an argument is the actual value that is passed to the function when it is called.
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

///////////////////////////////////////////////
// Object
///////////////////////////////////////////////
// Objects are created with an object literal syntax, which uses curly braces {} to define the object and its properties.
// Properties are defined as key-value pairs, where the key is a string and the value can be any data type, including another object.
let person = {
    name: 'Alice',
    age: 30
};

let anotherPerson = person; // anotherPerson references the same object as person
anotherPerson.age = 35;

console.log(person.age); // Output: 35 (both variables reference the same object)

// Alternatively, you can access and modify the properties of an object using dot notation or bracket notation.
person.name = 'Bob'; // Using dot notation to change the name property
console.log(person.name); // Output: 'Bob'

person['age'] = 40; // Using bracket notation to change the age property
console.log(person.age); // Output: 40

// Another way to create an object is by using the Object constructor.
let anotherPerson2 = new Object();
anotherPerson2.name = 'Charlie';
anotherPerson2.age = 25;
console.log(anotherPerson2); // Output: { name: 'Charlie', age: 25 }

// You can also create objects using a constructor function or a class.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person3 = new Person('Dave', 40);
console.log(person3); // Output: Person { name: 'Dave', age: 40 }

/* 
Notices that the constructor function uses the 'this' keyword to assign properties to the object being created.
When you call 'new Person()', it creates a new object and sets 'this' to that object, allowing you to initialize its properties.
Also realize that there is no return statement in the constructor function. When you use 'new', JavaScript automatically returns the new object that was created.
*/

// Classes are a more modern way to create objects and provide a clearer syntax for defining object constructors and methods.
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person4 = new PersonClass('Eve', 28);
console.log(person4); // Output: PersonClass { name: 'Eve', age: 28 }


//////////////////////////////////////////////////
// Importance of Dynamic Typing
//////////////////////////////////////////////////
/* 
JS is a dynamically typed language, which means that variables can hold values of any type and can be reassigned to different types. 
Additionally, objects in JavaScript are mutable, meaning that their properties can be changed after they are created.
This flexibility allows for powerful programming patterns but also requires careful management of references to avoid unintended side effects when modifying objects.
This is different from languages with static typing, where the type of a variable is determined at compile time and cannot change, and from languages with immutable objects, where once an object is created, it cannot be modified.
This makes JavaScript powerful and flexible, but also requires developers to be mindful of how they manage references to objects and functions to avoid bugs and unintended consequences.
*/

// Example of adding properties to an object after it has been created
let car = {
    make: 'Toyota',
    model: 'Camry'
};
car.year = 2020; // Adding a new property to the car object
console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020 }


// We can also delete properties from an object using the delete operator.
delete car.model; // Deleting the model property from the car object
console.log(car); // Output: { make: 'Toyota', year: 2020 }


// JS is a prototype-based language, which means that objects can inherit properties and methods from other objects.


////////////////////////////////////////////////////
// Symbols
////////////////////////////////////////////////////

// Symbols are a unique and immutable primitive data type that can be used as keys for object properties.
// According to MDN, this is there only purpose. They are created using the Symbol() function and can be used to create private properties or to avoid naming conflicts in objects.
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // Output: false (each symbol is unique, even if they have the same description)

// Symbols can be used to create private properties in objects, as they are not accessible through normal property enumeration.
// This means that if you use a symbol as a key for an object property, it will not show up in a for...in loop or when using Object.keys() to get the keys of the object.
// You can access the symbol-keyed property, but you need to use the symbol itself as the key to access it manually.

// Imagine you have an opbject that represents a user, and you want to store a password for that user. You could use a symbol to create a private property for the password, like this:
let passwordSymbol = Symbol('password');

let user = {
    name: 'Alice',
    [passwordSymbol]: 'mySecretPassword'
};  
console.log(user); // Output: { name: 'Alice' } (the password property is not visible)

// To access the password property, you would need to use the symbol key directly, like this:
console.log(user[passwordSymbol]); // Output: 'mySecretPassword'

// Symbols can also be used to avoid naming conflicts in objects, as they are guaranteed to be unique.
// To illustrate this, imagine you have two different ids that you want to use as keys for properties in an object.
// If you use strings as keys, you might accidentally overwrite one of the properties if they have the same name.
// However, if you use symbols as keys, you can ensure that each property is unique and won't conflict with any other properties in the object.

let user1 = {
    id: 1,
    name: 'Alice'
};

user1[Symbol('id')] = 2; // Adding a new property with a symbol key

// To see all the keys of the user1 object, including the symbol key, you can use Object.getOwnPropertySymbols() to get an array of all the symbol keys in the object.
let symbolKeys = Object.getOwnPropertySymbols(user1);
console.log(symbolKeys); // Output: [Symbol(id)] (an array containing the symbol key)

// You can also use the symbol key to access the value of the property, like this:
console.log(user1[symbolKeys[0]]); // Output: 2 (accessing the value of the property with the symbol key)

// To create deterministic symbols, you can use the Symbol.for() method, which takes a string key and returns the same symbol for that key every time it is called.
// This allows you to create symbols that can be shared across different parts of your code, as long as they use the same key.
let sym3 = Symbol.for('mySymbol');
let sym4 = Symbol.for('mySymbol');
console.log(sym3 === sym4); // Output: true (both sym3 and sym4 reference the same symbol)