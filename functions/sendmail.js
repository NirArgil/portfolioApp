// const nodemailer = require('nodemailer');

// require('dotenv').config();

// const USER_NAME = process.env.REACT_APP_USER_NAME;
// const PASSWORD = process.env.REACT_APP_PASSWORD;
// const HOST = process.env.REACT_APP_HOST;

// exports.handler = function(event, context, callback) {

//     let data = JSON.parse(event.body)

//     let transporter = nodemailer.createTransport({
//         host: `${HOST}`,
//         port: 465,
//         secure: true,

//         auth:{
//             service: 'Gmail',
//             auth: {
//               type: 'OAuth2',
//               user: process.env.USER_NAME,
//               pass: process.env.PASSWORD,
//               clientId: process.env.OAUTH_CLIENTID,
//               clientSecret: process.env.OAUTH_CLIENT_SECRET,
//               refreshToken: process.env.OAUTH_REFRESH_TOKEN
//         //  user: `${USER_NAME}`,
//         //  pass: `${PASSWORD}`,
//         //  user:[YOUR SMTP SERVER USERNAME],
//         //  pass: [YOUR SMTP SERVER PASSWORD]
//     }
//     });

//     // transporter.verify(function(error, success) {
//     //     if (error) {
//     //       console.log(error);
//     //     } else {
//     //       console.log("Server is ready to take our messages");
//     //     }
//     //   });

//     transporter.sendMail({
//         from: "send@example.com",
//         to: "nirdeveloper1@gmail.com",
//         subject: `Portfolio Contact Form`,
//         html: `
//             <h3>Email from ${data.name}, <br>
//             Email: ${data.email}<h3>.
//             Phone num: ${data.phone} <br>
//             Message:
//             <p>${data.message}<p>
//             `
//     }, function(error, info) {
//         if (error) {
//             callback(error);
//         } else {
//             callback(null, {
//             statusCode: 200,
//             body: JSON.stringify({
//                    'result': 'success'
//                 })
//         });
//         }
//     });
// }