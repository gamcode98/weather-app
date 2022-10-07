const ImageModel = require("./../models/image");

const create = async (data) => {
  const image = await ImageModel.create(data);
  return image;
};

const findByCode = async (code) => {
  const image = await ImageModel.findOne({ code });
  return image;
};

const getAll = async () => {
  const images = await ImageModel.find();
  return images;
};

module.exports = {
  create,
  findByCode,
  getAll,
};
