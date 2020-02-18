const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')
router.post('/',function(req,res,next){

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'usb.zcarmedia@gmail.com',
        pass: 'dangvandong9981'
    },
    tls:{
      rejectUnauthorized:false
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
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Server<usb.zcarmedia@gmail.com>", // sender address
    to: "nguyendocuongbka@gmail.com", // list of receivers
    subject: "Lại Có Tiền Rồi ✔", // Subject line
    html:html // html body
  },function(error, responsive){
    console.log( error || responsive)
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
res.send('Email is sent');
})
module.exports = router; 