
const asyncHandler = require('express-async-handler');
const Major = require('../models/majors.model');
const NotFoundError = require("../../Errors/NotFoundError");
const { isValidObjectId } = require('mongoose');
const mongoose = require('mongoose');
const HttpError = require('../../Errors/HttpError');
const { StatusCodes } = require('http-status-codes');

const getAllMajors = asyncHandler(async (req, res, next) => {
    const { populate, min, max } = req.query;

    const majors = await Major.aggregate( [
        {
            $lookup: {
                from: 'users',
                localField: '_id',
                foreignField: 'major',
                as: 'users'
            }
        },
        {
            $lookup: {
                from: 'exams',
                localField: '_id',
                foreignField: 'major',
                as: 'exams'
            }
        },
        { $unset: 'users.password' }
    
    ])
    // const majors = await Major.find();
    res.status(StatusCodes.OK).send({
        "success": true,
        majors
    });
})

const getMajor = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) throw new HttpError("Invalid Id", 400)

    const major = await Major.aggregate( [
        { $match: { _id : new mongoose.Types.ObjectId(id)  } },
        
        {
            $lookup: {
                from: 'exams',
                localField: '_id',
                foreignField: 'major',
                as: 'exams'
            }
        }    
    ])
    res.status(StatusCodes.OK).send({
        success: true,
        major: major[0]
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


const getMajorUsers = asyncHandler(async (req,res,next) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) throw new HttpError("Invalid Id", 400);

    const major = await Major.aggregate( [
        { $match: { "_id" : new mongoose.Types.ObjectId(id) } },
        {
            $lookup: {
                from: 'users',
                localField: '_id',
                foreignField: 'major',
                as: 'users'
            }
        },
        
        { $unset: 'users.password' }
    ])
    if (!major || major.length === 0) {
        return res.status(StatusCodes.NOT_FOUND).send({
            success: false,
            message: 'Major not found'
        });
    }

    const users = major[0].users;
    return res.status(StatusCodes.OK).send({
        success: true,
        users
    });
})



module.exports = { getAllMajors, getMajor, deleteMajor, modifyMajor, createMajor, getMajorUsers };

