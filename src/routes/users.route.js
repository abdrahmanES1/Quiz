
const Router = require('express').Router;
const { getAllUsers, getUser, modifyUser, deleteUser, getUserExams } = require('../controllers/users.controller')
const { getResultsForStudent } = require("../controllers/results.controller")
const { enableProtection, authorize } = require('../middlewares/auth.middleware')
const Roles = require('../constants/Roles');
const route = Router();

route.use(enableProtection)
route.get('', getAllUsers);
route.get('/:id', getUser);
route.get('/:id/exams', getUserExams);
route.put('/:id', authorize([Roles.ADMIN, Roles.SUPER_ADMIN]), modifyUser);
route.delete('/:id', authorize([Roles.ADMIN, Roles.SUPER_ADMIN]), deleteUser);
route.get("/:id/results", getResultsForStudent);

module.exports = route;

