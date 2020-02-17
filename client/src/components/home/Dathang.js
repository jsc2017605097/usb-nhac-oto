import React,{Component} from 'react';
import {Container, Row, Col,Card, CardTitle, CardText, CardImg, CardImgOverlay,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import dathang from './img/DATHANG.png';

export default class extends Component{
    render(){
    return(
        <div className = 'dathang' id = 'dathang'>
            <div className = 'title'>NHANH TAY ĐẶT HÀNG NÀO</div>
            <Container>
                <Row>
                    <Col xs = '12' sm = '12' md = '6' lg = '6' xl = '6'>
                        <Card inverse>
                            <CardImg width="100%" src={dathang} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle>Card Title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col xs = '12' sm = '12' md = '6' lg = '6' xl = '6'>
                        <Form onSubmit = {this.handleSubmit}>
            <div>
            <FormGroup>
                  <Label for="name">Tên Người Nhận</Label>
                  <Input onChange ={this.onChange} type="text" name="name" id="name" placeholder="Tên Người Nhận" />
                </FormGroup>
            <FormGroup>
              <Label for="address">Địa Chỉ</Label>
              <Input onChange ={this.onChange} type="text" name="address" id="address" placeholder="Địa Chỉ"/>
            </FormGroup>
            <FormGroup>
                  <Label for="phone">Số Điện Thoại</Label>
                  <Input onChange ={this.onChange} type="text" name="phone" id="phone" placeholder  = 'Số Điện Thoại'/>
            </FormGroup>
            <FormGroup>
                  <Label for="info">Gói USB</Label>
                  <Input onChange ={this.onChange} type="text" name="info" id="info " placeholder="Gói USB" />
            </FormGroup>
            <FormGroup>
                  <Label for="note">Ghi Chú</Label><br />
                  <textarea name = 'note' id = 'note' rows = '5' style = {{width:'100%'}}></textarea>
            </FormGroup>
            <Button color = 'primary'>Đặt Hàng</Button>
            </div>
          </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}