import React, { Component } from "react";
import Why from './Why';
import InfoUsb from './InfoUsb';
import GoiUsb from './GoiUsb';
import Phanhoi from './Phanhoikhachhang';
import Chinhsach from './Chinhsach';
import Dathang from './Dathang';
import Countdown from '../../Countdown';
export default class extends Component {
  render() {
    return <div className="home">
        <Why />
        <InfoUsb />
        <GoiUsb />
        <Phanhoi />
        <Chinhsach />
        <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
        <Dathang />
        
    </div>;
  }
}
