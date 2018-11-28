import React, { Component } from "react";
import Column from "./Column";
import "./style.css";

class Main extends Component {
	constructor() {
		super();
		this.state = {
			left: [1, 2, 3, 4, 5],
			right: [6, 7, 8, 9, 10]
		};
	}

	Left = data => {
		if (this.state.left.length === 1) {
			return false;
		} else {
			this.setState({
				left: this.state.left.filter(item => item !== data),
				right: [...this.state.right, data]
			});
		}
	};

	Right = data => {
		if (this.state.right.length === 1) {
			return false;
		} else {
			this.setState({
				right: this.state.right.filter(item => item !== data),
				left: [...this.state.left, data]
			});
		}
	};

	render() {
		return (
			<div className="main">
				<Column data={this.state.left} change={this.Left} />
				<Column data={this.state.right} change={this.Right} />
			</div>
		);
	}
}

export default Main;
