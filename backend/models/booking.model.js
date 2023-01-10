const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room',
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    numGuests: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isPayment: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'confirmed', 'cancelled']
    }
});

module.exports = mongoose.model('booking', BookingSchema);