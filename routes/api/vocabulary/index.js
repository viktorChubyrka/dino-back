const express = require("express");

const vocabularyController = require("../../../controller/vocabularyController");

const router = express.Router();


router.get("/words", async (req, res) => {
    let words = await vocabularyController.getAllWords();
    res.send(words);
  });
  router.post("/delete", async (req, res) => {
    let words = await vocabularyController.deleteWord(req.body.id);
    res.send(words);
  });
  router.post("/add", async (req, res) => {
    let words = await vocabularyController.addWord(req.body);
    res.send(words);
  });
 
  

module.exports = router;
