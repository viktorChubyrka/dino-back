const User = require("../../db/models/user");

module.exports = async function deleteUser(id) {
    const user = await User.deleteOne({_id:id});
    return user;
};