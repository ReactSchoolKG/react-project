import React, { Component } from 'react';

export default class RightLeft extends Component {
  render () {
    return (
    <ul>
      {this.props.items.map(items => (
        <li onClick={() => this.props.change(items)}>
          {items}
        </li>
      ))}
    </ul>
  );
  }
}

