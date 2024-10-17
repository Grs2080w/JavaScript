var b = 10

const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue'],
        datasets: [{
          label: 'Contagem de Votos',
          data: [b, 19],
          borderWidth: 2
        }]
      },
      options: {
        borderColor: 'black', 
        backgroundColor: 'black',
        
        indexAxis: 'x',
        
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });