const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')
router.post('/',function(req,res,next){
    console.log(req.body);
    const html = `
    <div style = 'background:#ddd;
    padding:20px 40px;'>
      <div style = 'display:flex;
      justify-content: center;
      align-items: center;'>
        <img style = 'border-radius:10px' src = 'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/p960x960/85019502_1040675109624564_867721253652267008_o.jpg?_nc_cat=100&_nc_ohc=mJ0QoJGayZcAX9PtiSz&_nc_ht=scontent.fhan5-7.fna&_nc_tp=6&oh=d79e324a49547e317b17fafdff1e987a&oe=5EBF3FD5' width = '200px'>
        </div>
        <div>
          <h3>Chào anh/chị ${req.body.name} </h3>
          <p>Cảm ơn khách hàng ${req.body.name} đã tin tưởng và mua sản phầm từ công ty abc của chúng tôi</p>
          <p>...</p>
          <p>From ABC with love! </p>
        </div>
    </div>
    `
    let transport = nodemailer.createTransport({
        service: 'Gmail',
        port: 587,
        auth: {
           user: 'nguyendocuongbka@gmail.com',
           pass: '2017605097'
        }
    });
    const message = {
        from: 'nguyendocuongbka@gmail.com', // Sender address
        to: `${req.body.email}`,         // List of recipients
        subject: 'Đặt Hàng Thành Công', // Subject line
        html: html
    };
      
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
})
module.exports = router; 