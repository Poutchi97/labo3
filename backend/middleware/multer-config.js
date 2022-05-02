const multer = require("multer");

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        // const ext = MIME_TYPES[file.mimetype];

        callback(null, Date.now() + file.originalname);
    }
});

module.exports = multer({ storage: storage, limits: { fieldSize: 10 * 1024 * 1024 } }).single('filename');