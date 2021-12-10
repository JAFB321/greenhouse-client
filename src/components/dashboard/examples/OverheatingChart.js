
import React from 'react'
import { Bar } from 'react-chartjs-2'

export const OverheatingChart = () => {
   
    const data = {
    labels: [
        "Tomates antiplaga",
        "Tomates protegidos",
        "Tuberculos",
        "Chiles Transgenicos",
    ],
    datasets: [
        {
        label: 'Warning',
        data: [10, 12, 12, 12, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        },
        {
        label: 'Danger zone',
        data: [0, 6, 14, 7, 30],
        backgroundColor: 'rgba(255, 10, 64, 0.6)',
        },
    ]
    };

    const options = {
        plugins: {
          title: {
            display: true,
            text: 'Tasa de overheating del mes',
            font:{
                size: 20
            }
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    return (
        <div>
			<Bar data={data} options={options}/>
        </div>
    )
}
