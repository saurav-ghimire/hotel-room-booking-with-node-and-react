const mongoose = require("mongoose");
const userModel = require('../user/user.model')
const Schema = mongoose.Schema;
const roomSchema = new Schema({
    roomTitle: {
        type: String,
        required: true
    },
    roomDescription: {
        type: String
    },
    roomNumber: {
        type: Number,
    },
    roomType: {
        type: String,
    },
    thumbnailImage: {
        type: String,
    },
    GalleryImages: [String],
    isBooked: {
        type: Boolean
    },
    bookedFirstDate: {
        type: Date
    },
    bookedLastDate: {
        type: Date
    },
    createdBy: [{ type: Schema.Types.ObjectId, ref: 'users' }]
}, { timestamps: true });
const roomModel = mongoose.model("room", roomSchema);
module.exports = roomModel;


