const Word = require("../../db/models/word");

module.exports = async function getAllWords() {
  const words = await Word.find();
  

  return words;
};