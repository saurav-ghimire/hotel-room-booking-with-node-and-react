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
}, { timestamps: true });

const additionalServiceModel = mongoose.model('roomsAdditionalServices', additionalServiceSchema);

module.exports = additionalServiceModel;
