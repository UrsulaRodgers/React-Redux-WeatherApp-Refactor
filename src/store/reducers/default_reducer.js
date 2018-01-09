import * as actionTypes from '../actions/actionTypes';
import icon from '../../icon.json';

const initialState = {
	city: '',
	country: '',
	weather: '',
  	icon: icon,
  	description: '',
  	weatherIcon: null,
  	currentTemp: '',
  	minTemp: '',
  	maxTemp: '',
  	wind: '',
  	humidity: '',
    forecast: [],
    loadingError: false
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.GET_CURRENTLOCALWEATHER_SUCCESS:
			return{
			  ...state,
			  city: action.weather.data.name,
			  country: action.weather.data.sys.country,
			  icon: icon,
			  description: action.weather.data.weather[0].main,
			  weatherIcon: action.weather.data.weather[0].icon,
			  currentTemp: Math.round(action.weather.data.main.temp - 273),
			  minTemp: Math.round(action.weather.data.main.temp_min - 273),
              maxTemp: Math.round(action.weather.data.main.temp_max - 273),
              wind: action.weather.data.wind.speed,
              humidity: action.weather.data.main.humidity,
              error: false
			};
		case actionTypes.GET_LOCALFORECAST_SUCCESS: 
			return {
				...state,
				forecast: action.forecast.data.list
			};
		case actionTypes.LOCATION_ERROR_MESSAGE:
			return {
				...state,
				error: action.error,
				loadingError: true
			};
		case actionTypes.WEATHER_ERROR_MESSAGE:
			return {
				...state,
				error:action.error,
				loadingError: true
			};
		case actionTypes.FORECAST_ERROR_MESSAGE:
			return {
				...state,
				error: action.error,
				loadingError: true
			}
	}
	return state;
}

export default reducer;