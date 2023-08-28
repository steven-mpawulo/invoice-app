const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    client: {
        type: mongoose.Types.ObjectId,
        ref: "client"
    },
    item: [],
    rates: [],
    hours: [],
});


module.exports = mongoose.model('invoice', invoiceSchema);