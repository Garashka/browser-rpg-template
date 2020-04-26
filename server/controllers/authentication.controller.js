const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/authentication.config")
const db = require("../models");



exports.signup = (req, res) => {
  db.user.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(() => {
      res.send({ message: "User was registered successfully" });
    })
    .catch(error => {
      res.send({ message: error.message })
    })
};

exports.signin = (req, res) => {
  console.log("Sign-in request received");

  let userdata = db.user.findOne({
    where: { username: req.body.username }
  }).then(userData => {
    if (userData) {
      if (bcrypt.compareSync(req.body.password, userData.password)) {
        console.log(`Successful login attempt by ${req.body.username}`);
        const token = jwt.sign({ id: userdata.id }, config.secret, {
          expiresIn: 86400 //1 day
        });
        res.status(200).send({
          id: userdata.id,
          username: userdata.username,
          email: userdata.email,
          accessToken: token
        });
      } else {
        console.log(`Invalid login attempt - Wrong password for ${req.body.username}`);
        return res.status(401).send({
          message: "Invalid password"
        });
      }
    } else {
      console.log(`Invalid login attempt - User ${req.body.username} doesn't exist`);
      return res.status(404).send({
        message: "Username not found"
      });
    }
  })
};