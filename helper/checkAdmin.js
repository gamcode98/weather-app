const { adminUsername, adminPassword } = require("../config");
const { register } = require("../repository/auth.repository");
const UserModel = require("../models/user");

const checkAdmin = async () => {
  const user = await UserModel.findOne({ adminUsername });
  if (!user) {
    const admin = { username: adminUsername, password: adminPassword };
    register(admin);
  }
};

module.exports = {
  checkAdmin,
};
