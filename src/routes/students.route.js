
const Router = require('express').Router;
const { getAllStudents, getStudent, modifyStudent, deleteStudent} = require('../controllers/students.controller')

const route = Router();

route.get('', getAllStudents);
route.get('/:id', getStudent);
route.put('/:id', modifyStudent);
route.delete('/:id', deleteStudent);
module.exports = route;
    
    