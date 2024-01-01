const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const asyncHandler = require('express-async-handler');
const HttpError = require('../../Errors/HttpError');


const enableProtection = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) { return next(new HttpError("Not authorized to access this route and token not exist", 401)) }

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_TOKEN);
        const user = await User.findById(decoded.id);

        if (user) {
            req.user = user;
        }

    } catch (error) {
        return next(new HttpError("Not authorized to access this route", 401))
    }

    next();
})

/**
 * 
 * @param  {...String} roles 
*/

const authorize = (...roles) => {
    return async (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new HttpError(`${req.user.role} role is not authorized to access this route`, 403))
        }
        next();
    }
}

module.exports = { enableProtection, authorize }