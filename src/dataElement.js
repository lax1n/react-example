import React, { Component } from 'react';

class DataElement extends Component {

  render() {
    return (
      <div>
        <p>{this.props.dataElement.id}</p>
        <p>{this.props.dataElement.displayName}</p>
      </div>
    );
  }
}

export default DataElement;
