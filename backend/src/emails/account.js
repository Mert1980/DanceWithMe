const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'softwaredeveloperjava80@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to Dance With Me!, ${name}. You can explore dance events and find your perfect match via our amazing app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'softwaredeveloperjava80@gmail.com',
        subject: 'Cancelation of the user account',
        text:`Dear ${name}, you have successfuly cancelled your account. We are looking forward to welcoming you back!`
        
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
