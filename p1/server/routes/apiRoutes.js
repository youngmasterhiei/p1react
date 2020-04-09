module.exports = (app, db) => {
  const users = require("./controller.js");
  const profile = require("./controller.js");
  const project = require("./controller.js");
  const notification = require("./controller.js");

  const events = require("./controller.js");
  const eventAttendance = require("./controller.js");

  const cors = require("cors");
  const jwt = require("jsonwebtoken");

  const router = require("express").Router();
  router.use(cors());
  // login routes
  router.post("/newuser", cors(), users.create);
  router.post("/login", cors(), users.passportLogin);

  // profile routes
  router.post("/auth/api/profile", cors(), profile.createProfile);
  router.get("/auth/api/profile/:userId", cors(), profile.getProfile);
  router.put("/auth/api/profile", cors(), profile.updateProfile);

  // view a users profile
  router.get(
    "/auth/api/displayprofile/:userId",
    cors(),
    profile.getViewUserProfile
  );

  // create project, get users projects
  router.post("/auth/api/project", cors(), project.createProject);
  router.get("/auth/api/project/:userId", cors(), project.getProjects);
  router.get(
    "/auth/api/displayprojects/:userId",
    cors(),
    project.getViewUserProjects
  );

  // create event
  router.post("/auth/api/events", cors(), events.createEvent);
  // get events for that userId
  router.get("/auth/api/events/:userId", cors(), events.getEvents);
  //get all events
  router.get("/auth/api/events", cors(), events.getAllEvents);
  router.get("/auth/api/event/:eventId", cors(), events.getSingleEvent);

  //sign up for event
  router.post("/auth/api/joinevent", cors(), eventAttendance.joinEvent);
  //get all events user is attending
  router.get(
    "/auth/api/userAttendingEvents/:userId/:eventId",
    cors(),
    eventAttendance.getUserAttendingEvents
  );
  // get all users for specific event
  router.get(
    "/auth/api/userAttendingEvents/:eventId",
    cors(),
    eventAttendance.getAllAttendingEvent
  );

  router.post(
    "/auth/api/sendFriendRequest",
    cors(),
    notification.sendFriendRequest
  );

  router.get(
    "/auth/api/notifications/:userId",
    cors(),
    notification.getAllNotifications
  );

  router.post("/auth/api/addFriend", cors(), notification.addFriend);

  router.put(
    "/auth/api/updateNotification/:notifyId",
    cors(),
    notification.updateNotification
  );

  app.use("/", router);
};
