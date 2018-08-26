import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Map extends Component {
  render() {
    return <div>
      Map goes here
      <Link to="/dimensions">see the current state of dimensions</Link>
    </div>
  }
}

export default Map
