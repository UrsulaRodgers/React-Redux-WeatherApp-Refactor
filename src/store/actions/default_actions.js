import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_KEY = '...............................';

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
                dispatch({type: actionTypes.GET_WEATHER_SUCCESS, weather});
            })
            .catch(error=>{
            dispatch({type: actionTypes.GET_WEATHER_ERROR, error});
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
                dispatch({type: actionTypes.GET_FORECAST_SUCCESS, forecast});
            })
            .catch(error=>{
            dispatch({type: actionTypes.GET_FORECAST_ERROR, error});
            });
    };
}

