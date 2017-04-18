import React, { Component } from 'react';
import WeatherIcon from '../../../../components/WeatherIcon/index.js';
import ForecastValue from '../../../../components/ForecastValue/index.js';
import { getDayOfWeek } from '../../../../services/dates.js';
import './style.css';

class Module extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onDetailChange(this.props.day);
  }

  render() {
    var weekday = getDayOfWeek(this.props.day.dt, 'short');
    var temp = this.props.day.temp;
    var weather = this.props.day.weather[0];
    return (
      <li className="module forecast-day" onClick={this.handleClick} tabIndex="0" role="button">
        <h3 className="hdr-module">{weekday}</h3>
        <WeatherIcon
          icon={weather.icon}
          text={weather.main} />
        <ul className="value-list">
          <ForecastValue
            unit="º"
            header="low"
            value={Math.round(temp.min)} />
          <ForecastValue
            unit="º"
            header="high"
            value={Math.round(temp.max)} />
        </ul>
      </li>
    );
  }
}

export default Module;
