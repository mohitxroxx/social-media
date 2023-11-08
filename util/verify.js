// const verification = require('../models/verification')
const nodemailer=require('nodemailer')
const dotenv=require('dotenv')
const uuid=require('uuid')

dotenv.config();

const SMTP_EMAIL='gauss10056@gmail.com',SMTP_PASS='urtkdsppcxrkdzdc',APP_URL='http://localhost:5100/'
// console.log(SMTP_PASS)
let transporter=nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASS, 
    },
})

module.exports = {
  sendmail: async function (user, res) {
      const { _id, email, firstName } = user;
      const token = _id + uuid.v4()
      const link = APP_URL + "users/verify/" + _id + "/" + token;
      const mailOptions = {
          from: SMTP_EMAIL,
          to: email,
          subject: "Email Verification",
          html: `<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f7f7f7;">
          <table role="presentation" cellspacing="0" cellpadding="0"  width="600"
              style="margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);">
              <tr>
                  <td>
                      <h3 style="color: #0838bc; font-size: 24px; text-align: center; margin-bottom: 10px;">Please verify your email address</h3>
                      <hr style="border: 1px solid #ccc; margin: 20px 0;">
                      <h4 style="font-size: 20px; color: #333;">Hi ${firstName},</h4>
                      <p style="font-size: 16px; color: #333; margin: 20px 0;">Before you continue exploring, please verify your email address.</p>
                      <p style="font-size: 16px; color: #333;">This verification link expires in 1 hour.</p>
                      <a href="${link}"
                          style="display: inline-block; padding: 14px 40px; font-size: 18px; text-align: center; text-decoration: none; color: #fff; background-color: #292e2b; border-radius: 8px; margin-top: 20px; margin-left: 4cm;">Verify Email Address</a>
                      <div style="font-size: 16px; color: #333; margin-top: 20px; text-align: center;">
                          <h5 style="font-size: 18px;">Best Regards</h5>
                          <h5 style="font-size: 18px;">ShareFun Team</h5>
                      </div>
                  </td>
              </tr>
          </table>
      </body>`,
      }
    //   try {
    //       const hashedToken = await hash(token);
    //       const newVerifiedEmail = await verification.create({
    //           userId: _id,
    //           token: hashedToken,
    //           createdAt: Date.now(),
    //           expiresAt: Date.now() + 3600000,
    //       });

              transporter
                  .sendMail(mailOptions)
                  .then(() => {
                      res.status(201).send({
                          success: "PENDING",
                          message: "Verification email has been sent to your account. Check your email for further instructions.",
                      });
                  })
                  .catch((err) => {
                      console.log(err);
                      res.status(404).json({ message:"Something went wrong" });
                  });
          }
  }