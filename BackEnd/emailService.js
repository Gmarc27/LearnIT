const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', // or use your email service provider
    auth: {
        user: process.env.EMAIL, // your email
        pass: process.env.EMAIL_PASSWORD // your email password
    }
});

const sendResetEmail = (to, token) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: 'Password Reset',
        text: `You requested a password reset. Please use the following link to reset your password: ${process.env.FRONTEND_URL}/reset-password?token=${token}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = { sendResetEmail };
