const express = require("express");

const postsController = require("../../../controller/postsController");

const router = express.Router();

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpg");
  },
});

var upload = multer({ storage: storage });

var type = upload.single("file");

router.post("/create", type, async function (req, res) {
  let path = "https://dino-back.herokuapp.com/" + req.file.filename;
  let newPost = await postsController.createPost(req.body,path);
  res.send(newPost);
});

router.post("/update", type, async function (req, res) {
  let path = '';
  if(req.file){
    path = "https://dino-back.herokuapp.com/" + req.file.filename;
  }
  let updatetPost = await postsController.updatePost(req.body,path);
  res.send(updatetPost);
});

router.post("/comment", async (req, res) => {
  let message = await postsController.commentPost(req.body);
  res.send(message)
});
router.post("/delete_comment", async (req, res) => {
  let message = await postsController.deleteComment(req.body);
  res.send(message)
});
router.get("/all_posts", async (req, res) => {
  let posts = await postsController.getAllPosts();
  res.send(posts);
});
router.get("/post:id", async (req, res) => {
  let post = await postsController.getPost(req.params);
  res.send(post);
});

module.exports = router;
