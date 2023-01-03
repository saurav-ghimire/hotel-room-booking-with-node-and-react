const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roomTypeSchema = new Schema({
    roomTypeName: {
        type: String,
        required: true
    },
    roomTypeDescription: {
        type: String
    },
    costPerNight: {
        type: Number,
        required: true
    },
    discountRate: {
        type: Number,
    },
    guests: {
        type: Number,
        required: true
    },
    roomSize: {
        type: Number,
        required: true
    },
    totalBed: {
        type: Number,
        required: true
    },
    bedSize: {
        type: String,
        required: true
    },
    additionalService: {
        type: Array
    },
}, { timestamps: true });

const roomTypeModel = mongoose.model('roomType', roomTypeSchema);

module.exports = roomTypeModel;
