const express = require('express');
const router = express.Router()
const userController = require('./user.controller')
const authentication = require('../../middlewares/authentication')
const authorization = require('../../middlewares/authorization')
router.route('/all')
    .get(authentication, authorization.editorChecker, userController.getAllUser)
router.route('/:id')
    .get(authentication, authorization.editorChecker, userController.getUserWithId)
    .put(authentication, authorization.editorChecker, userController.updateUserWithId)
    .delete(authentication, authorization.editorChecker, userController.deleteUserWithId)

module.exports = router;