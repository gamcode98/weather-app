const images = require("../data/images");
const ImageModel = require("./../models/image");

const checkImages = async () => {
  try {
    const result = await ImageModel.find();

    if (result.length === 0) {
      await ImageModel.insertMany(images);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { checkImages };
