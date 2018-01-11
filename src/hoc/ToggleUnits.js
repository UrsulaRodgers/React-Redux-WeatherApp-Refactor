import React, { Component } from 'react';

const ToggleUnits = (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props)

			this.toggleUnits = this.toggleUnits.bind(this);

			this.state = {
				fahrenheit: false,
				currentTempF: '',
				minTempF: '',
				maxTempF:''
			}


		}

		toggleUnits() {

    		const toggle = this.state.fahrenheit;

    		this.setState({
      			fahrenheit: !toggle,
      			currentTempF: Math.round((this.props.currentTemp)*1.8+32),
      			minTempF: Math.round((this.props.minTemp)*1.8+32),
      			maxTempF: Math.round((this.props.maxTemp)*1.8+32)
    		});
  		}

  		render() {
  			return (
  				<div>
  					<WrappedComponent 
  						toggleUnits={this.toggleUnits}
  						fahrenheit={this.state.fahrenheit}
  						currentTempF={this.state.currentTempF}
  						minTempF={this.state.minTempF}
  						maxTempF={this.state.maxTempF}
  						/>
  				</div>
  			);
  		}
	}
}

export default ToggleUnits;