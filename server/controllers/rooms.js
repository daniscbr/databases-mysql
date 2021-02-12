var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.rooms.getAll()

      .then((data) => {
        console.log(data[0].name);
        res.json(data.map((obj) => (obj.name)));
      })

      .catch((err) => {
        console.log(err);
      });
  },
  post: function (req, res) {
    models.rooms.create(req.body.roomName)
      .then(() => {
        res.status(201);
        res.end();
      })
      .catch((err) => {
        console.log(err);
      });

  }
};
