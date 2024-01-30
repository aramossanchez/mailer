import getMailToCarmina from '../mails/mailsToCarmina/mailToCarmina.ts';
import getMailToUser from '../mails/mailsToCarmina/mailToUser.ts';
import { transporter } from '../service/mailer.service.ts';
import 'https://deno.land/std@0.209.0/dotenv/load.ts';

export const mailer = async (req: {body: {name: string, email: string, phone: string, text: string}}, res) => {

  let mailToCarmina = true;
  let mailToUser = true;
  let message = '';

  // MAIL TO CARMINA
  const mailOptionsToCarmina = {
    from: Deno.env.get('MAIL_USERNAME'),
    to: Deno.env.get('MAIL_TO_SEND'),
    subject: `El usuario ${req.body.name} ha contactado desde la web`,
    html: getMailToCarmina(req.body),
    attachments: [{
      filename: 'logo.png',
      path: 'public/images/logo.png',
      cid: 'logo'
    }]
  };

  try {
    await transporter.sendMail(mailOptionsToCarmina);
  } catch (error) {
    mailToCarmina = false;
    message = message + ' ❌ Mail to Carmina failed ❌ ';
    console.error(error);
  }

  // MAIL TO USER
  const mailOptionsToUser = {
    from: Deno.env.get('MAIL_USERNAME'),
    to: req?.body?.email,
    subject: 'Correo recibido correctamente',
    html: getMailToUser(),
    attachments: [{
      filename: 'logo.png',
      path: 'public/images/logo.png',
      cid: 'logo'
    }]
  };

  try {
    await transporter.sendMail(mailOptionsToUser);
  } catch (error) {
    mailToUser = false;
    message = message + ' ❌ Mail to User failed ❌ ';
    console.error(error);
  }

  if (Deno.env.get('MAIL_USERNAME') && Deno.env.get('MAIL_TO_SEND') ){
    if (mailToCarmina && mailToUser) {
      res.status(200).send('Mails were succeed ✉️🚀');      
    } else {
      res.status(500).send(message);
    }
  } else {
    res.status(500).send('environment variables not found');
  }
}