/////////////////////////////////
// Sets in JavaScript
/////////////////////////////////
// A Set is a collection of unique values. It can hold any type of value, whether primitive or object references.
// Sets are useful when you want to store a collection of items and ensure that there are no duplicates.

// Creating a Set
const mySet = new Set();

// Adding values to a Set
mySet.add(1);
mySet.add(5);
mySet.add(5); // This will not be added since it's a duplicate
mySet.add('Hello');
mySet.add({ name: 'John' }); // Objects are unique by reference, so this will be added

console.log(mySet); // Output: Set(4) { 1, 5, 'Hello', { name: 'John' } }


// Creating a Set from an array
const myArray = [1, 2, 3, 4, 4, 5];
const mySetFromArray = new Set(myArray);
console.log(mySetFromArray); // Output: Set(5) { 1, 2, 3, 4, 5 } // Duplicates are removed


// Size 
console.log(mySet.size); // Output: 4

// Checking for values in a Set
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(3)); // Output: false


// Values in a Set can be iterated over using for...of loop
for (let item of mySet) {
    console.log(item);
}
// Output:
// 1
// 5
// 'Hello'

// Keys and values in a Set are the same, so we can use keys() or values() method to get the values
for (let item of mySet.keys()) {
    console.log(item);
}

for (let item of mySet.values()) {
    console.log(item);
}

// Deleting values from a Set
mySet.delete(5);
console.log(mySet); // Output: Set(3) { 1, 'Hello', { name: 'John' } }

// Clearing a Set
mySet.clear();
console.log(mySet); // Output: Set(0) {}

// Entries in a Set
const mySet2 = new Set(['a', 'b', 'c']);
for (let entry of mySet2.entries()) {
    console.log(entry);
}
// Output:
// ['a', 'a']
// ['b', 'b']
// ['c', 'c']
// The entries() method returns an iterator object that contains an array of [value, value] for each element in the Set, since Sets do not have keys, the value is repeated as both the key and value in the array.


/////////////////////////////////
// Sets logic
/////////////////////////////////
// Union of two sets
// The union of two sets is a new set that contains all the elements from both sets. If there are duplicate elements, they will only appear once in the union set.
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = setA.union(setB);
console.log(union); // Output: Set(5) { 1, 2, 3, 4, 5 }

// Intersection of two sets
// The intersection of two sets is a new set that contains only the elements that are present in both sets.
const intersection = setA.intersection(setB);
console.log(intersection); // Output: Set(1) { 3 }

// Difference of two sets
const difference = setA.difference(setB);
console.log(difference); // Output: Set(2) { 1, 2 }

// Subset of a set
// The subset method checks if all elements of setA are present in setB
const isSubset = setA.isSubset(setB);
console.log(isSubset); // Output: false

const setC = new Set([1, 2]);
const isSubset2 = setC.isSubset(setA);
console.log(isSubset2); // Output: true

// Superset of a set
// The isSuperset method checks if the current set is a superset of another set, meaning it contains all the elements of the other set.
const isSuperset = setA.isSuperset(setB);
console.log(isSuperset); // Output: false

const setD = new Set([1, 2, 3, 4, 5]);
const isSuperset2 = setD.isSuperset(setA);
console.log(isSuperset2); // Output: true

// Disjoint sets
// Two sets are disjoint if they have no elements in common.
const setE = new Set([6, 7, 8]);
const isDisjoint = setA.isDisjoint(setE);
console.log(isDisjoint); // Output: true


// symmetric difference of two sets
// The symmetric difference of two sets is the set of elements that are in either of the sets, but not in both.
const symmetricDifference = setA.symmetricDifference(setB);
console.log(symmetricDifference); // Output: Set(4) { 1, 2, 4, 5 }

/////////////////////////////////
// Weak sets
/////////////////////////////////
// A WeakSet is a collection of objects.
// It is similar to a Set, but it only holds weak references to the objects, meaning that if there are no other references to an object in the WeakSet, it can be garbage collected.
// WeakSets are useful for storing objects that may be removed from memory when they are no longer needed, such as DOM elements or event listeners.
// The primary use case for WeakSets is to track objects without preventing their garbage collection, which can help prevent memory leaks in certain scenarios.

// Creating a WeakSet
const myWeakSet = new WeakSet();
const element1 = { name: 'John' };
const element2 = { name: 'Jane' };
myWeakSet.add(element1);
myWeakSet.add(element2);
console.log(myWeakSet); // Output: WeakSet { <items unknown> }

// Checking for values in a WeakSet
console.log(myWeakSet.has(element1)); // Output: true
console.log(myWeakSet.has({ name: 'John' })); // Output: false (different object reference)

// Deleting values from a WeakSet
myWeakSet.delete({ name: 'John' }); // Output: false (different object reference)
// Note: Since WeakSets only hold weak references to objects, they do not prevent garbage collection. If there are no other references to the objects in the WeakSet, they may be removed from memory, and the WeakSet will not be able to access them anymore.