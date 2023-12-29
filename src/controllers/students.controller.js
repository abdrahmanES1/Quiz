
const asyncHandler = require('express-async-handler');
const Student = require('../models/students.model');

const getAllStudents = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;
    res.status(200).send({
        "success": true,
        
    });
})

const getStudent = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        "success": true,
    });
});

const deleteStudent = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true
    });

});

const modifyStudent = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true,

    });
});




module.exports = { getAllStudents, getStudent, deleteStudent, modifyStudent };
    
    