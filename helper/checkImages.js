const images = require('../data/images')
const { uploadImage } = require('../utils/cloudinary')
const ImageModel = require('./../models/image')

const checkImages = async () => {
  try {
    const result = await ImageModel.find()

    if (result.length === 0) {
      for await (const image of images) {
        const firstItem = await uploadImage(`uploads/${image.day.originalname}`)
        const secondItem = await uploadImage(`uploads/${image.night.originalname}`)

        await ImageModel.create({
          ...image,
          day: {
            originalname: image.day.originalname,
            path: firstItem.secure_url
          },
          night: {
            originalname: image.night.originalname,
            path: secondItem.secure_url
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { checkImages }
