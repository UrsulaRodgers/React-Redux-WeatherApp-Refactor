import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/default_actions';

import CurrentDate from '../components/CurrentDate';
import wind from '../images/wind_24.png';
import humidity from '../images/humidity.png';
import Forecast from '../components/Forecast';
import Units from '../components/Units';
import SearchBar from './Searchbar';

//const API_KEY = '8d1dab70d6486ad4b46fe911084f46af';

class Default extends Component {

  state = {
    fahrenheit: false
  }

  componentDidMount() {

    this.props.getCurrentLocation();

  }

 toggleUnits = () => {

    const toggle = this.state.fahrenheit;

    this.setState({
      fahrenheit: !toggle,
      currentTempF: Math.round((this.props.currentTemp)*1.8+32),
      minTempF: Math.round((this.props.minTemp)*1.8+32),
      maxTempF: Math.round((this.props.maxTemp)*1.8+32)
    });
  }

  render() {

    const setLocation = (
      this.props.error ? 
          <h2 className="text-center">Can't get your location</h2> : 
          <h2 className="text-center">{this.props.city}, {this.props.country}</h2>
    );

    const currentWeather = (
      this.props.error
        ? <div className="row">
            <div className="col-12 text-center">
              <p>Can't retrieve weather conditions at the moment.</p>
            </div>
          </div> 
        : <div className="row">
           <div className="col-6 my-auto">
              <img className="weatherIcon" alt={this.props.description} src={this.props.icon[this.props.weatherIcon]} />
           </div>
           <div className="col-6">
            <div className="text-center right-panel">
              {this.state.fahrenheit 
              ? <div>
                  <span className="currentTemp">{this.state.currentTempF}&#8457;</span>
                  <p className="maxMin"><span><strong>HIGH</strong> {this.state.maxTempF}</span>
                  &nbsp;<span><strong>LOW</strong> {this.state.minTempF}</span></p>
                </div>
              : <div>
                  <span className="currentTemp">{this.props.currentTemp}&#8451;</span>
                  <p className="maxMin"><span><strong>HIGH</strong> {this.props.maxTemp}</span>
                  &nbsp;<span><strong>LOW</strong> {this.props.minTemp}</span></p>
                </div>
              }
              <p className="description">{this.props.description}</p>
              <p className="otherIcons"><img src={wind}/>
               &nbsp;<span>{this.props.wind} mph</span> | <img src={humidity}/>
               <span>{this.props.humidity}</span></p>
              </div>
           </div>
          </div>
        
    );

    const forecast = (
      this.props.error
        ? <div className="row">
            <div className="col-12 text-center">
              <p>Can't retrieve forecast data at the moment.</p>
            </div>
          </div>
        : <div className="row forecast">
            <Forecast 
              forecast={this.props.forecast} 
              icon={this.props.icon} 
              units={this.state.fahrenheit} 
            />
          </div>
    );

    return (
      <div className="container text-center">
        {setLocation}
        <SearchBar />
        <h5 className="text-center">
          <i><CurrentDate /></i>
        </h5>
        <br />
        <Units 
          fahrenheit={this.state.fahrenheit}
          toggleUnits={this.toggleUnits}
        />
        {currentWeather}
        {forecast}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.loadingError,
    city: state.city,
    country: state.country,
    description: state.description,
    icon: state.icon,
    weatherIcon: state.weatherIcon,
    currentTemp: state.currentTemp,
    minTemp: state.minTemp,
    maxTemp: state.maxTemp,
    wind: state.wind,
    humidity: state.humidity,
    forecast: state.forecast
  };
};

const mapDispatchToProps = dispatch => {
  return {
     getCurrentLocation: () => dispatch(actions.currentLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Default);

