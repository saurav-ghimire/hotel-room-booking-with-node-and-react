const express = require('express')
const router = express.Router()
const multer = require('multer')

const roomTypeController = require('./roomType.controller')

const authentication = require('../../middlewares/authentication')
const authorization = require('../../middlewares/authorization')

router.route('/')
    .get(authentication, authorization.editorChecker, roomTypeController.getAllRoomTypes)
    .post(authentication, authorization.editorChecker, roomTypeController.createRoomType)

router.route('/:id')
    .get(authentication, authorization.editorChecker, roomTypeController.getRoomTypeWithId)
    .put(authentication, authorization.editorChecker, roomTypeController.updateRoomTypeWithId)
    .delete(authentication, authorization.editorChecker, roomTypeController.deleteRoomTypeWithId)

module.exports = router;