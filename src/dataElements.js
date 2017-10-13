import React, { Component } from 'react';

import DataElement from './dataElement';

class DataElements extends Component {

  render() {
    return (
      <div>
        {this.props.dataElements.map((dataElement, index) => {
          console.log(dataElement);
          return <DataElement index={index} dataElement={dataElement} />
        })}
      </div>
    );
  }
}

export default DataElements;
