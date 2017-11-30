import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Default from './components/Default';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
		<Router>
			<div>
				<Route exact path="/" component={Default} />
				<Route path="/forecast/:city" />
			</div>
		</Router>

, document.getElementById('root'));

registerServiceWorker();
