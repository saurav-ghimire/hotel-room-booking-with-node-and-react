const roomTypeQuery = require('./roomType.query');

function getAllRoomTypes(req, res, next) {
    roomTypeQuery.getAllRoomTypeQuery()
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}
function createRoomType(req, res, next) {
    roomTypeQuery.createRoomTypeQuery(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}
function getRoomTypeWithId(req, res, next) {
    roomTypeQuery.getRoomTypeWithId(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}
function updateRoomTypeWithId(req, res, next) {

    roomTypeQuery.updateRoomTypeWithId(req.params.id, req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}
function deleteRoomTypeWithId(req, res, next) {
    roomTypeQuery.deleteRoomTypeWithId(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}
module.exports = {
    getAllRoomTypes, createRoomType, getRoomTypeWithId, updateRoomTypeWithId, deleteRoomTypeWithId
}