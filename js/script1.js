google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Account Receivable", "Account Payable"],
    ["2015", 1000, 400],
    ["2016", 1170, 460],
    ["2017", 660, 1120],
    ["2018", 1030, 540],
  ]);

  var options = {
    chart: {
      title: "Total Accounts Receivable and Payable Aging",
    },
  };

  var chart = new google.charts.Bar(
    document.getElementById("columnchart_material")
  );

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
