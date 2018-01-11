import * as actionTypes from '../actions/actionTypes';
import icon from '../../icon.json';


const initialState = {
    forecast: [],
    loadingError: false
}

const searchReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.GET_FORECAST_SUCCESS:
			return {
				...state,
				forecast: action.forecast.data.list
			}
	}
	return state;
}

export default searchReducer;