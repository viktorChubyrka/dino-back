const User = require("../../db/models/user");

module.exports = async function setSuperuser(id) {
    let user = await User.findById(id);
    user.isSuperuser = !user.isSuperuser;
    await User.updateOne({_id:id},user)
    return user;
};