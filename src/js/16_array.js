///////////////////////////////////
// Array
///////////////////////////////////

// Arrays are used to store multiple values in a single variable. They are ordered, mutable, and can contain elements of different types.

// create an array
const arr = [1, 2, 3, 4, 5];
// Accessing elements
console.log(arr[0]); // Output: 1
// Adding elements
arr.push(6); // Adds 6 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
// Removing elements
arr.pop(); // Removes the last element (6)
console.log(arr); // Output: [1, 2, 3, 4, 5]
// Iterating over an array
arr.forEach((element) => {
    console.log(element); // Output: 1, 2, 3, 4, 5 (each on a new line)
});

const arr2 = new Array(3); // Creates an array with 3 empty slots

// Common error when using new Array() with a single numeric argument, it creates an array with that many empty slots instead of an array with that number as an element.
// When using index add elements to the array, it will create empty slots for any indices that are not defined. For example:
const arr3 = [];
arr3[2] = 'Hello'; // This will create an array with 3 slots, where the first two slots are empty and the third slot contains 'Hello'
console.log(arr3); // Output: [ <2 empty items>, 'Hello' ]

// Adding elements to an array using the length property
arr3[arr3.length] = 'World'; // This will add 'World' to the end of the array
console.log(arr3); // Output: [ <2 empty items>, 'Hello', 'World' ]

///////////////////////////////////
// Array methods
///////////////////////////////////

// Map
const newArr = arr.map((element) => element * 2); // Creates a new array with each element multiplied by 2
console.log(newArr); // Output: [2, 4, 6, 8, 10]

// Filtering an array
const filteredArr = arr.filter((element) => element > 3); // Creates a new array with elements greater than 3
console.log(filteredArr); // Output: [4, 5]

// Reducing an array
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements in the array
console.log(sum); // Output: 15

// Finding an element in an array
const foundElement = arr.find((element) => element === 3); // Finds the first element that is equal to 3
console.log(foundElement); // Output: 3

// Sorting an array (in place)
const string_arr = ['banana', 'apple', 'cherry'];
string_arr.sort(); // Sorts the array in alphabetical order. By default, the sort() method sorts elements as strings in ascending order.
// To sort numbers, you need to provide a compare function. For example:
const num_arr = [5, 2, 9, 1, 5, 6];
num_arr.sort((a, b) => a - b);  

// To sort array
const new_arr = arr.toSorted((a, b) => a - b); // Sorts the array in ascending order and returns a new array
console.log(new_arr); // Output: [1, 2, 3, 4, 5]

// Checking if an array includes a certain element
const includesElement = arr.includes(3); // Checks if the array includes the element 3
console.log(includesElement); // Output: true

// Joining an array into a string
const joinedArr = arr.join(', '); // Joins the array elements into a string separated by ', '
console.log(joinedArr); // Output: '1, 2, 3, 4, 5'

// Splitting a string into an array
const str = 'Hello, World';
const splitArr = str.split(', '); // Splits the string into an array using ', ' as the separator
console.log(splitArr); // Output: ['Hello', 'World']

// Pop, Push, Shift, Unshift
arr.push(6); // Adds 6 to the end of the array
console.log(arr); // Output: [5, 4, 3, 2, 1, 6]

arr.pop(); // Removes the last element (6)
console.log(arr); // Output: [5, 4, 3, 2, 1]

arr.unshift(0); // Adds 0 to the beginning of the array
console.log(arr); // Output: [0, 5, 4, 3, 2, 1]

arr.shift(); // Removes the first element (0)
console.log(arr); // Output: [5, 4, 3, 2, 1]

// Deleteing an element from an array
delete arr[2]; // Deletes the element at index 2 (3), but does not change the length of the array
console.log(arr); // Output: [5, 4, <1 empty item>, 2, 1]

// To remove an element and change the length of the array, you can use pop, shift, or splice methods instead of delete. For example:
arr.splice(2, 1); // Removes 1 element at index 2 (the empty slot)
console.log(arr); // Output: [5, 4, 2, 1]

// Concatenating arrays
const arr4 = [6, 7, 8];
const concatenatedArr = arr.concat(arr4); // Concatenates arr and arr4 into a new array
console.log(concatenatedArr); // Output: [5, 4, 2, 1, 6, 7, 8]

// Flattening an array
const nestedArr = [1, [2, 3], [4, [5, 6]]];
const flattenedArr = nestedArr.flat(Infinity); // Flattens the nested array into a single-level array
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6]



// For each
arr.forEach(
    (element, index) => {
        console.log(`Element at index ${index}: ${element}`);
    }
);
// Output:
// Element at index 0: 5
// Element at index 1: 4
// Element at index 2: 2
// Element at index 3: 1

// Or with a function declaration
function logElement(element, index) {
    console.log(`Element at index ${index}: ${element}`);
}
arr.forEach(logElement); // Same output as above


// Every
const allGreaterThanZero = arr.every((element) => element > 0); // Checks if every element in the array is greater than 0
console.log(allGreaterThanZero); // Output: true

// Some
const someGreaterThanTwo = arr.some((element) => element > 2); // Checks if at least one element in the array is greater than 2
console.log(someGreaterThanTwo); // Output: true