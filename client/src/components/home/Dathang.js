import React,{Component} from 'react';
import {Container, Row, Col,Card, CardTitle, CardText, CardImg, CardImgOverlay,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import dathang from './img/DATHANG.png';
import Countdown from '../../Countdown';
import {GiStarShuriken} from 'react-icons/gi'
export default class extends Component{
    render(){
    return(
        <div className = 'dathang' id = 'dathang'>
            <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
            <div className = 'text-center'  style = {{color:'#fff'}}><GiStarShuriken /><GiStarShuriken /><GiStarShuriken /></div>
            <div style = {{margin:'20px 0px 30px 0'}} className = 'title'>NHANH TAY ĐẶT HÀNG NÀO</div>
            <Container>
                <Row>
                    <Col xs = '12' sm = '12' md = '6' lg = '6' xl = '6'>
                        <Card style={{background:'none',border:'none'}} inverse>
                            <CardImg width="100%" src={dathang} alt="Card image cap" />
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