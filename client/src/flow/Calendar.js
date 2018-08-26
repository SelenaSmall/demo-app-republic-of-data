import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Calendar extends Component {
  render() {
    return <div>
      Calendar goes here
        <Link to="/map">see changes on the map</Link>
    </div>
  }
}

export default Calendar
