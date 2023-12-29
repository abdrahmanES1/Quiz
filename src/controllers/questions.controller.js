
const asyncHandler = require('express-async-handler');
const Question = require('../models/questions.model');

const getAllQuestions = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;

    res.status(200).send({
        "success": true,
        
    });
})

const getQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        "success": true,
    });
});

const deleteQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true
    });

});

const modifyQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true,

    });
});




module.exports = { getAllQuestions, getQuestion, deleteQuestion, modifyQuestion };
    
    