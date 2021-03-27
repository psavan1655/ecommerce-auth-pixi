const contactModel = require("../models/contact");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
const host = process.env.SMTP_HOST || "smtp.ethereal.email";
const port = process.env.SMTP_PORT || 587;
const secure = process.env.SMTP_SECURE || false;
const user = process.env.SMTP_AUTH_USER;
const pass = process.env.SMTP_AUTH_PASS;
const mailTo = process.env.MAIL_TO || "bar@example.com, baz@example.com";



// create reusable transporter object using the default SMTP transport

exports.getContact = async (req, res, next) => {
  try {
    const contactData = await contactModel.findAll();
    res.status(200).json({
      success: true,
      data: contactData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.postContact = async (req, res, next) => {
  if (user) {
    let transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: secure, // true for 465, false for other ports
      auth: {
        user: user, // generated ethereal user
        pass: pass, // generated ethereal password
      },
    });
  } else {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  }
  const data = req.body.data;
  // console.log(data);
  try {
    const contact = await contactModel.create(data);
    let info = await transporter.sendMail({
      from: data["email"], // sender address
      to: mailTo, // list of receivers
      subject: data["subject"], // Subject line
      html:
        "<b>Contact</b>: " +
        data["phone"].toString() +
        " <b>Name</b>: " +
        data["name"] +
        " <b>Address</b>: " +
        data["address"] +
        " <b>Details</b>: " +
        data["details"], // html body
    });
    if (user) {
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    res.status(200).json({
      success: true,
      message: "contact created.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.putContact = async (req, res, next) => {
  const data = req.body.data;
  // console.log(data);
  try {
    const contact = await contactModel.update(data, {
      where: { id: data["id"] },
    });
    res.status(200).json({
      success: true,
      message: "contact Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.deleteContact = async (req, res, next) => {
  const data = req.body.data;
  // console.log(data);
  try {
    const contact = await contactModel.destroy({
      where: { id: data["id"] },
    });
    res.status(200).json({
      success: true,
      message: "contact Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
