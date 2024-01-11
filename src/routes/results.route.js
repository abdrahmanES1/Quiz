
const Router = require('express').Router;
const { getAllResults, getResult, modifyResult, deleteResult, createResult } = require('../controllers/results.controller')

const route = Router();

route.get('', getAllResults);
route.post('', createResult);
route.get('/:id', getResult);
route.put('/:id', modifyResult);
route.delete('/:id', deleteResult);
module.exports = route;

