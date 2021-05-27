const validation = require("../../helpers/validation");
const User = require("../../db/models/user");

async function loginUser(form) {
  const { nickname, password } = form;
  if (validation.isEmpty(nickname)) {
    return {
      data: { status: 404, message: "Не правильний нікнейм!" },
    };
  }
  let userModel = await User.findOne({ nickname });

  if (!userModel)
    return {
      data: { status: 404, message: "Користувача не знайдено!" },
    };
  if (!validation.isSame(password, userModel.password))
    return {
      data: { status: 404, message: "Не правильний пароль!" },
    };
  return {
    data: {
      status: 200,
      message: "Logined",
      user:{
        email:userModel.email,
        nickname:userModel.nickname,
        isBlocked:userModel.isBlocked,
        isSuperuser:userModel.isSuperuser
      },
    },
  };
}

module.exports = loginUser;