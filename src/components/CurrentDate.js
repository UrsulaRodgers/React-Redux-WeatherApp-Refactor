import React, { Component } from 'react';

class CurrentDate extends Component {
	constructor(props) {
		super(props)

		var currentDate = new Date();

		this.state = {
			currentDate: currentDate.toDateString()
		}
	}
	render() {
		return (
			<div>{this.state.currentDate}</div>
		);
	}
}

export default CurrentDate;