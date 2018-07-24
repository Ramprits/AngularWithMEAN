var express = require("express");
var router = express.Router();
const Post = require("../models/post");

/* GET users listing. */
router.get("/", function(req, res, next) {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

/* POST users listing. */
router.post("/", function(req, res, next) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post
    .save()
    .then(postData => {
      res.status(201).json({ message: "Post added sucessfully" });
      console.log(post);
    })
    .cathch(error => {
      console.error(error);
    });
});

module.exports = router;
