import React, { Component } from 'react';

import {getAllDataElements} from './api';

import DataElements from './dataElements';

class Todo extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      moreText: '',
      dataElements: [],
    };
  }

  componentDidMount(){
      // Load organization units
      getAllDataElements().then((dataElements) => {
          this.setState({dataElements: dataElements});
          console.log(dataElements);
      }).catch((e) => {
          console.log('Error while loading ', e.message);
      });
  }

  changeText(event){
    console.log('action');
    this.setState({text: event.target.value, moreText: event.target.value});
  }

  render() {
    let dynamicVariable = "";
    const constVariable = "";
    return (
      <div className="Todo">
        <p>Hello from {this.props.message}</p>
        <button
          onClick={this.changeText.bind(this, 'hello world')}>
          Click me
        </button>
        <DataElements dataElements={this.state.dataElements} />
      </div>
    );
  }
}

export default Todo;
