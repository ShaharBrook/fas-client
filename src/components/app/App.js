import React, { Component } from 'react';

import './App.css';
import Navbar from "./navbar/navbar";
import {Header} from "semantic-ui-react";
import ChooseForm from "./dashboards/chooseForm/chooseForm";
import Home from "./dashboards/home/home";
import Statistics from "./dashboards/statistics/statistics";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'home'
        };
        this.updateSelected = this.updateSelected.bind(this);
    }

    updateSelected(selected) {
        this.setState({selected});
    }
  render() {
    return (
      <div id="app">
        <div id="header">
            <Header as='h1'>F.A.A.S</Header>
        </div>
        <div id="main">
            <Navbar updateSelected = {this.updateSelected}/>
            <div id="tabs">
                <div id="tab-home" hidden={this.state.selected !== 'home'}>
                    <Home/>
                </div>
                <div id="tab-addForm" hidden={this.state.selected !== 'addForm'}>
                    <ChooseForm/>
                </div>
                <div id="tab-statics" hidden={this.state.selected !== 'statics'}>
                    <Statistics/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
