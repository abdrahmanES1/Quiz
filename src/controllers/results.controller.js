
const asyncHandler = require('express-async-handler');
const Result = require('../models/results.model');

const getAllResults = asyncHandler(async (req, res, next) => {
    const { populate, min, max } = req.query;

    res.status(200).send({
        "success": true,

    });
})

const getResult = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        "success": true,
    });
});

const deleteResult = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true
    });

});

const modifyResult = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true,

    });
});

const createResult = asyncHandler(async (req, res, next) => {
    const { user, exam, grade, createdBy } = req.body;

    return res.status(200).send({
        "success": true,
    });
});



module.exports = { getAllResults, getResult, deleteResult, modifyResult, createResult };

