const express = require('express');
const invoiceRouter = express.Router();

invoiceRouter.get('/', (req, res) => {
    res.json({"message": "started invoice router"});
});

module.exports = invoiceRouter;


