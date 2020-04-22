const db = require("../db/testUsers");

exports.listUsers = (req, res) => {
  res.status(200).send(db.getUsers());
};