const { mongoose } = require("../config/db");

const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    filename: { type: String },
    path: { type: String },
    originalname: { type: String },
    code: { type: Number },
    description: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    created_at: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
  }
);

const ImageModel = mongoose.model("Image", imageSchema);

module.exports = ImageModel;
