const db = require("../models");
const passport = require("passport")
// require("./apiRoutes")(app);





// Create and Save a new Tutorial
exports.create = (req, res) => {
 
    const userInfo = {
      email: req.body.email,
      password: req.body.password
    };
    console.log(userInfo)
        // Save Tutorial in the database
        db.User.create(userInfo)
    
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

exports.passportLogin = (req, res, next) => {
  console.log(req.body)
  console.log("hello")
    const userInfo = {
      email: req.body.email,
      password: req.body.password
    }
    console.log(userInfo)

    console.log("this far")
  return passport.authenticate('local-login', (err, token, userInfo) => {
    console.log(err);
    console.log("error^^^")
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }


    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userInfo
    });
  })(req, res, next);
  
};







// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    console.log("hello from controller")


    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

// Find a single Tutorial with an id


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

