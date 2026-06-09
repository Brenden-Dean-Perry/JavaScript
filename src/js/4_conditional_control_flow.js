/*
Control flow in JavaScript refers to the order in which the code is executed. 
It allows you to make decisions and repeat actions based on certain conditions. 
The main control flow statements in JavaScript are:
1. if...else: Used to execute a block of code if a specified condition is true, and another block of code if the condition is false.
2. switch: Used to perform different actions based on different conditions.
3. Ternary Operator: A shorthand for if...else statements that returns a value based on a condition.
*/

///////////////////////////////////////////////
// if...else
///////////////////////////////////////////////
let age = 20;
if (age >= 18) {
	console.log('You are an adult.');
} 
else if (age >= 13) {
	console.log('You are a teenager.');
}
else {
	console.log('You are a minor.');
}

// Using the in operator to check if a property exists in an object
let person = {
	name: 'Alice',
	age: 30
};

if ('name' in person) {
	console.log('Name exists in person object.');
} else {
	console.log('Name does not exist in person object.');
}


///////////////////////////////////////////////
// Ternary Operator
///////////////////////////////////////////////
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: "Yes"


///////////////////////////////////////////////
// switch
///////////////////////////////////////////////

let day = 'Monday';
switch (day) {
	case 'Monday':
		console.log('Today is Monday.');
		break;
	case 'Tuesday':
		console.log('Today is Tuesday.');
		break;
	case 'Wednesday':
		console.log('Today is Wednesday.');
		break;
	case 'Thursday':
		console.log('Today is Thursday.');
		break;
	case 'Friday':
		console.log('Today is Friday.');
		break;
	case 'Saturday':
		console.log('Today is Saturday.');
		break;
	case 'Sunday':
		console.log('Today is Sunday.');
		break;
	default:
		console.log('Invalid day.');
		break;
}

/*
Switch uses strict comparison (===).
The values must be of the same type to match.
A strict comparison can only be true if both operands are of the same type.
*/