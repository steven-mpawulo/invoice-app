const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const invoiceRouter = require('./routes/invoiceRouter');

const app = express();

app.get('/', (req, res) => {
    res.json({"message": "welcome to my serever"});
});

app.use('/api/v1', invoiceRouter);

const port = process.env.PORT || 5001;

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("connected to database");
    app.listen(port, () => {
        console.log("server started");
    });
}).catch((e) => {
    console.log(e);
    console.log("failed to connect to database");
})
