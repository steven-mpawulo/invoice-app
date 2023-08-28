const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.json({"message": "welcome to my serever"});
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log("server started");
});