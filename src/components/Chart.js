import React, {Component} from "react";
import {Bar} from "react-chartjs";


class Chart extends Component {
  constructor(props) {
    super(props);
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: "My First dataset",
        fillColor: [
          'rgba(255, 99, 132,0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        strokeColor: [
          'rgba(255,99,132,0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        highlightFill: [
          'rgba(255, 99, 132,0.75)',
          'rgba(54, 162, 235, 0.75)',
          'rgba(255, 206, 86, 0.75)',
          'rgba(75, 192, 192, 0.75)',
          'rgba(153, 102, 255, 0.75)',
          'rgba(255, 159, 64, 0.75)'
        ],
        highlightStroke:[
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        barStrokeWidth: 2,
        data: [65, 59, 80, 81, 56, 55],
      }]
    };
    const options = {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    };
    this.state = {
      chartData: data,
      chartOptions: options,
    };
  }
  render() {
    const { chartData, chartOptions } = this.state;
    return (
      <div className="chart">
        <Bar data={chartData} options={chartOptions} width="500" height="300" />
      </div>
    )
  }
}

export default Chart;