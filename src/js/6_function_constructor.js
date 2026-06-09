
function Circle(radius) {
	this.radius = radius;
	this.area = function() {
		return Math.PI * this.radius * this.radius;
		}

		const circle1 = new Circle(5);
		console.log(circle1.radius); // Output: 5

/* 
We can also create a circle by using the Function constructor. 
This is a less common way to create objects, but it can be useful in certain situations.
This method is not recommended for general use because it can lead to security issues and is less efficient than using a constructor function or class.
It demonstrates how to create a function using the Function constructor, which takes a string of code as an argument and returns a new function object.
*/		

const CircleObj = new Function('radius', `
	this.radius = radius;
	this.area = function() {
		return Math.PI * this.radius * this.radius;
	}
`);

const circle2 = new CircleObj(10);
console.log(circle2.radius); // Output: 10
