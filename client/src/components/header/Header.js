import React, { Component,Fragment  } from "react";
import Nav from "./Navbar";
import "./Header.css";
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import Media from 'react-media';
import ButtonDatHang from "../home/ButtonDatHang";
export default class extends Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
      <div  className="header">
        <Media queries={{
          iphoneAndIpad:"(max-width: 768px)",
          ipadproAndComputer: "(min-width: 769px)"
        }}>
          {matches => (
              <Fragment>
              {matches.ipadproAndComputer && <Nav />}
              </Fragment>
          )}
        </Media>
        
        <div className="wrapper">
          <Fade left cascade>
          <div className="htitle fontTitle">
            <h1 style={{margin:'0px 0 30px 0'}}>USB SẴN NHẠC & VIDEO CHUYÊN DỤNG CHO ÔTÔ</h1>
            <p>ĐẶT HÀNG THEO YÊU CẦU</p>
          </div>
          </Fade>
          <Flash>
            <ButtonDatHang />
          </Flash>
        </div>
      </div>
    );
  }
}
