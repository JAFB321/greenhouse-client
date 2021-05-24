var React = require("react");
var Component = React.Component;
var { CanvasJSReact } = require("../../../Libraries/CanvaJs/canvasjs_react");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class ReportGraphDates extends Component {
  render() {
    const { sensorHistory } = this.props;
    console.log(sensorHistory);
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: this.props.sensorName,
      },
      axisX: {
        valueFormatString: "DD MMM",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
        },
      },
      axisY: {
        title: "Sensor value ",
        valueFormatString: "##0.00",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          labelFormatter: function (e) {
            return CanvasJS.formatNumber(e.value, "##0.00");
          },
        },
      },
      data: [
        {
          type: "area",
          xValueFormatString: "DD MMM",
          yValueFormatString: "##0.00",
          dataPoints: sensorHistory,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
