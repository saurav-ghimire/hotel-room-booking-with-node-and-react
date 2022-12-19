const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const additionalServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    serviceImage: {
        type: String
    },
});

const additionalServiceModel = mongoose.moodel('roomsAdditionalServices', additionalServiceSchema);

exports.module = { additionalServiceModel }
