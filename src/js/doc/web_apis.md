# Web APIs - Introduction
A Web API is a developer's dream.

It can extend the functionality of the browser
It can greatly simplify complex functions
It can provide easy syntax to complex code

## What is Web API?
API stands for Application Programming Interface.
A Web API is an application programming interface for the Web.
A Browser API can extend the functionality of a web browser.
A Server API can extend the functionality of a web server.

## Browser APIs
All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.
For example, the Geolocation API can return the coordinates of where the browser is located.

The HTML Geolocation API is used to get the geographical position of a user.

## Most Important APIs
The most important APIs in HTML/JavaScript development are.
- The DOM API for HTML and XML documents
- The Fetch API for networking
- The Web Storage API for client-side data
These APIs are fundamental to nearly all modern web development.

### The DOM API
The DOM (Document Object Model) is the core API for HTML and XML documents. It provides a structured representation of a webpage, allowing JavaScript to access and manipulate elements, attributes, and content dynamically, creating interactive user interfaces.

### The Fetch API
The modern standard for making network requests to servers and retrieving resources (like data from a database or a third-party service). It provides a more robust and flexible alternative to older methods like XMLHttpRequest.

### Web Storage API
Offers mechanisms (localStorage and sessionStorage) to store key/value pairs of data in the browser more intuitively than cookies, allowing data to persist across sessions or page reloads.
The Web Storage API is a simple syntax for storing and retrieving data in the browser. It is very easy to use:

Example
``` JavaScript
localStorage.setItem("name", "John Doe");
localStorage.getItem("name");
```

#### The localStorage Object
The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
The data is stored with no expiration date, and will not be deleted when the browser is closed.
The data will be available for days, weeks, and years.

#### The setItem() Method
The localStorage.setItem() method stores a data item in a storage.
It takes a name and a value as parameters:

Example
localStorage.setItem("name", "John Doe");

#### The getItem() Method
The localStorage.getItem() method retrieves a data item from the storage.
It takes a name as parameter:

Example
localStorage.getItem("name");

#### The sessionStorage Object
The sessionStorage object is identical to the localStorage object.
The difference is that the sessionStorage object stores data for one session.
The data is deleted when the browser is closed.

Example
sessionStorage.getItem("name");

#### The setItem() Method
The sessionStorage.setItem() method stores a data item in a storage.
It takes a name and a value as parameters:

Example
sessionStorage.setItem("name", "John Doe");

#### The getItem() Method
The sessionStorage.getItem() method retrieves a data item from the storage.
It takes a name as parameter:

Example
sessionStorage.getItem("name");


### History API
Enables manipulation of the browser's session history, allowing single-page applications (SPAs) to change the URL and provide a seamless navigation experience without full page reloads.

The Web History API provides easy methods to access the windows.history object.
The window.history object contains the URLs (Web Sites) visited by the user.

#### The History back() Method
The back() method loads the previous URL in the windows.history list.
It is the same as clicking the "back arrow" in your browser.

Example:
``` HTML
<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script>
```

#### The History go() Method
The go() method loads a specific URL from the history list:

Example:
''' HTML
<button onclick="myFunction()">Go Back 2 Pages</button>

<script>
function myFunction() {
  window.history.go(-2);
}
</script>
'''

### Geolocation API

Since this can compromise privacy, the position is not available unless the user approves it.
Example: Get the latitude and longitude of the user's position:

``` JavaScript
const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
```
The Geolocation API will only work on secure contexts such as HTTPS.
If your site is hosted on a non-secure origin (such as HTTP) the requests to get the users location will no longer function.

#### Handling Errors and Rejections
The second parameter of the getCurrentPosition() method is used to handle errors. It specifies a function to run if it fails to get the user's location:

Example
``` JavaScript
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
```

#### Displaying the Result in a Map
To display the result in a map, you need access to a map service, like Google Maps.
In the example below, the returned latitude and longitude is used to show the location in a Google Map (using a static image):

Example:
``` JavaScript
function showPosition(position) {
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
```

#### The getCurrentPosition() Method - Return Data
The getCurrentPosition() method returns an object on success. The latitude, longitude and accuracy properties are always returned. The other properties are returned if available:

Property: Returns
coords.latitude: The latitude as a decimal number (always returned)
coords.longitude: The longitude as a decimal number (always returned)
coords.accuracy: The accuracy of position (always returned)
coords.altitude: The altitude in meters above the mean sea level (returned if available)
coords.altitudeAccuracy: The altitude accuracy of position (returned if available)
coords.heading:  The heading as degrees clockwise from North (returned if available)
coords.speed: The speed in meters per second (returned if available)
timestamp: The date/time of the response (returned if available)

### Geolocation Object - Other interesting Methods
The Geolocation object also has other interesting methods:

