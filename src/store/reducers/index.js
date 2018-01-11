import { combineReducers } from 'redux';
import defaultReducer from './default_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  default: defaultReducer,
  search: searchReducer
});

export default rootReducer;