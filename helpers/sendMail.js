const nodemailer = require("nodemailer")

exports.transporter = nodemailer.createTransport({
    service:"Outlook",
    auth:{
      user:process.env.EMAIL,
      pass:process.env.PASS
    }
  })