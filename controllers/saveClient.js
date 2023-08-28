const Client = require("../models/Client");

const saveClient = async (req, res) => {
    const body = req.body;

    if (Object.keys(body).length !== 0){

        if(body.fullName && body.email && body.phoneNumber) {
            const client = new Client({
                fullName: body.fullName,
                email: body.email,
                phoneNumber: body.phoneNumber,
            });
            await client.save().then((value) => {
                console.log(value);
                res.status(201).json({"message": "client saved", "client": value});
            })
        } else {
            res.status(400).json({"message": "please provide some data"});
        }
        


    } else {
        res.status(400).json({"message": "please provide some data"});
    }

}

module.exports = saveClient;