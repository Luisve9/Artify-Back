const router = require('express').Router()
const { contactUser } = require('../controllers/userController');

router.post('/sendMail/:email/:userContact', contactUser);

module.exports = router