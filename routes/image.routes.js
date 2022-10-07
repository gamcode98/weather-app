const express = require("express");
const router = express.Router();
const {
  createImage,
  findOneImage,
  getAllImages,
} = require("../controllers/image.controller");
const authValidation = require("../middleware/authValidator");
const { upload } = require("../middleware/multerStorage");

// router.post("/upload", authValidation, upload.single("file"), createImage);
router.post("/upload", authValidation, upload.array("files", 3), createImage);

router.get("/", getAllImages);

router.get("/:id", findOneImage);

module.exports = router;
