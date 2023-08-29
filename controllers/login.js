const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
    const body = req.body;
    console.log(body);

    if(Object.keys(body).length !== 0) {
        if (body.email && body.password) {
            await User.findOne({'email': body.email}).then(async (value) => {
                console.log(value);
                if (value !== null) {
                    await bcrypt.compare(body.password, value.password).then((value) => {
                        if(value){
                            // create token for user
                            const token = jwt.sign({"_id": value._id, "email": value.email}, process.env.SECRET_KEY, {expiresIn: '1d'});
                            res.status(200).json({"message": "user logged in successfully", "token": token});

                        } else {
                            res.status(400).json({"message": "passwords don't match"});
                        }
                    }).catch((e) => {
                        console.log(e);
                        res.status(400).json({"message": "failed to verify password"});
                    });
                } else {
                    res.status(400).json({"message": "user does not exist"});
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

module.exports = login;