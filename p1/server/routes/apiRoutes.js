 
module.exports = (app, db) => {
  const users = require("./controller.js");
  const cors = require("cors");
  const jwt = require('jsonwebtoken');




  const router = require("express").Router();
  router.use(cors());
  // Create a new Tutorial
  console.log("hello from apiRoutret");

  // Retrieve all users
  router.get("/", users.findAll);

  router.post("/newuser", cors(), users.create);
  // passes the request/response to controller.js using /login route
  router.post("/login", cors(), users.passportLogin);




  app.use("/", router);
};