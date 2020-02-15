import React from 'react';
import {Button,Container,Row,Col} from 'reactstrap';
import Thongso2 from './img/info1.jpg';
import Thongso1 from './img/info2.jpg';
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
                        <div className = 'a'>
                        <h4><FaInfoCircle style = {colorRed} /> Thông Số Kĩ Thuật</h4>
                        <Flip right cascade>
                        <div className = 'font-info'>
                            <p><FaCheckCircle style={colorGreen} />Usb chính hãng: Kingston, Sandisk, Transcend, HP...</p>
                            <p><FaCheckCircle style={colorGreen} />Dung lượng: 16/32/64/128 GB</p>
                            <p><FaCheckCircle style={colorGreen} />Tốc độ: 100MB/s</p>
                            <p><FaCheckCircle style={colorGreen} />Chất liệu: Nhôm, Hợp kim, Nhựa đúc nguyên khối</p>
                            <p><FaCheckCircle style={colorGreen} />Kích thước: Nhỏ gọn</p>
                            <p><FaCheckCircle style={colorGreen} />Bảo hành: Chính hãng 5 năm</p>
                        </div>
                        
                        </Flip>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col  xs = '12' sm = '6' xl = '6' md='6' lg = '6' >
                        <div className = 'a'>
                        <h4 className  = 'text-right' ><FaInfoCircle style = {colorRed} /> Có gì trong USB Zcarmedia ?</h4>
                        <Flip left cascade>
                        <div className  = 'font-info'  >
                            <p><FaCheckCircle style={colorGreen} />Video nhạc theo yêu cầu chất lượng Full HD trở lên</p>
                            <p><FaCheckCircle style={colorGreen} />Nhạc Vàng, Trữ tình Bolero</p>
                            <p><FaCheckCircle style={colorGreen} />Nhạc trẻ HOT, Nhạc Đỏ tiền chiến</p>
                            <p><FaCheckCircle style={colorGreen} />Nhạc Sàn, Remix, Nonstop</p>
                            <p><FaCheckCircle style={colorGreen} />Nhạc không lời, Nhạc thiếu nhi</p>
                            <p><FaCheckCircle style={colorGreen} />Nhạc theo yêu cầu của quý khách</p>
                        </div>
                        
                        </Flip>
                        </div>
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