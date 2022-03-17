const nodemailer = require("nodemailer");

const enviarCorreo = (para, asunto, msj) => {
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    } else {
      console.log('Correo enviado')
    }
  })

};

module.exports = { enviarCorreo };