import React, { Component } from 'react';
import Column  from '../Column/Column.js';
import "./Lifting.css";

class Lifting extends Component {
	state = { left: [1, 2, 3, 4, 5], right: [6, 7, 8, 9, 10] };

	 leftToRight = digit => {
    const { left, right } = this.state;

    this.setState({
      left: left.filter(d => d !== digit),
      right: [...right, digit]
    });
  };

  rightToLeft = digit => {
    const { left, right } = this.state;

    this.setState({
      right: right.filter(d => d !== digit),
      left: [...left, digit]
    });
  };

  render () {
    return <div className="lifting">
 		   <Column digits={this.state.left} onDigitClick={this.leftToRight} />
      <Column digits={this.state.right} onDigitClick={this.rightToLeft} />
    </div>
  }
}

export default Lifting;