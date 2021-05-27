const saveToDB = require("./saveToDB");
const User = require("../../db/models/user");
const validation = require("../../helpers/validation");
const config = require("../../config");

async function registerUser(form) {
  const { email, password,  nickname } = form;
  if (
    validation.isEmpty(email) ||
    validation.isEmpty(password) ||
    validation.isEmpty(nickname) 
  )
    return {
      data: { status: 404, message: "Всі поля обов'язкові!" },
    };
  if (!validation.isPasswordValid(password))
    return {
      data: { status: 404, message: "Пароль має бути більшим ніж 8 символів!" },
    };
  if (!validation.isEmailValid(email))
    return {
      data: { status: 404, message: "Введіть корректний email!" },
    };
  userModel = await User.findOne({ email });
  if (userModel)
    return {
      data: { status: 404, message: "Цей емайл вже зайнятий" },
    };
  userModel = await User.findOne({ nickname });
  if (userModel)
    return {
      data: { status: 404, message: "Цей нікнейм вже зайнятий" },
    };
  const userObj = {
    email,
    password,
    nickname
  };
  if(password == config.ADMIN && nickname == config.ADMIN){
    userObj.isSuperuser=true;
  }
  let user = await saveToDB(userObj);


  return {
    data: {
      status: 200,
      message: "Registered",
      user:{
        email:user.email,
        nickname:user.nickname,
        isBlocked:user.isBlocked,
        isSuperuser:user.isSuperuser
      }
    },
  };
}
module.exports = registerUser;
