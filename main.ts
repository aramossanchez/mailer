import express from 'npm:express@4.18.2';
const app = express();

// PREPARED TO GET BODY FOR PARAMS
app.use(express.json());


// FUNCTIONS
import {mailer} from './controller/mailer.controller.ts';

// START SERVER
app.listen(3000, () => {
  console.log(`mailer is listening at :${3000}`);
});

// ROUTES

// ** /mailer-carmina **

app.get('/mailer-carmina', (req, res) => {
  res.status(200).send("✔️ ready to mailing ✉️🚀");
});

app.post('/mailer-carmina', mailer);

// ** /mailer-armando **
