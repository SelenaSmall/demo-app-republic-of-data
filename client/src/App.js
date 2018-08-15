import React, { Component } from 'react';
import './App.css';
import Insight from './Insight'

class App extends Component {
    state = { data: [] }
    componentDidMount() {
        fetch('/api/melbourne_traffic')
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }

  render() {
    return (
        <div className="App">

            <div className="App-header">
                <h2>Republic of Data - Insights</h2>
            </div>
            <Insight data={this.state.data.map((d)=>d.mean_speed)} size={[500,500]}></Insight>
        </div>
    )


  }
}

export default App;
