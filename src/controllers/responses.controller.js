
const asyncHandler = require('express-async-handler');
const Respons = require('../models/responses.model');

const getAllResponses = asyncHandler(async (req, res, next) => {
    try {
        const { populate, min ,max } = req.query;
        
        const responses = await Respons.find({}).populate(populate);    
        res.status(200).json({
          success: true,
          responses
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching responses' });
    }
})

const getRespons = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const response = await Respons.findById(id).populate("question");

    if (!response) {
        return next(new NotFoundError());
    }

    res.status(200).send({
        "success": true,
        response
    });
});

const deleteRespons = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deletedResponse = await Respons.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Response deleted successfully'
    });

});

const modifyRespons = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name, description, value } = req.body;

    if(!await Respons.findById(id)) {
        return next(new NotFoundError('Response not found'));
    }

    await Respons.updateOne({ "_id": id }, { name, description, value });
    res.status(200).json({
        success: true,
        message: 'Response updated successfully',
      });
});

const addResponse = asyncHandler(async (req,res,next) => {
    const { name, description, question, value } = req.body;

    const response = new Respons({ 
        name : name,
        description : description,
        question : question,
        value : value
    })          
    
    await response.save();


    res.status(200).json({
        success: true,
        message: 'Response added successfully',
      });
})


module.exports = { getAllResponses, getRespons, deleteRespons, modifyRespons, addResponse };
    
    