const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const postSchema = new Schema({
  title: { type: String, default: "" },
  bodyText: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  comments: { type: Array, default: [] },
  data:{type:Number}
});

module.exports = mongoose.model("Posts", postSchema);
