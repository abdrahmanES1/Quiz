
const asyncHandler = require('express-async-handler');
const Exam = require('../models/exams.model');
const Question = require("../models/questions.model");
const Major = require("../models/majors.model");
const NotFoundError = require("../../Errors/NotFoundError");
const { StatusCodes } = require('http-status-codes');
const { Types } = require('mongoose');

const getAllExams = asyncHandler(async (req, res, next) => {

    const { populate, min, max } = req.query;

    const exams = await Exam.find({}).populate(populate).sort({ createdAt: -1 });
    res.status(StatusCodes.OK).json({
        success: true,
        exams
    });
})

const getExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const exam = await Exam.aggregate(
        [
            {
                $match: {
                    _id: new Types.ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: 'questions',
                    localField: '_id',
                    foreignField: 'exam',
                    as: 'questions'
                }
            }
        ]
    );



    // if (!exam) {
    //     return next(new NotFoundError());
    // }

    res.status(StatusCodes.OK).send({
        "success": true,
        exam: exam[0]
    });
});

const deleteExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deletedExam = await Exam.findByIdAndDelete(id);

    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Exam deleted successfully'
    });

});

const modifyExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!await Exam.findById(id)) {
        return next(new NotFoundError('Exam not found'));
    }

    await Exam.updateOne({ "_id": id }, { name, description });
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Exam updated successfully',
    });
});

const addExam = asyncHandler(async (req, res, next) => {
    const { name, description, major, deadline } = req.body;

    if (!await Major.findById(major)) {
        return next(new NotFoundError("No major found match this id : " + exam));
    }

    const exam = new Exam({
        name: name,
        description: description,
        major: major,
        deadline: deadline,
        createdBy: req.user._id
    })

    await exam.save();

    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Exam added successfully',
        exam
    })
});


module.exports = { getAllExams, getExam, deleteExam, modifyExam, addExam };