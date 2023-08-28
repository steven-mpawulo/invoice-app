const express = require('express');
const saveClient = require('../controllers/saveClient');
const invoiceRouter = express.Router();



invoiceRouter.post('/clients', saveClient);

module.exports = invoiceRouter;


