const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'booking',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'confirmed', 'cancelled']
    }
});

module.exports = mongoose.model('order', OrderSchema);