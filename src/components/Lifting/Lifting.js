import React, { Component } from "react";

import './Lifting.css';
import RightLeft from "./RightLeft";

export default class Lifting extends Component {
    
    state = {
        leftSide: [1, 2, 3, 4, 5],
        rightSide: [6, 7, 8, 9, 10]
    };

	render() {
		return (
			<div className="lifting">
				<RightLeft items={this.state.leftSide} change={this.LeftSide} />
				<RightLeft items={this.state.rightSide} change={this.RightSide} />
			</div>
		);
  };
  
  LeftSide = items => {
		if (this.state.leftSide.length > 1) {
			this.setState({
				leftSide: this.state.leftSide.filter(item => item !== items),
				rightSide: [...this.state.rightSide, items]
			});
	}};

	RightSide = items => {
		if (this.state.rightSide.length > 1) {
			    this.setState({
				rightSide: this.state.rightSide.filter(item => item !== items),
				leftSide: [...this.state.leftSide, items]
			});
		}
	};
}


