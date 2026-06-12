
function plot_bar() {
    const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yArray = [55, 49, 44, 24, 15];

    const data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        orientation: "v",
        marker: { color: "rgba(0,0,255)" }
    }];

    const layout = { title: "World Wide Wine Production" };

    Plotly.newPlot("myPlot", data, layout);
}

function plot_bar_horizontal() {
    const xArray = [55, 49, 44, 24, 15];
    const yArray = ["Italy", "France", "Spain", "USA", "Argentina"];

    const data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        orientation: "h",
        marker: { color: "rgba(255,0,0,0.6)" }
    }];

    const layout = { title: "World Wide Wine Production" };

    Plotly.newPlot("myPlot", data, layout);
}

function plot_pie() {

    const xArray = [55, 49, 44, 24, 15];
    const yArray = ["Italy", "France", "Spain", "USA", "Argentina"];

    const data = [{
        labels: xArray,
        values: yArray,
        type: "pie"
    }];

    const layout = { title: "World Wide Wine Production" };

    Plotly.newPlot("myPlot", data, layout);
}

function plot_donut() {

    const xArray = [55, 49, 44, 24, 15];
    const yArray = ["Italy", "France", "Spain", "USA", "Argentina"];

    const data = [{
        labels: xArray,
        values: yArray,
        hole: 0.4,
        type: "pie"
    }];

    const layout = { title: "World Wide Wine Production" };

    Plotly.newPlot("myPlot", data, layout);
}

function plot_equation() {
    let exp = "Math.sin(x)";

    // Generate values
    const xValues = [];
    const yValues = [];
    for (let x = 0; x <= 10; x += 0.1) {
        xValues.push(x);
        yValues.push(eval(exp)); // Evaluate the expression for each x
    }

    // Display using Plotly
    const data = [{ x: xValues, y: yValues, mode: "lines" }];
    const layout = { title: "y = " + exp };
    Plotly.newPlot("myPlot", data, layout);
}

function plot_scatter() {
    const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

    // Define Data
    const data = [{
        x: xArray,
        y: yArray,
        mode: "markers",
        type: "scatter"
    }];

    // Define Layout
    const layout = {
        xaxis: { range: [40, 160], title: "Square Meters" },
        yaxis: { range: [5, 16], title: "Price in Millions" },
        title: "House Prices vs. Size"
    };

    Plotly.newPlot("myPlot", data, layout);
}

function plot_multi_line() {
    let exp1 = "x";
    let exp2 = "1.5*x";
    let exp3 = "1.5*x + 7";

    // Generate values
    const x1Values = [];
    const x2Values = [];
    const x3Values = [];
    const y1Values = [];
    const y2Values = [];
    const y3Values = [];

    for (let x = 0; x <= 10; x += 1) {
        x1Values.push(x);
        x2Values.push(x);
        x3Values.push(x);
        y1Values.push(eval(exp1));
        y2Values.push(eval(exp2));
        y3Values.push(eval(exp3));
    }

    // Define Data
    const data = [
        { x: x1Values, y: y1Values, mode: "lines" },
        { x: x2Values, y: y2Values, mode: "lines" },
        { x: x3Values, y: y3Values, mode: "lines" }
    ];

    // Define Layout
    const layout = { title: "[y=" + exp1 + "] [y=" + exp2 + "] [y=" + exp3 + "]" };

    // Display using Plotly
    Plotly.newPlot("myPlot", data, layout);
}