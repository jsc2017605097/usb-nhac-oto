const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
router.post('/',function(req,res,next){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'usb.zcarmedia@gmail.com',
      pass: 'dangvandong9981'
    }
  });
  const html = `
    <div>
      <img width = '200px' src ='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/p960x960/85019502_1040675109624564_867721253652267008_o.jpg?_nc_cat=100&_nc_ohc=9ziGuRelD0QAX-VvM4Q&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=00f204d56a688ab295e47127394169fc&oe=5EBF3FD5' />
      <div>
        <p>Hệ thống trân trọng thông báo thông tin về khách hàng mới đăng kí!</p>
        <ul>
          <li>Khách Hàng: <b>${req.body.name}</b></li>
          <li>Số Điện Thoại: <b>${req.body.phone}</b></li>
          <li>Địa Chỉ: <b>${req.body.address}</b></li>
          <li>Gói USB: <b>${req.body.info}</b></li>
          <li>Lưu Í: <b>${req.body.note}</b></li>
        </ul> 
        <p><i> From usb.zcarmedia@gmail.com with love! </i> </p>
      </div>
    </div>
  `
  var mailOptions = {
    from: 'HỆ THỐNG SERVER',
    to: 'usb.zcarmedia@gmail.com',
    subject: 'KHÁCH HÀNG MỚI ĐĂNG KÍ!',
    html:html
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send('Sent mail...')
})
module.exports = router;