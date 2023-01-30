const nodemailer = require("nodemailer");

const sendEmail = async (from, to, html, subject, text) => {
  try {
    let smtpTransport = await nodemailer.createTransport({

    service: 'gmail',
    auth: {
            user: 'hhmakwana99@gmail.com',
            pass: 'mdhzodzncmgckiab',
          },

    });
    let mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text,
      html
    };
    let chl = await smtpTransport.sendMail(mailOptions);
    
    return chl;
  } catch (error) {
   
    console.log(error)
  }
};

module.exports = {
  sendEmail
};
