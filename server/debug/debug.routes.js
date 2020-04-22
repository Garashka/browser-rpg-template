const controller = require("./debug.controller");

module.exports = function (app) {
  app.get('/debug/listusers', controller.listUsers);
};