import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import ChartJsDemo from "./insights/ChartJsDemo"
import D3JsDemo from "./insights/D3JsDemo"
import Home from "./Home"
import Map from "./flow/Map"
import Dimensions from "./flow/Dimensions"
import Calendar from "./flow/Calendar"

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/map' component={Map} />
          <Route exact path='/dimensions' component={Dimensions} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/chart-js-demo' component={ChartJsDemo} />
          <Route exact path='/d3-js-demo' component={D3JsDemo} />
        </Switch>
      </main>
    )
  }
}

export default Main