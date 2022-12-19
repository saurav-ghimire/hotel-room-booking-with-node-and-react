const express = require('express');
const router = express.Router()
const authController = require('./auth.controller')

router.get('/login', authController.loginPage)
router.post('/login', authController.loginProcess)

router.get('/register', authController.registerPage)
router.post('/register', authController.registerProcess)

router.get('/forget-password', authController.forgetPasswordPage)
router.post('/reset-password', authController.resetProcess)

module.exports = router;