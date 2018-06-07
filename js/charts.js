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
        20,
        15,
        65
      ],
      backgroundColor: [
        'rgb(178, 215, 169)',
        'rgba(108, 197, 203, 0.8)',
        '#7477bf'
      ],
      borderColor: [
        'rgb(178, 215, 169)',
        'rgba(108, 197, 203, 0.8)',
        '#7477bf'
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Phones',
      'Tablets',
      'Desktops'
    ]
  },
  options: {
    responsive: true,
    layout: {
            padding: {
                left: 0,
                right: 50,
                top: 0,
                bottom: 0
            }
          },
    legend: {
      position: 'right',
      display: true,
      labels: {
            fontColor: '#888',
            fontSize: 16,
            boxWidth: 20,
            padding: 25
          },
      layout: {
            margin: {
                  left: 0,
                  right: 0,
                  top: 350,
                  bottom: 0
                    }
                  }
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
