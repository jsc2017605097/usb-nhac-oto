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
          phone:null
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
      const {email,name,phone,address} = this.state;
      console.log("Email", email);
      console.log("name", name);
      console.log("address", address);
      console.log("phone", phone);
      const form = await axios.post('/api',{
        email,
        name,
        address,
        phone
      }).catch(err => {
        console.log(err);
        return null;
    });
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
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input onChange ={this.onChange} type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Tên Người Nhận</Label>
                  <Input onChange ={this.onChange} type="text" name="name" id="name" placeholder="Tên Người Nhận" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="address">Địa Chỉ</Label>
              <Input onChange ={this.onChange} type="text" name="address" id="address" placeholder="Địa Chỉ"/>
            </FormGroup>
            <FormGroup>
                  <Label for="phone">Số Điện Thoại</Label>
                  <Input onChange ={this.onChange} type="text" name="phone" id="phone" placeholder  = 'Số Điện Thoại'/>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" name="check" id="exampleCheck"/>
              <Label for="exampleCheck" check>Check me out</Label>
            </FormGroup>
            <Button color = 'primary'>Đăng Kí</Button>
          </Form>
          </div>
          </Fade>
        )
    }
}