
const Router = require('express').Router;
const { getAllExams, getExam, modifyExam, deleteExam, addExam } = require('../controllers/exams.controller')
const { getAllResultsForExam } = require("../controllers/results.controller")
const { enableProtection, authorize } = require('../middlewares/auth.middleware')
const Roles = require('../constants/Roles');

const route = Router();

route.use(enableProtection)
route.get('', getAllExams);
route.get('/:id', getExam);
route.post("", authorize([Roles.ADMIN, Roles.SUPER_ADMIN, Roles.TEACHER]), addExam);
route.put('/:id', authorize([Roles.ADMIN, Roles.SUPER_ADMIN, Roles.TEACHER]), modifyExam);
route.delete('/:id', authorize([Roles.ADMIN, Roles.SUPER_ADMIN, Roles.TEACHER]), deleteExam);

route.get('/:id/results', getAllResultsForExam);
module.exports = route;

