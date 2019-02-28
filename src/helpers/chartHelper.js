export default function craeteChart(ctx, items) {
  groupDate(items)
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: 'Outcome',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }, {
            label: 'Income ',
            data: [22, 13, 5, 15, 12, 31],
            backgroundColor: 'rgba(35, 209, 96, 0.7)',
            borderColor: 'rgba(35, 209, 96, 1)',
            borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  return myChart;
}

function groupDate(items) {
    items.map( item => {
      item.date = new Date(item.date)
    })

    console.log(items);
}
