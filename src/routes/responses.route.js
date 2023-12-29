
const Router = require('express').Router;
const { getAllResponses, getRespons, modifyRespons, deleteRespons} = require('../controllers/responses.controller')

const route = Router();

route.get('', getAllResponses);
route.get('/:id', getRespons);
route.put('/:id', modifyRespons);
route.delete('/:id', deleteRespons);
module.exports = route;
    
    