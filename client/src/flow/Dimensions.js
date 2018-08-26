import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Dimensions extends Component {
  render() {
    return <div>
      dimensions graph
        <Link to="/calendar">see the calendar to change date</Link>
    </div>
  }
}

export default Dimensions
