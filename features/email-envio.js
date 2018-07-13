var nodemailer = require('nodemailer');
const config = require('../config/config-email');
let mailOptions = {
    from: 'tiagogomes07@gmail.com',
    to: 'tiagogomes07@gmail.com',
    subject: 'teste001',
    text: 'That was easy!'
};
let transporter = 
     nodemailer.createTransport({
        service: config.service,
        auth: {
        user: config.user,
        pass: config.pass
        }
 });

 //versão com call back
// let email = {
//     send : function(email){
//         mailOptions.to = email;
//         transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//             console.log(error);
//             } else {
//             console.log('Email sent: ' + info.response);
//             }
//         })
//     },
// }


//versão com promisse e call back

let email = {
    send : function(email,titulo,corpo){
        mailOptions.to = email;
        mailOptions.subject = titulo;
        mailOptions.text = corpo
        return new Promise(
            function(resolve,reject){
                transporter.sendMail(mailOptions, function(error, info){
                   error ? reject(error):resolve(info);
                })
            }
        );     
    },
}

module.exports = email;
