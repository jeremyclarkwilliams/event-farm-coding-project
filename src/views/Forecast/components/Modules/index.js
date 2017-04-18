import React, { Component } from 'react';
import Module from '../Module/index.js';
import { getLocalTime } from '../../../../services/dates.js';
import './style.css';

class Modules extends Component {
  constructor(props) {
    super(props);
    this.onDetailChange = this.onDetailChange.bind(this);
  }

  onDetailChange(data) {
    this.props.onDetailChange(data);
  }

  render() {
    var days = [];
    var self = this;
    this.props.list.forEach(function(day) {
      var dtLocal = getLocalTime(day.dt);
      days.push(<Module day={day} key={dtLocal} onDetailChange={self.props.onDetailChange} />);
    });
    return (
      <ul className="modules forecast-list">
        {days}
      </ul>
    );
  }
}

export default Modules;
