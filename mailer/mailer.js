const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'faustino.huels31@ethereal.email',
        pass: 'wzNWejptNdTPnUq8N7'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
