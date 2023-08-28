const express = require('express');
const saveClient = require('../controllers/saveClient');
const retreiveClients = require('../controllers/retreiveClients');
const invoiceRouter = express.Router();



invoiceRouter.post('/clients', saveClient);
invoiceRouter.get('clients', retreiveClients);

module.exports = invoiceRouter;


