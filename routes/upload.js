const express = require('express');
const multer = require('multer');
const router = express.Router();

// multer settings

const imageMimeTypes = ['image/apng', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
const storageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storageEngine });

// routes configurations

router.get('/', (req,res) => {
    res.render('upload', {layout: 'main'});
})

router.post('/', upload.single('image'), async (req,res) => {
    const imageName = req.file.originalname;
    res.redirect('/upload');
})


module.exports = router;