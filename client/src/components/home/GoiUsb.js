import React from 'react';
import {Container,Row,Col,Button} from 'reactstrap';
import u1 from './img/u1.jpg';
import u2 from './img/u2.jpg';
import u3 from './img/u3.jpg';
import u4 from './img/U4.jpg';
import './goiusb.css';
import Flash from 'react-reveal/Flash';
import {FaDatabase} from 'react-icons/fa';
import {Link } from 'react-scroll';
import ButtonDatHang from './ButtonDatHang';
export default function(){
        return(
            <div className = 'goiUsb' id = 'goiusb'>
                <div className = 'title' style = {{color:'#2C5364'}}><FaDatabase style = {{margin:'0px 10px 0px 0px'}} />CÁC GÓI USB NHẠC ZCARMEDIA</div>
                <Container>
                    <Row>
                        <Col xs = '12' sm = '6' md = '6' lg = '3' xl = '3'>
                            <div>
                                <img src = {u1} alt = 'cac goi usb' width = '100%' />
                            </div>
                        </Col>
                        <Col xs = '12' sm = '6' md = '6' lg = '3' xl = '3'>
                            <div>
                                <img src = {u2} alt = 'cac goi usb' width = '100%' />
                            </div>
                        </Col>
                        <Col xs = '12' sm = '6' md = '6' lg = '3' xl = '3'>
                            <div>
                                <img src = {u3} alt = 'cac goi usb' width = '100%' />
                            </div>
                        </Col>
                        <Col xs = '12' sm = '6' md = '6' lg = '3' xl = '3'>
                            <div>
                                <img src = {u4} alt = 'cac goi usb' width = '100%' />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Flash>
                    <ButtonDatHang />
                </Flash>
            </div>
        )
}