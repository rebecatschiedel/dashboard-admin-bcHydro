import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class LineChart extends Component {
  state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      },
    },
    series: [
      {
        name: "Thousands of dollars",
        data: [0, 2.5, 1, 2, 1, 2, 2.5, 2.2],
      },
    ],
  };

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}
