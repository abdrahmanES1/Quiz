
const asyncHandler = require('express-async-handler');
const Exam = require('../models/exams.model');

const getAllExams = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;

    res.status(200).send({
        "success": true,
        
    });
})

const getExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        "success": true,
    });
});

const deleteExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true
    });

});

const modifyExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true,

    });
});




module.exports = { getAllExams, getExam, deleteExam, modifyExam };
    
    