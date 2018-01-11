import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Default from './containers/Default';
import SearchResult from './containers/SearchResult';

class App extends Component {

	render () {
		return (
			<div>
				<Route path="/" exact component={Default} />
				<Route path="/results" component={SearchResult} />
			</div>
		);
	}
}

export default App;