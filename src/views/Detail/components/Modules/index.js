import React, { Component } from 'react';
import ModuleWeather from '../ModuleWeather/index.js';
import ModuleTemperature from '../ModuleTemperature/index.js';
import ModuleMisc from '../ModuleMisc/index.js';
import './style.css';

class Modules extends Component {
  render() {
    return (
      <div className="modules">
        <ModuleWeather weather={this.props.detail.weather[0]} />
        <ModuleTemperature temp={this.props.detail.temp} />
        <ModuleMisc
          pressure={this.props.detail.pressure}
          humidity={this.props.detail.humidity}
          windSpeed={this.props.detail.speed}
          windDir={this.props.detail.deg}
          cloudiness={this.props.detail.clouds} />
      </div>
    );
  }
}

export default Modules;
