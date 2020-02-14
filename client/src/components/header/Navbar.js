import React from "react";
import Logo from './logo.PNG';
import Fade from 'react-reveal/Fade';
import {MdQuestionAnswer,MdSecurity} from 'react-icons/md';
import {FaInfoCircle} from 'react-icons/fa';

export default function() {
  return (
    <Fade top cascade>
    <div className="navbar">
      <ul>
        <li>
          <img src = {Logo } width = '200px' />
        </li>
        <li >
          <a className="hvr-underline-from-center" href="#"><MdQuestionAnswer />  Tư Vấn Mua Hàng</a>
        </li>
        <li >
          <a className="hvr-underline-from-center" href="#info"><FaInfoCircle />  Thông Tin Sản Phẩm</a>
        </li>
        <li >
          <a className="hvr-underline-from-center" href="#"><MdSecurity />  Chế Độ Bảo Hành </a>
        </li>
        
      </ul>
    </div>
    </Fade>
  );
}
