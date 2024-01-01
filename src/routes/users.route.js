
const Router = require('express').Router;
const { getAllUsers, getUser, modifyUser, deleteUser} = require('../controllers/users.controller')

const route = Router();

route.get('', getAllUsers);
route.get('/:id', getUser);
route.put('/:id', modifyUser);
route.delete('/:id', deleteUser);
module.exports = route;
    
    