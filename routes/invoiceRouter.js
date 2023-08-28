const express = require('express');
const saveClient = require('../controllers/saveClient');
const retreiveClients = require('../controllers/retreiveClients');
const createInvoice = require('../controllers/createInvoice');
const deleteInvoice = require('../controllers/deleteInvoice');
const invoiceRouter = express.Router();



invoiceRouter.post('/clients', saveClient);
invoiceRouter.get('/clients', retreiveClients);
invoiceRouter.post('/invoices/:id', createInvoice);
invoiceRouter.delete('/invoices/:id', deleteInvoice);

module.exports = invoiceRouter;


