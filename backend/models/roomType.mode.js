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
    costPerExtraHour: {
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
    children: {
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
    totalRooms: {
        type: Number,
    },
    bedSize: {
        type: String,
        required: true
    },
    additionalService: {
        type: Array
    },
});

const roomTypeModel = mongoose.moodel('roomType', roomTypeSchema);

exports.module = { roomTypeModel }
