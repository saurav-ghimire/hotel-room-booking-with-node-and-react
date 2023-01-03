const additionalServiceQuery = require('./additionalService.query');
function getAllAdditionalServices(req, res, next) {
    additionalServiceQuery.getAllAdditionalServiceQuery()
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}

function createAdditionalServices(req, res, next) {
    if (req.fileError) {
        return next({ msg: "Invalid  File Format" })
    }
    if (req.files) {
        if (req.files.serviceImage) {
            req.body.serviceImage = req.files.serviceImage[0].filename;
        }
    }
    additionalServiceQuery.createAdditionalServicesQuery(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}
function getAdditionalServicesWithId(req, res, next) {
    additionalServiceQuery.getAdditionalServiceWithId(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}
function updateAdditionalServiceWithId(req, res, next) {
    additionalServiceQuery.updateAdditionalServiceWithId(req.params.id, req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
}
function deleteAdditionalServiceWithId(req, res, next) {
    additionalServiceQuery.deleteAdditionalServiceWithId(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}
module.exports = {
    getAllAdditionalServices,
    createAdditionalServices,
    getAdditionalServicesWithId,
    updateAdditionalServiceWithId,
    deleteAdditionalServiceWithId
}