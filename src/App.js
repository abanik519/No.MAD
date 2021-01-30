import React, { Component } from 'react';

import './styles/App.css';
import './styles/header.css';

import Header from './components/header';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;