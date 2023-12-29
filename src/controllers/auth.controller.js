const asyncHandler = require('express-async-handler');
const Student = require('../models/students.model');
const HttpError = require('../../Errors/HttpError');
const bcrypt = require('bcrypt');

const register = asyncHandler(async (req, res, next) => {
    const { email, password, firstname, lastname } = req.body;

    if (await Student.findOne({ email })) {
        return next(new HttpError("Email Already Exist", 403));
    }

    const student = await Student.create({ email, password, firstname, lastname })

    sendTokenResponse(student, 200, res);
})

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new HttpError('Please Provide an Email and Password', 400));
    }

    const student = await Student.findOne({ email }).select('+password');

    if (!student) {
        return next(new HttpError('Email Does Not Exist Please Register First', 401));
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
        return next(new HttpError('Wrong email or password', 401));
    }

    sendTokenResponse(student, 200, res);
});

const getMe = asyncHandler(async (req, res, next) => {

    const student = await Student.findById(req.student.id);
    res.status(200).json({
        success: true,
        user: student,
    });

});

const sendTokenResponse = (student, statusCode, res) => {

    const token = student.getSignedJwtToken();

    res.status(statusCode).json({
        success: true,
        token,
    });
};

module.exports = { login, register, getMe };

