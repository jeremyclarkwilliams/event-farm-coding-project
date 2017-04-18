import React, { Component } from 'react';
import { getMonthName } from '../../../../services/dates.js';
import './style.css';

class ModuleDate extends Component {
  render() {
    var date = new Date(this.props.dt * 1000);
    var month = getMonthName(this.props.dt);
    var day = date.getDate();
    var year = date.getFullYear();
    return (
      <section className="module module-date">
        <h3 className="hdr-module">Date</h3>
        <p className="detail-date">{month} {day} {year}</p>
      </section>
    );
  }
}

export default ModuleDate;
