const asyncHandler = require('express-async-handler');
const User = require('../models/users.model');

const getAllUsers = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;
    res.status(200).send({
        "success": true,
        
    });
})

const getUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        "success": true,
    });
});

const deleteUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true
    });

});

const modifyUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true,

    });
});




module.exports = { getAllUsers, getUser, deleteUser, modifyUser };
    
    