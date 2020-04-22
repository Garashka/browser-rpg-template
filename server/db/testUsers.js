// NB: this is volatile. I want to move to a proper database once I have some understanding of the models I want

const bcrypt = require("bcryptjs");


users = [
  {
    username: "test",
    password: bcrypt.hashSync("password", 8),
    id: 1
  }
];


exports.findUserByName = (username) => {
  return users.find(function (u) {
    return u.username == username;
  });
}

exports.addUser = (user) => {
  if (!this.findUserByName(user.username)) {
    user.id = users.length;
    users.push(user);
    console.log(`Added new user ${user.id} : ${user.username}`)
    return true;
  }
  return false;
};

exports.getUsers = () => {
  return users;
}