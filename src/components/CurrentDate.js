import React from 'react';

const currentDate = (props) => {

	return (
			props.date 
			? <div>{(new Date(props.date*1000)).toDateString()}</div>
			:null
			);
}

export default currentDate;