const functions = require("firebase-functions");
import { mail } from './mail-credentials';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: mail.host,
  port: mail.port,
  secure: mail.secure,
  auth: {
    user: mail.user,
    pass: mail.pass
  }
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const email_from = request.query.email_from;
  const message = request.query.message;

  const mailOptions = {
    from: 'Travel Landing <'+email_from+'>',
    to: mail.mailto,
    subject: 'Travel Landing, Contact Form Submission',
    html: `${message} <br><br> From ${email_from}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(`ERROR: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`);
      response.send(error.toString());
    }
    response.send('You message was submitted successfully!');
  });

})
