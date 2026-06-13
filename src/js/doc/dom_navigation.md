# JavaScript HTML DOM Navigation
With the HTML DOM, you can navigate the node tree using node relationships.

## DOM Nodes
According to the W3C HTML DOM standard, everything in an HTML document is a node:

The entire document is a document node
Every HTML element is an element node
The text inside HTML elements are text nodes
Every HTML attribute is an attribute node (deprecated)
All comments are comment nodes

### DOM HTML tree
With the HTML DOM, all nodes in the node tree can be accessed by JavaScript.
New nodes can be created, and all nodes can be modified or deleted.

### Node Relationships
The nodes in the node tree have a hierarchical relationship to each other.
The terms parent, child, and sibling are used to describe the relationships.

In a node tree, the top node is called the root (or root node)
Every node has exactly one parent, except the root (which has no parent)
A node can have a number of children
Siblings (brothers or sisters) are nodes with the same parent
``` HTML
<html>

  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>
```

### Node tree
From the HTML above you can read:

``` HTML
<html> is the root node
<html> has no parents
<html> is the parent of <head> and <body>
<head> is the first child of <html>
<body> is the last child of <html>
```
and:


<head> has one child: <title>
<title> has one child (a text node): "DOM Tutorial"
<body> has two children: <h1> and <p>
<h1> has one child: "DOM Lesson one"
<p> has one child: "Hello world!"
<h1> and <p> are siblings


### Navigating Between Nodes
You can use the following node properties to navigate between nodes with JavaScript:
- parentNode
- childNodes[nodenumber]
- firstChild
- lastChild
- nextSibling
- previousSibling

### Child Nodes and Node Values
A common error in DOM processing is to expect an element node to contain text.

Example:
``` HTML
<title id="demo">DOM Tutorial</title>
```

The element node <title> (in the example above) does not contain text.
It contains a text node with the value "DOM Tutorial".
The value of the text node can be accessed by the node's innerHTML property:

``` JavaScript
myTitle = document.getElementById("demo").innerHTML;
```
Accessing the innerHTML property is the same as accessing the nodeValue of the first child:

``` JavaScript
myTitle = document.getElementById("demo").firstChild.nodeValue;
```

Accessing the first child can also be done like this:

``` JavaScript
myTitle = document.getElementById("demo").childNodes[0].nodeValue;
```
All the (3) following examples retrieves the text of an <h1> element and copies it into a <p> element:

Example
``` HTML
<html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
</script>

</body>
</html>
```

Example:
``` HTML
<html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
</script>

</body>
</html>
```

Example:
``` HTML
<html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02">Hello!</p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
</script>

</body>
</html>
```

### InnerHTML
In this tutorial we use the innerHTML property to retrieve the content of an HTML element.
However, learning the other methods above is useful for understanding the tree structure and the navigation of the DOM.

### DOM Root Nodes
There are two special properties that allow access to the full document:

document.body - The body of the document
document.documentElement - The full document
Example:
``` HTML
<html>
<body>

<h2>JavaScript HTMLDOM</h2>
<p>Displaying document.body</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = document.body.innerHTML;
</script>

</body>
</html>
```

Example:
``` HTML
<html>
<body>

<h2>JavaScript HTMLDOM</h2>
<p>Displaying document.documentElement</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
</script>

</body>
</html>
```

### The nodeName Property
The nodeName property specifies the name of a node.
nodeName is read-only
nodeName of an element node is the same as the tag name
nodeName of an attribute node is the attribute name
nodeName of a text node is always #text
nodeName of the document node is always #document

Example:
``` HTML
<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
</script>
```
Note: nodeName always contains the uppercase tag name of an HTML element.

### The nodeValue Property
The nodeValue property specifies the value of a node.

nodeValue for element nodes is null
nodeValue for text nodes is the text itself
nodeValue for attribute nodes is the attribute value
The nodeType Property
The nodeType property is read only. It returns the type of a node.

Example:
``` HTML
<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;
</script>
```

## JavaScript HTML DOM Elements (Nodes)
Adding and Removing Nodes (HTML Elements)

### Creating New HTML Elements (Nodes)
To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.

 Example:
 ``` HTML
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>
```