watchPosition() - Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).
clearWatch() - Stops the watchPosition() method.
The example below shows the watchPosition() method. You need an accurate GPS device to test this (like smartphone):

Example
``` HTML
<script>
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>
```

### Pointer Events API
The Pointer Events API is a modern web standard that provides a unified input model for handling various pointing devices, such as a mouse, pen/stylus, and touch (finger).
It simplifies development by consolidating separate mouse and touch event models into a single, hardware-agnostic system.
For the modern web, pointer events is the recommended approach to create interactive interfaces that provide a consistent experience for all users, regardless of hardware.

#### Event Types
Pointer event names are similar to mouse events.
Just replace "mouse" with "pointer":

pointerdown: Fired when a pointer becomes active (button pressed, physical contact).
pointerup: Fired when a pointer is no longer active (button released, contact ended).
pointermove: Fired when a pointer changes coordinates.
pointerover: Fired when a pointer is moved into an element.
pointerout: Fired when a pointer moves out of an element.
pointerenter: Similar to pointerover, but does not bubble up through the DOM hierarchy.
pointerleave: Similar to pointerout, but does not bubble.
pointercancel: Fired when the system cancels the pointer interaction (interrupted by the OS opening a system menu).
Event Properties: The PointerEvent interface inherits properties from MouseEvent and adds specific ones:
pointerId: A unique ID for each pointer, allowing tracking in multi-touch scenarios.
pointerType: A string indicating the device type: "mouse", "pen", or "touch".
isPrimary: A boolean true for the primary pointer (the first finger in a multi-touch).
pressure: A normalized value (0 to 1) indicating the pressure applied by the pointer.

#### Pointer Events API Benefits
Developers can write a single set of event listeners (a unified model) that work across multiple input types, reducing code duplication and complexity.
In addition to standard mouse event properties (like client coordinates), PointerEvent objects include new properties specific to other inputs, such as pressure, tiltX, tiltY, width, and height, (useful for pen and touch interactions).
Methods like setPointerCapture() allow an element to receive pointer events when the pointer moves outside its boundaries (useful for sliding or dragging).
The API can track multiple simultaneous touch points, unlike traditional mouse events.

#### CSS pointer-events Property
The pointer-events CSS property is a separate feature that controls whether or not an element can be the target of any pointer interactions.

The style="pointer-events: none; in CSS, disables all mouse and touch interactions on an HTML element and its descendants.
The style="pointer-events: auto; in CSS, restores the default behavior.

This CSS property is useful for creating layered interfaces, or temporarily disabling interactions on certain elements without modifying the underlying JavaScript logic.

### Web Workers API
A web worker is a JavaScript running in the background, without affecting the performance of the page.

#### What is a Web Worker?
When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

#### Check Web Worker Support
Before creating a web worker, check whether the user's browser supports it:

``` JavaScript
if (typeof(Worker) !== "undefined") {
  // Yes! Web worker support!
  // Some code.....
} else {
  // Sorry! No Web Worker support..
}
```

Create a Web Worker File
Now, let's create our web worker in an external JavaScript.

Here, we create a script that counts. The script is stored in the "demo_workers.js" file:

``` JavaScript
let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();
```

The important part of the code above is the postMessage() method - which is used to post a message back to the HTML page.
Note: Normally web workers are not used for such simple scripts, but for more CPU intensive tasks.

#### Create a Web Worker Object
Now that we have the web worker file, we need to call it from an HTML page.
The following lines checks if the worker already exists, if not - it creates a new web worker object and runs the code in "demo_workers.js":

``` JavaScript
if (typeof(w) == "undefined") {
  w = new Worker("demo_workers.js");
}
```

Then we can send and receive messages from the web worker.
Add an "onmessage" event listener to the web worker.

``` JavaScript
w.onmessage = function(event){
  document.getElementById("result").innerHTML = event.data;
};
```

When the web worker posts a message, the code within the event listener is executed. The data from the web worker is stored in event.data.

#### Terminate a Web Worker
When a web worker object is created, it will continue to listen for messages (even after the external script is finished) until it is terminated.
To terminate a web worker, and free browser/computer resources, use the terminate() method:

``` JavaScript
w.terminate();
```

#### Reuse the Web Worker
If you set the worker variable to undefined, after it has been terminated, you can reuse the code:
``` JavaScript
w = undefined;
```
#### Full Web Worker Example Code
We have already seen the Worker code in the .js file. Below is the code for the HTML page:

Example
``` HTML
<!DOCTYPE html>
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>

<script>
let w;

function startWorker() {
  if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
</script>

</body>
</html>
```

#### Web Workers and the DOM
Since web workers are in external files, they do not have access to the following JavaScript objects:
- The window object
- The document object
- The parent object