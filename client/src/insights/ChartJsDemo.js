import React, {Component} from 'react'
import LineChart from 'react-chartjs/lib/line'
import BarChart from 'react-chartjs/lib/bar'
import Radar from 'react-chartjs/lib/radar'
import PolarArea from 'react-chartjs/lib/polar-area'
import Pie from 'react-chartjs/lib/pie'
import Doughnut from 'react-chartjs/lib/doughnut'

class ChartJsDemo extends Component {
  rand(min, max, num) {
    let rtn = []
    while (rtn.length < num) {
      rtn.push((Math.random() * (max - min)) + min)
    }
    return rtn
  }

  data1() {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.rand(32, 100, 7)
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.rand(32, 100, 7)
        }
      ]
    }
  }
  data2() {
    return {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.rand(32, 100, 7)
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.rand(32, 100, 7)
        }
      ]
    }
  }

  data3() {
    return [
      {
        value: this.rand(25, 300, 1)[0],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: this.rand(25, 300, 1)[0],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: this.rand(25, 300, 1)[0],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      },
      {
        value: this.rand(25, 300, 1)[0],
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
      },
      {
        value: this.rand(25, 300, 1)[0],
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
      }
    ];
  }


  render() {

    // TODO: work out how to make responsive
    // Chart.defaults.global.responsive = true;
    // or can pass as options below options={{{responsive: true}}

    return (
      <div>
        <div>
          <h2>Chart JS Demo</h2>
        </div>
        <LineChart data={this.data1()} options={{}} width="600" height="250"/>
        <BarChart data={this.data2()} options={{}} width="600" height="250"/>
        <Radar data={this.data2()} options={{}} width="600" height="250"/>
        <PolarArea data={this.data3()} options={{}} width="600" height="250"/>
        <Pie data={this.data3()} options={{}} width="600" height="250"/>
        <Doughnut data={this.data3()} options={{}} width="600" height="250"/>
      </div>
    )
  }
}

export default ChartJsDemo
