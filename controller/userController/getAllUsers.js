const User = require("../../db/models/user");

module.exports = async function getAllUsers() {
  const users = await User.find();
  

  return users;
};