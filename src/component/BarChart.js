import React, {Component} from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column2d",
  width: "500",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "STUDENT GROUPS",
      subCaption: "Lorem Ipsum is simply dummy ",
      xAxisName: "Division",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    },
    data: [
      {
        label: "Group A",
        value: "290"
      },
      {
        label: "Group B",
        value: "260"
      },
      {
        label: "Group C",
        value: "180"
      },
      {
        label: "Group D",
        value: "140"
      },
      {
        label: "Group E",
        value: "115"
      },
      {
        label: "Group F",
        value: "100"
      },
      {
        label: "Group G",
        value: "30"
      },
      {
        label: "Group H",
        value: "30"
      }
    ]
  }
};

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {},
      currentVal: "medium"
    };

    this.renderComplete = this.renderComplete.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }

  renderComplete(chart) {
    this.setState({chart});
  }

  // Handler for radio buttons to change chart size.
  radioHandler(e) {
    // eslint-disable-next-line default-case
    switch (e.currentTarget.value) {
      case "small":
        this.state.chart.resizeTo(400, 250);
        break;

      case "medium":
        this.state.chart.resizeTo(600, 350);
        break;

      case "large":
        this.state.chart.resizeTo(700, 400);
        break;
    }
    this.setState({
      currentVal: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
      </div>
    );
  }
}

export default BarChart;
