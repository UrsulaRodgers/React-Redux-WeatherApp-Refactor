import React, { Component } from 'react';
import axios from 'axios';
import CurrentDate from './CurrentDate';
import icon from '../icon.json';

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
  		currentTemp: currentWeather.data.main.temp,
  		minTemp: currentWeather.data.main.temp_min,
  		maxTemp: currentWeather.data.main.temp_max,
  		wind: currentWeather.data.wind.speed,
  		humidity: currentWeather.data.main.humidity,
  		weatherIcon: currentWeather.data.weather[0].icon,
  		description: currentWeather.data.weather[0].description
  	});
  		
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center">{this.state.currentLocation}, {this.state.country}</h1>
        <h3 className="text-center"><CurrentDate /></h3>
        <h3>{this.state.currentTemp}</h3>
        <img alt={this.state.description} src={this.state.icon[this.state.weatherIcon]} />
      </div>
    );
  }
}

export default Default;

