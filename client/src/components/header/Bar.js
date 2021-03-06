import React from 'react';
import './Bar.css';
import {MdQuestionAnswer,MdSecurity} from 'react-icons/md';
import {FaInfoCircle,FaDatabase} from 'react-icons/fa';
import {IoMdContacts} from 'react-icons/io'
import Fade from 'react-reveal';
import {Link} from 'react-scroll';
import Logo from './logo.PNG';
export default function(){
    return(
        <div className = 'bar'>
            <Fade left>
            <ul>
                
                <li className = 'text-center'><img src = {Logo} width='150px' alt = 'anh logo' /></li>
                <li >
                <Link
          activeClass="active"
          to="dathang"
          spy={true}
          smooth={true} 
          offset={-70}
          duration= {1500}
          >
                <a className="hvr-underline-from-center" href="#"><MdQuestionAnswer/>  Tư Vấn Mua Hàng</a></ Link>
        
                </li>
                <li >
                <Link
    activeClass="active"
    to="info"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
> <a className="hvr-underline-from-center" href="#info"><FaInfoCircle />  Thông Tin Sản Phẩm</a></Link>
               
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
          <a className="hvr-underline-from-center" href="#"><FaDatabase /> Các Gói Usb Nhạc</a>
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
          <a className="hvr-underline-from-center" href="#"><IoMdContacts /> Phản Hồi Khách Hàng</a>
          </Link>
        </li>
                <li >
                <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true} 
          offset={-70}
          duration= {1500}
          >
                <a className="hvr-underline-from-center" href="#baohanh"><MdSecurity/>  Chế Độ Bảo Hành </a></ Link>
                </li>
        
            </ul>
            </Fade>
        </div>
    )
}