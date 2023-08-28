const express = require('express');
const saveClient = require('../controllers/saveClient');
const retreiveClients = require('../controllers/retreiveClients');
const createInvoice = require('../controllers/createInvoice');
const invoiceRouter = express.Router();



invoiceRouter.post('/clients', saveClient);
invoiceRouter.get('/clients', retreiveClients);
invoiceRouter.post('/invoices/:id', createInvoice);

module.exports = invoiceRouter;


