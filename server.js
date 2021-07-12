// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();

// // middleware
// app.use(express.json());
// app.use(cors());

// let transporter = nodemailer.createTransport({
//     service: "Gmail",
//     port: 465,
//     auth: {
//         type: "OAuth2",
//         user: process.env.REACT_APP_USER_NAME,
//         pass: process.env.REACT_APP_PASSWORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//     },
// });

// transporter.verify((err, success) => {
//     err
//         ? console.log(err)
//         : console.log(`=== Server is ready to take messages: ${success} ===`);
// });

// app.post("/send", function (req, res) {
//     let mailOptions = {
//         from: 'example@asd.com',
//         to: process.env.REACT_APP_USER_NAME,
//         subject: `Message from: ${req.body.mailerState.name}` ,
//         text: `Message: ${req.body.mailerState.message} 
//                 Phone Number: ${req.body.mailerState.phone}
//                 Email ${req.body.mailerState.email}`,
//       };

//     transporter.sendMail(mailOptions, function (err, data) {
//         if (err) {
//             res.json({
//                 status: "fail",
//               });
//         } else {
//             res.json({ status: "success" });
//             console.log("Email sent successfully");
//         }
//     });
// });

// const port = process.env.PORT || 3001;

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });