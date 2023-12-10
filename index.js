const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


require('dotenv').config();
app.use(express.json());


// FUNCTIONS
const { mailer } = require('./controller/mailer.controller');

// ROUTES
app.get('/mailer-carmina', (req, res) => {
  res.status(200).send("✔️ ready to mailing ✉️🚀");
});
app.post('/mailer-carmina', mailer);

// START SERVER
app.listen(port, () => {
  console.log(`mailer is listening at :${port}`);
});

module.exports = { app };
