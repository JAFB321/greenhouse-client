import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = () => {

    const data = {
        labels: ['% de fallos', '', 'Lecturas erroneas', 'Alertas', 'Desconexion', 'Ruido' ],
        datasets: [
            {
                label: 'Fallos hardware',
                data: [90, 10, 0, 0, 0 ,0 ,0, 0],
                backgroundColor: [
                    'rgb(54,162,235)',
                    '#fff',
                    'rgb(225, 99, 12)',
                    'rgb(25, 9, 132)',
                    'rgb(25, 99, 129)',
                    'rgb(255, 99, 132)',
                ]
            },
            {
                label: 'Dataset 1',
                data: [1,2,3,4],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(225, 99, 12)',
                    'rgb(25, 9, 132)',
                    'rgb(25, 99, 129)',
                ]
            }            
        ]
      };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Fallas de sensores del mes',
            font:{
                size: 20
            }
          }
        }
      };

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}
