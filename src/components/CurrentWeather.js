import React from 'react';

import wind from '../images/wind_24.png';
import humidity from '../images/humidity.png';

const currentWeather = (props) => {
	return (
      props.error
        ? <div className="row">
            <div className="col-12 text-center">
              <p>Can't retrieve weather conditions at the moment.</p>
            </div>
          </div> 
        : <div className="row">
           <div className="col-6 my-auto">
              <img className="weatherIcon" alt={props.description} src={props.icon[props.weatherIcon]} />
           </div>
           <div className="col-6">
            <div className="text-center right-panel">
              {props.fahrenheit 
              ? <div>
                  <span className="currentTemp">{props.currentTempF}&#8457;</span>
                  <p className="maxMin"><span><strong>HIGH</strong> {props.maxTempF}</span>
                  &nbsp;<span><strong>LOW</strong> {props.minTempF}</span></p>
                </div>
              : <div>
                  <span className="currentTemp">{props.currentTemp}&#8451;</span>
                  <p className="maxMin"><span><strong>HIGH</strong> {props.maxTemp}</span>
                  &nbsp;<span><strong>LOW</strong> {props.minTemp}</span></p>
                </div>
              }
              <p className="description">{props.description}</p>
              <p className="otherIcons"><img src={wind}/>
               &nbsp;<span>{props.wind} mph</span> | <img src={humidity}/>
               <span>{props.humidity}</span></p>
              </div>
           </div>
          </div>
	);
}

export default currentWeather;