 
module.exports = (app, db) => {
  const users = require("./controller.js");
  var cors = require("cors");

  const router = require("express").Router();
  router.use(cors());
  // Create a new Tutorial
  console.log("hello from apiRoutret");

  // Retrieve all users
  router.get("/", users.findAll);

  router.post("/newuser", cors(), users.create);

  // app.post("/auth/api/comment/:post_id", function (req, res) {
  //   db.comment.create(
  //     {
  //       post_id: req.params.post_id,
  //       user_id: req.body.user_id,
  //       title: req.body.title,
  //       content: req.body.content,
  //       status: 'In Review'
  //     })
  //     .then(function (dbcomment) {
  //       res.json(dbcomment);
  //     });
  // });

  //create event

  app.use("/", router);
};