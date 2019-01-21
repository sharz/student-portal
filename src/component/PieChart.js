import React, {Component} from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "Pie3D",
  width: 500,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Recommended Student Portfolio Split",
      subCaption: "Lorem Ipsum is simply dummy ",
      showValues: "1",
      showPercentInTooltip: "0",
      numberPrefix: "$",
      enableMultiSlicing: "1",
      theme: "fusion"
    },
    data: [
      {
        label: "Science",
        value: "300000"
      },
      {
        label: "Maths",
        value: "230000"
      },
      {
        label: "Chemistry",
        value: "180000"
      },
      {
        label: "xyz",
        value: "270000"
      },
      {
        label: "abc",
        value: "20000"
      }
    ]
  }
};

class PieChart extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}

export default PieChart;
