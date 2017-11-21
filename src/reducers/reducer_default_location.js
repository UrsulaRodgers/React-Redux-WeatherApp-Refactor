import { FETCH_DEFAULT_LOCATION } from '../actions';

export default function(state={}, action) {
	switch (action.type) {
		case FETCH_DEFAULT_LOCATION:
			return action.payload
			
	}
}