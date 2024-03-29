import React, { Component } from 'react';

import './styles/App.css';
import './styles/header.css';
import './styles/featured.css';
import './styles/sneakerPage.css';

import Header from './components/header';
import Featured from './components/featured';

window.value = "";

export class App extends Component {
  state = {
    totalInfo: [],
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('http://localhost:9000/algo')
        .then(response => response.json())
        .then(data => this.setState({ totalInfo: data }));
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.totalInfo} />
        <Featured data={this.state.totalInfo} />
      </div>
    );
  }
}

export default App;
//#121212