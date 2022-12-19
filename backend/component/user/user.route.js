const express = require('express');
const router = express.Router()
const userController = require('./user.controller')

router.route('/all')
    .get(userController.getAllUser)
router.route('/:id')
    .get(userController.getUserWithId)
    .put(userController.updateUserWithId)
    .delete(userController.deleteUserWithId)

module.exports = router;