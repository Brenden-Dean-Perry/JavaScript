# Asynchronous
Async code allows a program to start a long-running task (like fetching data from a file). and continue with other tasks before the first one finishes.
Async code prevents the application from freezing, which is critical for user experience.

## Control Flow
Control Flow is the order in which statements are executed in a program.
By default, JavaScript runs code from top to bottom and left to right.
Async programming can change this.

## How JavaScript Runs Code
JavaScript executes code one line at a time.
Each line must finish before the next line runs.

Example:
``` JavaScript
myDisplayer("A");
myDisplayer("B");
myDisplayer("C");
```

The examples above are normal synchronous flow.

## Why Async Code
Some tasks take time to finish (network requests, timers, user input).
To stay responsive, JavaScript can use async programming.
Asynchronous flow refers to how JavaScript allows certain operations to run in the background and let their results be handled when they are ready.

If JavaScript waited for these tasks, the page would freeze.
- Asych code lets the rest of the program continue to run.
- Async code does not run immediately:

Timers run after a specified number of milliseconds
Events run when triggered by an event
Network requests run when the data arrives

A frozen page is a broken page.
Asynch code does not block execution.

## JavaScript Timeouts
The setTimeout() Method
The setTimeout() method schedules a function to run after a delay in milliseconds.

It is an async operation used to delay code execution without freezing the browser.

Waiting for a Timeout
When using the setTimeout() method, you can specify a function to be executed on time-out:

Example
``` JavaScript
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```

In the example above, myFunction is passed to setTimeout() as an argument.
3000 is the number of milliseconds before myFunction will be called.

When you pass a function as an argument, remember not to use parenthesis.
- Right: setTimeout(myFunction, 3000);
- Wrong: setTimeout(myFunction(), 3000);

Instead of passing a function name as an argument to another function, you can always pass the whole function instead:

Example:
``` JavaScript
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
```

Waiting for Intervals:
When using the setInterval() method, you can specify function to be executed for each interval:

Example
``` JavaScript
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
```

## Callbacks
"I will call back later!"
A callback is a function that runs later.
A callback runs after something has finished.

The name "callback" stems from the idea that the function will "call you back" later when it has finished its task.
Callbacks were the first JavaScript solution for handeling asynchronous results that could not be available immediately.
This page explains what callbacks are and why they can cause some problems.

### What is a Callback Function?
A callback function is a function passed as an argument into another function.
The callback function is intended to be executed later, typically when a specific event occurs or an asynchronous operation completes.
This pattern keeps your function flexible.
This is how many older JavaScript APIs worked.


Example (Callbacks):
``` JavaScript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

### Callback Drawbacks
While essential for JavaScript programming, deeply nested callbacks can lead to complex, hard-to-read code known as "callback hell" or the "pyramid of doom".

Example
''' JavaScript
step1(function(r1) {
  step2(r1, function(r2) {
    step3(r2, function(r3) {
      console.log(r3);
    });
  });
});
'''

When callbacks get deep, debugging becomes difficult.
The logic moves from left to right and becomes difficult to follow.

In the example above, myFunction is passed to setInterval() as an argument.
1000 is the number of milliseconds between every time myFunction will be called.

### Callback Alternatives
Asynchronous callback solutions are difficult to write and difficult to debug.
Because of this, modern asynchronous JavaScript do not use callbacks.
Modern JavaScript offers superior alternatives for handling asynchronous operations, using Promises and the async/await syntax, which provide a cleaner flow and better error handling.

### When to Use a Callback?
Callbacks are still important to understand.
Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

## JavaScript Promises
"I Promise a Result!"
JavaScript Promises were created to make asynchronous JavaScript easier to use.

A Promise object represents the completion or failure of an asynchronous operation.
A Promise can be in one of three exclusive states:

- Pending: Initial state, neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully, resulting in a value.
- Rejected: The operation failed, resulting in a reason for the failure.

### Promises How To
Here is how to use a Promise:

Example:
``` JavaScript
myPromise.then(
  function(value) { /* code if success */ },
  function(value) { /* code if error */ }
);
```

then() takes two arguments, one callback function for success and another for failure.
Both are optional, so you can add a callback function for success or failure only.

Examples:
``` JavaScript
// Create a Promise Object
let myPromise = new Promise(function(resolve, reject) {
  ok = true;

// Code that may take some time

  if (ok) {
    resolve("OK");
  } else {
    reject("Error");
  }
});

