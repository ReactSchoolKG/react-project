import React, { Component } from 'react';

class Column extends Component {
  render () {
    return (
    <div>
      {this.props.data.map(data => (
        <h1 onClick={() => this.props.change(data)}>
          {data}
        </h1>
      ))}
    </div>
  );
  }
}

export default Column;