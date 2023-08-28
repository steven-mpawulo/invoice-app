const Client = require("../models/Client")

const retreiveClients = async (req, res) => {
    await Client.find({}).then((value) => {
        console.log(value);
        res.status(200).json({"message": "clients retreived", "clients": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "something went wrong"});
    });
}

module.exports = retreiveClients;