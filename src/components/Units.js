import React from 'react';


const units = (props) => {
	return (
		<button className="text-center btn btn-warning" onClick={() => props.toggleUnits()}>
          	{props.fahrenheit ? <div>&#8451;</div>: <div>&#8457;</div>}
        </button>
	);
}
		
export default units;