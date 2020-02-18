import React from 'react';
import './chinhsach.css';
import {GiStarShuriken} from 'react-icons/gi';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay,Container,Row,Col } from 'reactstrap';
import cs1 from './img/cs1.png';
import cs2 from './img/cs2.png';
import cs3 from './img/cs3.png';
import cs4 from './img/cs4.png';
export default function(){
    return(
        <div className = 'chinhsach' id = 'chinhsach'>
            <div className = 'title' style = {{color:'#2C5364',margin:'20px 0px 0px 0px'}}>
                CHÍNH SÁCH BÁN HÀNG
            </div>
            <div className = 'text-center'  style = {{color:'white'}}><GiStarShuriken /><GiStarShuriken /><GiStarShuriken /></div>
            <Container>
                <Row>
                    <Col xs = '6' sm = '6' md = '6' lg = '3' xl = '3'>
                        <div inverse>
                            <CardImg  style ={{width:'70%'}} src={cs1} alt="Card image cap" />
                            <p>Miễn phí giao hàng toàn quốc với thời gian giao hàng chỉ từ 2-4 ngày</p>
                        </div>
                    </Col>
                    <Col xs = '6' sm = '6' md = '6' lg = '3' xl = '3'>
                        <div inverse>
                            <CardImg  style ={{width:'70%'}} src={cs2} alt="Card image cap" />
                            <p>Cam kết 100% USB hàng chính hãng Sandisk, Kingston, Toshiba, Transcend</p>
                        </div>
                    </Col>
                    <Col xs = '6' sm = '6' md = '6' lg = '3' xl = '3'>
                        <div inverse>
                            <CardImg  style ={{width:'70%'}} src={cs3} alt="Card image cap" />
                            <p>Cam kết âm thanh chất lượng cao 320kbps trở lên và hình ảnh Video FullHD trở lên</p>
                        </div>
                    </Col>
                    <Col xs = '6' sm = '6' md = '6' lg = '3' xl = '3'>
                        <div inverse>
                            <CardImg  style ={{width:'70%'}} src={cs4} alt="Card image cap" />
                            <p>Cam kết bảo hành USB 5 năm, 1 đổi 1 trong 1 tháng nếu sản phẩm có lỗi</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}