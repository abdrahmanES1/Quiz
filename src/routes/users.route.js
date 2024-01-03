
const Router = require('express').Router;
const { getAllUsers, getUser, modifyUser, deleteUser, getUserExams} = require('../controllers/users.controller')

const route = Router();

route.get('', getAllUsers);
route.get('/:id', getUser);
route.get('/:id/exams', getUserExams);
route.put('/:id', modifyUser);
route.delete('/:id', deleteUser);

module.exports = route;
    
    