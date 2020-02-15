const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')
router.get('/',function(req,res,next){

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
        user: 'nguyendocuongbka@gmail.com',
        pass: '2017605097'
    },
    tls:{
      rejectUnauthorized:false
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "nguyendocuongbka@gmail.com", // sender address
    to: "nguyendocuongbka@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world? do cuong here</b>" // html body
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