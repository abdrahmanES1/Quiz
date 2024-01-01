
const asyncHandler = require('express-async-handler');
const Exam = require('../models/exams.model');
const Question = require("../models/questions.model")
const Response = require("../models/responses.model")
const NotFoundError = require("../../Errors/NotFoundError");

const getAllExams = asyncHandler(async (req, res, next) => {
    try {
        const { populate, min ,max } = req.query;
        
        // let query = {}
        // if (min) query.score = { $gte: min };
        // if (max) query.score = { $lte: max };
    
        const exams = await Exam.find({}).populate(populate);    
        res.status(200).json({
          success: true,
          exams
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching exams' });
    }
})

const getExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const exam = await Exam.findById(id).populate("questions");

    if (!exam) {
        return next(new NotFoundError());
    }

    res.status(200).send({
        "success": true,
        exam
    });
});

const deleteExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deletedExam = await Exam.findByIdAndDelete(id);
    
    // await Question.deleteMany({"exam":id})
    // for(const question of deleteExam.questions){
    //     await Response.deleteMany({"question" : question._id});
    // }

    res.status(200).json({
      success: true,
      message: 'Exam deleted successfully'
    });

});

const modifyExam = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const {name,description} = req.body;

    if(!await Exam.findById(id)) {
        return next(new NotFoundError('Exam not found'));
    }

    await Exam.updateOne({ "_id": id }, { name, description });
    res.status(200).json({
        success: true,
        message: 'Exam updated successfully',
      });
});

const addExam = asyncHandler(async (req,res,next) => {
    const { name, description } = req.body;

    const exam = new Exam({ 
        name : name,
        description : description,
    })          
    
    await exam.save();

    // const question = await Question.create({ email, password, firstname, lastname })

    res.status(200).json({
        success: true,
        message: 'Exam added successfully',
      });
});


module.exports = { getAllExams, getExam, deleteExam, modifyExam, addExam };
    
    