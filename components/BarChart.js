import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class BarChart extends Component {
  state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 25, 40, 42, 50, 43, 37, 46, 53, 48, 44, 42],
      },
    ],
  };

  render() {
    return (
      <div className="app">
        {this.props.size == "sm" ? (
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="400"
              />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="600"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
