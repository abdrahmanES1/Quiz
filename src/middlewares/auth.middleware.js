const jwt = require('jsonwebtoken');
const Student = require('../models/students.model');
const asyncHandler = require('express-async-handler');
const HttpError = require('../../Errors/HttpError');


const enableProtection = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) { return next(new HttpError("Not authorized to access this route and token not exist", 401)) }

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_TOKEN);
        const student = await Student.findById(decoded.id);

        if (student) {
            req.student = student;
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
        if (!roles.includes(req.student.role)) {
            return next(new HttpError(`${req.student.role} role is not authorized to access this route`, 403))
        }
        next();
    }
}
const authorizeTeacher = (...roles) => {
    return async (req, res, next) => {
        if (!roles.includes(req.teacher.role)) {
            return next(new HttpError(`${req.teacher.role} role is not authorized to access this route`, 403))
        }
        next();
    }
}

module.exports = { enableProtection, authorize }