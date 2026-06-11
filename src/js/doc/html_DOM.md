# The HTML DOM
HTML Document Object Model
The HTML DOM (HTML Document Object Model) is an Object Model for HTML Documents.

The HTML DOM is a tree of Nodes that represents an HTML Page.
The DOM is a W3C Standard (World Wide Web Consortium):
"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

The DOM Tree
When a web page loads, the browser creates a tree-like representation of the HTML document.
Each part of the document are nodes in the tree:

Node		Description
Document	Owner of all nodes in the document
<html>		Element Node
<head>		Element Node
<body>		Element Node
<a>			Element Node
href		Attribute Node
<h1>		Element Node
My Header	Text Node

What we'll learn:
How to change the content of HTML elements
How to change the style (CSS) of HTML elements
How to add and delete HTML elements
How to react to events in from HTML elements


The DOM API (Application Programming Interface) is a set of Methods and Properties that allow JavaScript to change the content, structure, and style of any HTML elements.
An API Method is an Action that you can do on an HTML element.
An API Property is a Value that you can access on an HTML element.

## Accessing HTML Elements
The HTML DOM can be used to access HTML elements.
The most common way to access an HTML element is to use the id of the element:

```HTML
<html>
<body>

<p id="demo"></p>
<script>

// Access a paragraph Element
const myPara = document.getElementById("demo");

// Change the content of the Element
myPara.innerHTML = "Hello World!";
</script>

</body>
</html>
```

If you want to access any element in an HTML page, you always start with accessing the document object. The document object represents your web page.
To manipulate HTML with JavaScript, you first need to select an element.
Below are some examples of how you can use the document object to access HTML:


Selecting HTML Elements
Method									Description
document.getElementById(id)				Find an element by element id
document.getElementsByTagName(name)		Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name
document.querySelector(selector)		Find the first element that matches a CSS selector
document.querySelectorAll(selector)		Find all elements that match a CSS selector


Accessing Element Content
Property			Description
element.innerHTML	The HTML content of an element
element.textContent	The text content of an element


Accessing Element Attributes
Property					Description
element.attribute			Change the attribute value of an HTML element
element.style.property		The style of an HTML element


Changing Element Attributes
Method					Description
element.setAttribute()	Create or set a new attribute


Manipulating Structure
Method						Description
document.createElement()	Creates a new HTML element
document.removeChild()		Remove an HTML element
document.appendChild()		Add an HTML element
document.replaceChild()		Replace an HTML element


Adding Event Handlers
Method														Description
document.getElementById(id).onclick = function(){code}		Adding event handler code to an onclick event


### Selecting DOM Elements
const element = document.getElementById("intro");

Finding HTML Elements by Tag Name
This example finds all <p> elements:

``` javascript
const element = document.getElementsByTagName("p");
```

This example finds the element with id="main", and then finds all <p> elements inside "main":

```javascript
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
```

This example returns a list of all elements with class="intro".

```javascript
const x = document.getElementsByClassName("intro");
```

The querySelector() Method
```html
<html>
<body>

<p class="demo"></p>

<script>
// Access a paragraph Element
const myPara = document.querySelector(".demo");

// Change the content of the Element
myPara.innerHTML = "Hello World!";
</script>

</body>
</html>
```

The querySelectorAll() Method
```html
<html>
<body>

<p class="demo">One</p>
<p class="demo">Two</p>

<script>
// Access a paragraph Element
const myItems = document.querySelectorAll(".demo");

// Change the content of the Element
myItems[0].innerHTML = "First";
</script>

</body>
</html>
```

If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
This example returns a list of all <p> elements with class="intro".

``` javascript
const x = document.querySelectorAll("p.intro");
```

### Changing HTML Content

```html
<!DOCTYPE html>
<html>
<body>

<h1 id="id01">Old Heading</h1>

<script>
const element = document.getElementById("id01");
element.innerHTML = "New Heading";
</script>

</body>
</html>
```

### Creating Dynamic HTML Content

Dynamic HTML content
JavaScript can create dynamic HTML content:
Date : Wed Jun 10 2026 18:22:48 GMT-0700 (Pacific Daylight Time)

```html
<!DOCTYPE html>
<html>
<body>

<script>
document.getElementById("demo").innerHTML = "Date : " + Date();
</script>

</body>
</html>
```

## HTML DOM - Changing CSS
### Changing HTML Style
The HTML DOM allows JavaScript to change the style of HTML elements.
To change the style of an HTML element, use this syntax:

``` javascript
document.getElementById(id).style.property= new style
```

We access the style property of an HTML element and set it to a new value.


How to make an element invisible. Do you want to show the element or not?

``` body
<html>
<body>
<input type="button" value="Hide text" onclick="document.getElementById('p1').style.visibility='hidden'"> <input type="button" value="Show text" onclick="document.getElementById('p1').style.visibility='visible'"> Click Me!</button>

</body>
</html>
```

## HTML Form Validation
### JavaScript Form Validation
HTML form validation can be done by JavaScript.
If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

``` javascript
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
```

The function can be called when the form is submitted:

HTML Form Example
```html
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
```

### Automatic HTML Form Validation
HTML form validation can be performed automatically by the browser:
If a form field (fname) is empty, the required attribute prevents this form from being submitted:

HTML Form Example
```html
<form action="/action_page.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>
```

### Data Validation
Data validation is the process of ensuring that user input is clean, correct, and useful.
Typical validation tasks are:

has the user filled in all required fields?
has the user entered a valid date?
has the user entered text in a numeric field?
Most often, the purpose of data validation is to ensure correct user input.

Validation can be defined by many different methods, and deployed in many different ways.
Server side validation is performed by a web server, after input has been sent to the server.
Client side validation is performed by a web browser, before input is sent to a web server.

### HTML Constraint Validation
HTML5 introduced a new HTML validation concept called constraint validation.
HTML constraint validation is based on:

Constraint validation HTML Input Attributes
Constraint validation CSS Pseudo Selectors
Constraint validation DOM Properties and Methods
Constraint Validation HTML Input Attributes

Attribute	        Description
disabled	        Specifies that the input element should be disabled
max                 Specifies the maximum value of an input element
min                 Specifies the minimum value of an input element
pattern	            Specifies the value pattern of an input element
required	        Specifies that the input field requires an element
type 	            Specifies the type of an input element

