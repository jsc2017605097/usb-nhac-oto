import React from 'react';
import './Bar.css';
import {MdQuestionAnswer,MdSecurity} from 'react-icons/md';
import {FaInfoCircle} from 'react-icons/fa';
import Fade from 'react-reveal';
import {FormContext} from '../../context/Form';
export default function(){
    return(
        <div className = 'bar'>
            <Fade right>
            <ul>
                
                <li><a className = 'font-weight text-center' color = 'white'>USB FOR CARS</a></li>
                <li >
                <FormContext.Consumer>
                    {({onClick})=>(<li><a onClick = {onClick} className="hvr-underline-from-center" href="#"><MdQuestionAnswer/>  Tư Vấn Mua Hàng</a></li>
                )}
                </FormContext.Consumer>
                </li>
                <li >
                <a className="hvr-underline-from-center" href="#info"><FaInfoCircle />  Thông Tin Sản Phẩm</a>
                </li>
                <li >
                <a className="hvr-underline-from-center" href="#baohanh"><MdSecurity/>  Chế Độ Bảo Hành </a>
                </li>
        
            </ul>
            </Fade>
        </div>
    )
}