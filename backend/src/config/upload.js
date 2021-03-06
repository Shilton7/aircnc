const multer = require('multer')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','..', 'uploads'),
        filename: (req, file, cb) => {
            const extension = path.extname(file.originalname)
            const name = path.basename(file.originalname, extension)
            //const name = path.basename(file.originalname, extension).replace(" ", "-");

            cb(null, `${name}-${Date.now()}${extension}`)
        }
    })
}