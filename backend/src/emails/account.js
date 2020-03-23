const sgMail = require("@sendgrid/mail");
const path = require("path");
require("dotenv").config({
  path: path.resolve(process.cwd(), "backend", "config", ".env"),
  debug: true
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "softwaredeveloperjava80@gmail.com",
    subject: "Welcome to DanceWithMe!",
    html: `<div>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:70%; height:auto !important;" width="290" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/ecfbf4aace3a49e1/b128e5f9-57e9-4c9f-9e4f-590648d8c153/1600x900.png">
                </td>
             <div style="font-family: inherit; text-align: justify inherit">Thanks for joining to our community. Please click the <strong>DanceWithMe</strong> button to explore the latest dance events and find your best partner!&nbsp;</div>
                 <td align="center" bgcolor="#333333" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                        <a href="http://localhost:3000/DanceWithMe" style="background-color:#333333; border:1px solid #333333; border-color:#333333; border-radius:6px; border-width:1px; color:#ffffff; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid;" target="_blank">DanceWithMe</a>
                    </td>
             </div>
            </div>`
  });
};

module.exports = sendWelcomeEmail;
