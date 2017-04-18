import React, { Component } from 'react';
import './style.css';

class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddressSubmit(this.state.value);
  }

  render() {
    if (this.props.loading) {
      return null;
    }
    return (
      <form className="module address-form" onSubmit={this.handleSubmit}>
        <input type="number" value={this.state.value} onChange={this.handleChange} placeholder="Enter Zip Code" />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Module;
