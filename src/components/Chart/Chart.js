import React from 'react';
import Chart from "react-apexcharts";

export function LineChart(props){
  const config = {
    options: {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          show : false,
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      title: {
        text: '',
        align: 'left'
      },
      fill: {
        type: 'solid',
        colors : ['#fff'],
        opacity : 0.08,
        gradient: {
          shade : 'red',
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      // stroke : {
      //   show : false
      // },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: ''
        },
      },

      colors: ['#2F185C'],
      stroke: {
        width: 3,
        curve: 'straight'
      },
      grid : {
        show : false
      },
      annotations : {
        position : 'front'
      },
      // xaxis: {
      //   type: 'datetime',
      // },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0)
          }
        }
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }

  return (
    <div>
      <Chart options={config.options} series={config.series} type="area" height="240"/>
    </div>
  )
}

export function CandleStickGraph(props){
  let config = {
    options : {
      candlestick: {
        colors: {
          upward: '#639A70',
          downward: '#A84C4C'
        }
      },
      toolbar: {
        show : false,
        autoSelected: 'zoom'
      }
    },
    series: [{
      data: [
        {
          x: 'January',
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x:'February',
          y: [53.66, 54.99, 51.35, 52.95]
        },
        {
          x: 'March',
          y: [52.76, 57.35, 52.15, 57.03]
        },
        {
          x: 'April',
          y: [53.66, 54.99, 51.35, 52.95]
        },
        {
          x: 'May',
          y: [52.76, 57.35, 52.15, 57.03]
        },
        {
          x: 'June',
          y: [53.66, 54.99, 51.35, 52.95]
        },
        {
          x: 'July',
          y: [52.76, 57.35, 52.15, 57.03]
        }
      ]
    }]
  }
  return (
    <Chart options={config.options} series={config.series} type="candlestick" />
  )
}
