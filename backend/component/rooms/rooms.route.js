const express = require('express')
const router = express.Router()
const multer = require("multer");
const roomController = require('./rooms.controller')

const authentication = require('../../middlewares/authentication')
const authorization = require('../../middlewares/authorization')

const myStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + "-" + file.originalname);
    }
});
function myFileFilter(req, file, cb) {
    var mimeType = file.mimetype.split("/")[0];
    if (mimeType == "image") {
        cb(null, true)
    } else {
        req.fileError = true;
        cb(null, false)
    }
}
const upload = multer({
    storage: myStorage,
    fileFilter: myFileFilter
}).fields([
    { name: "thumbnailImage" },
    { name: "GalleryImages" }
]);

router.route('/')
    .get(authentication, authorization.editorChecker, roomController.getAllRooms)
    .post(authentication, authorization.editorChecker, upload, roomController.createRooms)

router.route('/loggedinuser-rooms')
    .get(authentication, authorization.editorChecker, roomController.getRoomsOfLoggedInUser)
router.route('/:id')
    .get(authentication, authorization.editorChecker, roomController.getRoomWithId)
    .delete(authentication, authorization.editorChecker, roomController.deleteRoomWithId)
    .put(authentication, authorization.editorChecker, roomController.updateRoomWithId)


module.exports = router;