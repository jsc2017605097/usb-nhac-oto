import React from 'react';
import './phanhoikhachhang.css';
import p1 from './img/P1.jpg';
import p2 from './img/P2.jpg';
import p3 from './img/P3.jpg';
import p4 from './img/P4.jpg';
import {Container,Row,Col,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import {IoMdContacts} from 'react-icons/io';
import {GiStarShuriken} from 'react-icons/gi';
import ButtonDatHang from './ButtonDatHang';
export default function(){
    return(
        <div className = 'phanhoi' id='phanhoi'>
            <div className = 'title'><IoMdContacts style = {{margin:'0 10px 0 0'}}/> KHÁCH HÀNG NÓI GÌ VỀ USB NHẠC</div>
            <div className = 'text-center'  style = {{color:'white',margin:'0 0px 10px 0'}}><GiStarShuriken /><GiStarShuriken /><GiStarShuriken /></div>
            <div className = 'text-center'  style = {{color:'white'}}>
                    <p>Chúng tôi nỗ lực mỗi ngày để mang đến cho khách hàng sản phẩm và dịch vụ tốt nhất</p>
                    <p>Sự hài lòng của quý khách chính là thành công lớn nhất của chúng tôi</p>
            </div>
            <Container>
                <Row>
                    <Col xs = '12' sm = '12' md = '6' lg = '3' xl = '3'>
                    <Card>
                        <CardImg top width="100%" src={p1} alt="phan hoi khach hang" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col xs = '12' sm = '12' md = '6' lg = '3' xl = '3'>
                    <Card>
                        <CardImg top width="100%" src={p2} alt="phan hoi khach hang" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col xs = '12' sm = '12' md = '6' lg = '3' xl = '3'>
                    <Card>
                        <CardImg top width="100%" src={p3} alt="phan hoi khach hang" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col xs = '12' sm = '12' md = '6' lg = '3' xl = '3'>
                    <Card>
                        <CardImg top width="100%" src={p4} alt="phan hoi khach hang" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ButtonDatHang />
        </div>
    )
}