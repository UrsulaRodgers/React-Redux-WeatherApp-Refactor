import React, { Component } from 'react';

class Searchbar extends Component {
	constructor (props) {
		super(props)

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({term:event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term:'' });
	}

	render () {
		return (
			<form className="form-inline" onSubmit={this.onFormSubmit}>
  				<div className="form-group">
    				<label htmlFor="city name"></label>
    				<input 
    					type="text" 
    					className="form-control" 
    					value={this.state.term}
						onChange={this.onInputChange}
    					placeholder="Enter a city"
    				/>
    			</div>
  				<input type="submit" className="btn btn-default" />
			</form>
		);
	}
}

export default Searchbar;