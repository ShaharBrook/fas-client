import React, { Component } from 'react';
import './App.css';
import Navbar from "./navbar/navbar";
import {Header} from "semantic-ui-react";
import ChooseForm from "./dashboards/chooseForm/chooseForm";

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
                    <h1>So!</h1>
                    <p>Lets start working.</p>
                </div>
                <div id="tab-addForm" hidden={this.state.selected !== 'addForm'}>
                    <ChooseForm/>
                </div>
                <div id="tab-statics" hidden={this.state.selected !== 'statics'}>
                    statics!!
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
