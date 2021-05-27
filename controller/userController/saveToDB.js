const User = require("../../db/models/user");

module.exports = async function saveToDB(UserObj) {
  const newUser = new User({
    email: UserObj.email,
    password: UserObj.password,
    nickname:UserObj.nickname,
    isSuperuser:UserObj.isSuperuser
  });

  const save = await newUser.save();
  

  return save;
};