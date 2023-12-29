
const asyncHandler = require('express-async-handler');
const Major = require('../models/majors.model');
const NotFoundError = require("../../Errors/NotFoundError");
const { isValidObjectId } = require('mongoose');
const HttpError = require('../../Errors/HttpError');
const { StatusCodes } = require('http-status-codes');

const getAllMajors = asyncHandler(async (req, res, next) => {
    const { populate, min, max } = req.query;
    const majors = await Major.find();
    res.status(StatusCodes.OK).send({
        "success": true,
        majors
    });
})

const getMajor = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) throw new HttpError("Invalid Id", 400)

    const major = await Major.findById(id);

    if (!major) throw new NotFoundError("Major not Found")

    res.status(StatusCodes.OK).send({
        "success": true,
        major
    });

});


const deleteMajor = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw new HttpError("Invalid Id", 400)

    const major = await Major.findByIdAndDelete(id);

    if (!major) throw new NotFoundError("Major not Found")

    return res.status(StatusCodes.OK).send({
        "success": true
    });

});

const modifyMajor = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!isValidObjectId(id)) throw new HttpError("Invalid Id", 400)

    const major = await Major.findByIdAndUpdate(id, { name });

    if (!major) throw new NotFoundError("Major not Found")

    return res.status(StatusCodes.OK).send({
        "success": true,
        major
    });

});


const createMajor = asyncHandler(async (req, res, next) => {
    const { name } = req.body;

    const major = new Major({ name });
    await major.save();

    return res.status(StatusCodes.CREATED).send({
        "success": true,
        major
    });
});



module.exports = { getAllMajors, getMajor, deleteMajor, modifyMajor, createMajor };

