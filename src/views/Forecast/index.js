import React, { Component } from 'react';
import Header from '../../components/Header/index.js';
import Modules from './components/Modules/index.js';
import './style.css';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.onDetailChange = this.onDetailChange.bind(this);
  }

  onDetailChange(data) {
    this.props.onDetailChange(data);
  }

  render() {
    var count = this.props.forecast.cnt;
    var city = this.props.forecast.city;
    var list = this.props.forecast.list;
    return (
      <main className={`forecast ${this.props.active ? "active" : ""}`}>
        <Header hdr1={`${count} Day Forecast`} hdr2={`${city.name}, ${city.country}`} />
        <Modules list={list} onDetailChange={this.props.onDetailChange} />
      </main>
    );
  }
}

export default Forecast;
