import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import info11 from './img/info11.png';
import info22 from './img/info22.jpg';
import './Info.css'
import {GiUsbKey,GiStarShuriken} from 'react-icons/gi';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import ButtonDatHang from './ButtonDatHang';
export default function(){
    return(
        <div className = 'infoUsb' id = 'info'>
            <div className = 'title'><GiUsbKey /> USB CHUYÊN DỤNG CHO OTO</div>
            <div className = 'text-center'  style = {{color:'#fff',margin:'0px 0px 20px 0px'}}><GiStarShuriken /><GiStarShuriken /><GiStarShuriken /></div>
            <Container>
                <Row>
                    <Col xs = {{size:12,order:2}} sm = '6' xl = '6' md={{size:6,order:1}} lg = {{size:6,order:1}} >
                        <Fade left>
                        <div>
                                <img className = 'imgShadow' width = '100% ' src = {info22} alt = 'usb for car' />
                        </div>
                        </Fade>
                    </Col>
                    <Col xs = '12' sm = '6' xl = '6' md='6' lg = '6' >
                        <Fade right>
                        <div>
                            <img className = 'imgShadow' width = '100% ' src = {info11} alt = 'usb for car' />
                        </div>
                        </Fade>
                    </Col>
                </Row>
                <br />
                <Flash>
                    <ButtonDatHang />
                </Flash>
            </Container>
        </div>
    )
}