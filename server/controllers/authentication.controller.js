const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/authentication.config")
const db = require("../db/testUsers");



exports.signup = (req, res) => {
  const result = db.addUser({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8)
  });
  if (result == true) {
    res.status(200).send({ message: "User was registered successfully" });
  } else {
    res.status(403).send({ message: "Unable to register user" });
  }
};

exports.signin = (req, res) => {
  console.log("Sign-in request received");

  let userdata = db.findUserByName(req.body.username);

  console.log(userdata);

  // User does not exist
  if (userdata == null) {
    console.log("Invalid login attempt - User doesn't exist");
    return res.status(404).send({
      message: "Username not found"
    });
  }

  if (bcrypt.compareSync(req.body.password, userdata.password)) {
    console.log("Valid login attempt");
    const token = jwt.sign({ id: userdata.id }, config.secret, {
      expiresIn: 86400 //1 day
    });

    // Valid login
    res.status(200).send({
      id: userdata.id,
      username: userdata.username,
      email: userdata.email,
      accessToken: token
    });

    // Incorrect password
  } else {
    console.log("Invalid login attempt - wrong password");
    return res.status(401).send({
      message: "Invalid password"
    });
  }
};