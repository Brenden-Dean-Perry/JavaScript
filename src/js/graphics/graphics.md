
# JavaScript Graphics
Graphic Libraries
JavaScript libraries to use for all kinds of graphs:
- Plotly.js
- Chart.js
- Google Chart
- D3

## Plotly.js
Plotly.js is a charting library that comes with over 40 chart types, 3D charts, statistical graphs, and SVG maps.

## Chart.js
Chart.js comes with many built-in chart types:
- Scatter
- Line
- Bar
- Radar
- Pie and Doughnut
- Polar Area
- Bubble

How to Use Chart.js?
1. Add a link to the providing CDN (Content Delivery Network):

```html
<script
src="https://cdn.jsdelivr.net/npm/chart.js@4.5.0">
</script>
```

2. Add a <canvas> to where in the HTML you want to draw the chart:

```html
<canvas>
id="myChart" style="width:100%;max-width:700px"
</canvas>
```

The canvas element must have a unique id.

Typical Bar Chart Syntax:
```javascript
const myChart = new Chart("myChart", {
  type: "bar",
  data: {},
  options: {}
});
```

Typical Line Chart Syntax:
```javascript
const myChart = new Chart("myChart", {
  type: "line",
  data: {},
  options: {}
});
```

## Google Chart
From simple line charts to complex tree maps, Google Chart provides a number of built-in chart types:

- Scatter Chart
- Line Chart
- Bar / Column Chart
- Area Chart
- Pie Chart
- Donut Chart
- Org Chart
- Map / Geo Chart

## D3
D3 is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. 
D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

D3 can be used to create a wide variety of visualizations, including:
- Bar charts
- Line charts
- Scatter plots
- Pie charts
- Hierarchical diagrams
- Maps
- Network graphs
- And much more!

### How to Use Google Chart?
1. Add a <div> element (with a unique id) in the HTML where you want to display the chart:
 
``` html
<div id="myChart" style="max-width:700px; height:400px"></div>
```

2. Add a link to the charts loader:
```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
```
3. Load the Graph API, and add the function to run when the API is loaded:
``` html
<script>
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Your Function
function drawChart() {
...
}
</script>
```

### How to Use D3.js?
To use D3.js in your web page, add a link to the library:

```html
<script src="//d3js.org/d3.v3.min.js"></script>
```

This script selects the body element and appends a paragraph with the text "Hello World!":

``` javascript
d3.select("body").append("p").text("Hello World!");
```