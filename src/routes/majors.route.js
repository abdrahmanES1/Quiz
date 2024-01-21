
const Router = require('express').Router;
const { getAllMajors, getMajor, modifyMajor, deleteMajor, createMajor, getMajorUsers } = require('../controllers/majors.controller')
const { enableProtection, authorize } = require('../middlewares/auth.middleware')
const Roles = require('../constants/Roles');

const route = Router();

route.use(enableProtection)
route.get('', getAllMajors);
route.get('/:id', getMajor);
route.get('/:id/users',  getMajorUsers);
route.post('/', authorize([Roles.ADMIN, Roles.SUPER_ADMIN]), createMajor);
route.put('/:id', authorize([Roles.ADMIN, Roles.SUPER_ADMIN]), modifyMajor);
route.delete('/:id', authorize([Roles.ADMIN, Roles.SUPER_ADMIN]), deleteMajor);
module.exports = route;

