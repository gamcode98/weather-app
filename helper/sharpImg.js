const sharp = require('sharp')

const helperImg = (filePath, filename, size = 300) => {
  return sharp(filePath).resize(size).toFile(`./optimize/${filename}`)
}

module.exports = {
  helperImg
}
