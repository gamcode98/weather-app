const { mongoose } = require("../config/db");

const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    code: { type: Number },
    description: { type: String },
    day: {
      originalname: { type: String },
      path: { type: String },
    },
    night: {
      originalname: { type: String },
      path: { type: String },
    },
    created_at: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
  }
);

const ImageModel = mongoose.model("Image", imageSchema);

module.exports = ImageModel;
