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
            <div className = 'title'>
                CHÍNH SÁCH BÁN HÀNG
            </div>
            <div className = 'text-center'  style = {{color:'white'}}><GiStarShuriken /><GiStarShuriken /><GiStarShuriken /></div>
            <Container>
                <Row>
                    <Col xs = '6' sm = '6' md = '6' lg = '3' xl = '3'>
                        <div inverse>
                            <CardImg width="100%" src={cs1} alt="Card image cap" />
                        </div>
                    </Col>
                    <Col xs = '6' sm = '6' md = '6' lg = '3' xl = '3'>
                        <div inverse>
                            <CardImg width="100%" src={cs2} alt="Card image cap" />
                        </div>
                    </Col>
                    <Col xs = '6' sm = '6' md = '6' lg = '3' xl = '3'>
                        <div inverse>
                            <CardImg width="100%" src={cs3} alt="Card image cap" />
                        </div>
                    </Col>
                    <Col xs = '6' sm = '6' md = '6' lg = '3' xl = '3'>
                        <div inverse>
                            <CardImg width="70%" src={cs4} alt="Card image cap" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}