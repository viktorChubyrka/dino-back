const Word = require("../../db/models/word");


module.exports = async function addWord(body) {
   let newWord = new Word({
    word:body.word,
    description:body.description
   })
   let res = await newWord.save();
   return res;
};