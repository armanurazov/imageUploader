const express = require('express');
const upload = require('./upload')
const router = express.Router();

router.get('/', (req,res) => {
    res.render('home', {imageList: upload.imageList, layout: 'main'});
})


module.exports = router;