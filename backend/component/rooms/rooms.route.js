const express = require('express')
const router = express.Router()
const roomController = require('./rooms.controller')

router.route('/')
    .get(roomController.getAllRooms)
    .post(roomController.createRooms)

router.route('/:id')
    .get(roomController.getRoomWithId)
    .delete(roomController.deleteRoomWithId)
    .put(roomController.updateRoomWithId)


module.exports = router;