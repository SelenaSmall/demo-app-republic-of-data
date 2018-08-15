import React, { Component } from 'react';
import './App.css';
import Insight from './Insight'

class App extends Component {
    componentDidMount() {
        fetch('/api/melbourne_traffic')
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }

  render() {
    return (
        <div className="App">
            <Insight data={this.state}></Insight>
        </div>
    )


  }
}

export default App;
