import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
import './index.css';
import Default from './components/Default';
import registerServiceWorker from './registerServiceWorker';

//const store = createStore();

ReactDOM.render(
			<div>
				<Default />
			</div>

, document.getElementById('root'));

registerServiceWorker();
