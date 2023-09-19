google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Net Working Capital", "Gross Working Capital"],
    ["2019", 1000, 400],
    ["2020", 1170, 460],
    ["2021", 660, 1120],
    ["2022", 1030, 540],
  ]);

  var options = {
    title: "Net Working Capital vs Gross Working Capital",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
