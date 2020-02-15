import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css'
import {FormContext} from '../../context/Form';
import Fade from 'react-reveal/Fade';
const axios = require('axios');
export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
          name:null,
          email:null,
          address:null,
          phone:null,
          info:null,
          note:null
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
      const {email,name,phone,address,note,info} = this.state;
      console.log("name", name);
      console.log("address", address);
      console.log("phone", phone);
      const form = await axios.post('/api',{
        email,
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
      alert('Chúc mừng, bạn đã đặt hàng thành công!');
      
    }
    render(){
        return(
          <Fade top>
            <div className = 'form fixed-bottom'>
            <div>
              <FormContext.Consumer>
              {({onClick})=>(<Button color = 'danger' onClick = {onClick}>Ẩn Form Đăng Kí</Button>)}
              </FormContext.Consumer>
            </div>
            <Form onSubmit = {this.handleSubmit}>
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
          </Form>
          </div>
          </Fade>
        )
    }
}