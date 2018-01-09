import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import Default from './containers/Default';
import reducer from './store/reducers/default_reducer';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer, composeEnhancers(
	applyMiddleware(thunk))
);

const app = (
	<Provider store={store}>
		<Default />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
