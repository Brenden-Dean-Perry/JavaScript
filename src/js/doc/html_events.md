
# HTML Events

HTML events are things that happen to HTML elements.

Examples of events:
- An HTML button is clicked
- A web page has finished loading
- The mouse moves over an element
- A keyboard key is pressed
- An HTML input field is changed

HTML DOM allows JavaScript to react to HTML events:


## JavaScript Events
Often, when events happen, you may want to do something.
When JavaScript is used in HTML pages, JavaScript can react on events.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

Syntax
With single quotes:

```HTML
<element event='some JavaScript'>
With double quotes:

<element event="some JavaScript">
```

## Calling a JavaScript Function
JavaScript code can often be several lines long.
It is more common to use the event attribute to call a function:

Example
<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

## JavaScript Event Handlers
An event handler is JavaScript code that runs when an event happens.
Event handlers can be used to handle and verify user input, user actions, and browser actions:

-Things that should be done every time a page loads
-Things that should be done when the page is closed
-Action that should be performed when a user clicks a button
-Content that should be verified when a user inputs data
-And more ...

Many different methods can be used to let JavaScript work with events:
-HTML event attributes can execute JavaScript code directly
-HTML event attributes can call JavaScript functions
-You can assign your own event handler functions to HTML elements
-You can prevent events from being sent or being handled
-And more ...


## Using an Event Listener
Using event attributes like onclick are easy to use.
Nevertheless, using addEventListener() is the recommended way to handle events.

Not Recommended
Using the onclick attribute:

```HTML
<button onclick="displayDate()">Time is?</button>

<p id="demo"></p>

<script>
// Function to display date
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>
```

The addEventListener() method keeps HTML and JavaScript separated.

Highly Recommended
Using addEventListener() method:

```HTML
<button id="myBtn">Click me</button>

<p id="demo"></p>

<script>
const btn = document.getElementById("myBtn");

// Add EventListener to btn
btn.addEventListener("click", function () {
  document.getElementById("demo").innerHTML = Date();
});
</script>
```

## Common Mouse Events
### click
Fires after both a mousedown and mouseup event occur on the same element with the main mouse button (usually the left).

### dblclick
Fires after two rapid clicks on the same element.

### mousedown / mouseup
These events fire when a mouse button is pressed down (mousedown) or released (mouseup) over an element, respectively.

### mousemove
Fires continuously as the mouse pointer moves over an element, providing positional information (coordinates) about the cursor.

### mouseover
Fires when the pointer moves over an element (or one of its children).

### mouseout
Fires when the pointer leaves an element.

### mouseenter
Similar to mouseover, but fire when the pointer enters an element, not its descendants, making it more sensible for use cases like CSS :hover behavior.

### mouseleave
Similar to mouseout, but fire when the pointer leaves an element, not its descendants, making it more sensible for use cases like CSS :hover behavior.

### contextmenu
Fires when the user attempts to open the context menu, typically by right-clicking.

### wheel
Fires when the mouse wheel is rotated, commonly used for scrolling or zooming functionality.

### drag events
A series of events (dragstart, dragend, dragover, etc.) used for implementing drag-and-drop interfaces.

## Mouse Position
The MouseEvent interface provides an event object which contains useful properties like pointer coordinates, which mouse button are pressed, and more.

Example
Using event.clientX and event.clientY

```HTML
<p id="demo">Move the mouse in this window!</p>

<script>
// Let document listen for mousemove
document.addEventListener("mousemove", function (event) {
  document.getElementById("demo").innerHTML =
  "X: " + event.clientX + " Y: " + event.clientY;
});
</script>
```

## JavaScript Keyboard Events

keypress only fires for character keys (a or 5), not for control keys (alt or backspace).
Developers are advised to use keydown or keyup instead.

### The keydown Event
Using event.key
Example
Show which key was pressed:

```HTML
<input id="k" type="text" placeholder="Press a key">

<p id="demo"></p>

<script>
const k = document.getElementById("k");

// Let k listen for keydown
k.addEventListener("keydown", function (event) {
// Then display the event.key
  document.getElementById("demo").innerHTML = "You pressed: " + event.key;
});
</script>
```

### Detect Enter
Using event.code
```HTML
<input id="in01" type="text" placeholder="Press Enter">

<p id="demo"></p>

<script>
const in01 = document.getElementById("in01");

// Let in01 listen for keydown
in01.addEventListener("keydown", function (event) {
// If event.code was "enter", then display text
  if (event.code === "Enter") {
    document.getElementById("demo").innerHTML = "Enter was pressed!";
  }
});
</script>
```

## JavaScript Load Events

### DOMContentLoaded
The DOMContentLoaded event fires when the browser has fully loaded the HTML and built the Document Object Model (DOM) tree, but has not necessarily finished loading external resources like images and stylesheets.
The DOMContentLoaded event is best for initializing the user interface, attaching event handlers, and performing actions that only require the DOM to be ready.

Example
```HTML
<p id="demo"></p>

<script>
// Add Event Listener to document
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("demo").innerHTML = "HTML is loaded!";
});
</script>
```

### Window Load
The load event fires when the entire page has fully loaded, including all dependent resources such as images, stylesheets, and sub-frames.

The load event is best for actions that require all resources available, such as getting the dimensions of an image or checking the browser type.

Example
```HTML
<p id="demo"></p>

<script>
// Add Event Listener to window
window.addEventListener("load", function () {
  document.getElementById("demo").innerHTML = "Page is fully loaded!";
});
</script>
```

### Other Load Events
The load event can also be used on other elements that fetch resources (not just pages):

