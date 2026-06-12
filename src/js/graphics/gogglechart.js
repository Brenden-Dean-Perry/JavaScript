
function draw_bar_chart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['Italy', 55],
        ['France', 49],
        ['Spain', 44],
        ['USA', 24],
        ['Argentina', 15]
    ]);

    // Set Options
    const options = {
        title: 'World Wide Wine Production'
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);

}

function draw_bar_chart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['Italy', 55],
        ['France', 49],
        ['Spain', 44],
        ['USA', 24],
        ['Argentina', 15]
    ]);

    // Set Options
    const options = {
        title: 'World Wide Wine Production'
    };

    // Draw
    const chart = new google.visualization.PieChart(document.getElementById('myChart'));
    chart.draw(data, options);
}

function draw_line_chart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Price', 'Size'],
        [50, 7], [60, 8], [70, 8], [80, 9], [90, 9], [100, 9],
        [110, 10], [120, 11], [130, 14], [140, 14], [150, 15]
    ]);
    // Set Options
    const options = {
        title: 'House Prices vs Size',
        hAxis: { title: 'Square Meters' },
        vAxis: { title: 'Price in Millions' },
        legend: 'none'
    };
    // Draw Chart
    const chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
}

function draw_scatter_chart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Price', 'Size'],
        [50, 7], [60, 8], [70, 8], [80, 9], [90, 9], [100, 9],
        [110, 10], [120, 11], [130, 14], [140, 14], [150, 15]
    ]);
    // Set Options
    const options = {
        title: 'House Prices vs Size',
        hAxis: { title: 'Square Meters' },
        vAxis: { title: 'Price in Millions' },
        legend: 'none'
    };
    // Draw Chart
    const chart = new google.visualization.ScatterChart(document.getElementById('myChart'));
    chart.draw(data, options);
}