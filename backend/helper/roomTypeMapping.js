module.exports = function (rooms, data) {

    if (data.roomTypeName) {
        rooms.roomTypeName = data.roomTypeName
    }
    if (data.roomTypeDescription) {
        rooms.roomTypeDescription = data.roomTypeDescription
    }
    if (data.costPerNight) {
        rooms.costPerNight = data.costPerNight
    }
    if (data.discountRate) {
        rooms.discountRate = data.discountRate
    }
    if (data.guests) {
        rooms.guests = data.guests
    }
    if (data.roomSize) {
        rooms.roomSize = data.roomSize
    }
    if (data.totalBed) {
        rooms.totalBed = data.totalBed
    }
    if (data.bedSize) {
        rooms.bedSize = data.bedSize
    }
    if (data.additionalService) {
        rooms.additionalService = data.additionalService.split(',')
    }
    return rooms
}