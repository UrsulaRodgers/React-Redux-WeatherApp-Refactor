import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_KEY = '8d1dab70d6486ad4b46fe911084f46af';

export const currentLocation = () => {
	return dispatch => {
		axios.get('http://ip-api.com/json')
         .then(location => {
            dispatch(currentWeather(location));
            dispatch(localForecast(location));
            })
            .catch(error=>{
            dispatch({type: actionTypes.LOCATION_ERROR_MESSAGE, error});
        });
	};
};

export const currentWeather = (location) => {
    const lat = location.data.lat;
    const lon = location.data.lon;

    const CURRENT_URL=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    return dispatch => {
        axios.get(CURRENT_URL)
            .then(weather => {
                console.log(weather)
                dispatch({type: actionTypes.GET_CURRENTLOCALWEATHER_SUCCESS, weather});
            })
            .catch(error=>{
            dispatch({type: actionTypes.WEATHER_ERROR_MESSAGE, error});
            });
    };
};


export const localForecast = (location) => {
    const lat = location.data.lat;
    const lon = location.data.lon;

    const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${API_KEY}`;

    return dispatch => {
        axios.get(FORECAST_URL)
            .then(forecast => {
                console.log(forecast)
                dispatch({type: actionTypes.GET_LOCALFORECAST_SUCCESS, forecast});
            })
            .catch(error=>{
            dispatch({type: actionTypes.FORECAST_ERROR_MESSAGE, error});
            });
    };
}