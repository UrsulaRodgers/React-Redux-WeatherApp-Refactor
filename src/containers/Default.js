import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/default_actions';

import CurrentDate from '../components/CurrentDate';
import Forecast from '../components/Forecast';
import Units from '../components/Units';
import SearchBar from './Searchbar';
import Location from '../components/Location';
import CurrentWeather from '../components/CurrentWeather';

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

    return (
      <div className="container text-center">
        <Location error={this.props.error} city={this.props.city} country={this.props.country}/>
        <SearchBar />
        <h5 className="text-center">
          <i><CurrentDate /></i>
        </h5>
        <br />
        <Units 
          fahrenheit={this.state.fahrenheit}
          toggleUnits={this.toggleUnits}
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
          fahrenheit={this.state.fahrenheit}
          currentTempF={this.state.currentTempF}
          minTempF={this.state.minTempF}
          maxTempF={this.state.maxTempF}
        />
        <Forecast 
          forecast={this.props.forecast} 
          icon={this.props.icon} 
          units={this.state.fahrenheit}
          error={this.props.error}
        /> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error:state.default.loadingError,
    city: state.default.city,
    country: state.default.country,
    description: state.default.description,
    icon: state.default.icon,
    weatherIcon: state.default.weatherIcon,
    currentTemp: state.default.currentTemp,
    minTemp: state.default.minTemp,
    maxTemp: state.default.maxTemp,
    wind: state.default.wind,
    humidity: state.default.humidity,
    forecast: state.default.forecast
  };
};

const mapDispatchToProps = dispatch => {
  return {
     getCurrentLocation: () => dispatch(actions.currentLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Default);

