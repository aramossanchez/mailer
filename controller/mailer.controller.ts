import { transporter } from '../service/mailer.service.ts';
import "https://deno.land/std@0.209.0/dotenv/load.ts";

export const mailer = (req, res) => {

  let mailToCarmina = true;
  let mailToUser = true;
  let message = '';

  // MAIL TO CARMINA
  const mailOptionsToCarmina = {
    from: Deno.env.get('MAIL_USERNAME'),
    to: Deno.env.get('MAIL_TO_SEND'),
    subject: `El usuario ${req.body.name} ha contactado desde la web`,
    html: `<div style="width: 100%; display: flex; flex-direction: row; align-items: start; justify-content: center;"><div style="width: 400px; border-radius: 10px; box-shadow: 2px 2px 8px 2px rgb(192, 192, 192);"><h1 style="border-radius: 10px 10px 0 0; margin: 0; padding: 10px 0 10px 0; font-size: 20px; font-weight: 600; text-align: center; background-color: #72846F; color: #E5E5DC;">Formulario rellenado desde la web.</h1><div style="padding: 20px 10px; background-color: #E5E5DC;"><p style="margin-top: 0;"><strong>Nombre:</strong> ${req.body.name}</p><p><strong>Teléfono de contacto:</strong> ${req.body.phone}</p><p><strong>Email de contacto:</strong> ${req.body.email}</p><p><strong>Motivo de mi consulta:</strong></p><p style="margin-bottom: 0;">${req.body.text}</p></div><div style="width: 100%; background-color: #72846F; display: flex; flex-direction: row; justify-content: center; padding-top: 10px; padding-bottom: 10px; border-radius: 0 0 10px 10px;"><img src="cid:logo" alt="Logo"></div></div></div>`,
    attachments: [{
      filename: 'logo.png',
      path: 'public/images/logo.png',
      cid: 'logo'
    }]
  };

  transporter.sendMail(mailOptionsToCarmina, (error) => {
    if (error) {
      mailToCarmina = false;
      console.log(error);
    }
  });

  // MAIL TO USER
  const mailOptionsToUser = {
    from: Deno.env.get('MAIL_USERNAME'),
    to: req?.body?.email,
    subject: 'Asunto del correo',
    text: 'Contenido del correo...',
    // html: '<b>Contenido del correo...</b>' // Puedes usar HTML si lo prefieres
  };

  transporter.sendMail(mailOptionsToUser, (error) => {
    if (error) {
      mailToUser = false;
      console.log(error);
    }
  });

  if (Deno.env.get('MAIL_USERNAME') && Deno.env.get('MAIL_TO_SEND') ){
    if (mailToCarmina && mailToUser) {
      res.status(200).send("Mails were succeed ✉️🚀");      
    } else {
      res.status(500).send(message);
    }
  } else {
    res.status(500).send("environment variables not found");
  }
}