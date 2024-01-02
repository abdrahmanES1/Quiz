
const Router = require('express').Router;
const { getAllExams, getExam, modifyExam, deleteExam, addExam } = require('../controllers/exams.controller')

const route = Router();

route.get('', getAllExams);
route.post("", addExam);
route.get('/:id', getExam);
route.put('/:id', modifyExam);
route.delete('/:id', deleteExam);
module.exports = route;
    
    