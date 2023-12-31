
const asyncHandler = require('express-async-handler');
const Teacher = require('../models/teachers.model');

const getAllTeachers = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;

    res.status(200).send({
        "success": true,
        
    });
})

const getTeacher = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        "success": true,
    });
});

const createTeacher = asyncHandler(async (req, res, next) => {
    const { firstname } = req.body;

    return res.status(200).send({
        "success": true,

    });
});


const deleteTeacher = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true
    });

});

const modifyTeacher = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true,

    });
});




module.exports = { getAllTeachers, createTeacher,getTeacher, deleteTeacher, modifyTeacher };
    
    