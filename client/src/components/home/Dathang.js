import React,{Component} from 'react';
import {Container,Alert, Row, Col,Card, CardTitle, CardText, CardImg, CardImgOverlay,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import dathang from './img/DATHANG.png';
import Countdown from '../../Countdown';
import {GiStarShuriken} from 'react-icons/gi';
import {FormContext} from '../../context/Form';
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
          error:{}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose(){
      this.setState({dangkithanhcong:false});
    }
    onChange(event){
      event.preventDefault();
      let {name,value} =event.target;
      let {error} = this.state;
      if(name == 'name'){
        if(value.length < 2)
        error.name = 'Tên của bạn phải gồm ít nhất 2 kí tự.'
        else
        error.name =null
      }
      if(name == 'phone'){
        if(isNaN(value)){
          error.phone = 'Số điện thoại phải là số';
        }
        else if(value.length < 10){
          error.phone = 'Số điện thoại phải gồm ít nhất 10 số';
        }
        else{
          error.phone = null;
        }
      }
      if(name == 'address'){
        if(value.length < 1){
          error.address = 'Địa chỉ không được để trống';
        }
        else
          error.address = null;
          console.log(value.length);
      }
      this.setState({[event.target.name]:event.target.value,error:error});
    }
    async handleSubmit(event){
      event.preventDefault();
      let {name,phone,address,note,info,error} = this.state;
      if(name == null || name == ''){
        error.name = 'Tên không được để trống.';
      }
      if(phone == null || phone == ''){
        error.phone = 'Số điện thoại không được để trống.';
      }
      if(address == null || address == ''){
        error.address = 'Địa chỉ không được để trống.';
      }
      this.setState({
        error:error
      })
      let count = 0;
      const bug = this.state.error;
      for(var item in bug) {
      if(bug[item] !== null)
      ++count;
      }
      console.log(count);
      console.log(this.state.error)
      if(count > 0)
      {
        return;
      }
      const form = await axios.get('/api',{
        name,
        address,
        phone,
        note,
        info
      })
      .then(res=>console.log(res.body))
      .catch(err => {
        console.log(err);
        return null;
    });
      this.setState({
        dangkithanhcong:true,
        name:'',
        phone:'',
        address:'',
        note:''
      });
      console.log('thanh cong')
    }
    render(){
    return(
        <div className = 'dathang' id = 'dathang'>
            <Countdown timeTillDate="2 27 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
            <div className = 'text-center'  style = {{color:'#fff'}}><GiStarShuriken /><GiStarShuriken /><GiStarShuriken /></div>
            <div style = {{margin:'20px 0px 30px 0'}} className = 'title'>NHANH TAY ĐẶT HÀNG NÀO</div>
            {this.state.dangkithanhcong && <div className = 'thanhcong'>
            <Alert color="success" className = 'text-center'>
        Chúc mừng, bạn đã đặt hàng thành công!<br />
        Nhân viên của chúng tôi sẽ sớm liên lạc với bạn.
        <br />
        <Button onClick = {this.handleClose} style = {{margin:'10px 0px 0px 0px'}} color = 'primary'>Thoát</Button>
      </Alert>
              </div>}
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
                  <b>{this.state.error.name}</b>
                  <Input onChange ={this.onChange} type="text" name="name" id="name" value = {this.state.name} placeholder="Tên Người Nhận" />
                </FormGroup>
            <FormGroup>
              <Label for="address">Địa Chỉ</Label>
              <b> {this.state.error.address}</b>
              <Input onChange ={this.onChange} value = {this.state.address} type="text" name="address" id="address" placeholder="Địa Chỉ"/>
            </FormGroup>
            <FormGroup>
                  <Label for="phone">Số Điện Thoại</Label>
                  <b> {this.state.error.phone}</b>
                  <Input onChange ={this.onChange} value = {this.state.phone} type="text" name="phone" id="phone" placeholder  = 'Số Điện Thoại'/>
                 
            </FormGroup>
            <FormGroup>
              <Label for="info">Gói USB</Label>
              <Input onChange ={this.onChange} name="info" type="select"  id="info">
                <option value = 'Gói Usb nhạc theo yêu cầu.'>Gói Usb nhạc theo yêu cầu.</option>
                <option value = 'Gói 1.500 bài hát(320kbs)'>Gói 1.500 bài hát(320kbs)</option>
                <option value = 'Gói 250 videos(Full HD)'>Gói 250 videos(Full HD)</option>
                <option value = 'Gói 1.500 bài hát + 250 videos'>Gói 1.500 bài hát + 250 videos</option>
              </Input>
           </FormGroup>
            <FormGroup>
                  <Label for="note">Ghi Chú</Label><br />
                  <textarea name = 'note' id = 'note' value = {this.state.note}    rows = '5' style = {{width:'100%'}}> </textarea>
            </FormGroup>
            <Button  color = 'primary' onMouseMove = {this.onChange}>Đặt Hàng</Button>
            </div>
          </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}