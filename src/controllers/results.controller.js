
const asyncHandler = require('express-async-handler');
const Result = require('../models/results.model');
const NotFoundError = require('../../Errors/NotFoundError')
const BadRequestError = require('../../Errors/BadRequestError')
const getAllResultsForExam = asyncHandler(async (req, res, next) => {
    const { populate, min, max } = req.query;
    const { id } = req.params;

    const results = await Result.find({ "exam": id }).populate("user");

    if (!results) return res.send({ success: false, message: "No one passed the exam" });

    res.status(200).send({
        "success": true,
        results
    });
})

const getResultsForStudent = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const results = await Result.find({ "user": id }).populate("exam");
    if (!results || results.length === 0) return res.send({ success: false, message: "U didn't pass any exam" })
    res.status(200).send({
        "success": true,
        results
    });
});


const deleteResult = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const deletedResult = await Result.findByIdAndDelete(id);
    return res.status(200).send({
        "success": true,
        message: "Result deleted succesfuly"
    });

});

const modifyResult = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { grade } = req.body;

    if (!await Result.findById(id)) return next(new NotFoundError('Result not found'));

    await Result.updateOne({ "_id": id }, { grade });
    res.status(200).send({
        success: true,
        message: "Result updated succesfuly"
    });
});

const createResult = asyncHandler(async (req, res, next) => {
    const { user, exam, grade, createdBy } = req.body;


    const resultIsExits = Result.findOne({ user, exam });
    if (resultIsExits) {
        return next(new BadRequestError("you've already pass this exam"))
    }
    const result = new Result({
        user,
        exam,
        grade,
        createdBy
    })

    await result.save();
    return res.status(200).send({
        "success": true,
        result
    });
});



module.exports = { getAllResultsForExam, getResultsForStudent, deleteResult, modifyResult, createResult };