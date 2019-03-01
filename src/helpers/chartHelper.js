export default function craeteChart(ctx, items) {
  console.log(items, 'old items ');
  const data = groupDate(items)

  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Outcome',
              data: data.outcome,
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }, {
            label: 'Income ',
            data: data.income,
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

  const chartItems =  items.map( item => {
      item.month = new Date(item.date).getMonth()
      return item
    })

  const inCome = chartItems.filter(item => item.type == '+')
  const outCome = chartItems.filter(item => item.type == '-')
  const inComeArray = new Array(12).fill(0)
  const outComeArray = new Array(12).fill(0)

  inCome.forEach(item => {
    inComeArray[item.month] += +item.amount
  })

  outCome.forEach(item => {
    outComeArray[item.month] += +item.amount
  })
  return {income: inComeArray, outcome: outComeArray}

}
