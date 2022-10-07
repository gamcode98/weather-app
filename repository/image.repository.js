const ImageModel = require("./../models/image");

const create = async (data) => {
  const image = await ImageModel.create(data);
  return image;
};

const findOne = async (id) => {
  const image = await ImageModel.findById(id);
  return image;
};

const getAll = async () => {
  const images = await ImageModel.find();
  return images;
};

module.exports = {
  create,
  findOne,
  getAll,
};
