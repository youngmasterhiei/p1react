module.exports = (app, db) => {
  const users = require("./controller.js");
  const profile = require("./controller.js");
  const project = require("./controller.js");
  const events = require("./controller.js");

  const cors = require("cors");
  const jwt = require("jsonwebtoken");

  const router = require("express").Router();
  router.use(cors());


  router.post("/newuser", cors(), users.create);

  // passes the request/response to controller.js using /login route
  router.post("/login", cors(), users.passportLogin);
  // create profile, get specific profile
  router.post("/profile", cors(), profile.createProfile);
  router.get("/auth/api/profile/:userId", cors(), profile.getProfile);
  // create project, get users projects
  router.post("/auth/api/project", cors(), project.createProject);
  router.get("/auth/api/project/:userId", cors(), project.getProjects);
  // create event
  router.post("/auth/api/events", cors(), events.createEvent);
  // get events for that userId
  router.get("/auth/api/events/:userId", cors(), events.getEvents);
  //get all events
  router.get("/auth/api/events", cors(), events.getAllEvents);

  app.use("/", router);
};



