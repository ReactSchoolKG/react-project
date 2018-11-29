import React from 'react';

import Field from './Field';

import './Lifting.css';

class Lifting extends React.Component {
	constructor() {
		super();

		this.state = {
			leftField: [],
			rightField: []
		};
	}

	componentDidMount() {
		this.setState(() => {
			return { leftField: [1, 2, 3, 4, 5], rightField: [6, 7, 8, 9, 10] };
		});
	}

	doComputing = (currentArray, element, anotherArray) => {
		const index = currentArray.indexOf(element);
		const newArray = currentArray.slice();
		const anotherArrays = anotherArray.slice();
		newArray.splice(index, 1);
		anotherArrays.push(element);

		return { newArray, anotherArrays };
	};

	handleChangePosition = (fieldPosition) => (event) => {
		const element = parseInt(event.target.textContent, 10);
		switch (fieldPosition) {
			case `left`: {
				if (this.state.leftField.length > 1) {
					const result = this.doComputing(
						this.state.leftField,
						element,
						this.state.rightField
					);

					this.setState(() => {
						return {
							leftField: result.newArray,
							rightField: result.anotherArrays
						};
					});
				}
				break;
			}
			case `right`: {
				if (this.state.rightField.length > 1) {
					const result = this.doComputing(
						this.state.rightField,
						element,
						this.state.leftField
					);

					this.setState(() => {
						return {
							rightField: result.newArray,
							leftField: result.anotherArrays
						};
					});
				}
				break;
			}
			default: {
				console.log(Error);
			}
		}
	};

	render() {
		return (
			<div className="flex-container">
				<Field
					numbers={this.state.leftField}
					fieldPosition="left"
					handleChangePosition={this.handleChangePosition}
				/>
				<Field
					numbers={this.state.rightField}
					fieldPosition="right"
					handleChangePosition={this.handleChangePosition}
				/>
			</div>
		);
	}
}

export default Lifting;