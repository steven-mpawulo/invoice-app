const Invoice = require("../models/Invoice")

const getInvoices = async (req, res) => {
    await Invoice.find({}).then((value) => {
        console.log(value);
        res.status(200).json({"message": "all invoices fetched", "invoices": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "failed to fetch all invoices"});
    });
}

module.exports = getInvoices;