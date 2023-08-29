const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (token !== undefined){
       const verifiedUser = jwt.verify(token, process.env.SECRET_KEY);
       if (verifiedUser) {
        req.user = verifiedUser;
       } else {
        res.sendStatus(400);
       }

    } else {
        res.sendStatus(400);
    }

    next();
}

module.exports = verifyToken;