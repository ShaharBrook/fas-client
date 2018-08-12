import React, { Component } from 'react';
import './App.css';
import Navbar from "./navbar/navbar";

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="header">
          <h1>
            Welcome!
          </h1>
        </div>
        <div id="main">
            <Navbar/>
        </div>
      </div>
    );
  }
}

export default App;
