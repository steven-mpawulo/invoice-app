const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        
    },

    phoneNumber: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('client', clientSchema);