
const asyncHandler = require('express-async-handler');
const Respons = require('../models/responses.model');

const getAllResponses = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;

    res.status(200).send({
        "success": true,
        
    });
})

const getRespons = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        "success": true,
    });
});

const deleteRespons = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true
    });

});

const modifyRespons = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true,

    });
});




module.exports = { getAllResponses, getRespons, deleteRespons, modifyRespons };
    
    