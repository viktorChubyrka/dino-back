const Word = require("../../db/models/word");

module.exports = async function deleteWord(id) {
    const word = await Word.deleteOne({_id:id});
    return word;
};