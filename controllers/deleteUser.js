const User = require("../models/User");

const deleteUser = async (req, res) => {
    const userId = req.params.id;

    if (userId !== undefined) {
        await User.findByIdAndDelete({"_id": userId}).then((value) => {
            console.log(value);

            if (value !== null) {
                res.status(200).json({"message": "user deleted"})
            } else {
                res.status(400).json({"message": "user already deleted"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });
    }

}

module.exports = deleteUser;