const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true
    },
    phone: { type: Number, required: true },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String
    },
    role: {
        type: String,
        enum: ['super-admin', 'admin', 'manager'],
        default: 'manager'
    },
}, { timestamps: true });
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;


