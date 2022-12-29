const roomQuery = require('./rooms.query');

function createRooms(req, res, next) {
    req.body.createdBy = req.loggedInUser;
    console.log(req.body)
    roomQuery.createRoomQuery(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}

function getAllRooms(req, res, next) {

    roomQuery.getAllRoomQuery(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}
let getRoomWithId = function (req, res, next) {

    roomQuery.getRoomWithId(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}
let updateRoomWithId = function (req, res, next) {

    roomQuery.updateRoomWithId(req.params.id, req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}
let deleteRoomWithId = function (req, res, next) {
    roomQuery.deleteRoomWithId(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}
let getRoomsOfLoggedInUser = function (req, res, next) {
    roomQuery.getLoggedInUserRooms(req)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}
module.exports = {
    createRooms,
    getAllRooms,
    getRoomWithId,
    deleteRoomWithId,
    updateRoomWithId,
    getRoomsOfLoggedInUser
}