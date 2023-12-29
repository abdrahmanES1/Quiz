
const Router = require('express').Router;
const { getAllMajors, getMajor, modifyMajor, deleteMajor, createMajor } = require('../controllers/majors.controller')

const route = Router();

route.get('', getAllMajors);
route.get('/:id', getMajor);
route.post('/', createMajor);
route.put('/:id', modifyMajor);
route.delete('/:id', deleteMajor);
module.exports = route;

