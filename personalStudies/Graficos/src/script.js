const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Contagem de Votos',
          data: [12, 19, 3, 5, 2, 12],
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