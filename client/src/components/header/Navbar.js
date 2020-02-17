import React from "react";
import Logo from './logo.PNG';
import Fade from 'react-reveal/Fade';
import {MdQuestionAnswer,MdSecurity} from 'react-icons/md';
import {FaInfoCircle,FaDatabase} from 'react-icons/fa';
import {IoMdContacts} from 'react-icons/io';
import { Link } from "react-scroll";

export default function() {
  return (
    <Fade top cascade>
    <div className="navbar">
      <ul>
        <li>
          <img src = {Logo } width = '200px' />
        </li>
        <li >
        <Link
          activeClass="active"
          to="dathang"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {1500}
          >
            <a className="hvr-underline-from-center"><MdQuestionAnswer />  Tư Vấn Mua Hàng</a>
          </Link>
          
        </li>
        <li >
        <Link
          activeClass="active"
          to="info"
          spy={true}
          smooth={true} 
          offset={-70}
          duration= {1500}
          >
          <a className="hvr-underline-from-center"><FaInfoCircle />  Thông Tin Sản Phẩm</a>
          </Link>
        </li>
        <li >
        <Link
          activeClass="active"
          to="goiusb"
          spy={true}
          smooth={true} 
          offset={-70}
          duration= {1500}
          >
          <a className="hvr-underline-from-center"><FaDatabase /> Các Gói Usb Nhạc</a>
          </Link>
        </li>
        <li >
        <Link
          activeClass="active"
          to="phanhoi"
          spy={true}
          smooth={true} 
          offset={-70}
          duration= {1500}
          >
          <a className="hvr-underline-from-center"><IoMdContacts /> Phản Hồi Khách Hàng</a>
          </Link>
        </li>
        <li >
        <Link
          activeClass="active"
          to="baohanh"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
          >
          <a className="hvr-underline-from-center"><MdSecurity />  Chế Độ Bảo Hành </a>
          </Link>
        </li>
        
      </ul>
    </div>
    </Fade>
  );
}
