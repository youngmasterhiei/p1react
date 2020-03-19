const jwt = require("jsonwebtoken");
const db = require("../models");
const PassportLocalStrategy = require("passport-local").Strategy;
const config = require("./db.config");

console.log("ran");
/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
  },
  (req, email, password, done) => {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
    // find a user by email address

    return db.user.findOne({
      where: { email: userData.email }
    })
    .then(function(user) {
      userPass = userData.password;
      dataPass = user.dataValues.password;


      return db.user.build().validatePass(
        userData.password,
        dataPass,
        (err, result) => {
          console.log(err);
          if (result == true) {
            console.log("Checked password, match.");
          } else if (!result) {
            console.log("no match");
            return done(err);
          }

          const payload = {
            sub: user._id
          };

          // create a token string
          const token = jwt.sign(payload, config.jwtSecret);
          // const token = user.dataValues.id;
         
          const data = {
            email: user.dataValues.email,
            id: user.dataValues.id
          };
          console.log(data);
          return done(null, token, data);
        }
      );
    }).catch(function (err) {
      console.log("not found");
      console.log(err)
      return err
  
  });
  }
);


