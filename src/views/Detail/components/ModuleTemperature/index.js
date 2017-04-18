import React, { Component } from 'react';
import ForecastValue from '../../../../components/ForecastValue/index.js';
import './style.css';

class ModuleTemperature extends Component {
  render() {
    var temp = this.props.temp;
    return (
      <section className="module module-temp">
        <h3 className="hdr-module">Temperature</h3>
        <ul className="value-list">
          <ForecastValue
            unit="º"
            header="low"
            value={Math.round(temp.min)} />
          <ForecastValue
            unit="º"
            header="high"
            value={Math.round(temp.max)} />
          <ForecastValue
            unit="º"
            header="morning"
            value={Math.round(temp.morn)} />
          <ForecastValue
            unit="º"
            header="daytime"
            value={Math.round(temp.day)} />
          <ForecastValue
            unit="º"
            header="evening"
            value={Math.round(temp.eve)} />
          <ForecastValue
            unit="º"
            header="night"
            value={Math.round(temp.night)} />
        </ul>
      </section>
    );
  }
}

export default ModuleTemperature;
