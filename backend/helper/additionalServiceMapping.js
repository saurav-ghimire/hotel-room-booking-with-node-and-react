module.exports = function (service, data) {

    if (data.name) {
        service.name = data.name
    }
    if (data.description) {
        service.description = data.description
    }
    if (data.serviceImage) {
        service.serviceImage = data.serviceImage
    }
    return service

}