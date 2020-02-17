import React, { Component } from "react";
import Why from './Why';
import InfoUsb from './InfoUsb';
import GoiUsb from './GoiUsb';
import Phanhoi from './Phanhoikhachhang';
import Chinhsach from './Chinhsach';
import Dathang from './Dathang';
export default class extends Component {
  render() {
    return <div className="home">
        <Why />
        <InfoUsb />
        <GoiUsb />
        <Phanhoi />
        <Chinhsach />
        <Dathang />
    </div>;
  }
}
