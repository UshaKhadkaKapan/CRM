// const sgMail = require("@sendgrid/mail");

import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID);

export const sendAdminClientVerificationMail = (userObj) => {
  const link = `${process.env.DOMAIN}/register?e=${userObj.email}&c=${userObj.verificationCode}`;
  // "http://localhost:3000/admin-verification?email=" +
  //   userObj.email +
  //   "&c=" +
  //   userObj.verificationCode;
  const emailInfo = {
    from: process.env.MAIL_FROM,
    to: userObj.email, // list of receivers
    subject: "Account Verification required", // Subject line
    text: `Hi ${userObj.fName} and ${link}`, // plain text body
    html: `
    <p>Hello ${userObj.fName}</p>
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

  sgMail.send(emailInfo).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};

// const msg = {
//   to: "test@example.com",
//   from: "test@example.com", // Use the email address or domain you verified above
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };

//ES6
// sgMail.send(msg).then(
//   () => {},
//   (error) => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// );
//ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// })();
