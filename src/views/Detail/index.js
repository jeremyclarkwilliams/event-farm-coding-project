import React, { Component } from 'react';
import Header from '../../components/Header/index.js';
import ModuleDate from './components/ModuleDate/index.js';
import Modules from './components/Modules/index.js';
import { getLocalTime, getDayOfWeek } from '../../services/dates.js';
import './style.css';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    this.props.hideDetail();
  }

  render() {
    var dtLocal = getLocalTime(this.props.detail.dt);
    var weekday = getDayOfWeek(dtLocal, 'long');
    var city = this.props.forecast.city;
    return (
      <aside className={`detail ${this.props.active ? "active" : ""}`}>
        <Header hdr1={`${weekday} Detail`} hdr2={`${city.name}, ${city.country}`} />
        <ModuleDate dt={dtLocal} />
        <Modules detail={this.props.detail} />
        <button className="back-btn" onClick={this.handleClick} title="back to forecast">&lt;</button>
      </aside>
    );
  }
}

export default Detail;
