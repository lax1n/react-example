import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to an example project</h1>
        </header>
        <Todo message={'todooooooo'} />
      </div>
    );
  }
}

export default App;
