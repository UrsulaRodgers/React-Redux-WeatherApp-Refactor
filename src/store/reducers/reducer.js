import * as actionTypes from '../actions/actionTypes';
import icon from '../../icon.json';

const initialState = {
	city: '',
	country: '',
  	icon: icon,
  	description: '',
  	weatherIcon: null,
  	currentTemp: '',
  	currentTempF:'',
  	minTemp: '',
  	minTempF: '',
  	maxTemp: '',
  	maxTempF: '',
  	wind: '',
  	humidity: '',
    forecast: [],
    loadingError: false,
    fahrenheit: false
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.GET_WEATHER_SUCCESS:
			return{
			  ...state,
			  city: action.weather.data.name,
			  country: action.weather.data.sys.country,
			  icon: icon,
			  description: action.weather.data.weather[0].main,
			  weatherIcon: action.weather.data.weather[0].icon,
			  currentTemp: Math.round(action.weather.data.main.temp - 273),
			  currentTempF: Math.round((action.weather.data.main.temp*9/5) - 459.67),
			  minTemp: Math.round(action.weather.data.main.temp_min - 273),
			  minTempF: Math.round((action.weather.data.main.temp_min*9/5) - 459.67),
              maxTemp: Math.round(action.weather.data.main.temp_max - 273),
              maxTempF: Math.round((action.weather.data.main.temp_max*9/5) - 459.67),
              wind: action.weather.data.wind.speed,
              humidity: action.weather.data.main.humidity,
              loadingError: false,
              error: false
			};
		case actionTypes.GET_FORECAST_SUCCESS: 
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
		case actionTypes.GET_WEATHER_ERROR:
			return {
				...state,
				error:action.error,
				loadingError: true
			};
		case actionTypes.GET_FORECAST_ERROR:
			return {
				...state,
				error: action.error,
				loadingError: true
			}
		case actionTypes.TOGGLE_UNITS:
			return {
				...state,
				fahrenheit: !state.fahrenheit
			}
	}
	return state;
}

export default reducer;