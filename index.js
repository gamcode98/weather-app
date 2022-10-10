const express = require("express");
const cors = require("cors");
const { port, url } = require("./config");
const { connection } = require("./config/db");
const indexRouter = require("./routes/index");
const { checkAdmin } = require("./helper/checkAdmin");
const { checkImages } = require("./helper/checkImages");

connection();

checkAdmin();

checkImages();

const app = express();

app.use("/uploads", express.static("uploads"));

app.use(express.json());

app.use(cors());

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Listening: ${url}:${port}`);
});
