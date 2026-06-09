/*
Loops are a fundamental programming concept that allow you to repeat a block of code multiple times. 
In JavaScript, there are several types of loops, including:
1. for: Used to execute a block of code a specific number of times.
2. while: Used to execute a block of code as long as a specified condition is true.
3. do...while: Similar to the while loop, but it executes the block of code at least once before checking the condition.
4. for...in: Used to iterate over the properties of an object.
5. for...of: Used to iterate over the values of an iterable object, such as an array or a string.
*/

///////////////////////////////////////////////////
// for loop
///////////////////////////////////////////////////
// The for loop consists of three parts: the initialization, the condition, and the increment/decrement.
for (let i = 0; i < 5; i++) {
	console.log(i); // Output: 0, 1, 2, 3, 4
}

// You can also use a for loop to iterate over an array.
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]); // Output: 1, 2, 3, 4, 5
	}

/////////////////////////////////////////////////
// while loop
/////////////////////////////////////////////////
// The while loop executes a block of code as long as a specified condition is true.
let count = 0;
while (count < 5) {
	console.log(count); // Output: 0, 1, 2, 3, 4
	count++;
	}

//////////////////////////////////////////////////
// do...while loop
//////////////////////////////////////////////////
// The do...while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
let doCount = 0;
do {
	console.log(doCount); // Output: 0, 1, 2, 3, 4
	doCount++;
} while (doCount < 5);

/////////////////////////////////////////////////
// for...in loop
/////////////////////////////////////////////////
// The for...in loop is used to iterate over the properties of an object. 
let person = {
	name: 'Alice',
	age: 30,
	city: 'New York'
	};
	for (let key in person) {
		console.log(key + ': ' + person[key]); // Output: name: Alice, age: 30, city: New York
		}


////////////////////////////////////////////////
// for...of loop
////////////////////////////////////////////////
// The for...of loop is used to iterate over the values of an iterable object, such as an array or a string.
let numbersArray = [1, 2, 3, 4, 5];
for (let number of numbersArray) {
	console.log(number); // Output: 1, 2, 3, 4, 5
	}


// Break and continue statements can be used within loops to control the flow of execution.
// The break statement is used to exit a loop prematurely.
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break; // Exit the loop when i is 5
	}
	console.log(i); // Output: 0, 1, 2, 3, 4
}
// The continue statement is used to skip the current iteration of a loop and continue with the next iteration.
for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		continue; // Skip even numbers
	}

	console.log(i); // Output: 1, 3, 5, 7, 9
}



