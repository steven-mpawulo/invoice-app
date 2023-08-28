const Invoice = require("../models/Invoice");
const mongoose = require('mongoose');

const createInvoice = (req, res) => {
    const body = req.body;
    console.log(body);
    const clientId = new mongoose.Types.ObjectId(req.params.id);

    if(Object.keys(body).length !== 0){
        const invoice = new Invoice({
            client: clientId,
            items: body.items,
            rates: body.rates,
            hours: body.hours,
            total: body.total
        });

        invoice.save().then((value) => {
            console.log(value);
            res.status(201).json({"message": "invoice created", "invoice": value});
        }).catch((e) => {

            res.status(400).json({"message": "failed to create invoice"});
        });
    } else {
        res.status(400).json({"message": "something went wrong"});
    }
}

module.exports = createInvoice;