Example Explained:
This code creates a new <p> element:
``` JavaScript
const para = document.createElement("p");
```
To add text to the <p> element, you must create a text node first. This code creates a text node:
``` JavaScript
const node = document.createTextNode("This is a new paragraph.");
```
Then you must append the text node to the <p> element:
``` JavaScript
para.appendChild(node);
```
Finally you must append the new element to an existing element.

This code finds an existing element:
``` JavaScript
const element = document.getElementById("div1");
```
This code appends the new element to the existing element:
``` JavaScript
element.appendChild(para);
```
Creating new HTML Elements - insertBefore()
The appendChild() method in the previous example, appended the new element as the last child of the parent.

If you don't want that you can use the insertBefore() method:

Example:
``` HTML
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);
</script>
``` 

### Removing Existing HTML Elements
To remove an HTML element, use the remove() method:

Example
``` HTML
<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const elmnt = document.getElementById("p1"); elmnt.remove();
</script>
```

Example Explained:
The HTML document contains a <div> element with two child nodes (two <p> elements):
``` HTML
<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
```
Find the element you want to remove:

``` JavaScript
const elmnt = document.getElementById("p1");
```
Then execute the remove() method on that element:
``` JavaScript
elmnt.remove();
```
The remove() method does not work in older browsers, see the example below on how to use removeChild() instead.

### Removing a Child Node
For browsers that does not support the remove() method, you have to find the parent node to remove an element:

Example:
``` HTML
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>
```

Example Explained 
This HTML document contains a <div> element with two child nodes (two <p> elements):
``` HTML
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
```
Find the element with id="div1":
``` JavaScript
const parent = document.getElementById("div1");
```
Find the <p> element with id="p1":
``` JavaScript
const child = document.getElementById("p1");
```
Remove the child from the parent:
``` JavaScript
parent.removeChild(child);
```
Here is a common workaround: Find the child you want to remove, and use its parentNode property to find the parent:
``` JavaScript
const child = document.getElementById("p1");
child.parentNode.removeChild(child);
```

### Replacing HTML Elements 
To replace an element in the HTML DOM, use the replaceChild() method:

Example:
``` HTML
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>
```

## JavaScript HTML DOM Collections
### The HTMLCollection Object
The getElementsByTagName() method returns an HTMLCollection object.
An HTMLCollection object is an array-like list (collection) of HTML elements.
The following code selects all <p> elements in a document:

Example:
``` JavaScript
const myCollection = document.getElementsByTagName("p");
```

The elements in the collection can be accessed by an index number.

To access the second <p> element you can write:

``` JavaScript
myCollection[1]
```
Note: The index starts at 0.

### HTML HTMLCollection Length
The length property defines the number of elements in an HTMLCollection:

Example:
``` JavaScript
myCollection.length
```
The length property is useful when you want to loop through the elements in a collection:

Example:
Change the text color of all <p> elements:

``` JavaScript
const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}
```

An HTMLCollection is NOT an array!
An HTMLCollection may look like an array, but it is not.
You can loop through the list and refer to the elements with a number (just like an array).
However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.

## JavaScript HTML DOM Node Lists
### The HTML DOM NodeList Object
A NodeList object is a list (collection) of nodes extracted from a document.
A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().
All browsers return a NodeList object for the property childNodes. 
Most browsers return a NodeList object for the method querySelectorAll().

The following code selects all <p> nodes in a document:

Example:
``` JavaScript
const myNodeList = document.querySelectorAll("p");
```
The elements in the NodeList can be accessed by an index number.

To access the second <p> node you can write:
``` JavaScript
myNodeList[1]
```
Note: The index starts at 0.

### HTML DOM Node List Length
The length property defines the number of nodes in a node list:

Example:
``` JavaScript
myNodelist.length
```
The length property is useful when you want to loop through the nodes in a node list:

Example:
Change the color of all <p> elements in a node list:

``` JavaScript
const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "red";
}
```

### The Difference Between an HTMLCollection and a NodeList
A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.
Both have a length property that returns the number of elements in the list (collection).
An HTMLCollection is a collection of document elements.
A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
HTMLCollection items can be accessed by their name, id, or index number.
NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
The querySelectorAll() method returns a static NodeList.
The childNodes property returns a live NodeList.

### Not an Array!
A NodeList may look like an array, but it is not.
You can loop through a NodeList and refer to its nodes by index.
But, you cannot use Array methods like push(), pop(), or join() on a NodeList.