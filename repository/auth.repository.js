const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const UserModel = require("./../models/user");

const register = async (user) => {
  const hash = await bcrypt.hash(user.password, 10);
  const data = await UserModel.create({ ...user, password: hash });
  const newUser = setUserData(data);

  return newUser;
};

const compare = async (string, hash) => {
  return await bcrypt.compare(string, hash);
};

const setUserData = (user) => {
  const userData = {
    id: user._id,
    username: user.username,
  };
  return userData;
};

const createToken = (payload) => {
  const token = jwt.sign(payload, jwtSecret);
  return token;
};

const login = async (username, password) => {
  const user = await UserModel.findOne({ username });

  if (user && compare(password, user.password)) {
    const userData = setUserData(user);
    const token = createToken(userData);
    return {
      user: userData,
      token,
    };
  }
};

module.exports = {
  register,
  login,
};
