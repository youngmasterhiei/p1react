 
module.exports = (app, db) => {
  const users = require("./controller.js");
  const profile = require("./controller.js");
  const project = require("./controller.js");
  const cors = require("cors");
  const jwt = require('jsonwebtoken');




  const router = require("express").Router();
  router.use(cors());
  // Create a new Tutorial
  console.log("hello from apiRoutret");

  // Retrieve all users

  router.post("/newuser", cors(), users.create);

  // passes the request/response to controller.js using /login route
  router.post("/login", cors(), users.passportLogin);

  router.post("/profile", cors(), profile.createProfile);
  router.get("/auth/api/profile/:userId", cors(), profile.getProfile);

  router.post("/auth/api/project", cors(), project.createProject);
  router.get("/auth/api/project/:userId", cors(), project.getProjects);



  app.use("/", router);
};