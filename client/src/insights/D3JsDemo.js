import React, {Component} from 'react'
import D3JsBar from './D3JsBar'

class D3JsDemo extends Component {
  state = {data: []}

  componentDidMount() {
    fetch('/api/melbourne_traffic')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {
    return (
      <div>
        <div>
          <h2>D3JS Demo</h2>
        </div>
        <D3JsBar data={this.state.data.map((d) => d.mean_speed)} size={[500, 500]}></D3JsBar>
      </div>
    )
  }
}

export default D3JsDemo
