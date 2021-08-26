const router = require('express').Router()
const { createDesign } = require('../controllers/designController');
const uploader = require('../helpers/cloudinary');

router.post('/create', uploader.single("imgDesign"), createDesign);

module.exports = router