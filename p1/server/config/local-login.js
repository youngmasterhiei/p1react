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

    return db.User.findOne({
      where: { email: userData.email }
    })
    .then(function(user) {
      userPass = userData.password;
      dataPass = user.dataValues.password;

      //     }).catch(function (err) {
      //       return res.status(400).send({'message': 'query is fail',err});

      //   });
      //       .then((property) => {
      //  if (property) {
      //   res.json({ status: true }); // send 200 response if record found
      //  } else {
      //   // What should be Status Code if record is not found.

      //left off here, working with replacing validpassword, maybe import bcrypt, working through the errors.
      // check if a hashed user's password is equal to a value saved in the database
      return db.User.build().validatePass(
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
          // const token = jwt.sign(payload, config.jwtSecret);
          const token = user.dataValues.id;

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


