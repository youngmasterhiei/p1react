const db = require("../models");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/db.config");

// require("./apiRoutes")(app);

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const userInfo = {
    email: req.body.email,
    password: req.body.password
  };
  console.log(userInfo);
  // Save Tutorial in the database
  db.user.create(userInfo)

    .then(data => {
      const payload = {
        sub: data.dataValues.id
      };
      console.log(data.dataValues.id)
      console.log("users id")
      const token = jwt.sign(payload.sub, config.jwtSecret);

      res.send(token);
      console.log(token);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.passportLogin = (req, res, next) => {
  console.log(req.body);
  console.log("hello");
  const userInfo = {
    email: req.body.email,
    password: req.body.password
  };
  console.log(userInfo);

  console.log("this far");
  return passport.authenticate("local-login", (err, token, userInfo) => {
    console.log(err);
    console.log("error^^^");
    if (err) {
      if (err.name === "IncorrectCredentialsError") {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: "Could not process the form."
      });
    }

    // error is not coming back however if i switch it to a get request ill get errors but ill need to use params to send the username
    return res.json({
      success: true,
      message: "You have successfully logged in!",
      token,
      user: userInfo
    });
  })(req, res, next);
};

//profile create
exports.createProfile = (req, res) => {
  console.log(req.body.userId)
  let decoded = jwt.verify(req.body.userId, config.jwtSecret)
  console.log(decoded)
  console.log("decoded token")
  const profile = {
    fName: req.body.fName,
    lName: req.body.lName,
    city: req.body.city,
    st: req.body.st,
    speciality: req.body.speciality,
    github: req.body.github,
    linkedIn: req.body.linkedIn,
    bio: req.body.bio,
    userId: decoded
  };
  console.log(profile);
  // Save Tutorial in the database
  db.profile
    .create(profile)
    .then(data => {

      res.send(data);

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.getProfile = (req, res) => {
  console.log(req.params.userId)
  let decoded = jwt.verify(req.params.userId, config.jwtSecret)
  console.log(decoded)
  console.log("decoded token")

  // Save Tutorial in the database
  db.profile.findAll(
    {
      where: { userId: decoded }
    }).then(function (dbprofile) {

      console.log()
      delete dbprofile[0].dataValues.id
      delete dbprofile[0].dataValues.userId
      delete dbprofile[0].dataValues.updatedAt
      delete dbprofile[0].dataValues.deletedAt
      delete dbprofile[0].dataValues.createdAt


      res.json(dbprofile);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the profile."
      });
    });
};



// Update a Tutorial by the id in the request
exports.update = (req, res) => {};
