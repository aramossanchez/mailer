function mailer(req, res) {
  res.send(req.body);
}

module.exports = { mailer };