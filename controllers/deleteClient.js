const Client = require("../models/Client");

const deleteClient = async (req, res) => {
    const clientId = req.params.id;
    console.log(clientId);
    if (clientId !== null) {
        await Client.findByIdAndDelete({'_id': clientId}).then((value) => {
            console.log(value);
            if (value !== null){
                res.status(200).json({"message": "client deleted", "client": value});
            } else {
                res.status(400).json({"message": "client already deleted"});
            }
        
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to delete client"});
        });

    } else {
        res.status(400).json({"message": "please provide an id for the client"});
    }

}

module.exports = deleteClient;