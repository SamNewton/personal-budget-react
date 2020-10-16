import React from 'react';
import ChartJs from "chart.js";
import axios from 'axios';

var dataSource = {
    datasets: [{
        data: [],
        backgroundColor: [
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#fd6b59',
            '#fd7b19',
            '#fd1b19'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: []
};

function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myDoughnutChart = new ChartJs(ctx, {
        type: 'doughnut',
        data: dataSource
    });
}

axios.get(`http://localhost:3001/budget`)
      .then(res => {
        for(var i = 0; i < res.data.myBudget.length; i++) {
            dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
            dataSource.labels[i] = res.data.myBudget[i].title;
            
          }
          createChart();
      })

function Chart() {
    //console.log(myData);
  return (
    
    <canvas id="myChart" width="400" height="400"></canvas>
  );
}




export default Chart;
