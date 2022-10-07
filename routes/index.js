const express = require("express");
const router = express.Router();

const imagesRouter = require("./image.routes");

router.use("/images", imagesRouter);

module.exports = router;
