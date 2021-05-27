const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: String,
  email: String,
  nickname: String,
  isBlocked:{
    type:Boolean,
    default:false
  },
  isSuperuser:{
    type:Boolean,
    default:false
  },
});

module.exports = mongoose.model("Users", userSchema);
