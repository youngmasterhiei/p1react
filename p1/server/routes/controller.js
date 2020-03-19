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
        db.user.create(userInfo)
    
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

// error is not coming back however if i switch it to a get request ill get errors but ill need to use params to send the username 
    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userInfo
    });
  })(req, res, next);
  
};









// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

