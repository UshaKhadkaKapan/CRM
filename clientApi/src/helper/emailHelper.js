import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (emailInfo) => {
  // Generate test SMTP serice account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_SMTP,
    port: +process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAILD_PASS, // generated ethereal password
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail(emailInfo);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export const sendAdminClientVerificationMail = (clientObj) => {
  const link = `${process.env.DOMAIN}/admin-verification?e=${clientObj.email}&c=${clientObj.verificationCode}`;
  // "http://localhost:3000/admin-verification?email=" +
  //   clientObj.email +
  //   "&c=" +
  //   userObj.verificationCode;
  const emailInfo = {
    from: '"ABC store" ' + process.env.MAIL_USER,
    to: clientObj.email, // list of receivers
    subject: "Account Verification required", // Subject line
    text: `Hi ${clientObj.fName} and ${link}`, // plain text body
    html: `
      <p>Hello ${clientObj.fName}</p>
      <br/>
      <br/>
      <p>Please follow the link below to verify and activate your admin account<p/>
      <br/>
      <br/>
      <a href =${link}>${link}</a>
      <br/>
    <br/>

    <p>xyz company</p>
    `, // html body
  };
  sendMail(emailInfo);
};
