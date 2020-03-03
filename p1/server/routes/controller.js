const db = require("../models");
// require("./apiRoutes")(app);

const app = require("./apiRoutes");
const User = db.users;




// Create and Save a new Tutorial
exports.create = (req, res) => {
    console.log(req.body)
        // Validate request
        if (!req.body.email || !req.body.password) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
          return;
        }
      
        // Create a Tutorial
        const user = {
          email: req.body.email,
          password: req.body.password
        };
      
        // Save Tutorial in the database
        User.create(user)
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
    console.log("hello concurent test")
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

