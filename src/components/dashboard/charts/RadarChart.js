import React from 'react'
import { Radar } from 'react-chartjs-2'

export const RadarChart = () => {
    // new Chart({}).options.datasets.

    const data = {
        labels: [
          'Sequia',
          'Calentamiento',
          'Congelamiento',
          'Exceso de humedad',
        ],
        datasets: [{
          label: 'Tomate',
          data: [8, 7, 3, 10],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
        ,{
            label: 'Lechuga',
            data: [4, 9, 12, 3],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }
    ]
      };

      const options = {
        scales: {
            r: {
                suggestedMin: 1,
            },
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20,
                        // weight: 700
                    }
                },
                
            }
        }
    };

    return (
        <div>
			<Radar data={data} options={options} />
		</div>
    )
}
