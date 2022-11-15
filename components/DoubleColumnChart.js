import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "2021",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 101, 98, 87],
        },
        {
          name: "2022",
          data: [76, 85, 101, 98, 87, 57, 56, 61, 66, 76],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
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
        yaxis: {
          title: {
            text: "KWH (Kilowatt-hour)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " KWH";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
