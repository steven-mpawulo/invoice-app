const express = require('express');
const saveClient = require('../controllers/saveClient');
const retreiveClients = require('../controllers/retreiveClients');
const createInvoice = require('../controllers/createInvoice');
const deleteInvoice = require('../controllers/deleteInvoice');
const updateInvoice = require('../controllers/updateInvoice');
const getInvoices = require('../controllers/getInvoices');
const invoiceRouter = express.Router();



invoiceRouter.post('/clients', saveClient);
invoiceRouter.get('/clients', retreiveClients);
invoiceRouter.post('/invoices/:id', createInvoice);
invoiceRouter.delete('/invoices/:id', deleteInvoice);
invoiceRouter.put('/invoices/:id', updateInvoice);
invoiceRouter.get('/invoices', getInvoices);


module.exports = invoiceRouter;


