# AJAX Introduction
AJAX is a developer's dream, because you can:
- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

## AJAX Example Explained
HTML Page
``` html
<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>Let AJAX change this text</h2>
  <button type="button" onclick="loadDoc()">Change Content</button>
</div>

</body>
</html>
```

The HTML page contains a <div> section and a <button>.
The <div> section is used to display information from a server.
The <button> calls a function (if it is clicked).
The function requests data from a web server and displays it:

Function loadDoc()
``` JavaScript
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

## What is AJAX?
AJAX = Asynchronous JavaScript And XML.
AJAX is not a programming language.
AJAX just uses a combination of:
- A browser built-in XMLHttpRequest object (to request data from a web server)
- JavaScript and HTML DOM (to display or use the structured data)
- AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

## Modern Browsers (Fetch API)
Modern Browsers can use Fetch API instead of the XMLHttpRequest Object.
The Fetch API interface allows web browser to make HTTP requests to web servers.
If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.

## AJAX - The XMLHttpRequest Object

The keystone of AJAX is the XMLHttpRequest object.
1. Create an XMLHttpRequest object
2. Define a callback function
3. Open the XMLHttpRequest object
4. Send a Request to a server

### The XMLHttpRequest Object
All modern browsers support the XMLHttpRequest object.
The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

### Create an XMLHttpRequest Object
All modern browsers (Chrome, Firefox, IE, Edge, Safari, Opera) have a built-in XMLHttpRequest object.
Syntax for creating an XMLHttpRequest object:

``` JavaScript
variable = new XMLHttpRequest();
```

### Define a Callback Function
A callback function is a function passed as a parameter to another function.
In this case, the callback function should contain the code to execute when the response is ready.

``` JavaScript
xhttp.onload = function() {
  // What to do when the response is ready
}
```

### Send a Request
To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object:

``` JavaScript
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

