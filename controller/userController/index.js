const login = require("./login");
const registration = require("./registration");
const getAllUsers = require("./getAllUsers");
const deleteUser = require("./deleteUser");
const blockUser = require("./blockUser");
const setSuperuser = require("./setSuperuser")



module.exports = {
  login,
  registration,
  getAllUsers,
  deleteUser,
  blockUser,
  setSuperuser
};