////////////////////////////////
// Iterables in JavaScript
////////////////////////////////

/*
An Iterable is an Iterable Object
Iterable can be iterated over with for...of loops
The for...of Loop
The JavaScript for..of statement loops through the elements of an iterable object.
*/

for (variable of iterable) {
    // code block to be executed
}

// Iterating Over a String
// You can use a for...of loop to iterate over the elements of a string:

// Example: Iterating over a string
const name = "W3Schools";

for (const x of name) {
    // code block to be executed
}

// Iterating Over an Array
const numbers = [2, 4, 6, 8];

for (const x of numbers) {
    // code block to be executed
}

// Iterating Over a Set
const mySet = new Set(["Apple", "Banana", "Cherry"]);

for (const x of mySet) {
    // code block to be executed
}

// Iterating Over a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

for (const x of fruits) {
    // code block to be executed
}

/*
JavaScript Iterators
The iterator protocol defines how to produce a sequence of values from an object.
An object becomes an iterator when it implements a next() method.
The next() method must return an object with two properties:

value (the next value)
done (true or false)
Technically, iterables must implement the Symbol.iterator method.
*/

//////////////////////////////////  
// Home Made Iterable
/////////////////////////////////
// This iterable returns never ending number: 10, 20, 30, 40,.... when the next() method is called:

// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n, done: false };
        }
    };
}

// Run the Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30


/*
A real JavaScript iterable is an object that has a Symbol.iterator.
The Symbol.iterator is a function that returns a next() function.
An iterable can be iterated over with the code: for (const x of iterable) { }
*/

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true }
            return { value: n, done: done };
        }
    };
}

// Now you can use for..of
for (const num of myNumbers) {
        // Any Code Here
    }

// The Symbol.iterator method is called automatically by for..of.
// But we can also do it "manually":

let iterator = myNumbers[Symbol.iterator]();

while (true) {
    const result = iterator.next();
    if (result.done) break;
    // Any Code Here
}


////////////////////////////////
// Iterators in JavaScript
////////////////////////////////


/*
The Iterator Object
An Iterator is an object that provides a standard way to access elements sequentially.
An Iterator must adheres to the Iterator Protocol: It must have a next() method.

The next() method
The next() method returns an object with two properties:
1. The value property holds the next value in the iteration sequence.
2. The done property returns false if there are more elements to iterate over, otherwise it returns true.

The For Of Loop
The JavaScript for..of statement loops through the elements of an iterable object.

for (variable of iterable) {
  // code block to be executed
}

Technically, iterables must implement the Symbol.iterator method.

In JavaScript the following are iterables:

Strings
Arrays
Typed Arrays
Sets
Maps

Because their prototype objects have a Symbol.iterator method:
Iterators provide a controlled way to work with data sequences, enabling custom iteration logic for various data structures.
They are particularly useful for handling streams of data, lazy computation of values, and building custom data structures with defined iteration behaviors.

Helper Functions
JavaScript 2025 (ECMAScript 2025) officially approved a set of new Iterator Helper methods that significantly enhance the functionality of iterators in JavaScript.
The methods provide a more functional and efficient way to work with iterable objects, including generators, by allowing direct manipulation and transformation without first converting them to arrays:

Function	Description
drop()	Returns an iterator that skips a specified number of elements before yielding the rest
every()	Returns true if all elements satisfy a test function
filter()	Returns an iterator containing elements that satisfy a filter function
find()	Returns the first element that satisfies a test function
flatMap()	Returns an iterator by mapping each element and then flattening the results
forEach()	Executes a function once for each element in the iterator.
from()	creates an iterator object from an iterable
map()	Returns an iterator with all elements transformed by a map function
reduce()	Applies a reducer function against each element to reduce it to a single value
some()	Returns true if at least one element satisfy a test function
take()	Returns an iterator that yields a specified number of elements
*/


// Helper Functions
// From
const myArray = [1, 2, 3];
const myIterator = Iterator.from(myArray);

// Drop
const myArray = [1, 2, 3, 4, 5];
const myIterator = Iterator.from(myArray).drop(2); // Returns an iterator that yields 3, 4, 5

// Map
const myArray = [1, 2, 3];
const myIterator = Iterator.from(myArray).map(x => x * 2); // Returns an iterator that yields 2, 4, 6

// Filter
const myArray = [1, 2, 3, 4, 5];
const myIterator = Iterator.from(myArray).filter(x => x % 2 === 0); // Returns an iterator that yields 2, 4

// Some
const myArray = [1, 2, 3, 4, 5];
const hasEven = Iterator.from(myArray).some(x => x % 2 === 0); // Returns true

////////////////////////////////
// Generators in JavaScript
////////////////////////////////
/*
JavaScript Generators
A JavaScript Function can only return one value.
A JavaScript Generator can return multiple values, one by one.
A JavaScript Generator can yield a stream of data.
A JavaScript Generator can be paused and resumed.

A Generator Function is defined using the function* syntax:

function* myGenerator() {}
When called, a generator function returns a Generator Object, not a direct value:
{value:1, done:false}


*/

// Generator Objects
// A Generator Object is returned by the generator function.
// It conforms to both the iterable and iterator protocols, meaning it can be iterated over using for...of loops.

function* myStream() {
    // return {value:1, done:false}
    yield 1;

    // return {value:2, done:false}
    yield 2;

    // return {value:3, done:true}
    return 3;
}

// Create a Generator
let myGenerator = myStream();

// Iterate over the Generator
for (let value of myGenerator) {
    // code
}

/*
The yield Keyword
The yield keyword pauses execution and yield a value back to the caller.
The generator's state is preserved, and can be resumed from the point of the yield when next() is called.
Generators maintain their internal state between yield calls, allowing them to continue execution from where they left off.
*/