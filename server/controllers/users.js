var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll()

      .then((data) => {
        res.json(data.map((obj) => (obj.name)));
      })

      .catch((err) =>
        console.log(err)
      );
  },
  post: function (req, res) {
    models.users.create(req.body.username)
      .then(() => {
        res.status(201);
        res.end();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
