import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="hdr-1">{this.props.hdr1}</h1>
        <h2 className="hdr-2">{this.props.hdr2}</h2>
      </header>
    );
  }
}

export default Header;
