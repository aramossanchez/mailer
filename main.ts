import express from 'npm:express@4.18.2';
const app = express();

const port = Deno.env.get('PORT');

// PREPARED TO GET BODY FOR PARAMS
app.use(express.json());


// FUNCTIONS
import { mailer } from './controller/mailer.controller.ts';

// START SERVER
app.listen(port, () => {
  console.log(`✔️ ready to mailing ✉️🚀 - mailer is listening at :${port}`);
});

// ROUTES

// ** /mailer-carmina **

app.get('/mailer-carmina', (req, res) => {
  if (
    !Deno.env.get('MAIL_HOST') ||
    !Deno.env.get('MAIL_PORT') ||
    !Deno.env.get('MAIL_SECURE') ||
    !Deno.env.get('MAIL_USERNAME') ||
    !Deno.env.get('MAIL_PASSWORD') ||
    !Deno.env.get('MAIL_TO_SEND') ||
    !Deno.env.get('PORT')
  ) {
    res.status(500).send("❌ - some environment variable is missing - ❌");
  } else {
    res.status(200).send("✔️ - ready to ✉️🚀 - ✔️");
  }
});

app.post('/mailer-carmina', mailer);

// ** /mailer-armando **
