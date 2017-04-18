import React, { Component } from 'react';
import WeatherIcon from '../../../../components/WeatherIcon/index.js';
import './style.css';

class ModuleWeather extends Component {
  render() {
    var weather = this.props.weather;
    return (
      <section className="module module-weather">
        <h3 className="hdr-module">Weather</h3>
        <h4 className="hdr-value">{weather.main.toLowerCase()}</h4>
        <WeatherIcon
          icon={weather.icon}
          text={weather.main} />
      </section>
    );
  }
}

export default ModuleWeather;
