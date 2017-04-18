import React, { Component } from 'react';
import { TESTDATA, APPID } from './data/forecast.js';
import Forecast from './views/Forecast/index.js';
import Detail from './views/Detail/index.js';
import Address from './views/Address/index.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TESTDATA,
      detail: TESTDATA.list[0],
      detailActive: false,
      locationQuery: false,
      forecastAcquired: false,
      loadingForecast: true
    };
    this.onDetailChange = this.onDetailChange.bind(this);
    this.onAddressSubmit = this.onAddressSubmit.bind(this);
    this.hideDetail = this.hideDetail.bind(this);
    this.getForecast = this.getForecast.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
  }

  onDetailChange(data) {
    this.setState({
      detail: data,
      detailActive: true
    });
  }

  hideDetail() {
    this.setState({
      detailActive: false
    });
  }

  getForecast() {
    var locationQuery = this.state.locationQuery;
    var format = 'json';
    var units = 'imperial';
    var cnt = '7';
    var query = '?';
        query += locationQuery;
        query += '&format=' + format;
        query += '&units=' + units;
        query += '&cnt=' + cnt;
        query += '&APPID=' + APPID;
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily' + query)
      .then(function(response) {
        return response;
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({
          data: data,
          detail: data.list[0],
          forecastAcquired: true
        });
      }.bind(this)).catch(function(err) {
        // if there's an error, show test data
        this.setState({
          forecastAcquired: true
        });
      }.bind(this));
  }

  onAddressSubmit(value) {
    var locationQuery = 'zip=' + value;
    this.setState({
      locationQuery: locationQuery,
      loadingForecast: true
    }, function() {
      this.getForecast();
    }.bind(this));
  }

  checkLocation() {
    if (!navigator.geolocation) {
      this.setState({
        loadingForecast: false
      });
      return false;
    }
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat  = position.coords.latitude;
      var lon = position.coords.longitude;
      var query = 'lat=';
          query += lat;
          query += '&lon=';
          query += lon;
      this.setState({
        locationQuery: query
      });
      this.getForecast();
    }.bind(this), function() {
      this.setState({
        loadingForecast: false
      });
      return false;
    }.bind(this));
  }

  componentDidMount() {
    this.checkLocation();
  }

  render() {
    return (
      <div className="app">
        <Forecast active={!this.state.detailActive && this.state.forecastAcquired} forecast={this.state.data} onDetailChange={this.onDetailChange} />
        <Detail active={this.state.detailActive} forecast={this.state.data} detail={this.state.detail} hideDetail={this.hideDetail} />
        <Address active={!this.state.forecastAcquired} loading={this.state.loadingForecast} onAddressSubmit={this.onAddressSubmit} />
      </div>
    );
  }
}

export default App;
