const express = require("express");
const autorization = require("./autorization");
const posts = require("./posts");
const users = require("./users");
const vocabulary = require("./vocabulary");


const router = express.Router();

router.use("/autorization", autorization);
router.use("/posts", posts);
router.use("/users", users);
router.use('/vocabulary',vocabulary)



module.exports = router;
