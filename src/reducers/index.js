import { combineReducers } from 'redux';
import DefaultLocation from './reducer_default_location';

const rootReducer = combineReducers({
  myLocation: DefaultLocation
/*key:value pair where key is the piee of state, and value is the value of that state - the reducer*/
});

export default rootReducer;