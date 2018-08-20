import React, {Component} from 'react'
import './App.css'
import D3JsDemo from './insights/D3JsDemo'
import ChartJsDemo from "./insights/ChartJsDemo"
import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import Navigation from 'react-toolbox/lib/navigation/Navigation'
import Link from 'react-toolbox/lib/link/Link'
import Button from 'react-toolbox/lib/button/Button'

class App extends Component {
  state = {data: []}

  componentDidMount() {
    fetch('/api/melbourne_traffic')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {
    return (
      <div className="App">
        <AppBar title='Republic of Data' leftIcon='menu'>
          <Navigation type='horizontal'>
            <Link active label='ChartJS' />
            <Link label='D3JS' />
            <Link href="/api/melbourne_traffic" label='api' />
          </Navigation>
        </AppBar>
        <ChartJsDemo/>
        <D3JsDemo data={this.state.data.map((d) => d.mean_speed)} size={[500, 500]}></D3JsDemo>
      </div>
    )
  }
}

export default App;
