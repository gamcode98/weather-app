const { url } = require("../config");
const { helperImg } = require("../helper/sharpImg");
const {
  create,
  getAll,
  findByCode,
} = require("../repository/image.repository");

const createImage = async (req, res) => {
  try {
    const { code, englishDescription, spanishDescription, created_at } =
      req.body;

    // helperImg(req.file.path, `micro-resize-${req.file.filename}`, 20);
    // helperImg(req.file.path, `small-resize-${req.file.filename}`, 100);
    // helperImg(req.file.path, `medium-resize-${req.file.filename}`, 500);
    // helperImg(req.file.path, `large-resize-${req.file.filename}`, 1000)

    const data = {
      code,
      description: [englishDescription, spanishDescription],
      created_at,
      day: {
        originalname: req.files[0].originalname,
        path: url + "/uploads/" + req.files[0].filename,
      },
      night: {
        originalname: req.files[1].originalname,
        path: url + "/uploads/" + req.files[1].filename,
      },
    };

    const newImage = await create(data);
    return res.status(201).json(newImage);
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

const findOneImage = async (req, res) => {
  try {
    const { code } = req.params;

    const image = await findByCode(code);

    return res.status(200).json(image);
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await getAll();
    return res.status(200).json(images);
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  createImage,
  findOneImage,
  getAllImages,
};
