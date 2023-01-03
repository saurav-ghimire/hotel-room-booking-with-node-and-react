const express = require('express')
const router = express.Router()
const multer = require("multer");

const serviceController = require('./additionalService.controller')

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
    { name: "serviceImage" }
]);

router.route('/')
    .get(authentication, authorization.editorChecker, serviceController.getAllAdditionalServices)
    .post(authentication, authorization.editorChecker, upload, serviceController.createAdditionalServices)
router.route('/:id')
    .get(authentication, authorization.editorChecker, serviceController.getAdditionalServicesWithId)
    .put(authentication, authorization.editorChecker, serviceController.updateAdditionalServiceWithId)
    .delete(authentication, authorization.editorChecker, serviceController.deleteAdditionalServiceWithId)
module.exports = router;