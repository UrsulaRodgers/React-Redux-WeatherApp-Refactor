import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_KEY = '8d1dab70d6486ad4b46fe911084f46af';

export const fetchWeather = (cityName) => {

    const SEARCH_URL=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    return dispatch => {
        axios.get(SEARCH_URL)
            .then(weather => {
                dispatch({type: actionTypes.GET_WEATHER_SUCCESS, weather});
            })
            .catch(error=>{
            dispatch({type: actionTypes.GET_WEATHER_ERROR, error});
            });
    };
};

export const searchForecast = (cityName) => {
   
    const SEARCH_FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=7&appid=${API_KEY}`;

    return dispatch => {
        axios.get(SEARCH_FORECAST_URL)
            .then(forecast => {
                dispatch({type: actionTypes.GET_FORECAST_SUCCESS, forecast});
            })
            .catch(error=>{
            dispatch({type: actionTypes.GET_FORECAST_ERROR, error});
            });
    };
}