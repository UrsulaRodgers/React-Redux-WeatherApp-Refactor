import React from 'react';

const location = (props) => {

	return (
		props.error ? 
          <h2 className="text-center">Can't get your location</h2> : 
          <h2 className="text-center">{props.city}, {props.country}</h2>
	);
}

export default location;