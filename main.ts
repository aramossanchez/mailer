import express from 'npm:express@4.18.2';
import * as _mod from 'https://deno.land/std@0.209.0/dotenv/mod.ts';
const app = express();

// FUNCTIONS
import {mailer} from './controller/mailer.controller.ts';

// START SERVER
app.listen(3000, () => {
  console.log(`mailer is listening at :${3000}`);
});

// ROUTES

// ** /mailer-carmina **

app.get('/mailer-carmina', (_req, res) => {
  res.status(200).send("✔️ ready to mailing ✉️🚀");
});

app.post('/mailer-carmina', mailer);

// ** /mailer-armando **
