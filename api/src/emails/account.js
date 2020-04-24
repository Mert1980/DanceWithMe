// use sendgrid package to send users welcoming mail
const sgMail = require("@sendgrid/mail");

// customize the path for config variables
const path = require("path");
require("dotenv").config({
  path: path.resolve(process.cwd(), "api", "config", ".env"),
  debug: true,
});

// set API key that sendgrid provides
// SENDGRID_API_KEY is storen in .env file
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// This function is structured to send html when the user signs up.
// It is called in router.post("/users", ...) in user.js(router) file
// email and name are received through "req.body" when the user signs up and are sent
// to backend via post request which is defined in client/src/components/signup.js
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dancewithmeapp@gmail.com",
    subject: "Welcome to DanceWithMe!",
    html: `<div>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:70%; height:auto !important;" width="290" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/ecfbf4aace3a49e1/b128e5f9-57e9-4c9f-9e4f-590648d8c153/1600x900.png">
                </td>
             <div style="font-family: inherit; text-align: justify inherit">Welcome ${name}. Thanks for joining our community. Your account has been created. You are ready to explore the latest dance events and find your best partner!&nbsp;</div>
                 
             </div>
            </div>`,
  });
};

module.exports = sendWelcomeEmail;
