import React, { Component } from 'react';
import axios from 'axios';

import CurrentDate from './CurrentDate';
import icon from '../icon.json';
import wind from '../images/wind_24.png';
import humidity from '../images/humidity.png';

const API_KEY = '8d1dab70d6486ad4b46fe911084f46af';

class Default extends Component {
  constructor (props) {
  	super(props)

  	this.state = {
  		currentLocation: '',
  		country: '',
  		currentTemp:'',
  		icon: icon,
      forecast: []
  	};

  }

  async componentDidMount() {

  	const location = await axios.get('http://ip-api.com/json');
  	const lat = location.data.lat;
  	const lon = location.data.lon;
  	const currentWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    const forecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${API_KEY}`);

  	
  	this.setState ({
  		currentLocation: location.data.city,
  		country: location.data.countryCode,
  		currentTemp: Math.round(currentWeather.data.main.temp - 273),
  		minTemp: Math.round(currentWeather.data.main.temp_min - 273),
  		maxTemp: Math.round(currentWeather.data.main.temp_max - 273),
  		wind: currentWeather.data.wind.speed,
  		humidity: currentWeather.data.main.humidity,
  		weatherIcon: currentWeather.data.weather[0].icon,
  		description: currentWeather.data.weather[0].main,
      forecast: forecast.data.list
  	});
  }

  render() {
   console.log(this.state.forecast)

   const forecastBlock = this.state.forecast.slice(1).map((value,index) => {
        return (
          <div className="col-md-2 text-center" key={index}>
            <div>
              <strong>{(new Date(value.dt*1000)).toDateString().substring(0,3)}</strong>
            </div>
            <div>
              <img className="forecastIcon" alt='' src={this.state.icon[value.weather[0].icon]} />
            </div>
              <div className="temps">
                <span className="highTemp">{Math.round(value.temp.max - 273)}&#8451;</span>&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;<span className="lowTemp">{Math.round(value.temp.min - 273)}&#8451;</span>
              </div>
            </div>
          )
    })

    return (
      <div className="container">
        <h2 className="text-center">{this.state.currentLocation}, {this.state.country}</h2>
        <h5 className="text-center"><i><CurrentDate /></i></h5><br />
        <div className="row">
        	<div className="col-6 my-auto">
        		<img className="weatherIcon" alt={this.state.description} src={this.state.icon[this.state.weatherIcon]} />
        	</div>
        	<div className="col-6">
        		<div className="text-center right-panel">
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
        <div className="row forecast">
          {forecastBlock}
        </div>
      </div>
    );
  }
}

export default Default;

