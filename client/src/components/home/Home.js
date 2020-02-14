import React, { Component } from "react";
import Why from './Why';
import InfoUsb from './InfoUsb';
export default class extends Component {
  render() {
    return <div className="home">
        <Why />
        <InfoUsb />
    </div>;
  }
}
