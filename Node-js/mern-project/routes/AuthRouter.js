const express = require('express')
const router = express.Router();

const AuthController = require('../controllers/AuthController')



router.post('/register', AuthController.authRegister)

router.get('/login',AuthController.authLogin)


module.exports = router