// Using then() to display the result
myPromise.then(
  function(value) {myDisplayer(value);},
  function(value) {myDisplayer(value);}
);
```

### Using promise then and catch
You do not read a promise result immediately.
You attach code that runs when the promise finishes.

then() runs when a promise is fulfilled.
catch() runs when a promise is rejected.

Examples:
``` JavaScript
let promise = Promise.resolve("OK");

promise
.then(function(value) {
  console.log(value);
})
.catch(function(value) {
  myDisplayer(value);
});
```

### Where to Put catch
You can handle errors at the end of the chain.
A single catch() can catch errors from any step above.

Example:
``` JavaScript
step1()
.then(function(value) {
  return step2(value); // Notice the return here
})
.then(function(value) {
  return step3(value); // Notice the return here
})
.catch(function(error) {
  console.log(error);
});
```

This is one reason promises are easier than many nested callbacks.

### Common Beginner Mistakes (Promises)
Forgetting to return a promise breaks the chain.

Example:
``` JavaScript
step1()
.then(function(value) {
  step2(value);
})
.then(function(value) {
  console.log(value);
});
```

The second then() runs too early.
It runs because nothing was returned from the first then().
If you start an async step in then(), return it.

##  JavaScript async and await
async and await make promises easier
You still use promises, but you write the code like normal step by step code.

async makes a function return a Promise
await makes a function wait for a Promise

### Why async and await Exist
Promise chains can become long.
async and await were created to reduce nesting and improve readability.

### The async Keyword
The async keyword before a function makes the function return a promise.
This is true even if you return a normal value.

Example
``` JavaScript
async function myFunction() {
  return "Hello";
}
```
Is the same as:

``` JavaScript
function myFunction() {
  return Promise.resolve("Hello");
}
```
The result is handled with then() because it is a promise:

``` JavaScript
myFunction().then(
  function(value) { /* code if successful */ },
  function(value) { /* code if some error */ }
);
```
Example
``` JavaScript
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(value) {myDisplayer(value);}
);
```

### The await Keyword
The await keyword makes a function pause the execution and wait for a resolved promise before it continues:

``` JavaScript
let value = await promise;
```

The await keyword can only be used inside an async function:

Example:
``` JavaScript
function step1() {
  return Promise.resolve("A");
}

async function run() {
  let value = await step1();
  myDisplayer(value);
}

run();
```

### Sequential vs Parallel Promises
When you have multiple independent promises, you can run them in parallel.
When you have multiple dependent promises, you can run them sequentially.
Awaiting one by one runs tasks in sequence.
This is correct when one step depends on the previous step.

Example:
``` JavaScript
async function run() {
  let a = await step1();
  let b = await step2();
  console.log(a, b);
}
```

If tasks do not depend on each other, you can run them in parallel.
Use Promise.all() to wait for both.

Example:
``` JavaScript
async function run() {
  let p1 = step1();
  let p2 = step2();
  let values = await Promise.all([p1, p2]);
  console.log(values);
}
```

Start the promises first.
Await them together.

### JavaScript fetch API
fetch() is the modern way to request data from a server
fetch() is asynchronous and returns a promise

Modern apps use async code to get data
fetch() is the most common example

fetch Returns a Promise
fetch() does not return the data.

It returns a promise that becomes a response later.

Example
fetch("data.json")
.then(function(response) {
  console.log(response);
});
The result is a Response object, not the JSON data.

### Getting JSON Data
To get JSON, you must read the response body.
response.json() returns a promise.

Example:
``` JavaScript
fetch("data.json")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
});
```

The above is a promise chain.
fetch with async and await
async and await make fetch code easier to read.

This is the recommended way for beginners.

Example:
``` JavaScript
async function loadData() {
  let response = await fetch("data.json");
  let data = await response.json();
  console.log(data);
}

loadData();
```

Important: HTTP Errors
A common beginner mistake is expecting fetch to fail on 404 or 500.
Fetch only rejects on network errors.
A 404 response is not a rejected promise.
You must check response.ok.

Example:
``` JavaScript
async function loadData() {
  let response = await fetch("missing.json");

  if (!response.ok) {
    console.log("HTTP Error:", response.status);
    return;
  }

  let data = await response.json();
  console.log(data);
}

loadData();
```

The above handles HTTP errors correctly.

### Common fetch Mistakes
Forgetting await gives you a promise instead of data.

Example:
``` JavaScript
async function loadData() {
  let response = await fetch("data.json");
  let data = response.json();
  console.log(data);
}
```

This logs a promise.
You must use await to get the JSON.

Example:
``` JavaScript
async function loadData() {
  let response = await fetch("data.json");
  let data = await response.json();
  console.log(data);
}
```