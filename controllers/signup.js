const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const body = req.body;
    console.log(body);

    if (Object.keys(body).length !== 0){
        if (body.fullName && body.email && body.password) {
            const hashedPassword = await bcrypt.hash(body.password, 10);

            const user = new User({
                "fullName": body.fullName,
                "email": body.email,
                "password": hashedPassword,
            });

            user.save().then((value) => {
                console.log(value);
                if (value) {
                     // create token for user
                     const token = jwt.sign({"_id": value._id, "email": value.email}, process.env.SECRET_KEY, {expiresIn: '1d'});
                    res.status(201).json({"message": "user created", "user": value, "token": token});
                } else {
                    res.status(400).json({"message": "failed to save user"});
                }
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "something went wrong"});
            });

        } else {
            res.status(400).json({"message": "please provide some data"});
        }

    } else {
        res.status(400).json({"message": "please provide some data"});
    }
}

module.exports = signup;