const { mongoose } = require('../config/db')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String },
    password: { type: String },
    created_at: { type: Date, default: Date.now() }
  },
  {
    versionKey: false
  }
)

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
