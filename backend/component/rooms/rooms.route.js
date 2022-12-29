const express = require('express')
const router = express.Router()
const roomController = require('./rooms.controller')

const authentication = require('../../middlewares/authentication')
const authorization = require('../../middlewares/authorization')

router.route('/')
    .get(authentication, authorization.editorChecker, roomController.getAllRooms)
    .post(authentication, authorization.editorChecker, roomController.createRooms)

router.route('/loggedinuser-rooms')
    .get(authentication, authorization.editorChecker, roomController.getRoomsOfLoggedInUser)
router.route('/:id')
    .get(authentication, authorization.editorChecker, roomController.getRoomWithId)
    .delete(authentication, authorization.editorChecker, roomController.deleteRoomWithId)
    .put(authentication, authorization.editorChecker, roomController.updateRoomWithId)


module.exports = router;