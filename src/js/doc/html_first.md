# HTML First 

Avoid Unnecessary JavaScript
JavaScript is powerful, but too much JavaScript can make websites slower and more complicated.
Many websites can be built with more HTML, CSS, and less JavaScript.
HTML-first development can help improve:

Page speed
Accessibility
Search engine visibility
Maintainability
Reliability

## Progressive Enhancement
Progressive enhancement means starting with a working basic page.
Extra features are added only when the browser supports them.
For example, an HTML form should still work even if JavaScript fails.

## Why HTML-First?
HTML-first development is not about rejecting JavaScript.
It is about using the browser's built-in features before adding extra complexity.
Many common website features can be created with HTML and CSS alone.

## Browsers Are Already Powerful
Modern browsers understand many useful HTML elements.
These elements can provide structure, behavior, validation, and accessibility.
Examples include <form>, <button>, <details>, <summary>, and <dialog>.

``` html
<details>
  <summary>Click to read more</summary>
  <p>This text can be opened and closed without JavaScript.</p>
</details>
```

Less JavaScript Can Mean Faster Pages
JavaScript must be downloaded, parsed, compiled, and executed by the browser.

Large JavaScript files can slow down the first load of a page.
This is especially noticeable on mobile phones and slow networks.
Smaller pages load faster, use less memory, and feel more responsive.

## HTML Works Before JavaScript Loads
HTML is displayed as soon as the browser receives it.
This means users can often start reading the page before scripts have finished loading.

## When JavaScript Is Still Useful
JavaScript is still important for many interactive features.
The HTML-first idea is to add JavaScript when it is needed, not before.
HTML-first does not mean JavaScript never. It means HTML before JavaScript.

## Start With HTML
The first step is to create a meaningful HTML content.
The page should still work if CSS or JavaScript fails to load.

## Add JavaScript as an Enhancement
JavaScript can improve the user experience, but the page should not depend completely on it.
For example, JavaScript can add instant validation or animations.

``` html
<script>
const form = document.querySelector("form");

form.addEventListener("submit", function() {
  alert("Form submitted!");
});
</script>
```

The form still works even if this script does not load.

## Why Progressive Enhancement Matters
Users browse the web with different devices, browsers, and internet speeds.
Some users may disable JavaScript completely.
Others may use older browsers or assistive technologies.
Progressive enhancement helps ensure that everybody can still access the content.

## Native HTML Features
HTML has many built-in features that can replace small JavaScript solutions.
Using native HTML makes pages simpler, faster, and easier to understand.
In HTML-first development, you should always ask: Can the browser already do this?

### The details Element
The <details> element creates content that users can open and close.
The visible heading is written with the <summary> element.

``` html
<details>
  <summary>More information</summary>
  <p>This text is hidden until the user opens it.</p>
</details>
```
This works without any JavaScript.

### HTML Form Validation
HTML can validate form fields before a form is submitted.

You can use attributes like required, minlength, maxlength, and pattern.

``` html
<form action="/register" method="post">

<label for="username">Username:</label>
<input type="text" id="username" name="username" required minlength="3">

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<button type="submit">Register</button>

</form>
```

The browser checks the fields automatically.

### Input Types
HTML includes input types for common data.
These input types can show better keyboards on mobile devices and provide built-in validation.

type="email"
type="number"
type="date"
type="url"
type="search"

``` html
<label for="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday">
```

### The datalist Element
The <datalist> element gives users a list of suggested values.

The user can choose a suggestion or type another value.

``` html
<label for="browser">Choose a browser:</label>
<input list="browsers" id="browser" name="browser">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
```

### The dialog Element
The <dialog> element can be used for dialog boxes and popups.
Opening and closing dialogs usually needs a small amount of JavaScript, but the dialog behavior is built into the browser.

``` html
<dialog open>
  <p>This is an open dialog window.</p>
</dialog>
```

### Lazy Loading Images
Images can be lazy loaded with the loading attribute.
This can improve performance by loading images only when they are needed.
Modern browsers support a loading="lazy" attribute for <img> and <iframe> elements. This tells the browser to defer loading the resource until the user scrolls near it.


<!-- The browser handles the timing here -->
``` html
<img src="image.jpg" alt="A mountain" loading="lazy">
```

## CSS Instead of JavaScript
In HTML-first development, CSS is often the second step after HTML.
Many visual effects can be created with CSS instead of JavaScript.
CSS can handle layouts, hover effects, transitions, animations, responsive design, and simple state changes.

### Hover Effects
The :hover selector can change an element when the mouse is over it.

``` html
<style>
button:hover {
  background-color:#059862;
}
</style>
```

<button>Hover Over Me</button>

### Transitions
CSS transitions can animate changes smoothly.

``` html
<style>
.box {
  width:100px;
  height:100px;
  background-color:#04AA6D;
  transition:width 0.5s;
}

.box:hover {
  width:200px;
}
</style>

<div class="box"></div>
```

### Show and Hide Content
CSS can show and hide content using selectors.
This can be useful for simple menus and dropdowns.

``` html
<style>
.menu-content {
  display:none;
}

.menu:hover .menu-content {
  display:block;
}
</style>

<div class="menu">
  Menu
  <div class="menu-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </div>
</div>
```

### Responsive Layouts
CSS media queries can change the layout for different screen sizes.
This avoids the need for JavaScript-based layout changes.

``` html
<style>
.container {
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:16px;
}

@media (max-width:600px) {
  .container {
    grid-template-columns:1fr;
  }
}
</style>
```

### CSS Animations
CSS animations can create repeated movement without JavaScript.

``` html
<style>
.spinner {
  width:40px;
  height:40px;
  border:6px solid #ddd;
  border-top:6px solid #04AA6D;
  border-radius:50%;
  animation:spin 1s linear infinite;
}

@keyframes spin {
  to { transform:rotate(360deg); }
}
</style>

<div class="spinner"></div>
```

### When CSS Is Enough
CSS is often enough when the change is visual.
Use CSS for colors, sizes, spacing, layout, motion, and simple visibility changes.
Use JavaScript when the page needs logic, data processing, storage, or communication with a server.

If the problem is visual, try CSS first.