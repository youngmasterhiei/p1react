module.exports = (app, db) => {
  const users = require("./controller.js");

  const router = require("express").Router();

  // Create a new Tutorial
  console.log("hello again con test")
  console.log("hellllo thereer")
  // Retrieve all users
  router.get("/", users.findAll);

  router.post("/", users.create);



  // router.post("/user", function (req, res) {
  //   users.create(
  //     {
  //       //amir will need to confirm how to get the user id for this kind of process
  //       email: req.body.email,
  //       password: req.body.password

  //     }).then(function (data) {
  //       res.json(data);
  //     });
  // });

  // Retrieve all published users
//   // router.get("/published", users.findAllPublished);

//   // Retrieve a single Tutorial with id
//   router.get("/:id", users.findOne);

//   // Update a Tutorial with id
//   router.put("/:id", users.update);

//   // Delete a Tutorial with id
//   router.delete("/:id", users.delete);

//   // Create a new Tutorial
//   router.delete("/", users.deleteAll);
app.use('/api/users', router);

};

