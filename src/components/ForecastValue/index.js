import React, { Component } from 'react';
import './style.css';

class ForecastValue extends Component {
  render() {
    return (
      <li className="forecast-value">
        <h4 className="hdr-value">{this.props.header}</h4>
        <p className="value">{this.props.value}<span className="unit">{this.props.unit}</span></p>
      </li>
    );
  }
}

export default ForecastValue;
