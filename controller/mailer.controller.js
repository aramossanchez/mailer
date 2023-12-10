const { transporter } = require('../service/mailer.service');

function mailer(req, res) {

  // MAIL TO CARMINA
  let mailOptionsToCarmina = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_TO_SEND,
    subject: `El usuario ${req.body.name} ha contactado desde la web`,
    html: `<div style="width: 100%; display: flex; flex-direction: row; align-items: start; justify-content: center;"><div style="width: 400px; border-radius: 10px; box-shadow: 2px 2px 8px 2px rgb(192, 192, 192);"><h1 style="border-radius: 10px 10px 0 0; margin: 0; padding: 10px 0 10px 0; font-size: 20px; font-weight: 600; text-align: center; background-color: #72846F; color: #E5E5DC;">Formulario rellenado desde la web.</h1><div style="padding: 20px 10px; background-color: #E5E5DC;"><p style="margin-top: 0;"><strong>Nombre:</strong> ${req.body.name}</p><p><strong>Teléfono de contacto:</strong> ${req.body.phone}</p><p><strong>Email de contacto:</strong> ${req.body.email}</p><p><strong>Motivo de mi consulta:</strong></p><p style="margin-bottom: 0;">${req.body.text}</p></div><div style="width: 100%; background-color: #72846F; display: flex; flex-direction: row; justify-content: center; padding-top: 10px; padding-bottom: 10px; border-radius: 0 0 10px 10px;"><img src="cid:logo" alt="Logo"></div></div></div>`,
    attachments: [{
      filename: 'logo.png',
      path: 'public/images/logo.png',
      cid: 'logo'
    }]
  };

  transporter.sendMail(mailOptionsToCarmina, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('mail to Carmina was succeed ->', info.messageId);
  });

  // MAIL TO USER
  let mailOptionsToUser = {
    from: process.env.MAIL_USERNAME,
    to: req?.body?.email,
    subject: 'Asunto del correo',
    text: 'Contenido del correo...',
    // html: '<b>Contenido del correo...</b>' // Puedes usar HTML si lo prefieres
  };

  transporter.sendMail(mailOptionsToUser, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('mail to User was succeed ->', info.messageId);
  });

  if (process.env.MAIL_USERNAME && process.env.MAIL_TO_SEND) {
    res.status(200).send(`mails were succeed ${process.env.MAIL_USERNAME} ${process.env.MAIL_TO_SEND}`);    
  } else {
    res.status(500).send("environment variables not found");
  }
}

module.exports = { mailer };