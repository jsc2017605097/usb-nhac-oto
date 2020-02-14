import React from 'react';
import {Button,Container,Row,Col} from 'reactstrap';
import Thongso1 from './img/thongso1.jpg';
import Thongso2 from './img/thongso2.jpg';
import './Info.css'
import {FaInfoCircle,FaCheckCircle} from 'react-icons/fa';
import {GiUsbKey} from 'react-icons/gi';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import {FormContext} from '../../context/Form';
export default function(){
    const colorRed = {
        color:'red'
    }
    const colorGreen = {
        color:'green'
    }
    const colorBlack = {
        color:'black'
    }
    return(
        <div className = 'infoUsb' id = 'info'>
            <h1 className = 'text-center fontTitle'><GiUsbKey style = {colorBlack} /> USB CHUYÊN DỤNG CHO OTO</h1>
            <Container>
                <Row>
                    <Col xs = '12' sm = '6' xl = '6' md = {{size:6}} lg = '6' >
                        <Fade left >
                        <div className = 'text-right'>
                            <img className = 'imgShadow' width = '100% ' src = {Thongso1} alt = 'usb for car' />
                        </div>
                        </Fade>
                    </Col>
                    <Col xs = '12' sm = '6' xl = '6' md='6' lg = '6' >
                        <h4><FaInfoCircle style = {colorRed} /> Thông Số Kĩ Thuật</h4>
                        <Flip right cascade>
                        <div>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                        </div>
                        </Flip>
                    </Col>
                </Row>
                <Row>
                    <Col xs = '12' sm = '6' xl = '6' md='6' lg = '6' >
                        <h4 className  = 'text-right' ><FaInfoCircle style = {colorRed} /> Thông Số Kĩ Thuật</h4>
                        <Flip left cascade>
                        <div className  = 'text-right'  >
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                            <p><FaCheckCircle style={colorGreen} />Thông số thứ nhất</p>
                        </div>
                        </Flip>
                    </Col>
                    <Col xs = '12' sm = '6' xl = '6' md = {{size:6}} lg = '6' >
                        <Fade right>
                        <img className = 'imgShadow' width = '100%' src = {Thongso2} alt = 'usb for car' />
                        </Fade>
                    </Col>
                   
                </Row>
                <Flash>
                <div className = 'text-center'>
                    <FormContext.Consumer>
                        {({onClick})=>(<Button onClick = {onClick} className = 'hvr-pulse-shrink' color="danger">Tư vấn ngay</Button>)}
                    </FormContext.Consumer>
                </div>
                </Flash>
            </Container>
        </div>
    )
}