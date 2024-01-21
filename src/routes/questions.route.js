
const Router = require('express').Router;
const { getAllQuestions, getQuestion, modifyQuestion, deleteQuestion, addQuestion } = require('../controllers/questions.controller');
const { enableProtection, authorize } = require('../middlewares/auth.middleware')
const Roles = require('../constants/Roles');

const route = Router();

route.use(enableProtection)
route.get('', getAllQuestions);
route.post('', authorize([Roles.TEACHER]), addQuestion);
route.get('/:id', getQuestion);
route.put('/:id', authorize([Roles.TEACHER]), modifyQuestion);
route.delete('/:id', authorize([Roles.TEACHER]), deleteQuestion);
module.exports = route;

