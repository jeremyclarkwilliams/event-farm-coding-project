import React, { Component } from 'react';
import Header from '../../components/Header/index.js';
import Module from './components/Module/index.js';
import './style.css';

class Address extends Component {
  constructor(props) {
    super(props);
    this.onAddressSubmit = this.onAddressSubmit.bind(this);
  }

  onAddressSubmit(value) {
    this.props.onAddressSubmit(value);
  }

  render() {
    return (
      <aside className={`address ${this.props.active ? "active" : ""}`}>
        {this.props.loading ? (
          <Header hdr1="Loading Forecast" hdr2="" />
        ) : (
          <Header hdr1="Enter Zip Code" hdr2="for weather forecast" />
        )}
        <Module onAddressSubmit={this.onAddressSubmit} loading={this.props.loading} />
      </aside>
    );
  }
}

export default Address;
