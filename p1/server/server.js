const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const db = require("./models");
const apiRoutes = require("./routes/apiRoutes.js");
const passport = require("passport");
const localLoginStrategy = require("../server/config/local-login");
app.use(passport.initialize());
app.use(passport.session());
passport.use("local-login", localLoginStrategy);

const PORT = process.env.PORT || 5000;

const cors = require("cors");

db.sequelize.sync();
var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

// We need to use sessions to keep track of our user's login status

apiRoutes(app);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

// set port, listen for requests
