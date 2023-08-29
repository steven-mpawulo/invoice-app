const Client = require("../models/Client");

const updateClient = async (req, res) => {
    const body = req.body;
    console.log(body);
    const clientId = req.params.id;
    console.log(clientId);

    if (Object.keys(body).length !== 0){
        if (body.fullName && body.email && body.phoneNumber) {
            await Client.findByIdAndUpdate({'_id': clientId}, {$set: {"fullName": body.fullName, "email": body.email, "phoneNumber": body.phoneNumber} }, {new: true}).then((value) => {
                console.log(value);
                res.status(201).json({"message": "client updated", "client": value});
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "failed to update client"});
            });
        } else {
            res.status(400).json({"message": "pleaase provide some data"});
        }

    } else {
        res.status(400).json({"message": "please provide some datat"});
    }
}


module.exports = updateClient;