import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../store/actions/search_actions';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	
	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.props.searchForecast(this.state.term);
		this.setState({ term:'' });
		this.props.history.push('/results');
	}

	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="form-inline">
				<div className="form-group">
    				<label htmlFor="City Name"></label>
    				<input 
    					type="text" 
    					className="form-control"
    					placeholder="Enter a city"
						value={this.state.term}
						onChange={this.onInputChange}
    				/>
  				</div>
				<input type="submit" className="btn btn-default form-group" />
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchWeather: (cityName) => dispatch(actions.fetchWeather(cityName)),
		searchForecast: (cityName) => dispatch(actions.searchForecast(cityName))
	}
}

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));