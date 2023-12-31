
const Router = require('express').Router;
const { getAllTeachers, createTeacher, getTeacher, modifyTeacher, deleteTeacher} = require('../controllers/teachers.controller')

const route = Router();

route.get('', getAllTeachers);
route.post('', createTeacher);
route.get('/:id', getTeacher);
route.put('/:id', modifyTeacher);
route.delete('/:id', deleteTeacher);
module.exports = route;
    
    