const User = require("../models/User")

const getUsers = async (req, res) => {
    await User.find({}).then((value) => {
        console.log(value);
        res.status(200).json({"message": "all users fetched", "users": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "failed to fetch users"});
    });

}

module.exports = getUsers;