import React, { Component } from 'react';
import icon01d from './img/01d.svg';
import icon02d from './img/02d.svg';
import icon03d from './img/03d.svg';
import icon04d from './img/04d.svg';
import icon09d from './img/09d.svg';
import icon10d from './img/10d.svg';
import icon11d from './img/11d.svg';
import icon13d from './img/13d.svg';
import icon50d from './img/50d.svg';
import './style.css';

class WeatherIcon extends Component {
  render() {
    var iconSrc;
    switch (this.props.icon.replace('n','d')) {
      case '01d':
        iconSrc = icon01d; break;
      case '02d':
        iconSrc = icon02d; break;
      case '03d':
        iconSrc = icon03d; break;
      case '04d':
        iconSrc = icon04d; break;
      case '09d':
        iconSrc = icon09d; break;
      case '10d':
        iconSrc = icon10d; break;
      case '11d':
        iconSrc = icon11d; break;
      case '13d':
        iconSrc = icon13d; break;
      case '50d':
        iconSrc = icon50d; break;
      default:
        iconSrc = icon01d
    }
    return (
      <div>
        <img src={iconSrc} alt={this.props.text} className="icon-weather" />
      </div>
    );
  }
}

export default WeatherIcon;
