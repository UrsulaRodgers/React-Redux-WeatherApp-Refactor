import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDefaultLocation } from './actions';
import './index.css';

class Default extends Component {
  
  render() {
    return (
      <div className="container">
        <h1>{this.props.location.city}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {location: state.myLocation} 
}

export default connect (mapStateToProps)(Default);

