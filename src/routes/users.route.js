
const Router = require('express').Router;
const { getAllUsers, getUser, modifyUser, deleteUser, getUserExams} = require('../controllers/users.controller')
const { getResultsForStudent } = require("../controllers/results.controller")
const route = Router();

route.get('', getAllUsers);
route.get('/:id', getUser);
route.get('/:id/exams', getUserExams);
route.put('/:id', modifyUser);
route.delete('/:id', deleteUser);
route.get("/:id/results" ,getResultsForStudent);

module.exports = route;
    
    