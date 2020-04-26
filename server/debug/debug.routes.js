const controller = require("./debug.controller");

module.exports = function (app) {
  console.log("listing users");
  app.get('/debug/listusers', controller.listUsers);
};
