import React from 'react';

const Forecast = (props) => {
	return(
	
		props.forecast.slice(1).map((value,index) => {
			return (
          		<div className="col-md-2 text-center" key={index}>
            		<div>
              			<strong>{(new Date(value.dt*1000)).toDateString().substring(0,3)}</strong>
            		</div>
            		<div>
              			<img className="forecastIcon" alt='' src={props.icon[value.weather[0].icon]} />
            		</div>
              		<div className="temps">
                		<span className="highTemp">{Math.round(value.temp.max - 273)}&#8451;</span>&nbsp;&nbsp;&nbsp;
                		&nbsp;&nbsp;&nbsp;<span className="lowTemp">{Math.round(value.temp.min - 273)}&#8451;</span>
              		</div>
            	</div>
        	)
    	})
    );
}

export default Forecast;