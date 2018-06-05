//Line chart
// Our labels along the x-axis
var dates = ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','25-31'];
// For drawing the lines
var traffic = [0,600,753,698,1004,1533,1339,1600,1679,2200];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];

var ctx = document.getElementById("trafficChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
        data: traffic,
        label: "traffic",
        borderColor: "#7477bf",
        fill: true,
        backgroundColor: "rgba(164, 147, 232, 0.65)",
        lineTension: 0,
        pointBackgroundColor: "#fff",
        pointRadius: 6,
        pointHoverBorderWidth: 8,
        pointHoverBorderColor: "#555"
      }

    ]
  },
  options: {
        legend: {
            display: false,
          }
        }
});


/**** Bar Chart  ***/
var ctx = document.getElementById("dailyChart").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Votes',
            data: [100, 174, 59, 225, 111, 38, 88],
            backgroundColor: [
                '#7477bf',
                '#7477bf',
                '#7477bf',
                '#7477bf',
                '#7477bf',
                '#7477bf',
                '#7477bf'
            ],

            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false,
          }
    }
});

/***** Donut Chart *****/

var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var config = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue'
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

window.onload = function() {
  var ctx = document.getElementById('mobileChart').getContext('2d');
  window.myDoughnut = new Chart(ctx, config);
};

document.getElementById('randomizeData').addEventListener('click', function() {
  config.data.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return randomScalingFactor();
    });
  });

  window.myDoughnut.update();
});

var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset').addEventListener('click', function() {
  var newDataset = {
    backgroundColor: [],
    data: [],
    label: 'New dataset ' + config.data.datasets.length,
  };

  for (var index = 0; index < config.data.labels.length; ++index) {
    newDataset.data.push(randomScalingFactor());

    var colorName = colorNames[index % colorNames.length];
    var newColor = window.chartColors[colorName];
    newDataset.backgroundColor.push(newColor);
  }

  config.data.datasets.push(newDataset);
  window.myDoughnut.update();
});

document.getElementById('addData').addEventListener('click', function() {
  if (config.data.datasets.length > 0) {
    config.data.labels.push('data #' + config.data.labels.length);

    var colorName = colorNames[config.data.datasets[0].data.length % colorNames.length];
    var newColor = window.chartColors[colorName];

    config.data.datasets.forEach(function(dataset) {
      dataset.data.push(randomScalingFactor());
      dataset.backgroundColor.push(newColor);
    });

    window.myDoughnut.update();
  }
});

document.getElementById('removeDataset').addEventListener('click', function() {
  config.data.datasets.splice(0, 1);
  window.myDoughnut.update();
});

document.getElementById('removeData').addEventListener('click', function() {
  config.data.labels.splice(-1, 1); // remove the label first

  config.data.datasets.forEach(function(dataset) {
    dataset.data.pop();
    dataset.backgroundColor.pop();
  });

  window.myDoughnut.update();
});
