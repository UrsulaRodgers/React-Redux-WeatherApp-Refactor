import axios from 'axios';

{/*const API_KEY = '8d1dab70d6486ad4b46fe911084f46af';

const DEFAULT_ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?`*/}

export const FETCH_DEFAULT_LOCATION = 'FETCH_DEFAULT_LOCATION';

export function fetchDefaultLocation() {
	const url = 'http://ip-api.com/json';
	const request = axios.get(url);

	return {
		type: FETCH_DEFAULT_LOCATION,
		payload: request
	};
}