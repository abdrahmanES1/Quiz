const jwt = require("jsonwebtoken")
module.exports = (user) => {
    const { _id, role } = user
    return jwt.sign({ id: _id, role }, process.env.REFRESH_SECRET_TOKEN, {
        expiresIn: process.env.REFRESH_JWT_EXPIRE_IN
    });
}