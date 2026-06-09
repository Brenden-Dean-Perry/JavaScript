//////////////////////////////////////////
// Private properities and methods
//////////////////////////////////////////
/*
Private properties and methods can be created using closures.
A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
*/


class Circle {
    constructor(radius) {
        this.radius = radius;

        let defaultColor = 'red'; // Private (local) variable
        let defaultLocation = { x: 0, y: 0 }; // Private (local) variable

        let computeOptimumLocation = function() {
            // Compute the optimum location of the circle
        };

        this.draw = function() {
            computeOptimumLocation(); // Accessing the private method
            console.log('Drawing a circle with radius ' + this.radius);
        };

        this.area = function() {
            return Math.PI * this.radius * this.radius;
        };
    }
}

const circle1 = new Circle(5);
console.log(circle1.radius); // Output: 5
console.log(circle1.area()); // Output: 78.53981633974483
circle1.defaultColor; // Output: undefined (defaultColor is private)

//////////////////////////////////////////////
// Getters and Setters
//////////////////////////////////////////////

class CircleWithGetters {
    constructor(radius) {
        this.radius = radius;
    }

    // Implementing a getter for the default color
    get getDefaultColor() {
        return 'red'; // Return the default color
    }
}

const circle2 = new CircleWithGetters(10);
console.log(circle2.radius); // Output: 10
console.log(circle2.getDefaultColor); // Output: red