Tag	Description
    <img>	Fires when an image has finished downloading.
    <script>	Fires when a script has been successfully loaded and executed.
    <link>	Fires when a stylesheet has been fully loaded and parsed.
    <video>	Fires a variety of media-specific loading events.

Example
```HTML
<img id="myImg"
src="https://www.w3schools.com/images/w3schools_green.jpg" width="120">

<p id="demo"></p>

<script>
const img = document.getElementById("myImg");

// Add Event Listener to img
img.addEventListener("load", function () {
  document.getElementById("demo").innerHTML = "Image loaded!";
});
</script>
```

## JavaScript Timing Events
Timing Events let you run code:
    After a Delay
    Or Repeatedly
Timing is driven by Timing Events generated by the system clock.

Timer Functions
Function	Description
setTimeout()	Sets a clock timeout (runs once)
setInterval()	Sets a clock interval (runs repeatedly)
clearTimeout()	Clears a timeout
clearInterval()	Clears an inteval

The timer functions belong to the window object.

setTimeout() is the same as window.setTimeout().

### A Clock
Example

```HTML
<p id="clock"></p>

<script>
// Call showTime every 1000 millisec
setInterval(showTime, 1000);

// Fuction to display the time
function showTime() {
  const d = new Date();
  document.getElementById("clock").innerHTML =
  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
</script>
```

The setTimeout() Method
The setTimeout() method executes a function after a delay in milliseconds.


## JavaScript Event Management
Event Management is about adding, removing, and controlling events.

### Adding Events
Example
```HTML
<button id="btn">Click</button>

<p id="demo"></p>

<script>
const btn = document.getElementById("btn");

// Let btn listen for click
btn.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Clicked!";
}
</script>
```

### Removing Events
Example
```HTML
<button id="add">Add</button>
<button id="remove">Remove</button>
<button id="test">Test click</button>

<p id="demo"></p>

<script>
const test = document.getElementById("test");
const remove = document.getElementById("remove");
const add = document.getElementById("add");

function myFunction() {
   document.getElementById("demo").innerHTML += "Hello!";
}

// Let add listen for click
add.addEventListener("click", function () {
  // Let test listen for click
  test.addEventListener("click", myFunction);
});

// Let remove listen for click
remove.addEventListener("click", function () {
  // Prevent test from listen for click
  test.removeEventListener("click", myFunction);
});
</script>
```
To remove an event listener, you must use the same named function you used to add it.

### Blocking Events
Example
Prevent default (block a link)

```HTML
<a href="https://www.w3schools.com" id="link">Go to W3Schools</a>

<p id="demo"></p>

<script>
const link = document.getElementById("link");

// Let link listen for click
link.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("demo").innerHTML = "Link blocked!";
});
</script>
```

## JavaScript HTML DOM Events

### Assign Events Using the HTML DOM
The HTML DOM allows you to assign events to HTML elements using JavaScript:

Example
Assign an onclick event to a button element:

```HTML
<script>
document.getElementById("myBtn").onclick = displayDate;
</script>
```

In the example above, a function named displayDate is assigned to an HTML element with the id="myBtn".
The function will be executed when the button is clicked.

### The onload and onunload Events
The onload and onunload events are triggered when the user enters or leaves the page.
The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.
The onload and onunload events can be used to deal with cookies.

Example
```HTML
<body onload="checkCookies()">
```

### The oninput Event
The oninput event is often used to trigger some action while the user inputs data.
Below is an example of how to use the oninput event to change the content of an input field.

Example
```HTML
<input type="text" id="fname" oninput="upperCase()">
```

### The onchange Event
The onchange event is often used in combination with validation of input fields.
Below is an example of how to use the onchange. The upperCase() function will be called when a user changes the content of an input field.

Example
```HTML
<input type="text" id="fname" onchange="upperCase()">
```

## JavaScript Event Listeners

### The addEventListener() method
Example
Add an event listener that fires when a user clicks a button:

```JavaScript
document.getElementById("myBtn").addEventListener("click", displayDate);
```

The addEventListener() method attaches an event handler to the specified element.
The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

You can add many event handlers to one element.
You can add many event handlers of the same type to one element, i.e two "click" events.
You can add event listeners to any DOM object not only HTML elements. i.e the window object.

The addEventListener() method makes it easier to control how the event reacts to bubbling.
When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

You can easily remove an event listener by using the removeEventListener() method.

Syntax
```JavaScript
element.addEventListener(event, function, useCapture);
```

The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
The second parameter is the function we want to call when the event occurs.
The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".

### Add an Event Handler to an Element
Example
Alert "Hello World!" when the user clicks on an element:

```HTML
element.addEventListener("click", function(){ alert("Hello World!"); });
```

You can also refer to an external "named" function:

Example
Alert "Hello World!" when the user clicks on an element:

```JavaScript
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
```

### Add Many Event Handlers to the Same Element
The addEventListener() method allows you to add many events to the same element, without overwriting existing events:

Example
```JavaScript
element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);
```
You can add events of different types to the same element:

Example
```JavaScript
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
```

### Add an Event Handler to the window Object
The addEventListener() method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events, like the xmlHttpRequest object.

Example
Add an event listener that fires when a user resizes the window:

```JavaScript
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = sometext;
});
```

### Passing Parameters
When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:

Example
element.addEventListener("click", function(){ myFunction(p1, p2); });

### Event Bubbling or Event Capturing?
There are two ways of event propagation in the HTML DOM, bubbling and capturing.
Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?
In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:

### addEventListener(event, function, useCapture);
The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

Example
```JavaScript
document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);
```

The removeEventListener() method
The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:

Example
element.removeEventListener("mousemove", myFunction);