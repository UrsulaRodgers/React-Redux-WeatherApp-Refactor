import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import './index.css';
import Default from './Default';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<div>
				<Route exact path="/" component={Default} />
				<Route path="/forecast/:city" />
			</div>
		</Router>
	</Provider>
, document.getElementById('root'));

registerServiceWorker();
