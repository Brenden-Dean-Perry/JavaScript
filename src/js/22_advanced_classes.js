
////////////////////////////
// JavaScript Classes
////////////////////////////

/*
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
JavaScript Classes are templates for JavaScript Objects.

JavaScript Class Syntax
Use the keyword class to create a class.

Always add a method named constructor():
*/

class ClassName {
  constructor() { ... }
}
Example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

/*
The example above creates a class named "Car".
The class has two initial properties: "name" and "year".
A JavaScript class is not an object.
It is a template for JavaScript objects.
*/

// Using a Class
// When you have a class, you can use the class to create objects:

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

// The example above uses the Car class to create two Car objects.
// The constructor method is called automatically when a new object is created.


///////////////////////////
// Class Inheritance
///////////////////////////
/*
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class:
Exaple: Create a class named "Model" which will inherit the methods from the "Car" class:
*/
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();

/*
The super() method refers to the parent class.
By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
*/

/////////////////////////////
// Getters and Setters
//////////////////////////////
/*
Classes also allow you to use getters and setters.
It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
To add getters and setters in the class, use the get and set keywords.

Note: even if the getter is a method, you do not use parentheses when you want to get the property value.
The name of the getter/setter method cannot be the same as the name of the property, in this case carname.
Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:
Example
You can use the underscore character to separate the getter/setter from the actual property:
*/

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carname;

/*
To use a setter, use the same syntax as when you set a property value, without parentheses:
Example
Use a setter to change the carname to "Volvo":
*/

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;

//////////////////////////////
// Hoisting
//////////////////////////////
/*
Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
That means that you must declare a class before you can use it:

Example:
You cannot use the class yet.
myCar = new Car("Ford") will raise an error.
*/

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
const myCar = new Car("Ford")

///////////////////////////
// Important!
///////////////////////////
/*
Note: For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, 
because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).
*/

////////////////////////////////
// JavaScript Static Methods
////////////////////////////////

/*
Static class methods are defined on the class itself.
You cannot call a static method on an object, only on an object class. Example:
*/

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.