const User = require("../../db/models/user");

module.exports = async function blockUser(id) {
    let user = await User.findById(id);
    user.isBlocked = !user.isBlocked;
    await User.updateOne({_id:id},user)
    return user;
};