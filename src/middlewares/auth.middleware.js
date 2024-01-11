const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const asyncHandler = require('express-async-handler');
const UnauthorizedError = require('../../Errors/UnauthorizedError');
const ForbiddenError = require('../../Errors/ForbiddenError')

const enableProtection = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) { return next(new UnauthorizedError("Not authorized to access this route and token not exist")) }

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_TOKEN);
        const user = await User.findById(decoded.id);

        if (user) {
            req.user = user;
        }

    } catch (error) {
        return next(new UnauthorizedError("Not authorized to access this route"))
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
            return next(new ForbiddenError(`${req.user.role} role is not authorized to access this route`))
        }
        next();
    }
}
const authorizeTeacher = (...roles) => {
    return async (req, res, next) => {
        if (!roles.includes(req.teacher.role)) {
            return next(new ForbiddenError(`${req.teacher.role} role is not authorized to access this route`))
        }
        next();
    }
}

module.exports = { enableProtection, authorize }