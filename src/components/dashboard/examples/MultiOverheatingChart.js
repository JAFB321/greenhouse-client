import React from 'react'
import { Line } from 'react-chartjs-2'

export const MultiOverheatingChart = () => {


    const labels = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    const data1 = [5, 8, 12, 6, 13, 24, 34, 31, 28, 29, 18, 11, 6];
    const data2 = [4, 6, 2, 6, 11, 22, 24, 22, 20, 16, 21, 2, 1];

    const media = data1.map((n, i) => (n+data2[i])/2);

    const data = {
    labels: labels,
    datasets: [
        {
        label: 'Tomates antiplaga',
        fill: false,
        backgroundColor: 'rgba(54,162,235, 0.3)',
        borderColor: 'rgba(54,162,235, 0.3)',
        data: data1,
        // borderDash: [5, 5],
        // pointRadius: 4
        }, 
        
        {
        label: 'Tuberculos',
        fill: false,
        backgroundColor: 'rgba(255,99,132, 0.2)',
        borderColor: 'rgba(255,99,132, 0.2)',
        data: data2,
        // borderDash: [5, 5],
        // pointRadius: 4
        }, 
        
        {
        label: 'Media',
        backgroundColor: 'rgba(75,192,192, 0.5)',
        borderColor: 'rgba(75,192,192, 1)',
        data: media,
        borderDash: [5, 5],
        pointRadius: 1,
        fill: true,
        }
    ]
    };

    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Overheating anual',
            font:{
                size: 20
            }
          },
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Tiempo'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Overheating'
            }
          }
        }
      }

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}
