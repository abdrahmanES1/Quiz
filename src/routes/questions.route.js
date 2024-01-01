
const Router = require('express').Router;
const { getAllQuestions, getQuestion, modifyQuestion, deleteQuestion, addQuestion} = require('../controllers/questions.controller');
const {authorize} = require("../middlewares/auth.middleware");
const route = Router();

route.get('', getAllQuestions);
route.post('/add',addQuestion);
route.get('/:id', getQuestion);
route.put('/:id', modifyQuestion);
route.delete('/:id', deleteQuestion);
module.exports = route;
    
    