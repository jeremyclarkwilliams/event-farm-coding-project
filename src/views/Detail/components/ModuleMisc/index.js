import React, { Component } from 'react';
import ForecastValue from '../../../../components/ForecastValue/index.js';
import './style.css';

class ModuleMisc extends Component {
  render() {
    return (
      <section className="module module-misc">
        <h3 className="hdr-module">Misc.</h3>
        <ul className="value-list">
          <ForecastValue
            unit="hPa"
            header="atmo. pressure"
            value={this.props.pressure} />
          <ForecastValue
            unit="%"
            header="humidity"
            value={this.props.humidity} />
          <ForecastValue
            unit="mph"
            header="wind speed"
            value={this.props.windSpeed} />
          <ForecastValue
            unit="º"
            header="wind direction"
            value={this.props.windDir} />
        </ul>
      </section>
    );
  }
}

export default ModuleMisc;
