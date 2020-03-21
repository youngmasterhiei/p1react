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
    dateOfBirth: req.body.dateOfBirth,
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




exports.createProject = (req, res) => {
  let decoded = jwt.verify(req.body.userId, config.jwtSecret)

  const project = {
    project1: req.body.project1,
    project2: req.body.project2,
    project3: req.body.project3,
    project4: req.body.project4,
    project5: req.body.project5,
    userId: decoded
  };
  console.log(project);
  // Save Tutorial in the database
  db.project
    .create(project)
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


exports.getProjects = (req, res) => {
  let decoded = jwt.verify(req.params.userId, config.jwtSecret)

  // Save Tutorial in the database
  db.project.findAll(
    {
      where: { userId: decoded }
    }).then(function (dbProject) {
      delete dbProject[0].dataValues.id
      delete dbProject[0].dataValues.userId
      delete dbProject[0].dataValues.updatedAt
      delete dbProject[0].dataValues.deletedAt
      delete dbProject[0].dataValues.createdAt
    
      res.json(dbProject);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the projects."
      });
    });
};


exports.createEvent = (req, res) => {
  let decoded = jwt.verify(req.body.userId, config.jwtSecret)

  const event = {
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    author: req.body.author,
    location: req.body.location,
    userId: decoded
  };
  console.log(event);
  // Save Tutorial in the database
  db.event
    .create(event)
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


exports.getEvents = (req, res) => {
  let decoded = jwt.verify(req.params.userId, config.jwtSecret)

  // Save Tutorial in the database
  db.event.findAll(
    {
      where: { userId: decoded }
    }).then(function (dbEvent) {
      delete dbEvent[0].dataValues.id
      delete dbEvent[0].dataValues.userId
      delete dbEvent[0].dataValues.updatedAt
      delete dbEvent[0].dataValues.deletedAt
      delete dbEvent[0].dataValues.createdAt
    
      res.json(dbEvent);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the projects."
      });
    });
};
