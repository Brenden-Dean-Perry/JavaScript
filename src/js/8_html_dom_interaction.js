
// HTML Interaction
// JavaScript can interact with HTML elements using the Document Object Model (DOM).

/* 
Note in the example below, the JavaScript code is included in a <script> tag within the HTML document.
Also, there must be an element with the id="demo" in the HTML for the JavaScript to work properly. For example:
<p id="demo">This is a paragraph.</p>
The id enables JavaScript to access and manipulate the content of that specific element when the button is clicked.
*/


////////////////////////////////////////////////////
// Inner text example:
////////////////////////////////////////////////////
document.getElementById("demo").innerText = "Paragraph changed.";

// This will change the text content of the element with id="demo" to "Paragraph changed."



////////////////////////////////////////////////////
// Inner HTML example:
////////////////////////////////////////////////////
// Example: Changing the content of a paragraph when a button is clicked
document.getElementById("demo").innerHTML = "<b>Hello JavaScript</b>";

// This code changes the content of the element with id="demo" to "Hello JavaScript".
// The HTML would look like this:
// <p id="demo">This is a paragraph.</p>

////////////////////////////////////////////////////
// Takeaway:
////////////////////////////////////////////////////
// You should use innerHTML when you want to insert HTML tags, and innerText when you want to insert plain text.



////////////////////////////////////////////////////
// Others examples:
////////////////////////////////////////////////////

// We can also change the source of an element, such as an image. This can be used to change the image displayed on a webpage.
document.getElementById('myImage').src='pic_bulb_on.gif';

// Changing CSS styles using JavaScript
document.getElementById("demo").style.fontSize = "35px";

// We can hide an element by setting its display property to "none".
document.getElementById("demo").style.display = "none";

// We can also show the element again by setting the display property back to "block" or "inline".
document.getElementById("demo").style.display = "block";



////////////////////////////////////////////////////
// Others (non-DOM) examples:
////////////////////////////////////////////////////
// These are not DOM interactions but you can also create alerts or write to the console with the following:
window.alert("Hello, world!");
// window is is in the global scope so we can also drop the window prefix
alert("Hello, world!");
console.log("Hello, world!");