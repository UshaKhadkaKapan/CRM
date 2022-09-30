// const sgMail = require("@sendgrid/mail");

import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID);

export const sendAdminClientVerificationMail = (userObj) => {
  console.log(userObj);
  const link = `${process.env.DOMAIN}/client-verification?e=${userObj.email}&c=${userObj.verificationCode}`;
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

    <p>XYZ company</p>
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

//////for resetOPT for client
export const emailPasswordClientResetOPT = (obj) => {
  const emailInfo = {
    from: process.env.MAIL_FROM,
    to: obj.email, // list of receivers
    subject: "OTP for password Reset", // Subject line
    text: `Hi ${obj.otp} Please follow the following OTP to reset the password `, // plain text body
    html: `
    <p>Hello ${obj.fName}</p>
    <p>Hi ${obj.otp} Please follow the following OTP to reset the password <p/>
    <br/>
    <br/>
    <p>Please follow the following OTP to reset the password<p/>
    <br/>
    <br/>
    <p>XYZ company</p>
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

// profile update verification email for client
export const profileUpdatedVerificationMailForClient = (obj) => {
  console.log(obj);
  const emailInfo = {
    from: process.env.MAIL_FROM,
    to: obj.email, // list of receivers
    subject: "Your profile has been updated", // Subject line
    text: `Hi ${obj.fName} we have just notice that you profile has been updated. If it isnt you, please contact us immidiately`, // plain text body
    html: `
    <p>Hello ${obj.fName}</p>
    <br/>
    <br/>
    <p>we have just notice that you profile has been updated. If it isnt you, please contact us immidiately<p/>
    <br/>
    <br/>
    <p>XYZ company</p>
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
