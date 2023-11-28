const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


// FUNCTIONS
const { mailer } = require('./controller/mailer.controller');

// ROUTES
app.post('/mailer', mailer);

// START SERVER
app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
