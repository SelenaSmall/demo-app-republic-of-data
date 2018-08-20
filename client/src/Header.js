import React, {Component} from 'react'
import AppBar from "react-toolbox/lib/app_bar/AppBar"
import Navigation from "react-toolbox/lib/navigation/Navigation"
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <AppBar title='Republic of Data' leftIcon='menu'>
        <Navigation type='horizontal'>
          <Link to='/' active label='Home'>Home</Link>
          <Link to="/chart-js-demo" label='ChartJS'>ChartJS</Link>
          <Link to="/d3-js-demo" label='D3JS'>D3JS</Link>
          <Link to="/api/melbourne_traffic" label='api'>API</Link>
        </Navigation>
      </AppBar>
    )
  }
}

export default Header