const express = require("express");
const cors = require("cors");
const { port } = require("./config");
const { connection } = require("./config/db");
// const multer = require("multer");
const indexRouter = require("./routes/index");

connection();

const app = express();

app.use(express.json());

app.use(cors());

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     const extension = file.originalname.split(".").pop();
//     cb(null, `${Date.now()}.${extension}`);
//   },
// });

//midllware
// const upload = multer({ storage });

// app.post("/upload", upload.single("file"), (req, res) => {
//   console.log("req.file => ", req.file);
//   helperImg(req.file.path, `micro-resize-${req.file.filename}`, 20);
//   helperImg(req.file.path, `small-resize-${req.file.filename}`, 100);
//   helperImg(req.file.path, `medium-resize-${req.file.filename}`, 500);
//   helperImg(req.file.path, `large-resize-${req.file.filename}`, 1000);
//   res.send({ data: "Imagen cargada" });
// });

app.use("/", indexRouter);

app.listen(port, () => {
  console.log("Listening: http://localhost:" + port);
});
