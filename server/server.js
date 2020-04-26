const express = require("express");
const bodyParser = require("body-parser");
const bCrypt = require("bcryptjs");
const cors = require("cors");

const app = express();


var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop resync db');
  initial();
}).catch((error) => {
  console.log('Error syncing database');
})


app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

require("./routes/authentication.routes")(app);

if (app.get('env') == 'development') {
  console.log("Including debug routes");
  require("./debug/debug.routes")(app);
}

const User = db.user;

function initial() {
  User.create({
    username: "test",
    password: bCrypt.hashSync("password", 8),
    email: "none"
  }).then(function (result) {
    console.log('Inserted test user OK');
  })
    .catch(function (err) {
      console.log('Error insterting test user');
    })
}