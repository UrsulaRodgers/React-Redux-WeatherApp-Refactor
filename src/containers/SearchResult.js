import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import SearchBar from './Searchbar';
import CurrentDate from '../components/CurrentDate';
import Units from '../components/Units';
import wind from '../images/wind_24.png';
import humidity from '../images/humidity.png';
import Forecast from '../components/Forecast';
import CurrentWeather from '../components/CurrentWeather';

class SearchResult extends Component {

	render() {

		const setSearchLocation = (
        	this.props.error ? 
          		<h2 className="text-center">Enter a valid location</h2> : 
          		<h2 className="text-center">{this.props.city}, {this.props.country}</h2>
    	);

		return (
			 <div className="container text-center">
        		{setSearchLocation}
        		<SearchBar />
        		<h5 className="text-center">
          			<i><CurrentDate /></i>
        		</h5>
        		<br />
        		<Units 
          			fahrenheit={this.props.fahrenheit}
          			toggleUnits={this.props.toggleUnits}
        		/>
        		<CurrentWeather
        			error={this.props.error}
          			description={this.props.description}
          			icon={this.props.icon}
          			weatherIcon={this.props.weatherIcon}
          			currentTemp={this.props.currentTemp}
         			maxTemp={this.props.maxTemp}
          			minTemp={this.props.minTemp}
          			wind={this.props.wind}
          			humidity={this.props.humidity}
          			fahrenheit={this.props.fahrenheit}
          			currentTempF={this.props.currentTempF}
	          		minTempF={this.props.minTempF}
	          		maxTempF={this.props.maxTempF}
        		 />
        		<Forecast 
          			forecast={this.props.forecast} 
          			icon={this.props.icon} 
          			units={this.props.fahrenheit}
          			error={this.props.error}
        		/> 
      		</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		error:state.loadingError,
    	city: state.city,
    	country: state.country,
		description: state.description,
    	icon: state.icon,
    	weatherIcon: state.weatherIcon,
   	 	currentTemp: state.currentTemp,
   	 	currentTempF: state.currentTempF,
    	minTemp: state.minTemp,
    	minTempF: state.minTempF,
    	maxTemp: state.maxTemp,
    	maxTempF: state.maxTempF,
    	wind: state.wind,
    	humidity: state.humidity,
    	forecast: state.forecast,
    	fahrenheit: state.fahrenheit
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleUnits: () => dispatch(actions.toggleUnits())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);