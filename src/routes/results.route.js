
const Router = require('express').Router;
const { modifyResult, deleteResult, createResult } = require('../controllers/results.controller')

const route = Router();

route.post('', createResult);
route.put('/:id', modifyResult);
route.delete('/:id', deleteResult);


module.exports = route;

