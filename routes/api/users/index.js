const express = require("express");

const userController = require("../../../controller/userController");

const router = express.Router();


router.get("/get_all_users", async (req, res) => {
    let users = await userController.getAllUsers();
    res.send(users);
  });
  router.post("/delete", async (req, res) => {
    let users = await userController.deleteUser(req.body.id);
    res.send(users);
  });
  router.post("/block", async (req, res) => {
    let users = await userController.blockUser(req.body.id);
    res.send(users);
  });
  router.post("/set_superuser", async (req, res) => {
    let users = await userController.setSuperuser(req.body.id);
    res.send(users);
  });
  

module.exports = router;
