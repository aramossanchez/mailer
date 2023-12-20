import express from 'npm:express@4.18.2';
const app = express();

const port = Deno.env.get('PORT');

// PREPARED TO GET BODY FOR PARAMS
app.use(express.json());


// FUNCTIONS
import {mailer} from './controller/mailer.controller.ts';

// START SERVER
app.listen(port, () => {
  console.log(`mailer is listening at :${port}`);
});

// ROUTES

// ** /mailer-carmina **

app.get('/mailer-carmina', (req, res) => {
  res.status(200).send("✔️ ready to mailing ✉️🚀");
});

app.post('/mailer-carmina', mailer);

// ** /mailer-armando **
