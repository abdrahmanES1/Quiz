
const Router = require('express').Router;
const { getAllExams, getExam, modifyExam, deleteExam, addExam } = require('../controllers/exams.controller')
const { getAllResultsForExam } = require("../controllers/results.controller")

const route = Router();

route.get('', getAllExams);
route.post("", addExam);
route.get('/:id', getExam);
route.put('/:id', modifyExam);
route.delete('/:id', deleteExam);

route.get('/:id/results', getAllResultsForExam);
module.exports = route;
    
