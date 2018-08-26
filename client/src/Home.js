import React, {Component} from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    return <div>
      <ul>
        <li>Vic or Melbourne metro map view</li>
          <li>select sub section to add <Link to="/map">level crossing disruption to Hurstbridge line</Link></li>
      </ul>
    </div>
  }
}

export default Home
