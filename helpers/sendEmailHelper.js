const nodemailer = require("nodemailer");

const enviarCorreo = async(para, asunto, msj) => {
  const transporter = nodemailer.createTransport({
    host: 'mail4.correopremium.com',
    port: '465',

    auth: {
      user: "ovargas@fuxiaaccesorios.com",
      pass: "A95l11e01@",
    },
  });

    const mailOptions = {
        from: "ovargas@fuxiaaccesorios.com",
        to: para,
        subject: asunto,
        html: msj,
    };

     

    return transporter.sendMail(mailOptions, (error, info) => {
      let i = 'si'
      if (error) {
        i = error
      } else {
        i = 'correo enviado'
      }
      return i
    })


};

module.exports = { enviarCorreo };