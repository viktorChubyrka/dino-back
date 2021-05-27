const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const wordSchema = new Schema({
  word: { type: String, default: "" },
  description: { type: String, default: "" },
});

module.exports = mongoose.model("Words", wordSchema);
