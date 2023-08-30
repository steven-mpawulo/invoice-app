const User = require("../models/User");

const updateUser = (req, res) => {
    const body = req.body;
    console.log(body);
    const userId = req.params.id;
    console.log(userId);

    if (Object.keys(body).length !== 0){
        if (userId !== null) {
            if (body.fullName && body.email) {
                User.findByIdAndUpdate({'_id': userId}, {$set : {"fullName": body.fullName, "email": body.email}}, {new: true}).then((value) => {
                    console.log(value);
                    res.status(201).json({"message": "user updated", "user": value});

                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({"message": "something went wrong"});
                });
    
            } else {
                res.status(400).json({"message": "please provide some data"});
            }
        } else {
            res.status(400).json({"message": "please attach your id"});
        }
       

    } else {
        res.status(400).json({"message": "please provide some data"})
    }

}

module.exports = updateUser;