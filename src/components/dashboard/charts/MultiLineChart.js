import React from 'react'
import { Line } from 'react-chartjs-2'

export const MultiLineChart = () => {


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

    const data1 = [10, 8, 12, 6, 13, 24, 22, 11, 12, 29, 18, 11, 6];
    // const data2 = [4, 6, 2, 6, 11, 22, 24, 22, 20, 16, 21, 2, 1];
    // const media = data1.map((n, i) => (n+data2[i])/2);
    const bubbleData = [
      { 
        x: 1,
        y: 10,
        r: 0
      },
      { 
        x: 20,
        y: 30,
        r: 0
      },
      { 
        x: 20,
        y: 10,
        r: 6
      },
      { 
        x: 20,
        y: 30,
        r: 0
      },
      { 
        x: 20,
        y: 30,
        r: 0
      },
      { 
        x: 0,
        y: 21,
        r: 10
      },
      { 
        x: 0,
        y: 18,
        r: 7
      },
      
    ];

    const data = {
    labels: labels,
    datasets: [
        {
          label: 'Gravedad alta',
          type: 'bubble',
          data: bubbleData,
          backgroundColor: 'rgba(255, 99, 132, 0.9)'
        },

        {
        label: 'Problemas de humedad',
        fill: true,
        backgroundColor: 'rgba(54,162,235, 0.5)',
        borderColor: 'rgba(54,162,235, 1)',
        data: data1,
        tension: 0.4,
        // borderDash: [5, 5],
        pointRadius: 0,
        }
        
        
        // {
        // label: 'Tuberculos',
        // fill: false,
        // backgroundColor: 'rgba(255,99,132, 0.2)',
        // borderColor: 'rgba(255,99,132, 0.2)',
        // data: data2,
        // // borderDash: [5, 5],
        // // pointRadius: 4
        // }, 
        
        // {
        // label: 'Media',
        // backgroundColor: 'rgba(75,192,192, 0.5)',
        // borderColor: 'rgba(75,192,192, 1)',
        // data: media,
        // borderDash: [5, 5],
        // pointRadius: 1,
        // fill: true,
        // }
    ]
    };

    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Problemas de humedad',
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
              text: 'Tasa de problemas'
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
