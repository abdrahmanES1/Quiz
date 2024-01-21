const asyncHandler = require('express-async-handler');
const User = require('../models/users.model');
const BadRequestError = require('../../Errors/BadRequestError');
const HttpError = require('../../Errors/HttpError');
const UnauthorizedError = require('../../Errors/UnauthorizedError');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const register = asyncHandler(async (req, res, next) => {
    const { email, password, firstname, lastname, role, major } = req.body;

    if (await User.findOne({ email })) {
        return next(new HttpError("Email Already Exist", 403));
    }

    const user = await User.create({ email, password, firstname, lastname, role, major, createdBy: req.user._id })
    res.status(statusCode).json({
        success: true,
        user
    });

})

const refreshToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) { return next(new UnauthorizedError("Not authorized to access this route and token not exist")) }
    try {
        const decoded = await jwt.verify(token, process.env.REFRESH_SECRET_TOKEN);
        const user = await User.findById(decoded.id);

        const refreshedToken = user.getSignedJwtToken();
        res.send({
            accessToken: refreshedToken,
        });
    } catch (error) {
        return next(new UnauthorizedError(error?.message))
    }

})

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new BadRequestError('Please Provide an Email and Password'));
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new BadRequestError('Email Does Not Exist Please Register First'));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return next(new BadRequestError('Wrong email or password'));
    }

    sendTokenResponse(user, 200, res);
});

const getMe = asyncHandler(async (req, res, next) => {

    const user = await User.findById(req.user.id).populate('major');
    res.status(200).json({
        success: true,
        user: user,
    });

});

const sendTokenResponse = (user, statusCode, res) => {

    const token = user.getSignedJwtToken();
    const refreshToken = user.getRefreshJwtToken();

    res.status(statusCode).json({
        success: true,
        token,
        refreshToken
    });
};

module.exports = { login, register, getMe, refreshToken };

