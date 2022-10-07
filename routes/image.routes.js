const express = require("express");
const router = express.Router();
const {
  createImage,
  findOneImage,
  getAllImages,
} = require("../controllers/image.controller");
const { upload } = require("../middleware/multerStorage");

router.post("/upload", upload.single("file"), createImage);

router.get("/", getAllImages);

router.get("/:id", findOneImage);

module.exports = router;
