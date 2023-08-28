const Invoice = require("../models/Invoice");

const updateInvoice = async (req, res) => {
    const body = req.body;
    const invoiceId = new mongooose.Types.ObjectId(req.params.id);

    if (Object.keys(body).length !== 0) {
        if (invoiceId !== null) {
            await Invoice.findByIdAndUpdate({ '_id': invoiceId }, { $set: { "total": body.total } }, { $addToSet: { "items": body.items, "hours": body.hours, "rates": body.rates } }).then((value) => {
                console.log(value);
                res.status(200).json({"message": "invoice updated", "invoice": value});
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "something went wrong"});
            });
        }

    }
}