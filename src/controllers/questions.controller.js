
const asyncHandler = require('express-async-handler');
const Question = require('../models/questions.model');
const NotFoundError = require("../../Errors/NotFoundError");
const Response = require("../models/responses.model")


const getAllQuestions = asyncHandler(async (req, res, next) => {
    try {
        const { populate, min ,max } = req.query;
        
        const questions = await Question.find({}).populate(populate);    
        res.status(200).json({
          success: true,
          questions
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching exams' });
    }
})

const getQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const question = await Question.findById(id).populate("responses");

    if (!question) {
        return next(new NotFoundError());
    }

    res.status(200).send({
        "success": true,
        question
    });
});

const deleteQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);
    await Response.deleteMany({"question" : id})

    res.status(200).json({
      success: true,
      message: 'Question deleted successfully'
    });

});

const modifyQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const {name,description} = req.body;

    if(!await Question.findById(id)) {
        return next(new NotFoundError('Exam not found'));
    }

    await Question.updateOne({ "_id": id }, { name, description });
    res.status(200).json({
        success: true,
        message: 'Question updated successfully',
      });
});

const addQuestion = asyncHandler(async (req,res,next) => {
    const { name, description, exam } = req.body;

    const question = new Question({ 
        name : name,
        description : description,
        exam : exam
    })          
    
    await question.save();

    // const question = await Question.create({ email, password, firstname, lastname })

    res.status(200).json({
        success: true,
        message: 'Question added successfully',
      });
});


module.exports = { getAllQuestions, getQuestion, deleteQuestion, modifyQuestion, addQuestion };
    
    