const roomQuery = require('./rooms.query');

function createRooms(req, res, next) {
    if (req.fileError) {
        return next({ msg: "Invalid  File Format" })
    }
    if (req.files) {
        if (req.files.thumbnailImage) {
            req.body.thumbnailImage = req.files.thumbnailImage[0].filename;
        }
        if (req.files.GalleryImages) {
            var myImages = [];
            req.files.GalleryImages.forEach(function (item, index) {
                myImages.push(item.filename)
            })
            req.body.GalleryImages = myImages;
        }
    }
    req.body.createdBy = req.loggedInUser;
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