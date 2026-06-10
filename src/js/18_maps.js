///////////////////////////
// Maps
///////////////////////////

// A Map is a collection of key-value pairs where both keys and values can be of any type.

// Creating a Map
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set(1, 'one');
console.log(myMap); // Map(3) { 'name' => 'John', 'age' => 30, 1 => 'one' }


const mapFromArray = new Map([
        ['key1', 'value1'],
        ['key2', 'value2']
]);

// Updating a value
myMap.set('age', 31); // Update the value associated with the key 'age'

// Retrieving a value
console.log(myMap.get('name')); // Output: John

typeof myMap // Output: object (Maps are a type of object in JavaScript)
myMap instanceof Map // Output: true (myMap is an instance of the Map class)


///////////////////////////
// Methods
///////////////////////////


// has(key): Returns true if the Map contains the specified key, otherwise false.
console.log(myMap.has('name')); // Output: true

// delete(key): Removes the specified key and its associated value from the Map.
myMap.delete('age'); // Removes the key 'age' and its value from the Map

// size: Returns the number of key-value pairs in the Map.
console.log(myMap.size); // Output: 2 (since we deleted one key-value pair, there are now 2 pairs left)

// keys(): Returns an iterator object that contains the keys of the Map.
console.log(myMap.keys()); // Output: MapIterator { 'name', 1 }

// values(): Returns an iterator object that contains the values of the Map.
console.log(myMap.values()); // Output: MapIterator { 'John', 'one' }

// entries(): Returns an iterator object that contains the key-value pairs of the Map as [key, value] arrays.
console.log(myMap.entries()); // Output: MapIterator { [ 'name', 'John' ], [ 1, 'one' ] }

// clear(): Removes all key-value pairs from the Map.
myMap.clear(); // Clears all entries from the Map

// set(key, value): Adds or updates a key-value pair in the Map.
myMap.set('name', 'Alice'); // Adds a new key-value pair to the Map

// forEach(callback): Executes a provided function once for each key-value pair in the Map.
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
}); // Output: name: Alice

// Map objects are iterable, so you can use a for...of loop to iterate over the key-value pairs.
for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
} // Output: name: Alice

// Map objects can also be converted to arrays using the spread operator or Array.from() method.
const mapToArray = [...myMap]; // Convert Map to an array of [key, value] pairs
console.log(mapToArray); // Output: [ [ 'name', 'Alice' ] ]
const mapToArray2 = Array.from(myMap); // Convert Map to an array of [key, value] pairs
console.log(mapToArray2); // Output: [ [ 'name', 'Alice' ] ]

// Group by
const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];

function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low"; // Callback function to Group Elements
}

const result = Map.groupBy(fruits, myCallback); // Group by Quantity

///////////////////////////
// WeakMap
///////////////////////////
// A WeakMap is a collection of key-value pairs where the keys are objects and the values can be of any type.
// The keys in a WeakMap are weakly referenced, meaning that if there are no other references to the key object, it can be garbage collected.

let myMap = new WeakMap();
let myObj = { fname: "John", lname: "Doe" };

myMap.set(myObj, "secret");
myObj = null; // now myObj (and its values) in myMap can be garbage collected

// Note: WeakMaps do not have methods like size, keys, values, or entries, and they are not iterable. WeakMaps are not enumerable.
// You cannot iterate over the keys and values with for loops, forEach(), or keys().
// You cannot access the size.

// WeakMaps are useful for storing private data for objects, as the keys (objects) can be garbage collected when they are no longer needed, preventing memory leaks.
// Create WeakMap
const myMap = new WeakMap();

// Private Fields Simulation
class User {
    constructor(name) {
        myMap.set(this, { secret: "hidden data" });
        this.name = name;
    }
    getSecret() {
        return myMap.get(this).secret;
    }
}

const user1 = new User("John");
secret = user1.getSecret();

/*
Example Explained:
A WeakMap does not allow iteration.
Outside code can not "discover" what objects are stored inside a WeakMap.
To get the secret, you need the this reference that was used in the constructor.
External code has access to user1 and myMap, bot not to the this reference inside myMap, unless you explicitly expose it, like via getSecret(), the secret value is unreachable.

Privacy:
WeakMap was intentionally designed for privacy: you can set, get, has, and delete using an object key, but not inspect what is inside.
This was a great tool for simulating private properties in JavaScript classes (before #private fields were added to the language).
*/