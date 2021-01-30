import React, { Component } from 'react';

import './styles/App.css';
import './styles/header.css';
import './styles/featured.css';


import Header from './components/header';
import Featured from './components/featured';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;