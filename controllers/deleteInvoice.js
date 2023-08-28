const Invoice = require("../models/Invoice");

const deleteInvoice = async (req, res) => {
    const invoiceId = req.params.id;
    console.log(invoiceId);
    if (invoiceId !== null) {
       await Invoice.findByIdAndDelete({'_id': invoiceId}).then((value) => {
            console.log(value);
            res.status(200).json({"message": "invoice successfully deleted"});
        }).catch((e) => {
            console.log(e);
            res.status(202).json({"message": "failed to delete the invoice"});
        });
    } else {
        res.status(400).json({"message": "something went wrong"});
    }
}

module.exports = deleteInvoice;