Example
``` JavaScript
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

### Access Across Domains
For security reasons, modern browsers do not allow access across domains.
This means that both the web page and the XML file it tries to load, must be located on the same server.
The examples on W3Schools all open XML files located on the W3Schools domain.
If you want to use the example above on one of your own web pages, the XML files you load must be located on your own server.

### The onload Property
With the XMLHttpRequest object you can define a callback function to be executed when the request receives an answer.
The function is defined in the onload property of the XMLHttpRequest object:

Example:
``` JavaScript
xhttp.onload = function() {
  document.getElementById("demo").innerHTML = this.responseText;
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

### Multiple Callback Functions
If you have more than one AJAX task in a website, you should create one function for executing the XMLHttpRequest object, and one callback function for each AJAX task.
The function call should contain the URL and what function to call when the response is ready.

Example
``` JavaScript
loadDoc("url-1", myFunction1);
loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
}
```

### The onreadystatechange Property
The readyState property holds the status of the XMLHttpRequest.
The onreadystatechange property defines a callback function to be executed when the readyState changes.
The status property and the statusText properties hold the status of the XMLHttpRequest object.

Property: Description
onreadystatechange: Defines a function to be called when the readyState property changes
readyState: Holds the status of the XMLHttpRequest.

0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
status	200: "OK"
403: "Forbidden"
404: "Page not found"

For a complete list go to the Http Messages Reference
statusText	Returns the status-text (e.g. "OK" or "Not Found")
The onreadystatechange function is called every time the readyState changes.

When readyState is 4 and status is 200, the response is ready:

Example
``` JavaScript
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}
```
The onreadystatechange event is triggered four times (1-4), one time for each change in the readyState.

## AJAX - XMLHttpRequest
The XMLHttpRequest object is used to request data from a server.

### Send a Request To a Server
To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

``` JavaScript
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```

Method: Description
open(method, url, async): Specifies the type of request

method: the type of request: GET or POST
url: the server (file) location
async: true (asynchronous) or false (synchronous)
send(): Sends the request to the server (used for GET)
send(string): Sends the request to the server (used for POST)

### The url - A File On a Server
The url parameter of the open() method, is an address to a file on a server:

``` JavaScript
xhttp.open("GET", "ajax_test.asp", true);
```

The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php (which can perform actions on the server before sending the response back).

### Asynchronous - True or False?
Server requests should be sent asynchronously.
The async parameter of the open() method should be set to true:

``` JavaScript
xhttp.open("GET", "ajax_test.asp", true);
```

By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:

execute other scripts while waiting for server response
deal with the response after the response is ready
The default value for the async parameter is async = true.

You can safely remove the third parameter from your code.
Synchronous XMLHttpRequest (async = false) is not recommended because the JavaScript will stop executing until the server response is ready. If the server is busy or slow, the application will hang or stop.

### GET or POST?
GET is simpler and faster than POST, and can be used in most cases.

However, always use POST requests when:
- A cached file is not an option (update a file or database on the server).
- Sending a large amount of data to the server (POST has no size limitations).
- Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

### GET Requests
A simple GET request:

Example:
``` JavaScript
xhttp.open("GET", "demo_get.asp");
xhttp.send();
```

In the example above, you may get a cached result. To avoid this, add a unique ID to the URL:

Example:
``` JavaScript
xhttp.open("GET", "demo_get.asp?t=" + Math.random());
xhttp.send();
``` 
If you want to send information with the GET method, add the information to the URL:

Example:
``` JavaScript
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
xhttp.send();
```
How the server uses the input and how the server responds to a request, is explained in a later chapter.

### POST Requests
A simple POST request:

Example:
``` JavaScript
xhttp.open("POST", "demo_post.asp");
xhttp.send();
```
To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:

Example:
``` JavaScript
xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
```

Method: Description
setRequestHeader(header, value): Adds HTTP headers to the request

header: specifies the header name
value: specifies the header value

### Synchronous Request
To execute a synchronous request, change the third parameter in the open() method to false:

xhttp.open("GET", "ajax_info.txt", false);
Sometimes async = false are used for quick testing. You will also find synchronous requests in older JavaScript code.

Since the code will wait for server completion, there is no need for an onreadystatechange function:

Example
xhttp.open("GET", "ajax_info.txt", false);
xhttp.send();
document.getElementById("demo").innerHTML = xhttp.responseText;

This is not recommended, because if the server is busy or slow, the application will hang or stop.

## AJAX - Server Response
### Server Response Properties
Property: Description
responseText: get the response data as a string
responseXML: get the response data as XML data

### The responseText Property
The responseText property returns the server response as a JavaScript string, and you can use it accordingly:

Example
``` JavaScript
document.getElementById("demo").innerHTML = xhttp.responseText;
```

### The responseXML Property
The XMLHttpRequest object has an in-built XML parser.
The responseXML property returns the server response as an XML DOM object.
Using this property you can parse the response as an XML DOM object:

Example
Request the file cd_catalog.xml and parse the response:

``` JavaScript
const xmlDoc = xhttp.responseXML;
const x = xmlDoc.getElementsByTagName("ARTIST");

let txt = "";
for (let i = 0; i < x.length; i++) {
  txt += x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = txt;

xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
```

### Server Response Methods
Method: Description
getResponseHeader(): Returns specific header information from the server resource
getAllResponseHeaders(): Returns all the header information from the server resource

### The getAllResponseHeaders() Method
The getAllResponseHeaders() method returns all header information from the server response.

Example:
``` JavaScript
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

### The getResponseHeader() Method
The getResponseHeader() method returns specific header information from the server response.

Example:
``` JavaScript
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

## AJAX Database Example
AJAX can be used for interactive communication with a database.
The following example will demonstrate how a web page can fetch information from a database with AJAX:

Example Explained - The showCustomer() Function
When a user selects a customer in the dropdown list above, a function called showCustomer() is executed. The function is triggered by the onchange event:

### showCustomer
``` JavaScript
function showCustomer(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
  }
  xhttp.open("GET", "getcustomer.php?q="+str);
  xhttp.send();
}
```
The showCustomer() function does the following:

Check if a customer is selected
Create an XMLHttpRequest object
Create the function to be executed when the server response is ready
Send the request off to a file on the server
Notice that a parameter (q) is added to the URL (with the content of the dropdown list)

### The AJAX Server Page
The page on the server called by the JavaScript above is a PHP file called "getcustomer.php".
The source code in "getcustomer.php" runs a query against a database, and returns the result in an HTML table:

``` PHP
<?php
$mysqli = new mysqli("servername", "username", "password", "dbname");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>ContactName</th>";
echo "<td>" . $name . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "<th>City</th>";
echo "<td>" . $city . "</td>";
echo "<th>PostalCode</th>";
echo "<td>" . $pcode . "</td>";
echo "<th>Country</th>";
echo "<td>" . $country . "</td>";
echo "</tr>";
echo "</table>";
?>
```

The PHP code above does the following:
-Connects to the database
-Prepares a SQL statement with a parameter
-Binds the parameter to the SQL statement
-Executes the SQL statement
-Stores the result
-Binds the result to variables
-Fetches the result
-Closes the statement
-Returns the result in an HTML table

The result of the AJAX request will be displayed in the <div> element with id="txtHint":
``` HTML
<div id="txtHint"><b>Customer info will be listed here...</b></div>
```

Note: Rather than using the above PHP code, you can also use a server-side language of your choice to fetch data from the database and return it in an HTML format.
PHP is used in this example because it is a popular server-side language, but you can achieve the same result with other languages such as Node.js, Python, Ruby, Go, .Net, Java etc.