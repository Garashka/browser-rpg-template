const db = require("../models");


exports.listUsers = (req, res) => {
  db.user.findAll({ raw: true })
    .then(function (data) {
      res.status(200).send(data);
    })
};
