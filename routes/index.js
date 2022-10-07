const express = require("express");
const router = express.Router();

const imagesRouter = require("./image.routes");

const authRouter = require("./auth.routes");

router.use("/images", imagesRouter);

router.use("/auth", authRouter);

module.exports = router;
