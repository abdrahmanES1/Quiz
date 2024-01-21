
const Router = require('express').Router;
const { modifyResult, deleteResult, createResult } = require('../controllers/results.controller')
const { enableProtection, authorize } = require('../middlewares/auth.middleware')
const Roles = require('../constants/Roles');

const route = Router();

route.use(enableProtection)
route.post('', authorize([Roles.TEACHER, Roles.STUDENT]), createResult);
route.put('/:id', authorize([Roles.TEACHER]), modifyResult);
route.delete('/:id', authorize([Roles.TEACHER]), deleteResult);


module.exports = route;

