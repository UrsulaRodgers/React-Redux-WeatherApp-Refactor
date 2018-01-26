import React from 'react';

const Forecast = (props) => {
	return(

    props.error 
    ? <div className="row">
          <div className="col-12 text-center">
            <p>Can't retrieve forecast data at the moment.</p>
          </div>
      </div>
    : <div className="row forecast">
		    {props.forecast.slice(1).map((value,index) => {
			     return (
          		<div className="col-md-2 text-center" key={index}>
            		<div>
              			<strong>{(new Date(value.dt*1000)).toDateString().substring(0,3)}</strong>
            		</div>
            		<div>
              			<img className="forecastIcon" alt='weather icon' src={props.icon[value.weather[0].icon]} />
            		</div>
              		<div className="temps">
                		{props.units
                    ? <div>
                        <span className="highTemp">{Math.round((value.temp.max)*(9/5)-459.67)}&#8457;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="lowTemp">{Math.round((value.temp.min)*(9/5)-459.67)}&#8457;</span>
                      </div>
                    : <div>
                        <span className="highTemp">{Math.round(value.temp.max - 273)}&#8451;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="lowTemp">{Math.round(value.temp.min - 273)}&#8451;</span>
                      </div>
                    }
              		</div>
            	</div>
        	 )
    	   })}
      </div>
    );
}

export default Forecast;