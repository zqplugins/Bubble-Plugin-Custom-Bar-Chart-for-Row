function(instance, properties, context) {
  "chart" in instance.data && instance.data.chart.destroy();
  const pieId = instance.data.id,
    ctx = document.getElementById(pieId);

  var barColors = properties.barcolor?.split(","),
    xValues = properties.bartags?.split(","),
    yValues = properties.barvalue?.split(",");

  const chart = new Chart(ctx, { 
    type: properties.chart_vertical ? "bar" : "horizontalBar", 
    data: { labels: xValues, datasets: [{ backgroundColor: barColors, data: yValues }] }, 
    options: { plugins: { tooltip: properties.tooltip }, 
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        hover: { mode: null }, 
        legend: { display: !1 }, 
        scales: {
            xAxes: [{ // x-axis becomes the horizontal axis
              ticks: { beginAtZero: true }
            }],
            yAxes: [{ // y-axis becomes the vertical axis
              ticks: { beginAtZero: true }
            }]
          }
    } 

    });
  instance.data.chart = chart;
}
