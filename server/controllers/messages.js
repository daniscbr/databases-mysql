var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body)
      .then(() => {
        res.status(201);
        res.end();
      })
      .catch((err) => {
        console.log(err);
      });
  } // a function which handles posting a message to the database
};
