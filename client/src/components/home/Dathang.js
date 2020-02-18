import React,{Component} from 'react';
import {Container, Row, Col,Card, CardTitle, CardText, CardImg, CardImgOverlay,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import dathang from './img/DATHANG.png';
import Countdown from '../../Countdown';
import {GiStarShuriken} from 'react-icons/gi';
const async = require('async');
const axios = require('axios');
export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
          name:null,
          address:null,
          phone:null,
          info:null,
          note:null,
          dangkithanhcong:false,
          error:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(event){
      this.setState({
        [event.target.name] : event.target.value
      })
    }
    async handleSubmit(event){
      event.preventDefault();
      const {name,phone,address,note,info,error} = this.state;
      if(!Number(phone)){
        
      }
      const form = await axios.post('/api',{
        name,
        address,
        phone,
        note,
        info
      })
      .then(res=>console.log(res))
      .catch(err => {
        console.log(err);
        return null;
    });
      this.setState({
        dangkithanhcong:true
      })
      
    }
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
                  <Input onChange ={this.onChange} type="text" name="name" id="name" value = {this.state.name} placeholder="Tên Người Nhận" />
                </FormGroup>
            <FormGroup>
              <Label for="address">Địa Chỉ</Label>
              <Input onChange ={this.onChange} value = {this.state.address} type="text" name="address" id="address" placeholder="Địa Chỉ"/>
            </FormGroup>
            <FormGroup>
                  <Label for="phone">Số Điện Thoại</Label>
                  <Input onChange ={this.onChange} value = {this.state.phone} type="text" name="phone" id="phone" placeholder  = 'Số Điện Thoại'/>
            </FormGroup>
            <FormGroup>
                  <Label for="info">Gói USB</Label>
                  <Input onChange ={this.onChange} value = {this.state.info} type="text" name="info" id="info " placeholder="Gói USB" />
            </FormGroup>
            <FormGroup>
                  <Label for="note">Ghi Chú</Label><br />
                  <textarea name = 'note' id = 'note' value = {this.state.note}    rows = '5' style = {{width:'100%'}}> </textarea>
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