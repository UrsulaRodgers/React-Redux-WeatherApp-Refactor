import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Default from './containers/Default';
import SearchResult from './containers/SearchResult';

class App extends Component {

	render () {
		return (
			<div className="text-center">
				<Link to="/" style={{ textDecoration: 'none' }}><h1 className="title">Weather Search</h1></Link>
				<div className="container">
					<Route path="/" exact component={Default} />
					<Route path="/results" component={SearchResult} />
					<footer><i>Weather icons by <a target="_blank" rel="noopener noreferrer" href="https://vclouds.deviantart.com/art/VClouds-Weather-Icons-179152045">VClouds</a></i></footer>
				</div>
			</div>
		);
	}
}

export default App;