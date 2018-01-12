import React from 'react';

const currentDate = (props) => {
	return (
			<div>{(new Date(props.date*1000)).toDateString()}</div>
			);
}

export default currentDate;