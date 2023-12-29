
const Router = require('express').Router;
const { getAllQuestions, getQuestion, modifyQuestion, deleteQuestion} = require('../controllers/questions.controller')

const route = Router();

route.get('', getAllQuestions);
route.get('/:id', getQuestion);
route.put('/:id', modifyQuestion);
route.delete('/:id', deleteQuestion);
module.exports = route;
    
    