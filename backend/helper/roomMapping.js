module.exports = function (rooms, data) {

    if (data.roomTitle) {
        rooms.roomTitle = data.roomTitle
    }
    if (data.roomDescription) {
        rooms.roomDescription = data.roomDescription
    }
    if (data.roomNumber) {
        rooms.roomNumber = data.roomNumber
    }
    if (data.roomType) {
        rooms.roomType = data.roomType
    }
    if (data.thumbnailImage) {
        rooms.thumbnailImage = data.thumbnailImage
    }
    if (data.GalleryImages) {
        rooms.GalleryImages = data.GalleryImages
    }
    if (data.isBooked) {
        rooms.isBooked = data.isBooked
    }
    if (data.createdBy) {
        rooms.createdBy = data.createdBy
    }
    if (data.bookedFirstDate) {
        rooms.bookedFirstDate = data.bookedFirstDate
    }
    if (data.bookedLastDate) {
        rooms.bookedLastDate = data.bookedLastDate
    }
    return rooms

}