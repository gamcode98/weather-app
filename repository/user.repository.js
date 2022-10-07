const UserModel = require("./../models/user");

const create = async (data) => {
  const user = await UserModel.create(data);
  return user;
};

const findOne = async (id) => {
  const user = await UserModel.findById(id);
  return user;
};

module.exports = {
  create,
  findOne,
};
