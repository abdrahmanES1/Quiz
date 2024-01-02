
const Router = require('express').Router;
const { getAllMajors, getMajor, modifyMajor, deleteMajor, createMajor, getMajorUsers } = require('../controllers/majors.controller')

const route = Router();

route.get('', getAllMajors);
route.get('/:id', getMajor);
route.get('/:id/users', getMajorUsers);
route.post('/', createMajor);
route.put('/:id', modifyMajor);
route.delete('/:id', deleteMajor);
module.exports = route;

