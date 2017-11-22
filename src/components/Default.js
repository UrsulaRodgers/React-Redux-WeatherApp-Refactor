import React, { Component } from 'react';
import axios from 'axios';
import CurrentDate from './CurrentDate';
import icon from '../icon.json';
import wind from '../images/wind_24.png';
import humidity from '../images/humidity.png';

class Default extends Component {
  constructor (props) {
  	super(props)

  	this.state = {
  		currentLocation: '',
  		country: '',
  		currentTemp:'',
  		icon: icon
  	};

  }

  async componentDidMount() {

  	const location = await axios.get('http://ip-api.com/json');
  	const lat = location.data.lat;
  	const lon = location.data.lon;
  	const API_KEY = '8d1dab70d6486ad4b46fe911084f46af';
  	const currentWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  	
  	this.setState ({
  		currentLocation: location.data.city,
  		country: location.data.countryCode,
  		currentTemp: Math.round(currentWeather.data.main.temp- 273),
  		minTemp: Math.round(currentWeather.data.main.temp_min - 273),
  		maxTemp: Math.round(currentWeather.data.main.temp_max - 273),
  		wind: currentWeather.data.wind.speed,
  		humidity: currentWeather.data.main.humidity,
  		weatherIcon: currentWeather.data.weather[0].icon,
  		description: currentWeather.data.weather[0].description
  	});
  		
  }
  
  render() {
    return (
      <div className="container">
        <h2 className="text-center">{this.state.currentLocation}, {this.state.country}</h2>
        <h5 className="text-center"><i><CurrentDate /></i></h5><br />
        <div className="row">
        	<div className="col-6 my-auto">
        		<img className="weatherIcon" alt={this.state.description} src={this.state.icon[this.state.weatherIcon]} />
        	</div>
        	<div className="col-6">
        		<span className="currentTemp">{this.state.currentTemp}&#8451;</span>
        		<p className="maxMin"><span><strong>HIGH</strong> {this.state.maxTemp}</span>
        		&nbsp;<span><strong>LOW</strong> {this.state.minTemp}</span></p>
        		<p className="description">{this.state.description}</p>
        		<p className="otherIcons"><img src={wind}/>
				&nbsp;<span>{this.state.wind} mph</span> | <img src={humidity}/>
				<span>{this.state.humidity}</span></p>
        	</div>
        </div>
      </div>
    );
  }
}

export default Default;

