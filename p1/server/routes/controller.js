const db = require("../models");
const passport = require("../config/passport")
// require("./apiRoutes")(app);
const cors = require("cors");

const app = require("./apiRoutes");
console.log("hello")





// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log("here")
    console.log(req.body)
 
    const userInfo = {
      email: req.body.email.toString(),
      password: req.body.password.toString()
    };
    console.log("start here")

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
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

